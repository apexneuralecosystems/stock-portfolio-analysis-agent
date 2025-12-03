# Stock Portfolio Agent

This project shows how to create an AI agent that streams the portfolio analysis workflow in real-time. Built with CrewAI (backend), React/Next.js (frontend), the CopilotKit's AG-UI Protocol enables users to watch the agent fetch stock data, calculate allocations, and generate insights live.

**Tech stack:**
- [React](https://react.dev) + [Next.js](https://nextjs.org) for the frontend UI
- [FastAPI](https://fastapi.tiangolo.com) + [Uvicorn](https://www.uvicorn.org) for the backend API
- [CopilotKit](https://github.com/CopilotKit/CopilotKit) + AG UI Protocol for streaming agent events
- [CrewAI](https://github.com/crewAIInc/crewAI) for the agent workflow
- [yfinance](https://github.com/ranaroussi/yfinance) and [pandas](https://pandas.pydata.org) for market data and analysis

## Setup

1. **Install Dependencies**:
   ```bash
   uv sync
   
   # Install frontend dependencies
   cd frontend
   npm install
   cd ..
   ```

2. **Environment Variables**:
   - `agent/.env` (backend):
     ```env
     OPENROUTER_API_KEY=your-openrouter-key
     ```
   - `frontend/.env` (frontend):
     ```env
     OPENROUTER_API_KEY=your-openrouter-key
     OPENAI_API_KEY=your-openrouter-key
     NEXT_PUBLIC_CREWAI_URL=http://127.0.0.1:8006/crewai-agent
     ```
     
     **Note:** `OPENAI_API_KEY` must be set to the same value as `OPENROUTER_API_KEY` because CopilotKit's `OpenAIAdapter` checks this environment variable internally. The code configures it to use OpenRouter's API endpoint via the `baseURL` option.

3. **Configure Backend URL (optional)**:
   The frontend expects the backend to run locally. If you change host/port, update the frontend API call configuration accordingly.

4. **Run the App**:
   ```bash
   # Start backend
   uv run python agent/main.py

   # In another terminal, start frontend
   cd frontend
   npm run dev
   ```

## Usage

1. **Open the UI**:
   - Visit `http://localhost:3006`.

2. **Run a Stock Analysis**:
   - Use the prompt/input in the UI to ask for a portfolio analysis (e.g., "Analyze AAPL and MSFT with $10k each").
   - Watch live progress: messages, tool calls, and intermediate results stream into the UI via AG UI Protocol events.

3. **Review Results**:
   - View allocation summaries, charts, and insights rendered by the frontend components.

## Development Notes
- If your editor reports missing imports, ensure it points to the same Python environment where you installed dependencies (`uv`, `venv`, `conda`, etc.). Running `uv sync` in the repo root is recommended, but any standard Python environment manager works.
- The FastAPI app is in `agent/main.py`; core workflow logic is in `agent/stock_analysis.py`.



