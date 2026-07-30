import { useRef, useState } from 'react'
import type { KeyboardEvent, ClipboardEvent, ChangeEvent } from 'react'

type OtpInputProps = {
    length?: number
    onComplete?: (code: string) => void
}

export default function OtpInput({ length = 6, onComplete }: OtpInputProps) {
    const [values, setValues] = useState<string[]>(Array(length).fill(''))
    const inputsRef = useRef<(HTMLInputElement | null)[]>([])

    const focusInput = (index: number) => {
        inputsRef.current[index]?.focus()
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
        const digit = e.target.value.replace(/[^0-9]/g, '').slice(-1)
        const next = [...values]
        next[index] = digit
        setValues(next)

        if (digit && index < length - 1) {
            focusInput(index + 1)
        }

        if (next.every((v) => v !== '')) {
            onComplete?.(next.join(''))
        }
    }

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>, index: number) => {
        if (e.key === 'Backspace' && !values[index] && index > 0) {
            focusInput(index - 1)
        }
    }

    const handlePaste = (e: ClipboardEvent<HTMLInputElement>) => {
        e.preventDefault()
        const pasted = e.clipboardData.getData('text').replace(/[^0-9]/g, '').slice(0, length)
        if (!pasted) return

        const next = Array(length).fill('')
        pasted.split('').forEach((char, i) => {
            next[i] = char
        })
        setValues(next)

        const lastFilledIndex = Math.min(pasted.length, length) - 1
        focusInput(lastFilledIndex)

        if (next.every((v) => v !== '')) {
            onComplete?.(next.join(''))
        }
    }

    return (
        <div className="flex gap-2">
            {values.map((digit, index) => (
                <input
                    key={index}
                    ref={(el) => {
                        inputsRef.current[index] = el
                    }}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleChange(e, index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    onPaste={handlePaste}
                    aria-label={`Digit ${index + 1} of ${length}`}
                    className="w-12 h-14 text-center text-xl font-semibold border border-gray-300 rounded-lg focus:border-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900/10"
                />
            ))}
        </div>
    )
}