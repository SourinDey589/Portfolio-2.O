"use client";

import { Printer } from "lucide-react";
import { Button } from "@/components/ui/button";

// This component might not be needed for the new design's main page,
// but can be kept if a printable version of other content is desired.
export default function PrintButton() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={handlePrint}
      className="fixed bottom-4 right-4 bg-accent text-accent-foreground hover:bg-accent/90 print-hidden shadow-lg rounded-full z-50"
      aria-label="Print Page"
    >
      <Printer className="h-5 w-5" />
    </Button>
  );
}
