import { Button } from '@/components/ui/button'
import { DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { JSX, MouseEventHandler } from 'react'

type TVertificationOtpProps = {
  otpInput: string | JSX.Element
  onClick: MouseEventHandler<HTMLButtonElement> | undefined
}

export function VertificationOtp({ otpInput, onClick }: TVertificationOtpProps ) {
return (
  <DialogContent>
      <DialogHeader>
        <DialogTitle>Войти</DialogTitle>
        <DialogDescription>
          Для входа необходимо ввести "email" и нажать кнопку "Продолжить"
        </DialogDescription>
      </DialogHeader>
      {otpInput}
      <Button onClick={onClick}>Войти</Button>
  </DialogContent>
  )
}