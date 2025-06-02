'use server';

import { z } from 'zod';
import { ai } from '../genkit';

export const summarizeDetailsFlow = ai.defineFlow(
  {
    name: 'summarizeDetailsFlow',
    inputSchema: z.object({
      text: z.string().min(10, { message: "Please provide more details for a better summary." }),
      contentType: z.enum(['skill', 'project']),
    }),
    outputSchema: z.string(),
  },
  async (input) => {
    const prompt = `You are an expert resume writer. Summarize the following ${input.contentType} details for a fresher's portfolio. 
    Make it professional, concise, and impactful. 
    For projects, aim for 2-3 sentences highlighting key achievements and technologies used.
    For skills, describe its application or context in 1-2 sentences.
    Details: """${input.text}"""`;

    try {
      const llmResponse = await ai.generate({
        prompt,
        model: ai.registry.getModel('googleai/gemini-2.0-flash') || ai.registry.getDefaultModel() || 'googleai/gemini-2.0-flash', // Ensure a model is selected
        config: {
          temperature: 0.6,
        },
      });
      const summary = llmResponse.text; 
      if (!summary) {
        throw new Error("AI could not generate a summary. The response was empty.");
      }
      return summary;
    } catch (error) {
      console.error("Error in summarizeDetailsFlow:", error);
      // Check if error is an instance of Error to access message property
      const errorMessage = error instanceof Error ? error.message : "An unknown error occurred during summary generation.";
      return `AI could not generate a summary. Error: ${errorMessage}`;
    }
  }
);