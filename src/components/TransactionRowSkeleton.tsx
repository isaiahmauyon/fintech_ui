export default function TransactionRowSkeleton() {
    return (
        <div className="flex items-center justify-between py-3 px-4 border-b border-gray-100 animate-pulse">
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-200" />
                <div>
                    <div className="h-4 w-28 bg-gray-200 rounded mb-2" />
                    <div className="h-3 w-20 bg-gray-100 rounded" />
                </div>
            </div>
            <div className="text-right">
                <div className="h-4 w-16 bg-gray-200 rounded mb-2 ml-auto" />
                <div className="h-3 w-12 bg-gray-100 rounded ml-auto" />
            </div>
        </div>
    )
}