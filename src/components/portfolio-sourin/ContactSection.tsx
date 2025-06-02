// src/components/portfolio-sourin/ContactSection.tsx
"use client";

import { useFormState, useFormStatus } from 'react-dom';
import { useEffect } from 'react';
import type { SourinContactInfo } from '@/types';
import { submitContactForm, type ContactFormState } from '@/app/actions'; // Reusing existing server action
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Send, Mail, Phone, Linkedin, MapPin, Github, Loader2 } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

interface ContactSectionProps {
  data: SourinContactInfo;
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full bg-accent hover:bg-accent/90 text-accent-foreground shadow-md hover:shadow-lg transition-shadow">
      {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Send className="mr-2 h-4 w-4" />}
      Send Message
    </Button>
  );
}

export default function ContactSection({ data }: ContactSectionProps) {
  const { headline, email, phone, linkedinUrl, githubUrl, location } = data;
  const initialState: ContactFormState = { message: '', success: false, errors: {} };
  const [state, formAction] = useFormState(submitContactForm, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state.message) {
      if (state.success) {
        toast({
          title: "Success!",
          description: state.message,
        });
        // Consider resetting form fields here if needed (e.g., if form is managed by local state too)
      } else if (state.errors && Object.keys(state.errors).length > 0) {
         toast({
           title: "Validation Error",
           description: "Please check the form for errors.",
           variant: "destructive",
         });
      } else if (!state.success && state.message) {
         toast({
          title: "Error",
          description: state.message,
          variant: "destructive",
        });
      }
    }
  }, [state, toast]);

  return (
    <section id="contact" className="py-16 md:py-24 text-foreground print-break-inside-avoid"> {/* REMOVED bg-secondary/30 */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4 print-text-black">{headline}</h2>
          <div className="w-24 h-1 bg-accent mx-auto"></div>
        </div>

        <Card className="shadow-xl print-shadow-none bg-card/80 backdrop-blur-sm"> {/* ADDED bg-card/80 backdrop-blur-sm */}
          <CardContent className="p-6 md:p-8 grid md:grid-cols-2 gap-8 md:gap-12">
            <div className="print-hidden">
              <h3 className="text-xl font-semibold text-primary mb-4 print-text-black">Send me a message</h3>
              <form action={formAction} className="space-y-4">
                <div>
                  <Label htmlFor="name" className="text-card-foreground/80">Your Name</Label> {/* Ensure text color contrasts with card */}
                  <Input type="text" id="name" name="name" required className="bg-muted/50 border-border/50" /> {/* UPDATED background */}
                  {state.errors?.name && <p className="text-sm text-destructive mt-1">{state.errors.name.join(', ')}</p>}
                </div>
                <div>
                  <Label htmlFor="email" className="text-card-foreground/80">Your Email</Label> {/* Ensure text color contrasts with card */}
                  <Input type="email" id="email" name="email" required className="bg-muted/50 border-border/50" /> {/* UPDATED background */}
                  {state.errors?.email && <p className="text-sm text-destructive mt-1">{state.errors.email.join(', ')}</p>}
                </div>
                <div>
                  <Label htmlFor="message" className="text-card-foreground/80">Your Message</Label> {/* Ensure text color contrasts with card */}
                  <Textarea id="message" name="message" rows={4} required className="bg-muted/50 border-border/50 resize-none" /> {/* UPDATED background */}
                  {state.errors?.message && <p className="text-sm text-destructive mt-1">{state.errors.message.join(', ')}</p>}
                </div>
                <SubmitButton />
                {state.message && !state.errors?.name && !state.errors?.email && !state.errors?.message && state.success && (
                  <Alert className="mt-4 bg-accent/20 border-accent/50 text-accent-foreground"> {/* Adjusted alert style */}
                    <AlertTitle>Message Sent!</AlertTitle>
                    <AlertDescription>{state.message}</AlertDescription>
                  </Alert>
                )}
                {state.message && !state.success && (!state.errors || Object.keys(state.errors).length === 0) && (
                  <Alert variant="destructive" className="mt-4">
                    <AlertTitle>Submission Error</AlertTitle>
                    <AlertDescription>{state.message}</AlertDescription>
                  </Alert>
                )}
              </form>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-primary mb-4 print-text-black">Contact Information</h3>
              <a href={`mailto:${email}`} className="flex items-center text-card-foreground hover:text-accent transition-colors group"> {/* Ensure text color contrasts with card */}
                <Mail className="h-5 w-5 mr-3 text-accent group-hover:text-primary transition-colors" /> {email}
              </a>
              <a href={`tel:${phone.replace(/\s/g, '')}`} className="flex items-center text-card-foreground hover:text-accent transition-colors group"> {/* Ensure text color contrasts with card */}
                <Phone className="h-5 w-5 mr-3 text-accent group-hover:text-primary transition-colors" /> {phone}
              </a>
              <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="flex items-center text-card-foreground hover:text-accent transition-colors group"> {/* Ensure text color contrasts with card */}
                <Linkedin className="h-5 w-5 mr-3 text-accent group-hover:text-primary transition-colors" /> LinkedIn Profile
              </a>
              <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center text-card-foreground hover:text-accent transition-colors group"> {/* Ensure text color contrasts with card */}
                <Github className="h-5 w-5 mr-3 text-accent group-hover:text-primary transition-colors" /> GitHub Profile
              </a>
              <div className="flex items-start text-card-foreground group"> {/* Ensure text color contrasts with card */}
                <MapPin className="h-5 w-5 mr-3 mt-1 text-accent flex-shrink-0" /> 
                <span className="print-text-black">{location}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
