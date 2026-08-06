type PinPadProps = {
    onKeyPress: (key: string) => void
    onBackspace: () => void
}

export default function PinPad({ onKeyPress, onBackspace }: PinPadProps) {
    const keys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '', '0', '⌫']

    const handleClick = (key: string) => {
        if (key === '⌫') {
            onBackspace()
        } else if (key !== '') {
            onKeyPress(key)
        }
    }

    return (
        <div className="grid grid-cols-3 gap-3 max-w-xs">
            {keys.map((key, index) => (
                <button
                    key={index}
                    onClick={() => handleClick(key)}
                    disabled={key === ''}
                    aria-label={key === '⌫' ? 'Backspace' : key === '' ? undefined : `Digit ${key}`}
                    className={`h-16 rounded-full text-xl font-medium transition-colors ${key === ''
                        ? 'invisible'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200 active:bg-gray-300'
                        }`}
                >
                    {key}
                </button>
            ))}
        </div>
    )
}