# How to Start the Stock Portfolio Analysis Agent

## Prerequisites

- **Python 3.12** (required version: `>=3.12,<3.13`)
- **Node.js** (v20 or higher recommended)
- **npm** or **pnpm** (comes with Node.js)
- **uv** (Python package manager) - [Install uv](https://github.com/astral-sh/uv)
- **OpenRouter API Key** - [Get your key here](https://openrouter.ai/keys)

## Step-by-Step Setup

### 1. Install Python Dependencies

```bash
# Install backend dependencies using uv
uv sync
```

This will:
- Create a virtual environment
- Install all Python packages from `pyproject.toml`
- Generate `uv.lock` file

### 2. Install Frontend Dependencies

```bash
# Navigate to frontend directory
cd frontend

# Install Node.js dependencies
npm install
# OR if you prefer pnpm:
# pnpm install

# Go back to root directory
cd ..
```

### 3. Set Up Environment Variables

#### Backend Environment Variables

Create `agent/.env` file:

```bash
# Copy the example file (if it exists) or create new
# Windows PowerShell:
Copy-Item agent\.env.example agent\.env

# Or create manually:
# Create agent/.env with:
```

```env
OPENROUTER_API_KEY=your-openrouter-key-here
PORT=8006
HOST=0.0.0.0
```

#### Frontend Environment Variables

Create `frontend/.env` file:

```bash
# Copy the example file (if it exists) or create new
# Windows PowerShell:
Copy-Item frontend\.env.example frontend\.env

# Or create manually:
# Create frontend/.env with:
```

```env
OPENROUTER_API_KEY=your-openrouter-key-here
OPENAI_API_KEY=your-openrouter-key-here
NEXT_PUBLIC_CREWAI_URL=http://127.0.0.1:8006/crewai-agent
```

**Important Notes:**
- Replace `your-openrouter-key-here` with your actual OpenRouter API key
- `OPENAI_API_KEY` must be set to the **same value** as `OPENROUTER_API_KEY` (this is a CopilotKit requirement)
- The backend URL `http://127.0.0.1:8006/crewai-agent` should match your backend configuration

### 4. Start the Backend Server

Open a terminal and run:

```bash
# Make sure you're in the project root directory
uv run python agent/main.py
```

The backend will start on `http://127.0.0.1:8006` (or the port specified in your `.env` file).

You should see output like:
```
INFO:     Started server process
INFO:     Waiting for application startup.
INFO:     Application startup complete.
INFO:     Uvicorn running on http://0.0.0.0:8006
```

### 5. Start the Frontend Server

Open a **new terminal** (keep the backend running) and run:

```bash
# Navigate to frontend directory
cd frontend

# Start the development server
npm run dev
```

The frontend will start on `http://localhost:3006`.

You should see output like:
```
  ▲ Next.js 15.3.4
  - Local:        http://localhost:3006
```

### 6. Open the Application

1. **Landing Page**: Visit `http://localhost:3006` to see the landing page
2. **Main App**: Click "Get Started" or visit `http://localhost:3006/app` to access the portfolio analysis tool

## Quick Start Commands Summary

```bash
# Terminal 1 - Backend
uv sync                    # First time only
uv run python agent/main.py

# Terminal 2 - Frontend
cd frontend
npm install                # First time only
npm run dev
```

## Troubleshooting

### Backend Issues

**Problem**: `uv: command not found`
- **Solution**: Install uv from [https://github.com/astral-sh/uv](https://github.com/astral-sh/uv)

**Problem**: `Python version not found` or wrong version
- **Solution**: Ensure Python 3.12 is installed. Check with `python --version` or `python3 --version`

**Problem**: Backend won't start
- **Solution**: 
  - Check that `agent/.env` exists and has `OPENROUTER_API_KEY` set
  - Verify port 8006 is not already in use
  - Check backend logs for error messages

### Frontend Issues

**Problem**: `npm: command not found`
- **Solution**: Install Node.js from [https://nodejs.org/](https://nodejs.org/)

**Problem**: Frontend won't start
- **Solution**:
  - Check that `frontend/.env` exists with all required variables
  - Verify `NEXT_PUBLIC_CREWAI_URL` points to your backend URL
  - Try deleting `node_modules` and running `npm install` again

**Problem**: Can't connect to backend
- **Solution**:
  - Ensure backend is running on port 8006
  - Check `NEXT_PUBLIC_CREWAI_URL` in `frontend/.env` matches backend URL
  - Verify firewall isn't blocking the connection

### API Key Issues

**Problem**: "OPENROUTER_API_KEY environment variable is required"
- **Solution**: 
  - Ensure `.env` files exist in both `agent/` and `frontend/` directories
  - Verify the API key is correctly set (no extra spaces or quotes)
  - Restart both servers after updating `.env` files

## Testing the Application

Once both servers are running:

1. Go to `http://localhost:3006/app`
2. Try a sample query like: **"Invest $10,000 in AAPL and MSFT since January 2023"**
3. Watch the AI agent analyze your portfolio in real-time
4. View charts, allocations, and insights

## Project Structure

```
stock-portfolio-analysis-agent/
├── agent/                 # Backend (FastAPI)
│   ├── .env              # Backend environment variables
│   ├── main.py           # FastAPI server entry point
│   └── stock_analysis.py # Core workflow logic
├── frontend/              # Frontend (Next.js)
│   ├── .env              # Frontend environment variables
│   └── src/
│       └── app/
│           ├── page.tsx  # Landing page
│           └── app/
│               └── page.tsx  # Main application
└── README.md
```

## Ports Used

- **Backend**: `8006` (configurable via `PORT` in `agent/.env`)
- **Frontend**: `3006` (configurable in `frontend/package.json`)

## Next Steps

- Read the [README.md](README.md) for more details
- Check the code comments for implementation details
- Customize the prompts in `agent/prompts.py`
- Modify the UI components in `frontend/src/app/components/`

