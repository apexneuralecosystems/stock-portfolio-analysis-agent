import {
  CopilotRuntime,
  copilotRuntimeNextJSAppRouterEndpoint,
  OpenAIAdapter
} from '@copilotkit/runtime';
import { NextRequest } from 'next/server';
import { HttpAgent } from "@ag-ui/client";


const crewaiAgent = new HttpAgent({
  // url: "http://0.0.0.0:8006/crewai-agent",
  url: process.env.NEXT_PUBLIC_CREWAI_URL || "http://0.0.0.0:8006/crewai-agent",
});

// Use OpenRouter API key - configure OpenAIAdapter to use OpenRouter
const openRouterApiKey = process.env.OPENROUTER_API_KEY;
if (!openRouterApiKey) {
  throw new Error("OPENROUTER_API_KEY environment variable is required");
}

// OpenAIAdapter reads OPENAI_API_KEY from environment variables automatically
// Ensure it's set in .env file (must be same as OPENROUTER_API_KEY for OpenRouter)
if (!process.env.OPENAI_API_KEY) {
  throw new Error("OPENAI_API_KEY environment variable is required. Set it to the same value as OPENROUTER_API_KEY in your .env file");
}

// Configure OpenAIAdapter to use OpenRouter
// OpenAIAdapter reads apiKey from OPENAI_API_KEY env var automatically
// Only pass baseURL to route requests to OpenRouter instead of OpenAI
const serviceAdapter = new OpenAIAdapter({
  baseURL: "https://openrouter.ai/api/v1",
})
const runtime = new CopilotRuntime({
  agents: {
    // @ts-ignore
    crewaiAgent : crewaiAgent 
  },
});
// const runtime = new CopilotRuntime()
export const POST = async (req: NextRequest) => {
  const { handleRequest } = copilotRuntimeNextJSAppRouterEndpoint({
    runtime,
    serviceAdapter,
    endpoint: '/api/copilotkit',
  });

  return handleRequest(req);
};