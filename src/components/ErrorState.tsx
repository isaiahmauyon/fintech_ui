type ErrorStateProps = {
    title?: string
    message?: string
    onRetry?: () => void
}

export default function ErrorState({
    title = 'Something went wrong',
    message = "We couldn't load this right now. Please try again.",
    onRetry,
}: ErrorStateProps) {
    return (
        <div className="flex flex-col items-center justify-center py-12 px-4 text-center">
            <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center text-xl mb-3">
                ⚠️
            </div>
            <p className="font-medium text-gray-900">{title}</p>
            <p className="text-sm text-gray-500 mt-1 max-w-xs">{message}</p>
            {onRetry && (
                <button
                    onClick={onRetry}
                    className="mt-4 text-sm font-medium px-4 py-2 rounded-xl bg-gray-900 text-white hover:bg-gray-800"
                >
                    Try Again
                </button>
            )}
        </div>
    )
}