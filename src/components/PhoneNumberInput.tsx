import { useState } from 'react'
import type { ChangeEvent } from 'react'

type Country = {
    code: string
    dialCode: string
    flag: string
}

const countries: Country[] = [
    { code: 'NG', dialCode: '+234', flag: '🇳🇬' },
    { code: 'GH', dialCode: '+233', flag: '🇬🇭' },
    { code: 'GB', dialCode: '+44', flag: '🇬🇧' },
    { code: 'US', dialCode: '+1', flag: '🇺🇸' },
]

export default function PhoneNumberInput() {
    const [country, setCountry] = useState(countries[0])
    const [number, setNumber] = useState('')

    const handleNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
        const digits = e.target.value.replace(/[^0-9]/g, '').slice(0, 10)
        const formatted = digits.replace(/(\d{3})(\d{0,3})(\d{0,4})/, (_, a, b, c) =>
            [a, b, c].filter(Boolean).join(' ')
        )
        setNumber(formatted)
    }

    const handleCountryChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const selected = countries.find((c) => c.code === e.target.value)
        if (selected) setCountry(selected)
    }

    return (
        <div className="flex items-center border border-gray-300 rounded-xl px-2 py-1 focus-within:border-gray-900 focus-within:ring-2 focus-within:ring-gray-900/10 max-w-sm">
            <select
                value={country.code}
                onChange={handleCountryChange}
                aria-label="Country code"
                className="text-lg bg-transparent focus:outline-none pr-1 py-2"
            >
                {countries.map((c) => (
                    <option key={c.code} value={c.code}>
                        {c.flag} {c.dialCode}
                    </option>
                ))}
            </select>
            <div className="w-px h-6 bg-gray-200 mx-2" />
            <input
                type="text"
                inputMode="numeric"
                value={number}
                onChange={handleNumberChange}
                placeholder="801 234 5678"
                aria-label="Phone number"
                className="text-lg text-gray-900 w-full py-2 focus:outline-none placeholder:text-gray-300"
            />
        </div>
    )
}