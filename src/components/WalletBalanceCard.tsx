import { useState } from 'react'

type WalletBalanceCardProps = {
    balance: number
    currency?: string
    label?: string
}

export default function WalletBalanceCard({
    balance,
    currency = '₦',
    label = 'Available Balance',
}: WalletBalanceCardProps) {
    const [isVisible, setIsVisible] = useState(true)

    const formattedBalance = balance.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    })

    return (
        <div className="bg-gray-900 rounded-2xl p-6 text-white">
            <div className="flex items-center justify-between mb-2">
                <p className="text-sm text-gray-400">{label}</p>
                <button
                    onClick={() => setIsVisible(!isVisible)}
                    className="text-gray-400 hover:text-white text-sm"
                    aria-label={isVisible ? 'Hide balance' : 'Show balance'}
                >
                    {isVisible ? '🙈 Hide' : '👁️ Show'}
                </button>
            </div>

            <p className="text-3xl font-bold tracking-tight">
                {isVisible ? `${currency}${formattedBalance}` : '••••••'}
            </p>
        </div>
    )
}