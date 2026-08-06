import { useState } from 'react'
import type { ChangeEvent } from 'react'

type ExchangeRateWidgetProps = {
    fromCurrency?: string
    toCurrency?: string
    rate: number // how many `to` units per 1 `from` unit
}

export default function ExchangeRateWidget({
    fromCurrency = 'USD',
    toCurrency = 'NGN',
    rate,
}: ExchangeRateWidgetProps) {
    const [amount, setAmount] = useState('100')

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.replace(/[^0-9.]/g, '')
        setAmount(value)
    }

    const numericAmount = parseFloat(amount) || 0
    const converted = numericAmount * rate

    return (
        <div className="border border-gray-200 rounded-xl p-4">
            <p className="text-sm text-gray-500 mb-3">Convert</p>

            <div className="flex items-center justify-between mb-3 pb-3 border-b border-gray-100">
                <input
                    type="text"
                    inputMode="decimal"
                    value={amount}
                    onChange={handleChange}
                    className="text-xl font-semibold text-gray-900 w-1/2 focus:outline-none"
                    aria-label={`Amount in ${fromCurrency}`}
                />
                <span className="text-sm font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded-md">
                    {fromCurrency}
                </span>
            </div>

            <div className="flex items-center justify-between mb-3">
                <p className="text-xl font-semibold text-gray-900">
                    {converted.toLocaleString(undefined, { maximumFractionDigits: 2 })}
                </p>
                <span className="text-sm font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded-md">
                    {toCurrency}
                </span>
            </div>

            <p className="text-xs text-gray-400">
                1 {fromCurrency} = {rate.toLocaleString()} {toCurrency}
            </p>
        </div>
    )
}