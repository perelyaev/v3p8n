'use client'
import { Button } from '@/components/ui/button'
import { authClient } from '@/lib/auth-client'
import { redirect } from 'next/navigation'

export function Auth() {
  const { 
        data: session, 
        isPending, //loading state
        error, //error object
        refetch //refetch the session
    } = authClient.useSession()

  if (!session) {
    return <Button type='button' variant='outline' onClick={() => redirect('sign-in')}>Войти</Button>
  }

  return <Button>Выйти</Button>
}