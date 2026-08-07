type SettlementSummaryCardProps = {
    totalAmount: number
    transactionCount: number
    settlementDate: string
    status: 'processed' | 'processing' | 'scheduled'
    currency?: string
}

const statusConfig = {
    processed: { label: 'Processed', style: 'bg-green-50 text-green-700' },
    processing: { label: 'Processing', style: 'bg-yellow-50 text-yellow-700' },
    scheduled: { label: 'Scheduled', style: 'bg-blue-50 text-blue-700' },
}

export default function SettlementSummaryCard({
    totalAmount,
    transactionCount,
    settlementDate,
    status,
    currency = '₦',
}: SettlementSummaryCardProps) {
    const config = statusConfig[status]

    return (
        <div className="border border-gray-200 rounded-xl p-4">
            <div className="flex items-start justify-between mb-4">
                <div>
                    <p className="text-xs text-gray-400 mb-1">Settlement Amount</p>
                    <p className="text-2xl font-bold text-gray-900">
                        {currency}
                        {totalAmount.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                    </p>
                </div>
                <span className={`text-xs font-medium px-2 py-1 rounded-full ${config.style}`}>
                    {config.label}
                </span>
            </div>

            <div className="flex justify-between text-sm border-t border-gray-100 pt-3">
                <span className="text-gray-500">
                    {transactionCount} transaction{transactionCount !== 1 ? 's' : ''}
                </span>
                <span className="text-gray-500">{settlementDate}</span>
            </div>
        </div>
    )
}