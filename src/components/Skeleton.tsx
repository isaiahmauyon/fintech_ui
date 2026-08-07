type SkeletonVariant = 'card' | 'list' | 'table'

type SkeletonProps = {
    variant?: SkeletonVariant
    rows?: number
}

function CardSkeleton() {
    return (
        <div className="border border-gray-100 rounded-xl p-4 animate-pulse">
            <div className="h-4 w-24 bg-gray-200 rounded mb-3" />
            <div className="h-8 w-40 bg-gray-200 rounded mb-4" />
            <div className="h-3 w-32 bg-gray-100 rounded" />
        </div>
    )
}

function ListSkeleton({ rows = 3 }: { rows?: number }) {
    return (
        <div className="border border-gray-100 rounded-xl overflow-hidden animate-pulse">
            {Array.from({ length: rows }).map((_, i) => (
                <div
                    key={i}
                    className="flex items-center justify-between py-3 px-4 border-b border-gray-100 last:border-b-0"
                >
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gray-200" />
                        <div>
                            <div className="h-4 w-28 bg-gray-200 rounded mb-2" />
                            <div className="h-3 w-20 bg-gray-100 rounded" />
                        </div>
                    </div>
                    <div className="h-4 w-16 bg-gray-200 rounded" />
                </div>
            ))}
        </div>
    )
}

function TableSkeleton({ rows = 4 }: { rows?: number }) {
    return (
        <div className="border border-gray-100 rounded-xl overflow-hidden animate-pulse">
            <div className="flex gap-4 px-4 py-2 bg-gray-50 border-b border-gray-100">
                <div className="h-3 w-16 bg-gray-200 rounded" />
                <div className="h-3 w-20 bg-gray-200 rounded ml-auto" />
            </div>
            {Array.from({ length: rows }).map((_, i) => (
                <div key={i} className="flex gap-4 px-4 py-3 border-b border-gray-100 last:border-b-0">
                    <div className="h-3 w-24 bg-gray-100 rounded" />
                    <div className="h-3 w-16 bg-gray-100 rounded ml-auto" />
                </div>
            ))}
        </div>
    )
}

export default function Skeleton({ variant = 'card', rows }: SkeletonProps) {
    if (variant === 'list') return <ListSkeleton rows={rows} />
    if (variant === 'table') return <TableSkeleton rows={rows} />
    return <CardSkeleton />
}