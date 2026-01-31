import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { EmailOtp } from './email-otp'

export function SignIn() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Войти</Button>
      </DialogTrigger>
      <EmailOtp />
    </Dialog>
  )
}