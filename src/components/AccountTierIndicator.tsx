type Tier = 1 | 2 | 3

type AccountTierIndicatorProps = {
    currentTier: Tier
}

const tierLimits: Record<Tier, string> = {
    1: '₦50,000 daily limit',
    2: '₦200,000 daily limit',
    3: 'No transaction limit',
}

const tierRequirements: Record<Tier, string> = {
    1: 'Phone number verified',
    2: 'BVN/NIN + ID document verified',
    3: 'Proof of address + selfie verified',
}

export default function AccountTierIndicator({ currentTier }: AccountTierIndicatorProps) {
    const tiers: Tier[] = [1, 2, 3]

    return (
        <div className="border border-gray-200 rounded-xl p-4 max-w-sm">
            <div className="flex items-center justify-between mb-3">
                <p className="text-sm font-medium text-gray-900">Account Tier</p>
                <span className="text-xs font-semibold bg-gray-900 text-white px-2 py-1 rounded-full">
                    Tier {currentTier}
                </span>
            </div>

            <div className="flex gap-1 mb-3">
                {tiers.map((tier) => (
                    <div
                        key={tier}
                        className={`h-1.5 flex-1 rounded-full ${tier <= currentTier ? 'bg-gray-900' : 'bg-gray-200'
                            }`}
                    />
                ))}
            </div>

            <p className="text-sm text-gray-500 mb-1">{tierLimits[currentTier]}</p>

            {currentTier < 3 && (
                <p className="text-xs text-gray-400 mt-2">
                    Upgrade to Tier {(currentTier + 1) as Tier}: {tierRequirements[(currentTier + 1) as Tier]}
                </p>
            )}
        </div>
    )
}