// src/ai/flows/summarizeDetailsFlow.ts

import { ai } from 'ai-sdk'; // ✅ Adjust import based on your SDK setup

interface SummarizeResult {
  text: string;
  [key: string]: any;
}

/**
 * summarizeDetailsFlow
 * ---------------------
 * Generates a summary of the given prompt using Gemini model.
 *
 * @param prompt - The input text to summarize
 * @returns A structured response with the model's output
 */
export async function summarizeDetailsFlow(prompt: string): Promise<SummarizeResult> {
  try {
    if (!prompt || prompt.trim().length === 0) {
      throw new Error('Prompt is required.');
    }

    // ✅ Directly specify the model (no registry)
    const model = 'googleai/gemini-2.0-flash';

    const llmResponse = await ai.generate({
      prompt,
      model,
      config: {
        temperature: 0.6,
      },
    });

    if (llmResponse && llmResponse.output) {
      return {
        text: llmResponse.output,
        ...llmResponse,
      };
    }

    return {
      text: llmResponse ? String(llmResponse) : '',
    };
  } catch (error: any) {
    console.error('[summarizeDetailsFlow] Error:', error);
    return {
      text: `❌ Error: ${error.message || 'Failed to generate summary'}`,
    };
  }
}
