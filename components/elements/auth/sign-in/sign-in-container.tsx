'use client'
import * as z from "zod"
import { toast } from 'sonner'
import { useState } from 'react'
import { SendVerificationOtpCard, TSendVerificationOtpCardInput } from './email-otp/send-verification-otp-card'

const schema = z.object({
  email: z
    .email({message:'Неверный адрес электронной почты'})
})

export function SignInContainer() {
  const [email, setEmail] = useState<TSendVerificationOtpCardInput>({
    value: '',
    isError: false
  })

  function handleSendVirificationOtp() {
    const result = schema.safeParse({email});
    if (!result.success) {
      setEmail({
        ...email,
        isError: true
      })
      result.error.issues.map((e) => toast.error(e.message))
    } else {
      setEmail({
        ...email,
        isError: false
      })
      console.log(result.data.email)
    }
  }

  return (
        <SendVerificationOtpCard 
          value={email.value}
          isError={email.isError}
          onChange={e => {
            setEmail({
              ...email,
              value: e.target.value
            })
          }}
          onClick={handleSendVirificationOtp}
        />
  )
}