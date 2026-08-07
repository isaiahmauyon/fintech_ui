import { useState } from 'react'
import type { ChangeEvent } from 'react'

type UploadStatus = 'empty' | 'uploaded' | 'error'

type DocumentUploadCardProps = {
    label: string
    hint?: string
}

export default function DocumentUploadCard({ label, hint }: DocumentUploadCardProps) {
    const [status, setStatus] = useState<UploadStatus>('empty')
    const [fileName, setFileName] = useState('')

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (!file) return

        const isValidType = ['image/jpeg', 'image/png', 'application/pdf'].includes(file.type)
        const isValidSize = file.size <= 5 * 1024 * 1024 // 5MB

        if (!isValidType || !isValidSize) {
            setStatus('error')
            setFileName(file.name)
            return
        }

        setFileName(file.name)
        setStatus('uploaded')
    }

    return (
        <div>
            <label
                className={`flex flex-col items-center justify-center border-2 border-dashed rounded-xl p-6 cursor-pointer transition-colors ${status === 'uploaded'
                        ? 'border-green-500 bg-green-50'
                        : status === 'error'
                            ? 'border-red-400 bg-red-50'
                            : 'border-gray-300 hover:border-gray-400'
                    }`}
            >
                <input
                    type="file"
                    accept="image/jpeg,image/png,application/pdf"
                    onChange={handleFileChange}
                    className="hidden"
                    aria-label={label}
                />

                <span className="text-2xl mb-2">
                    {status === 'uploaded' ? '✅' : status === 'error' ? '⚠️' : '📄'}
                </span>

                <p className="font-medium text-gray-900 text-sm">{label}</p>

                {status === 'empty' && hint && (
                    <p className="text-xs text-gray-400 mt-1 text-center">{hint}</p>
                )}
                {status === 'uploaded' && (
                    <p className="text-xs text-green-700 mt-1 truncate max-w-full">{fileName}</p>
                )}
                {status === 'error' && (
                    <p className="text-xs text-red-600 mt-1 text-center">
                        File must be JPG, PNG, or PDF, under 5MB
                    </p>
                )}
            </label>
        </div>
    )
}