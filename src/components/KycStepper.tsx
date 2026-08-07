type Step = {
    label: string
}

type KycStepperProps = {
    steps: Step[]
    currentStep: number // 0-indexed
}

export default function KycStepper({ steps, currentStep }: KycStepperProps) {
    return (
        <div className="flex items-center max-w-md">
            {steps.map((step, index) => {
                const isCompleted = index < currentStep
                const isActive = index === currentStep
                const isLast = index === steps.length - 1

                return (
                    <div key={step.label} className={`flex items-center ${!isLast ? 'flex-1' : ''}`}>
                        <div className="flex flex-col items-center">
                            <div
                                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${isCompleted
                                        ? 'bg-gray-900 text-white'
                                        : isActive
                                            ? 'bg-white border-2 border-gray-900 text-gray-900'
                                            : 'bg-gray-100 text-gray-400'
                                    }`}
                            >
                                {isCompleted ? '✓' : index + 1}
                            </div>
                            <p
                                className={`text-xs mt-2 text-center w-20 ${isActive || isCompleted ? 'text-gray-900 font-medium' : 'text-gray-400'
                                    }`}
                            >
                                {step.label}
                            </p>
                        </div>

                        {!isLast && (
                            <div
                                className={`flex-1 h-0.5 mx-2 -mt-5 ${isCompleted ? 'bg-gray-900' : 'bg-gray-200'
                                    }`}
                            />
                        )}
                    </div>
                )
            })}
        </div>
    )
}