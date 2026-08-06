import { useState } from 'react'
import type { ChangeEvent } from 'react'

type CardType = 'visa' | 'mastercard' | 'verve' | 'unknown'

function detectCardType(digits: string): CardType {
    if (digits.startsWith('4')) return 'visa'
    if (/^5[1-5]/.test(digits) || /^2[2-7]/.test(digits)) return 'mastercard'
    if (/^5061|^5060|^6500/.test(digits)) return 'verve'
    return 'unknown'
}

const cardLabels: Record<CardType, string> = {
    visa: 'VISA',
    mastercard: 'Mastercard',
    verve: 'Verve',
    unknown: '',
}

export default function CardNumberInput() {
    const [value, setValue] = useState('')

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const digits = e.target.value.replace(/[^0-9]/g, '').slice(0, 16)
        const grouped = digits.replace(/(.{4})/g, '$1 ').trim()
        setValue(grouped)
    }

    const digitsOnly = value.replace(/\s/g, '')
    const cardType = digitsOnly.length >= 2 ? detectCardType(digitsOnly) : 'unknown'

    return (
        <div className="max-w-sm">
            <div className="flex items-center border border-gray-300 rounded-xl px-4 py-3 focus-within:border-gray-900 focus-within:ring-2 focus-within:ring-gray-900/10">
                <input
                    type="text"
                    inputMode="numeric"
                    value={value}
                    onChange={handleChange}
                    placeholder="0000 0000 0000 0000"
                    aria-label="Card number"
                    className="text-lg font-medium text-gray-900 w-full tracking-wider focus:outline-none placeholder:text-gray-300 placeholder:tracking-wider"
                />
                {cardType !== 'unknown' && (
                    <span className="text-xs font-semibold text-gray-500 bg-gray-100 px-2 py-1 rounded-md ml-2 whitespace-nowrap">
                        {cardLabels[cardType]}
                    </span>
                )}
            </div>
        </div>
    )
}