import { emailOTPClient } from 'better-auth/client/plugins'
import { createAuthClient } from "better-auth/react"

export const authClient = createAuthClient({
    baseURL: "http://localhost:3000",
        plugins: [
        emailOTPClient()
    ]
})

export async function sendVerificationOtp(email: string) {
    const { data, error } = await authClient.emailOtp.sendVerificationOtp({
        email: email,
        type: "sign-in",
    });
}