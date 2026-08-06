import { useState } from 'react'
import type { ChangeEvent } from 'react'

type AmountInputProps = {
    currency?: string
    quickAmounts?: number[]
    onAmountChange?: (amount: number) => void
}

export default function AmountInput({
    currency = '₦',
    quickAmounts = [1000, 5000, 10000, 20000],
    onAmountChange,
}: AmountInputProps) {
    const [amount, setAmount] = useState('')

    const updateAmount = (value: string) => {
        const cleaned = value.replace(/[^0-9]/g, '')
        setAmount(cleaned)
        onAmountChange?.(parseFloat(cleaned) || 0)
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        updateAmount(e.target.value)
    }

    const handleQuickSelect = (value: number) => {
        updateAmount(value.toString())
    }

    const displayValue = amount
        ? parseInt(amount, 10).toLocaleString()
        : ''

    return (
        <div>
            <div className="flex items-center border border-gray-300 rounded-xl px-4 py-3 focus-within:border-gray-900 focus-within:ring-2 focus-within:ring-gray-900/10">
                <span className="text-xl font-semibold text-gray-400 mr-2">
                    {currency}
                </span>
                <input
                    type="text"
                    inputMode="numeric"
                    value={displayValue}
                    onChange={handleChange}
                    placeholder="0"
                    aria-label="Amount"
                    className="text-xl font-semibold text-gray-900 w-full focus:outline-none placeholder:text-gray-300"
                />
            </div>

            <div className="flex gap-2 mt-3 flex-wrap">
                {quickAmounts.map((value) => (
                    <button
                        key={value}
                        onClick={() => handleQuickSelect(value)}
                        className="text-sm font-medium px-3 py-1.5 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200"
                    >
                        {currency}
                        {value.toLocaleString()}
                    </button>
                ))}
            </div>
        </div>
    )
}