import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Field, FieldGroup } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Mail } from 'lucide-react'
import { ChangeEventHandler, MouseEventHandler } from 'react'

export type TSendVerificationOtpCardInput = {
  value: string | undefined,
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined
  isError: boolean
}

export type TSendVerificationOtpCardButton = {
  onClick: MouseEventHandler<HTMLButtonElement> | undefined
}

export type TSendVerificationOtpCardProps = TSendVerificationOtpCardInput & TSendVerificationOtpCardButton

export function SendVerificationOtpCard({
  value,
  onChange,
  isError,
  onClick,
}: TSendVerificationOtpCardProps) {
  return (
    <Card className='w-full sm:max-w-md'>
      <CardHeader>
        <CardTitle>Войти</CardTitle>
        <CardDescription>Для входа необходимо ввести "email" и нажать кнопку "Продолжить"</CardDescription>
      </CardHeader>
      <CardContent>
        <FieldGroup>
          <Field data-invalid={isError} orientation='horizontal'>
            <Mail />
            <Input
              value={value}
              onChange={onChange}
              placeholder='email'
              aria-invalid={isError}
            />
          </Field>
          <Field>
            <Button type='button' onClick={onClick}>
              Продолжить
            </Button>
          </Field>
        </FieldGroup>
      </CardContent>
    </Card>
  )
}