import { Input, TInputProps } from '@/components/ui/input'
import { ChangeEvent, useEffect, useState } from 'react'
import { toast } from 'sonner'
import z from 'zod'

export type TUseInput = TInputProps & {
  schema: z.ZodObject
}

export type TInputState = {
  value: string,
  isInvalid: boolean
  errorMessage: string,
}

export function useInput ({icon, schema}: TUseInput) {

  const [input, setInput] = useState<TInputState>({
    value: '',
    isInvalid: false,
    errorMessage: ''
  });

  useEffect(()=>{
    if (input.isInvalid) {
      toast.error(input.errorMessage)
    }
  },[input.errorMessage])

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const result = schema.safeParse({...input})

    if (result.success) {
      setInput({...input, value: e.target.value, isInvalid: false, errorMessage: ''})
    }

    if (result.error) {
      setInput({...input, value: e.target.value, isInvalid: true, errorMessage: result.error.issues.map((e) => e.message).join('\n')}) 
    }

    if (e.target.value === '') {
      setInput({...input, value: e.target.value, isInvalid: false, errorMessage: ''})
    }
  }

  const handleClear = () => {
    setInput({...input, value: '', isInvalid: false, errorMessage: ''})
  }

  const inputHTML = () => {
    return (
      <Input
        icon={icon}
        value={input.value}
        onChange={handleChange}
        aria-invalid={input.isInvalid}
        aria-errormessage={input.errorMessage}
        handleClear={handleClear}
      />
    )
  };

  return [input.value, inputHTML()];
};