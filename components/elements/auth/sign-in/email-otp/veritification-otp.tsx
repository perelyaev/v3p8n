import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Field, FieldGroup } from '@/components/ui/field'
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp'
import { REGEXP_ONLY_DIGITS } from 'input-otp'
import { Hash } from 'lucide-react'

export function VeritificationOtp() {
return (
    <Card className='w-full sm:max-w-md'>
      <CardHeader>
        <CardTitle>Войти</CardTitle>
        <CardDescription>Для входа необходимо ввести "email" и нажать кнопку "Продолжить"</CardDescription>
      </CardHeader>
      <CardContent>
        <FieldGroup>
          <Field orientation='horizontal'>
            <Hash />
            <InputOTP maxLength={6} pattern={REGEXP_ONLY_DIGITS}>
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
          </Field>
          <Field>
            <Button type='button'>
              Войти
            </Button>
          </Field>
        </FieldGroup>
      </CardContent>
    </Card>
  )
}