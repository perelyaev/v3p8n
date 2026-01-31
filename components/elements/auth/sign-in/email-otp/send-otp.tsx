'use client'
import { Button } from '@/components/ui/button'
import { DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { JSX, MouseEventHandler } from 'react'

type TSendOtpProps = {
  emailInput: string | JSX.Element
  onClick: MouseEventHandler<HTMLButtonElement> | undefined
}

export function SendOtp({ emailInput, onClick }: TSendOtpProps ) {
  return (
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Войти</DialogTitle>
          <DialogDescription>
            Для входа необходимо ввести "email" и нажать кнопку "Продолжить"
          </DialogDescription>
        </DialogHeader>
        {emailInput}
        <Button onClick={onClick}>Отправить код</Button>
      </DialogContent>
  )
}