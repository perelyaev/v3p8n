import { useState } from 'react'
import { VertificationOtp } from './vertification-otp'
import { SendOtp } from './send-otp'
import { useInput } from '@/hooks/useInput'
import { Hash, Mail } from 'lucide-react'
import z from 'zod'
import { toast } from 'sonner'
import { authClient } from '@/lib/auth-client'

export function EmailOtp() {
  const EmailSchema = z.object({
    value: z
      .email({message:'Неверный адрес электронной почты'})
  })
  const OtpSchema = z.object({
    value: z
      .number()
      .max(6)
      .min(6)
  })
  const [email, EmailInput] = useInput({schema: EmailSchema, icon: <Mail />})
  const [otp, OtpInput] = useInput({schema: OtpSchema, icon: <Hash />})
  const [isSend, setIsSend] = useState(false)

  const handleSend = async () => {
    const { data, error } = await authClient.emailOtp.sendVerificationOtp({
      email: String(email),
      type: "sign-in",
    });
    if (error) toast.error(error.message)
    if (data?.success) setIsSend(true)
  }

  const handleSignIn = async () => {
    const { data, error } = await authClient.signIn.emailOtp({
    email: String(email),
    otp: String(otp),
});
  }
  return (
    isSend?<VertificationOtp otpInput={OtpInput} onClick={handleSignIn}/>:<SendOtp emailInput={EmailInput} onClick={handleSend}/>
  )
}