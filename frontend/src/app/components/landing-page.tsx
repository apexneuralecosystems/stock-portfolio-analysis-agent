"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { ArrowRight, TrendingUp, BarChart3, Brain, Zap, Shield, Sparkles, Loader2 } from "lucide-react"

export function LandingPage() {
  const router = useRouter()
  const [isNavigating, setIsNavigating] = useState(false)

  const handleStartAnalyzing = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    setIsNavigating(true)
    // Small delay to show loading state before navigation
    setTimeout(() => {
      router.push("/app")
    }, 100)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FAFCFA] to-white relative">
      {/* Full-page loading overlay */}
      {isNavigating && (
        <div className="fixed inset-0 bg-white/95 backdrop-blur-sm z-50 flex items-center justify-center">
          <div className="flex flex-col items-center gap-4 p-8 bg-white rounded-2xl shadow-xl border border-gray-200 max-w-md">
            <Loader2 className="w-12 h-12 text-green-600 animate-spin" />
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-2 font-['Roobert']">
                Loading Analysis Interface...
              </h3>
              <p className="text-sm text-gray-600">
                Preparing your portfolio analysis workspace
              </p>
            </div>
            <div className="flex gap-1 mt-2">
              <div className="w-2 h-2 bg-green-600 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
              <div className="w-2 h-2 bg-green-600 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
              <div className="w-2 h-2 bg-green-600 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
            </div>
          </div>
        </div>
      )}
      {/* Navigation */}
      <nav className="border-b border-[#D8D8E5] bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-8 h-8 text-green-600" />
            <span className="text-2xl font-bold text-gray-900">StockPortfolio AI</span>
          </div>
          <a
            href="/app"
            onClick={handleStartAnalyzing}
            className={`px-6 py-2 bg-green-600 text-white rounded-full font-semibold hover:bg-green-700 transition-colors flex items-center gap-2 ${
              isNavigating ? "opacity-75 cursor-wait" : ""
            }`}
          >
            {isNavigating ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Loading...
              </>
            ) : (
              <>
                Get Started
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 text-green-700 rounded-full text-sm font-semibold mb-6">
            <Sparkles className="w-4 h-4" />
            AI-Powered Portfolio Analysis
          </div>
          <h1 className="text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Real-Time Stock Portfolio
            <br />
            <span className="text-green-600">Analysis Agent</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Watch your AI agent analyze stock portfolios in real-time. Get instant insights,
            allocation calculations, and performance metrics with complete transparency into
            every step of the process.
          </p>
          <div className="flex items-center justify-center gap-4">
            <a
              href="/app"
              onClick={handleStartAnalyzing}
              className={`px-8 py-4 bg-green-600 text-white rounded-full font-semibold text-lg hover:bg-green-700 transition-colors flex items-center gap-2 shadow-lg hover:shadow-xl ${
                isNavigating ? "opacity-75 cursor-wait" : ""
              }`}
            >
              {isNavigating ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Loading...
                </>
              ) : (
                <>
                  Start Analyzing
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </a>
            <a
              href="#features"
              className="px-8 py-4 bg-white text-gray-700 rounded-full font-semibold text-lg border-2 border-gray-200 hover:border-gray-300 transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Powerful Features</h2>
          <p className="text-xl text-gray-600">Everything you need for intelligent portfolio analysis</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl border border-[#D8D8E5] hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
              <Zap className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Real-Time Streaming</h3>
            <p className="text-gray-600 leading-relaxed">
              Watch your AI agent work in real-time. See every step of the analysis process
              as it fetches data, calculates allocations, and generates insights.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-[#D8D8E5] hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
              <BarChart3 className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Advanced Analytics</h3>
            <p className="text-gray-600 leading-relaxed">
              Get comprehensive portfolio analysis with allocation charts, performance metrics,
              and benchmark comparisons against the S&P 500.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-[#D8D8E5] hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
              <Brain className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">AI Insights</h3>
            <p className="text-gray-600 leading-relaxed">
              Receive balanced AI-generated insights with both bullish and bearish perspectives
              to help you make informed investment decisions.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-[#D8D8E5] hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
              <TrendingUp className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Portfolio Management</h3>
            <p className="text-gray-600 leading-relaxed">
              Support for both single-shot investing and dollar-cost averaging (DCA) strategies
              with automatic simulation and comparison.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-[#D8D8E5] hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-red-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Transparent Process</h3>
            <p className="text-gray-600 leading-relaxed">
              Complete visibility into how analyses are performed. See every calculation,
              data fetch, and decision made by the AI agent.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-[#D8D8E5] hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
              <Sparkles className="w-6 h-6 text-indigo-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Natural Language</h3>
            <p className="text-gray-600 leading-relaxed">
              Simply describe your investment strategy in plain English. The AI understands
              your intent and executes the analysis automatically.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-white border-t border-[#D8D8E5] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600">Simple, transparent, and powerful</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Enter Your Query</h3>
              <p className="text-gray-600">
                Describe your investment strategy in natural language (e.g., "Invest $10k in AAPL and MSFT since Jan 2023")
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">AI Analysis</h3>
              <p className="text-gray-600">
                Watch the AI agent extract parameters, fetch stock data, and calculate portfolio allocations in real-time
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Benchmark Comparison</h3>
              <p className="text-gray-600">
                Automatic comparison against S&P 500 (SPY) to provide context for your investment returns
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">4</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Get Insights</h3>
              <p className="text-gray-600">
                Receive comprehensive insights, charts, and analysis results to guide your investment decisions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-3xl p-12 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Ready to Analyze Your Portfolio?</h2>
          <p className="text-xl mb-8 text-green-50">
            Start using AI-powered portfolio analysis today. Get instant insights and make smarter investment decisions.
          </p>
          <a
            href="/app"
            onClick={handleStartAnalyzing}
            className={`inline-flex items-center gap-2 px-8 py-4 bg-white text-green-600 rounded-full font-semibold text-lg hover:bg-green-50 transition-colors shadow-lg ${
              isNavigating ? "opacity-75 cursor-wait" : ""
            }`}
          >
            {isNavigating ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Loading...
              </>
            ) : (
              <>
                Get Started Now
                <ArrowRight className="w-5 h-5" />
              </>
            )}
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#D8D8E5] bg-white py-8">
        <div className="max-w-7xl mx-auto px-6 text-center text-gray-600">
          <p>Built with Next.js, FastAPI, CrewAI, and CopilotKit</p>
        </div>
      </footer>
    </div>
  )
}

