# Stock Portfolio Analysis Agent

An intelligent AI agent that streams portfolio analysis workflows in real-time, enabling users to watch as it fetches stock data, calculates allocations, and generates comprehensive investment insights live. Features a modern landing page and enhanced bull/bear case insights generation.

## Features

- 🎨 **Modern Landing Page** - Beautiful, responsive landing page with feature showcase
- ⚡ **Real-Time Streaming** - Watch the AI agent work through each step of analysis
- 📊 **Advanced Analytics** - Comprehensive portfolio analysis with charts and metrics
- 🧠 **Enhanced AI Insights** - Detailed bull and bear case insights with improved prompts
- 📈 **SPY Benchmark Comparison** - Automatic comparison against S&P 500
- 💼 **Portfolio Management** - Additive portfolio management with history tracking
- 🔄 **Multi-Strategy Support** - Single-shot and dollar-cost averaging (DCA) strategies

## Tech Stack

- **Frontend**: [React](https://react.dev) + [Next.js 15](https://nextjs.org) with App Router, TypeScript, Tailwind CSS
- **Backend**: [FastAPI](https://fastapi.tiangolo.com) + [Uvicorn](https://www.uvicorn.org)
- **AI/ML**: [CrewAI](https://github.com/crewAIInc/crewAI) + [CopilotKit](https://github.com/CopilotKit/CopilotKit) + AG UI Protocol
- **LLM**: [OpenRouter](https://openrouter.ai) API with GPT-4o-mini
- **Data**: [yfinance](https://github.com/ranaroussi/yfinance) + [pandas](https://pandas.pydata.org) for market data

## Prerequisites

- **Python 3.12** (required: `>=3.12,<3.13`)
- **Node.js** (v20 or higher recommended)
- **uv** (Python package manager) - [Install uv](https://github.com/astral-sh/uv)
- **OpenRouter API Key** - [Get your key here](https://openrouter.ai/keys)

## Installation

### 1. Install Backend Dependencies

```bash
# Install Python dependencies using uv
uv sync
```

This creates a virtual environment and installs all required packages.

### 2. Install Frontend Dependencies

```bash
cd frontend

# Install Node.js dependencies
npm install --legacy-peer-deps
# Note: --legacy-peer-deps is required due to peer dependency conflicts

cd ..
```

### 3. Set Up Environment Variables

#### Backend Environment Variables

Create `agent/.env` file:

```bash
# Copy from example (if exists)
# Windows PowerShell:
Copy-Item agent\.env.example agent\.env

# Or create manually with:
```

```env
OPENROUTER_API_KEY=your-openrouter-key-here
PORT=8006
HOST=0.0.0.0
```

#### Frontend Environment Variables

Create `frontend/.env` file:

```bash
# Copy from example (if exists)
# Windows PowerShell:
Copy-Item frontend\.env.example frontend\.env

# Or create manually with:
```

```env
OPENROUTER_API_KEY=your-openrouter-key-here
OPENAI_API_KEY=your-openrouter-key-here
NEXT_PUBLIC_CREWAI_URL=http://127.0.0.1:8006/crewai-agent
```

**Important Notes:**
- Replace `your-openrouter-key-here` with your actual OpenRouter API key from [https://openrouter.ai/keys](https://openrouter.ai/keys)
- `OPENAI_API_KEY` must be set to the **same value** as `OPENROUTER_API_KEY` (CopilotKit requirement)
- The backend URL should match your backend configuration

## Running the Application

### Start Backend Server

```bash
# From project root
uv run python agent/main.py
```

The backend will start on `http://127.0.0.1:8006`

You should see:
```
INFO:     Uvicorn running on http://0.0.0.0:8006
```

### Start Frontend Server

Open a **new terminal** and run:

```bash
cd frontend
npm run dev
```

The frontend will start on `http://localhost:3006`

You should see:
```
  ▲ Next.js 15.3.4
  - Local:        http://localhost:3006
```

### Access the Application

1. **Landing Page**: Visit `http://localhost:3006` to see the landing page
2. **Main App**: Click "Get Started" or visit `http://localhost:3006/app` for portfolio analysis

## Usage

### Running a Stock Analysis

1. **Open the Application**:
   - Visit `http://localhost:3006` for the landing page
   - Click "Get Started" or go to `http://localhost:3006/app` for the main app

2. **Enter a Query**:
   - Use natural language to describe your investment (e.g., "Invest $10,000 in AAPL and MSFT since January 2023")
   - The AI will extract ticker symbols, amounts, dates, and strategy automatically

3. **Watch Real-Time Analysis**:
   - See live progress as the agent processes your query
   - Watch data fetching, allocation calculations, and insights generation
   - View tool logs showing each step of the workflow

4. **Review Results**:
   - **Charts**: Performance line chart and returns bar chart
   - **Allocation Table**: Portfolio allocation percentages and values
   - **Market Insights**: Bull case (positive) and bear case (negative) insights for each stock
   - **Portfolio Summary**: Total cash, invested amount, portfolio value, and returns

### Example Queries

- "Invest $10,000 in Apple and Microsoft since January 2023"
- "Add $5,000 worth of Google stock to my portfolio since 2022"
- "Analyze TSLA and NVDA with $20k each since 2021"
- "Invest equivalent amount in Google as in Tesla"

## Project Structure

```
stock-portfolio-analysis-agent/
├── agent/                      # Backend (FastAPI)
│   ├── .env                   # Backend environment variables
│   ├── .env.example           # Backend env template
│   ├── main.py                # FastAPI server entry point
│   ├── stock_analysis.py       # Core workflow logic (CrewAI Flow)
│   └── prompts.py             # System and insights prompts
├── frontend/                   # Frontend (Next.js)
│   ├── .env                   # Frontend environment variables
│   ├── .env.example           # Frontend env template
│   └── src/
│       └── app/
│           ├── page.tsx       # Landing page
│           ├── app/
│           │   └── page.tsx   # Main application
│           ├── components/    # React components
│           │   ├── landing-page.tsx
│           │   ├── prompt-panel.tsx
│           │   ├── generative-canvas.tsx
│           │   ├── cash-panel.tsx
│           │   └── chart-components/
│           └── api/
│               └── copilotkit/
│                   └── route.ts
├── pyproject.toml             # Python dependencies
├── uv.lock                     # Python lock file
├── README.md                   # This file
└── START.md                    # Detailed startup guide
```

## Troubleshooting

### Backend Issues

**`uv: command not found`**
- Install uv from [https://github.com/astral-sh/uv](https://github.com/astral-sh/uv)

**Python version error**
- Ensure Python 3.12 is installed: `python --version`
- The project requires `>=3.12,<3.13`

**Backend won't start**
- Verify `agent/.env` exists with `OPENROUTER_API_KEY`
- Check port 8006 is not in use
- Review backend console logs for errors

### Frontend Issues

**`npm install` fails with peer dependency errors**
- Use `npm install --legacy-peer-deps` (already included in instructions)

**Frontend won't start**
- Verify `frontend/.env` exists with all required variables
- Check `NEXT_PUBLIC_CREWAI_URL` matches backend URL
- Try deleting `node_modules` and `.next`, then reinstall

**Can't connect to backend**
- Ensure backend is running on port 8006
- Verify `NEXT_PUBLIC_CREWAI_URL` in `frontend/.env` is correct
- Check firewall settings

### Insights Not Appearing

**No bull/bear case insights shown**
- Ensure backend is restarted after code changes
- Check backend console for debug messages about insights generation
- Verify OpenRouter API key is valid and has credits
- Try a new analysis query

## Development Notes

- **Python Environment**: If your editor reports missing imports, ensure it points to the virtual environment created by `uv sync`
- **Hot Reload**: Both frontend (Next.js) and backend (Uvicorn) support hot reload during development
- **Code Locations**:
  - FastAPI server: `agent/main.py`
  - Workflow logic: `agent/stock_analysis.py`
  - Prompts: `agent/prompts.py`
  - Landing page: `frontend/src/app/page.tsx`
  - Main app: `frontend/src/app/app/page.tsx`

## Additional Resources

- **Detailed Setup Guide**: See [START.md](START.md) for comprehensive installation and troubleshooting
- **Case Study**: See `stock-portfolio-analysis-agent.case-study.json` for project documentation

## License

This project is part of an AI engineering case study demonstrating real-time agent workflows.



