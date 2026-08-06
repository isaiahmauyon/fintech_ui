type TransactionDetailSheetProps = {
    isOpen: boolean
    onClose: () => void
    title: string
    amount: number
    type: 'credit' | 'debit'
    status: 'success' | 'pending' | 'failed'
    date: string
    reference: string
}

export default function TransactionDetailSheet({
    isOpen,
    onClose,
    title,
    amount,
    type,
    status,
    date,
    reference,
}: TransactionDetailSheetProps) {
    if (!isOpen) return null

    const isCredit = type === 'credit'
    const sign = isCredit ? '+' : '-'
    const amountColor = isCredit ? 'text-green-600' : 'text-gray-900'

    const statusStyles = {
        success: 'bg-green-50 text-green-700',
        pending: 'bg-yellow-50 text-yellow-700',
        failed: 'bg-red-50 text-red-700',
    }

    return (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/40"
                onClick={onClose}
                aria-hidden="true"
            />

            {/* Sheet */}
            <div className="relative bg-white rounded-t-2xl sm:rounded-2xl w-full sm:max-w-sm p-6 z-10">
                <div className="flex justify-between items-start mb-6">
                    <h2 className="text-lg font-semibold text-gray-900">Transaction Details</h2>
                    <button
                        onClick={onClose}
                        aria-label="Close"
                        className="text-gray-400 hover:text-gray-900 text-xl leading-none"
                    >
                        ×
                    </button>
                </div>

                <div className="text-center mb-6">
                    <p className={`text-3xl font-bold ${amountColor}`}>
                        {sign}₦{amount.toLocaleString()}
                    </p>
                    <span
                        className={`inline-block mt-2 text-xs px-2 py-0.5 rounded-full capitalize ${statusStyles[status]}`}
                    >
                        {status}
                    </span>
                </div>

                <div className="space-y-3 border-t border-gray-100 pt-4">
                    <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Description</span>
                        <span className="text-gray-900 font-medium">{title}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Date</span>
                        <span className="text-gray-900 font-medium">{date}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Reference</span>
                        <span className="text-gray-900 font-medium">{reference}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}