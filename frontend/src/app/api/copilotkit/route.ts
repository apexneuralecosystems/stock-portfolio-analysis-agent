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

// OpenAIAdapter uses OPENAI_BASE_URL environment variable to configure the base URL
// This must be set in .env file (cannot be set at runtime in Next.js)
if (!process.env.OPENAI_BASE_URL) {
  throw new Error("OPENAI_BASE_URL environment variable is required. Set it to 'https://openrouter.ai/api/v1' in your .env file");
}

// Configure OpenAIAdapter - it reads configuration from environment variables:
// - OPENAI_API_KEY: The API key (should be your OpenRouter key)
// - OPENAI_BASE_URL: The base URL (should be 'https://openrouter.ai/api/v1' for OpenRouter)
const serviceAdapter = new OpenAIAdapter()
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