type CurrencyAmountProps = {
    amount: number
    currency?: string
    size?: 'sm' | 'md' | 'lg'
    showDecimals?: boolean
}

export default function CurrencyAmount({
    amount,
    currency = '₦',
    size = 'md',
    showDecimals = true,
}: CurrencyAmountProps) {
    const formatted = amount.toLocaleString(undefined, {
        minimumFractionDigits: showDecimals ? 2 : 0,
        maximumFractionDigits: showDecimals ? 2 : 0,
    })

    const sizeStyles = {
        sm: 'text-sm font-medium',
        md: 'text-lg font-semibold',
        lg: 'text-3xl font-bold',
    }

    return (
        <span className={`${sizeStyles[size]} text-gray-900 tabular-nums`}>
            {currency}
            {formatted}
        </span>
    )
}