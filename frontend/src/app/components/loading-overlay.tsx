"use client"

import { Loader2 } from "lucide-react"

interface LoadingOverlayProps {
  message?: string
}

export function LoadingOverlay({ message = "Analyzing your portfolio..." }: LoadingOverlayProps) {
  return (
    <div className="absolute inset-0 bg-white/95 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="flex flex-col items-center gap-4 p-8 bg-white rounded-2xl shadow-xl border border-gray-200 max-w-md">
        <Loader2 className="w-12 h-12 text-green-600 animate-spin" />
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-900 mb-2 font-['Roobert']">
            {message}
          </h3>
          <p className="text-sm text-gray-600">
            This may take 30-60 seconds while we fetch stock data and generate insights...
          </p>
        </div>
        <div className="flex gap-1 mt-2">
          <div className="w-2 h-2 bg-green-600 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
          <div className="w-2 h-2 bg-green-600 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
          <div className="w-2 h-2 bg-green-600 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
        </div>
      </div>
    </div>
  )
}

