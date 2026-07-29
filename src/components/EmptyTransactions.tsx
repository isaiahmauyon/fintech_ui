export default function EmptyTransactions() {
    return (
        <div className="flex flex-col items-center justify-center py-12 px-4 text-center">
            <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-xl mb-3">
                📭
            </div>
            <p className="font-medium text-gray-900">No transactions yet</p>
            <p className="text-sm text-gray-500 mt-1">
                Your transaction history will show up here once you start sending or receiving money.
            </p>
        </div>
    )
}