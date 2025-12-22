"use client"

import type React from "react"
import { CopilotChat } from "@copilotkit/react-ui"


interface PromptPanelProps {
  availableCash: number
  isAnalyzing?: boolean
}



export function PromptPanel({ availableCash, isAnalyzing = false }: PromptPanelProps) {


  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }



  return (
    <div className="h-full flex flex-col bg-white">
      {/* Header */}
      <div className="p-4 border-b border-[#D8D8E5] bg-[#FAFCFA]">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xl">🪁</span>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <h1 className="text-lg font-semibold text-[#030507] font-['Roobert']">Portfolio Chat</h1>
              {isAnalyzing && (
                <div className="flex items-center gap-1.5 px-2 py-1 bg-yellow-50 border border-yellow-200 rounded-full">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
                  </span>
                  <span className="text-xs font-semibold text-yellow-700">Analyzing...</span>
                </div>
              )}
            </div>
            <div className="inline-block px-2 py-0.5 bg-[#BEC9FF] text-[#030507] text-xs font-semibold uppercase rounded">
              PRO
            </div>
          </div>
        </div>
        <p className="text-xs text-[#575758]">Interact with the CrewAI-powered AI agent for portfolio visualization and analysis</p>

        {/* Available Cash Display */}
        <div className="mt-3 p-2 bg-[#FF003C]/10 rounded-lg">
          <div className="text-xs text-[#575758] font-medium">Available Cash</div>
          <div className="text-sm font-semibold text-[#030507] font-['Roobert']">{formatCurrency(availableCash)}</div>
        </div>
      </div>
      <CopilotChat className="h-[78vh] p-2" labels={
        {
          initial : `I am a CrewAI AI agent designed to analyze investment opportunities and track stock performance over time. How can I help you with your investment query? For example, you can ask me to analyze a stock like "Invest in Apple with 10k dollars since Jan 2023". \n\nNote: The AI agent has access to stock data from the past 4 years only`
        }
      } />

    </div >
  )
}
