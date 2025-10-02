import { cn } from "@/lib/utils";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { InfoIcon } from "lucide-react";
import { useState } from "react";
import { useOnboarding } from "@onboardjs/react";

const FormSchema = z.object({
  emails: z.string(),
});

export function InviteStep({ className }: React.ComponentProps<"div">) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });
  const [sentInvites, setSentInvites] = useState(false);
  const { next } = useOnboarding();

  function onSubmit(data: z.infer<typeof FormSchema>) {
    const emails = data.emails.split(",").map((email) => email.trim());

    const validEmails = emails.filter((email) =>
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    );

    if (validEmails.length > 0) {
      setSentInvites(true);
    }

    toast(
      <span className="flex items-center gap-2">
        <InfoIcon className="inline-block size-4" />{" "}
        {`Submitted ${validEmails.length} email(s)`}
      </span>,
      {
        description: (
          <div className="mt-2 flex flex-wrap gap-1">
            {validEmails.map((email) => (
              <div className="text-primary" key={email}>
                {email}
              </div>
            ))}
          </div>
        ),
      }
    );
  }

  return (
    <div className={cn("flex flex-col", className)}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold mb-3 animate-title">
          Invite co-workers to your team
        </h1>
        <p className="text-muted-foreground w-[620px] max-w-[90vw] mb-8 animate-title delay-[0.3s]!">
          Linear is meant to be used with your team. Invite some co-workers to
          test it out with.
        </p>

        <div className="max-w-[90vw] w-[564px] border border-input rounded-lg flex flex-col bg-accent/20 px-6 py-8 text-left animate-title delay-[0.4s]!">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="emails"
                render={({ field }) => (
                  <FormItem className="mb-3">
                    <FormLabel>Emails</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="email@example.com, email2@example.com..."
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              <div className="w-full flex justify-end">
                <Button>Send Invites</Button>
              </div>
            </form>
          </Form>
        </div>

        <Button
          className="w-[336px] h-12 mt-12 animate-content"
          onClick={() => next()}
          disabled={!sentInvites}
        >
          Continue
        </Button>

        {!sentInvites && (
          <Button
            className="w-[336px] h-12 mt-12 animate-button"
            onClick={() => next()}
            variant={"ghost"}
          >
            I'll do this later
          </Button>
        )}
      </div>
    </div>
  );
}
