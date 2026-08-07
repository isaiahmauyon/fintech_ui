import { useState } from 'react'
import type { ChangeEvent } from 'react'

type FilterState = {
    dateRange: string
    type: string
    status: string
}

export default function TransactionFilterBar() {
    const [filters, setFilters] = useState<FilterState>({
        dateRange: 'all',
        type: 'all',
        status: 'all',
    })

    const activeCount = Object.values(filters).filter((v) => v !== 'all').length

    const handleChange = (key: keyof FilterState) => (e: ChangeEvent<HTMLSelectElement>) => {
        setFilters((prev) => ({ ...prev, [key]: e.target.value }))
    }

    const handleClear = () => {
        setFilters({ dateRange: 'all', type: 'all', status: 'all' })
    }

    const selectClass =
        'text-sm border border-gray-200 rounded-lg px-3 py-1.5 bg-white text-gray-700 focus:outline-none focus:border-gray-900'

    return (
        <div className="flex items-center gap-2 flex-wrap">
            <select value={filters.dateRange} onChange={handleChange('dateRange')} className={selectClass}>
                <option value="all">All time</option>
                <option value="today">Today</option>
                <option value="week">This week</option>
                <option value="month">This month</option>
            </select>

            <select value={filters.type} onChange={handleChange('type')} className={selectClass}>
                <option value="all">All types</option>
                <option value="credit">Credit</option>
                <option value="debit">Debit</option>
            </select>

            <select value={filters.status} onChange={handleChange('status')} className={selectClass}>
                <option value="all">All statuses</option>
                <option value="success">Success</option>
                <option value="pending">Pending</option>
                <option value="failed">Failed</option>
            </select>

            {activeCount > 0 && (
                <button
                    onClick={handleClear}
                    className="text-sm text-gray-500 hover:text-gray-900 underline"
                >
                    Clear ({activeCount})
                </button>
            )}
        </div>
    )
}