type Status = 'success' | 'pending' | 'failed' | 'reversed'

type TransactionStatusBadgeProps = {
    status: Status
    size?: 'sm' | 'md'
}

const statusStyles: Record<Status, string> = {
    success: 'bg-green-50 text-green-700',
    pending: 'bg-yellow-50 text-yellow-700',
    failed: 'bg-red-50 text-red-700',
    reversed: 'bg-gray-100 text-gray-600',
}

const statusLabels: Record<Status, string> = {
    success: 'Success',
    pending: 'Pending',
    failed: 'Failed',
    reversed: 'Reversed',
}

export default function TransactionStatusBadge({
    status,
    size = 'md',
}: TransactionStatusBadgeProps) {
    const sizeStyles = size === 'sm' ? 'text-xs px-2 py-0.5' : 'text-sm px-2.5 py-1'

    return (
        <span
            className={`inline-flex items-center rounded-full font-medium ${statusStyles[status]} ${sizeStyles}`}
        >
            {statusLabels[status]}
        </span>
    )
}