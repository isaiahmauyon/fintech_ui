import { useState } from 'react'
import type { ChangeEvent } from 'react'

type IdType = 'BVN' | 'NIN'

type IdInputProps = {
    idType?: IdType
}

const idConfig: Record<IdType, { length: number; label: string }> = {
    BVN: { length: 11, label: 'Bank Verification Number' },
    NIN: { length: 11, label: 'National Identification Number' },
}

export default function IdInput({ idType = 'BVN' }: IdInputProps) {
    const [value, setValue] = useState('')
    const config = idConfig[idType]

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const digits = e.target.value.replace(/[^0-9]/g, '').slice(0, config.length)
        setValue(digits)
    }

    const isComplete = value.length === config.length

    return (
        <div className="max-w-sm">
            <div className="flex items-center justify-between mb-1">
                <label className="text-sm font-medium text-gray-700">{idType}</label>
                <span className="text-xs text-gray-400">
                    {value.length}/{config.length}
                </span>
            </div>

            <div
                className={`flex items-center border rounded-xl px-4 py-3 focus-within:ring-2 ${isComplete
                        ? 'border-green-500 focus-within:ring-green-500/10'
                        : 'border-gray-300 focus-within:border-gray-900 focus-within:ring-gray-900/10'
                    }`}
            >
                <input
                    type="text"
                    inputMode="numeric"
                    value={value}
                    onChange={handleChange}
                    placeholder={`Enter your ${config.length}-digit ${idType}`}
                    aria-label={config.label}
                    className="text-lg text-gray-900 w-full focus:outline-none placeholder:text-gray-300"
                />
                {isComplete && <span className="text-green-600 ml-2">✓</span>}
            </div>

            <p className="text-xs text-gray-400 mt-1">{config.label}</p>
        </div>
    )
}