type AccountSummaryCardProps = {
    accountName: string
    accountNumber: string
    accountType: 'personal' | 'business'
    balance: number
    currency?: string
}

export default function AccountSummaryCard({
    accountName,
    accountNumber,
    accountType,
    balance,
    currency = '₦',
}: AccountSummaryCardProps) {
    const maskedNumber = `••••${accountNumber.slice(-4)}`

    const typeStyles = {
        personal: 'bg-blue-50 text-blue-700',
        business: 'bg-purple-50 text-purple-700',
    }

    return (
        <div className="border border-gray-200 rounded-xl p-4">
            <div className="flex items-start justify-between mb-4">
                <div>
                    <p className="font-semibold text-gray-900">{accountName}</p>
                    <p className="text-sm text-gray-500 mt-0.5">{maskedNumber}</p>
                </div>
                <span
                    className={`text-xs font-medium px-2 py-1 rounded-full capitalize ${typeStyles[accountType]}`}
                >
                    {accountType}
                </span>
            </div>

            <div>
                <p className="text-xs text-gray-400 mb-1">Balance</p>
                <p className="text-2xl font-bold text-gray-900">
                    {currency}
                    {balance.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                </p>
            </div>
        </div>
    )
}