import { cn } from "@/lib/utils";
import { useOnboarding } from "@onboardjs/react";
import { Label } from "../ui/label";
import { Switch } from "../ui/switch";
import { Link } from "react-router";
import { Button } from "../ui/button";
import { useState } from "react";
import { BlocksIcon, CommandIcon, SquareUserIcon } from "lucide-react";

export function FinalStep({ className }: React.ComponentProps<"div">) {
  const [hasChecked, setHasChecked] = useState(false);
  const { next } = useOnboarding();
  return (
    <div className={cn("flex flex-col", className)}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold mb-3 animate-title">
          You're good to go
        </h1>
        <p className="text-muted-foreground w-[640px] max-w-[90vw] mb-8 text-sm animate-title delay-[0.3s]!">
          Go ahead and explore the app. When you're ready, create your first
          issue by pressing{" "}
          <kbd className="min-w-[20px] text-center p-[3px] font-medium border border-input inline-block rounded-[3px] text-[11px]">
            C
          </kbd>
          .
        </p>

        <div className="max-w-[90vw] w-[900px] border border-input rounded-lg bg-accent/20 text-left flex max-sm:flex-col items-stretch justify-stretch animate-title delay-[0.4s]!">
          <div className="sm:w-1/3 p-10 border-r border-input grid">
            <SquareUserIcon className="size-6 mb-2" />
            <span className="text-md font-semibold">Tell your team</span>
            <div>
              <span className="text-muted-foreground text-sm">
                Make sure to invite your team members.
              </span>
            </div>
          </div>

          <div className="sm:w-1/3 p-10 border-r border-input grid">
            <BlocksIcon className="size-6 mb-2" />
            <span className="text-md font-semibold">
              Integrate GitHub & Slack
            </span>
            <div>
              <span className="text-muted-foreground text-sm">
                Link your pull requests and create issues from Slack.
              </span>
            </div>
          </div>

          <div className="sm:w-1/3 p-10 grid">
            <CommandIcon className="size-6 mb-2" />
            <span className="text-md font-semibold">Keyboard shortcuts</span>
            <div>
              <span className="text-muted-foreground text-sm">
                Learn the keyboard command by pressing{" "}
                <kbd className="min-w-[20px] text-center p-[3px] font-medium border border-input inline-block rounded-[3px] text-[11px]">
                  ?
                </kbd>
                .
              </span>
            </div>
          </div>
        </div>

        <Link
          to="https://onboardjs.com/?ref=demo"
          target="_blank"
          rel="noreferrer"
          className="animate-title delay-[0.5s]!"
        >
          <Button className="w-[336px] h-12 mt-12">
            Finish OnboardJS Demo
          </Button>
        </Link>
      </div>
    </div>
  );
}
