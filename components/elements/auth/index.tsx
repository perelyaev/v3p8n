'use client'
import { Button } from '@/components/ui/button'
import { authClient } from '@/lib/auth-client'
import { SignIn } from './sign-in'

export function Auth() {
  const { data: session } = authClient.useSession()

  if (!session) {
    return <SignIn />
  }

  return <Button>Профиль</Button>
}