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

// OpenAIAdapter requires OPENAI_API_KEY to be set in environment
// Set it from OPENROUTER_API_KEY if not already set
// Note: In Next.js, env vars are read-only at runtime, so this must be set in .env file
// For now, we'll try to set it, but users should also set OPENAI_API_KEY in their .env
if (openRouterApiKey) {
  // Try to set it for this process (may not work in all Next.js contexts)
  if (!process.env.OPENAI_API_KEY) {
    process.env.OPENAI_API_KEY = openRouterApiKey;
  }
}

// Configure OpenAIAdapter to use OpenRouter
// The baseURL option should route requests to OpenRouter instead of OpenAI
const serviceAdapter = new OpenAIAdapter({
  apiKey: openRouterApiKey,
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