'use client'
import * as z from "zod"
import { toast } from 'sonner'
import { useState } from 'react'
import { SendVerificationOtpCard } from './email-otp/send-verification-otp-card'

const schema = z.object({
  email: z
    .email({message:'Неверный адрес электронной почты'})
})

export function SignInContainer() {
  const [email, setEmail] = useState<string>('')
  const [isError, setIsError] = useState<boolean>(false)
  const [isSend, setIsSend] = useState<boolean>(false)

  function validateInput() {
    const result = schema.safeParse({ email})
    if (!result.success) {
      setIsError(true)
      if (!isError) {result.error.issues.map((e) => toast.error(e.message))}
    } else {
      setIsError(false)
      toast.success('Верный адрес электронной почты')
    }
  }

  function handleSendVirificationOtp() {
    const result = schema.safeParse({ email })
    if (!result.success) {
      setIsError(true)
      result.error.issues.map((e) => toast.error(e.message))
    } else {
      setIsError(false)
      console.log(result.data.email)
    }
  }

  return (
        <SendVerificationOtpCard 
          value={email}
          aria-invalid={isError}
          onChange={e => {
            setEmail(e.target.value)
            validateInput()
          }}
          onClickButton={handleSendVirificationOtp}
        />
  )
}