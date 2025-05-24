"use client";

import { useFormState, useFormStatus } from 'react-dom';
import { useEffect } from 'react';
import { submitContactForm, type ContactFormState } from '@/app/actions';
import type { ContactInfo } from '@/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Send, Linkedin, Github, Globe, Loader2 } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";


interface ContactSectionProps {
  contactInfo: ContactInfo;
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
      {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Send className="mr-2 h-4 w-4" />}
      Send Message
    </Button>
  );
}

export default function ContactSection({ contactInfo }: ContactSectionProps) {
  const initialState: ContactFormState = { message: '', success: false };
  const [state, formAction] = useFormState(submitContactForm, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state.message) {
      if (state.success) {
        toast({
          title: "Success!",
          description: state.message,
        });
        // Optionally reset form fields here if you manage them with useState
      } else if (state.errors) {
         // Errors are displayed inline, but a general error toast can be added
         toast({
           title: "Error",
           description: "Please correct the errors in the form.",
           variant: "destructive",
         });
      } else if (!state.success && state.message) {
        // General error not related to specific fields
         toast({
          title: "Error",
          description: state.message,
          variant: "destructive",
        });
      }
    }
  }, [state, toast]);

  return (
    <Card className="w-full shadow-lg mt-8 print-shadow-none print-break-inside-avoid">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-primary print-text-black">Get In Touch</CardTitle>
      </CardHeader>
      <CardContent className="p-6 grid md:grid-cols-2 gap-8">
        <div className="print-hidden"> {/* Hide form on print */}
          <h3 className="text-lg font-semibold text-primary mb-2 print-text-black">Send me a message</h3>
          <form action={formAction} className="space-y-4">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input type="text" id="name" name="name" required />
              {state.errors?.name && <p className="text-sm text-destructive mt-1">{state.errors.name.join(', ')}</p>}
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" name="email" required />
              {state.errors?.email && <p className="text-sm text-destructive mt-1">{state.errors.email.join(', ')}</p>}
            </div>
            <div>
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" name="message" rows={4} required />
              {state.errors?.message && <p className="text-sm text-destructive mt-1">{state.errors.message.join(', ')}</p>}
            </div>
            <SubmitButton />
            {state.message && !state.errors && state.success && (
               <Alert className="mt-4">
                 <AlertTitle>Message Sent!</AlertTitle>
                 <AlertDescription>{state.message}</AlertDescription>
               </Alert>
            )}
             {state.message && !state.success && !state.errors && (
               <Alert variant="destructive" className="mt-4">
                 <AlertTitle>Submission Error</AlertTitle>
                 <AlertDescription>{state.message}</AlertDescription>
               </Alert>
            )}
          </form>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-primary mb-3 print-text-black">Connect with me</h3>
          <div className="space-y-3">
            {contactInfo.linkedin && (
              <a href={`https://${contactInfo.linkedin}`} target="_blank" rel="noopener noreferrer" className="flex items-center text-foreground hover:text-accent transition-colors group">
                <Linkedin className="h-5 w-5 mr-3 text-accent group-hover:text-primary transition-colors" /> {contactInfo.linkedin}
              </a>
            )}
            {contactInfo.github && (
              <a href={`https://${contactInfo.github}`} target="_blank" rel="noopener noreferrer" className="flex items-center text-foreground hover:text-accent transition-colors group">
                <Github className="h-5 w-5 mr-3 text-accent group-hover:text-primary transition-colors" /> {contactInfo.github}
              </a>
            )}
            {contactInfo.website && (
              <a href={`https://${contactInfo.website}`} target="_blank" rel="noopener noreferrer" className="flex items-center text-foreground hover:text-accent transition-colors group">
                <Globe className="h-5 w-5 mr-3 text-accent group-hover:text-primary transition-colors" /> {contactInfo.website}
              </a>
            )}
             <p className="text-foreground/80 pt-4 border-t mt-4 print-text-black">
                Or email me directly at: <a href={`mailto:${contactInfo.email}`} className="text-accent hover:underline">{contactInfo.email}</a>
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
