"use client";

import { useState, useEffect } from "react";
import { runFlow } from "@genkit-ai/next/client";
import { summarizeDetailsFlow } from "@/ai/flows/summarizeDetailsFlow";
import type { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Sparkles, Copy, Loader2 } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

interface AISummaryGeneratorProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  initialText?: string;
  contentType: "skill" | "project";
  onSummaryGenerated?: (summary: string) => void; 
}

type SummarizeDetailsFlowInput = z.infer<typeof summarizeDetailsFlow.inputSchema>;

export default function AISummaryGenerator({
  isOpen,
  setIsOpen,
  initialText = "",
  contentType,
  onSummaryGenerated,
}: AISummaryGeneratorProps) {
  const [inputText, setInputText] = useState(initialText);
  const [generatedSummary, setGeneratedSummary] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    setInputText(initialText);
  }, [initialText, isOpen]);

  const handleGenerateSummary = async () => {
    if (!inputText.trim()) {
      setError(`Please enter some details about your ${contentType} to generate a summary.`);
      return;
    }
    if (inputText.trim().length < 10) {
       setError(`Please provide a bit more detail (at least 10 characters) for the AI to generate a meaningful summary for your ${contentType}.`);
       return;
    }


    setIsLoading(true);
    setError(null);
    setGeneratedSummary("");

    try {
      const input: SummarizeDetailsFlowInput = { text: inputText, contentType };
      const summary = await runFlow(summarizeDetailsFlow, input);
      setGeneratedSummary(summary);
      if (onSummaryGenerated) {
        onSummaryGenerated(summary);
      }
    } catch (e: any) {
      const flowError = e.data?.message || e.message || `Failed to generate summary. Please try again.`;
      setError(flowError);
      toast({
        title: "Error",
        description: flowError,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopyToClipboard = () => {
    if (generatedSummary) {
      navigator.clipboard.writeText(generatedSummary);
      toast({
        title: "Copied!",
        description: "Summary copied to clipboard.",
      });
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[525px] print-hidden">
        <DialogHeader>
          <DialogTitle className="flex items-center">
            <Sparkles className="mr-2 h-5 w-5 text-accent" />
            AI {contentType.charAt(0).toUpperCase() + contentType.slice(1)} Summary Generator
          </DialogTitle>
          <DialogDescription>
            Enter details about your {contentType}, and the AI will help you craft a professional summary.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="details-input">
              {contentType.charAt(0).toUpperCase() + contentType.slice(1)} Details
            </Label>
            <Textarea
              id="details-input"
              placeholder={`e.g., Key features, technologies used, your role, accomplishments for a ${contentType}...`}
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              rows={5}
              className="resize-none"
            />
          </div>
          {error && (
             <Alert variant="destructive">
               <AlertTitle>Input Error</AlertTitle>
               <AlertDescription>{error}</AlertDescription>
             </Alert>
           )}
          {generatedSummary && (
            <div className="grid gap-2">
              <Label htmlFor="generated-summary">Generated Summary</Label>
              <Textarea
                id="generated-summary"
                value={generatedSummary}
                readOnly
                rows={4}
                className="bg-muted/50 resize-none"
              />
              <Button variant="outline" size="sm" onClick={handleCopyToClipboard} className="mt-1 w-fit">
                <Copy className="mr-2 h-4 w-4" /> Copy Summary
              </Button>
            </div>
          )}
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => setIsOpen(false)}>Cancel</Button>
          <Button onClick={handleGenerateSummary} disabled={isLoading} className="bg-accent hover:bg-accent/90 text-accent-foreground">
            {isLoading ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <Sparkles className="mr-2 h-4 w-4" />
            )}
            Generate Summary
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
