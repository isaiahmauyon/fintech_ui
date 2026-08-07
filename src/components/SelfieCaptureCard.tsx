type SelfieCaptureCardProps = {
    status?: 'idle' | 'capturing' | 'captured' | 'failed'
    onCapture?: () => void
    onRetry?: () => void
}

export default function SelfieCaptureCard({
    status = 'idle',
    onCapture,
    onRetry,
}: SelfieCaptureCardProps) {
    return (
        <div className="max-w-xs">
            <div
                className={`relative aspect-[3/4] rounded-2xl border-2 flex items-center justify-center overflow-hidden ${status === 'captured'
                        ? 'border-green-500 bg-green-50'
                        : status === 'failed'
                            ? 'border-red-400 bg-red-50'
                            : 'border-gray-300 bg-gray-50'
                    }`}
            >
                {/* Face outline guide */}
                {(status === 'idle' || status === 'capturing') && (
                    <div className="w-32 h-40 rounded-full border-2 border-dashed border-gray-400" />
                )}

                {status === 'captured' && (
                    <span className="text-4xl">✅</span>
                )}

                {status === 'failed' && (
                    <div className="text-center px-4">
                        <span className="text-3xl block mb-2">⚠️</span>
                        <p className="text-sm text-red-700">Face not detected clearly</p>
                    </div>
                )}

                {status === 'capturing' && (
                    <span className="absolute bottom-3 text-xs text-gray-500 bg-white px-2 py-1 rounded-full">
                        Hold still...
                    </span>
                )}
            </div>

            <p className="text-xs text-gray-400 text-center mt-2">
                Position your face within the frame
            </p>

            <div className="mt-3">
                {status === 'failed' ? (
                    <button
                        onClick={onRetry}
                        className="w-full py-2.5 rounded-xl bg-gray-900 text-white text-sm font-medium"
                    >
                        Try Again
                    </button>
                ) : status !== 'captured' ? (
                    <button
                        onClick={onCapture}
                        className="w-full py-2.5 rounded-xl bg-gray-900 text-white text-sm font-medium"
                    >
                        Capture
                    </button>
                ) : null}
            </div>
        </div>
    )
}