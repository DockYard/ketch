import { createContext, useContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { auth, db } from 'config/firebase'

const authContext = createContext({ user: {} })
const { Provider } = authContext

const AuthProvider = (props) => {
  const auth = useAuthProvider()
  return <Provider value={auth}>{props.children}</Provider>
}

const useAuth = () => useContext(authContext)

// Provider hook that creates an auth object and handles it's state
const useAuthProvider = () => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const unsub = auth.onAuthStateChanged(handleAuthStateChanged)

    return () => unsub()
  }, [])

  useEffect(() => {
    if (user?.uid) {
      // Subscribe to user document on mount
      const unsubscribe = db
        .collection('users')
        .doc(user.uid)
        .onSnapshot((doc) => setUser(doc.data()))

      return () => unsubscribe()
    }
  }, [])

  const getUserAdditionalData = async (user) => {
    if (!user?.uid) return

    const userData = await db.collection('users').doc(user.uid).get()

    if (userData.data()) {
      setUser(userData.data())
    }
  }

  const handleAuthStateChanged = (user) => {
    setUser(user)

    if (user) {
      getUserAdditionalData(user)
    }
  }

  const createUser = async (user) => {
    try {
      await db.collection('users').doc(user.uid).set(user)
      setUser(user)

      return user
    } catch (error) {
      console.error(error)
      return { error }
    }
  }

  const signUp = async ({ name, email, password }) => {
    try {
      const response = await auth.createUserWithEmailAndPassword(
        email,
        password
      )

      auth.currentUser.sendEmailVerification()
      const newUser = await createUser({ uid: response.user.uid, email, name })

      return newUser
    } catch (error) {
      console.error(error)
      return { error }
    }
  }

  const signIn = async ({ email, password }) => {
    try {
      const response = await auth.signInWithEmailAndPassword(email, password)
      setUser(response.user)

      await getUserAdditionalData(user)
      return response.user
    } catch (error) {
      console.error(error)
      return { error }
    }
  }

  const signOut = async () => {
    await auth.signOut()

    setUser(false)
  }

  return {
    signIn,
    signOut,
    signUp,
    user
  }
}

AuthProvider.propTypes = {
  children: PropTypes.element.isRequired
}

export { AuthProvider, useAuth }
