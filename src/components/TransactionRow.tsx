type TransactionRowProps = {
    title: string
    subtitle: string
    amount: number
    type: 'credit' | 'debit'
    status?: 'success' | 'pending' | 'failed'
}

export default function TransactionRow({
    title,
    subtitle,
    amount,
    type,
    status = 'success',
}: TransactionRowProps) {
    const isCredit = type === 'credit'

    const amountColor = isCredit ? 'text-green-600' : 'text-gray-900'
    const sign = isCredit ? '+' : '-'

    const statusStyles = {
        success: 'bg-green-50 text-green-700',
        pending: 'bg-yellow-50 text-yellow-700',
        failed: 'bg-red-50 text-red-700',
    }

    return (
        <div className="flex items-center justify-between py-3 px-4 border-b border-gray-100">
            <div className="flex items-center gap-3">
                <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-lg ${isCredit ? 'bg-green-50' : 'bg-gray-100'
                        }`}
                >
                    {isCredit ? '↓' : '↑'}
                </div>
                <div>
                    <p className="font-medium text-gray-900">{title}</p>
                    <p className="text-sm text-gray-500">{subtitle}</p>
                </div>
            </div>

            <div className="text-right">
                <p className={`font-semibold ${amountColor}`}>
                    {sign}₦{amount.toLocaleString()}
                </p>
                <span
                    className={`text-xs px-2 py-0.5 rounded-full ${statusStyles[status]}`}
                >
                    {status}
                </span>
            </div>
        </div>
    )
}