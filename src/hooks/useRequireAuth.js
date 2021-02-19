import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useAuth } from 'hooks/useAuth'

const useRequireAuth = () => {
  const auth = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!auth.user) {
      router.push('/profile')
    }
  }, [auth, router])

  return auth
}

export default useRequireAuth
