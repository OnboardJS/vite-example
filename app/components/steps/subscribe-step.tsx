import { cn } from "@/lib/utils";
import { useOnboarding } from "@onboardjs/react";
import { Label } from "../ui/label";
import { Switch } from "../ui/switch";
import { Link } from "react-router";
import { Button } from "../ui/button";
import { useState } from "react";

export function SubscribeStep({ className }: React.ComponentProps<"div">) {
  const [hasChecked, setHasChecked] = useState(false);
  const { next } = useOnboarding();
  return (
    <div className={cn("flex flex-col", className)}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold mb-3 animate-title">
          Subscribe to updates
        </h1>
        <p className="text-muted-foreground w-[620px] max-w-[90vw] mb-8 animate-title delay-[0.3s]!">
          Linear is constantly evolving. Subscribe to learn about changes.
        </p>

        <div className="max-w-[90vw] w-[564px] border border-input rounded-lg bg-accent/20 p-10 text-left animate-title delay-[0.4s]!">
          <Label className="pb-8 mb-8 border-b border-input flex justify-between w-full">
            <div className="flex flex-col">
              Subscribe to changelog
              <span className="text-sm text-muted-foreground">
                Bi-weekly email about new features and improvements
              </span>
            </div>
            <Switch onCheckedChange={() => setHasChecked(true)} />
          </Label>

          <Label className="pb-8 mb-8 border-b border-input flex justify-between w-full">
            <div className="flex flex-col">
              Subscribe to marketing and onboarding emails
              <span className="text-sm text-muted-foreground">
                Occasional messages to help you get the most out of Linear
              </span>
            </div>
            <Switch onCheckedChange={() => setHasChecked(true)} />
          </Label>

          <div className=" flex justify-between w-full">
            <div className="flex flex-col">
              <span className="text-sm leading-none font-medium">
                Follow us on X
              </span>
              <span className="text-sm text-muted-foreground">
                Stay up-to-date on new features and best practices
              </span>
            </div>

            <Link
              to="https://twitter.com/somafet"
              target="_blank"
              rel="noreferrer"
            >
              <Button variant="outline">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  fill="currentColor"
                >
                  <path d="M357.2 48L427.8 48 273.6 224.2 455 464 313 464 201.7 318.6 74.5 464 3.8 464 168.7 275.5-5.2 48 140.4 48 240.9 180.9 357.2 48zM332.4 421.8l39.1 0-252.4-333.8-42 0 255.3 333.8z" />
                </svg>
                @somafet
              </Button>
            </Link>
          </div>
        </div>

        <Button
          className="w-[336px] h-12 mt-12 transition-colors animate-content"
          onClick={() => next()}
          variant={hasChecked ? "default" : "ghost"}
        >
          Continue
        </Button>
      </div>
    </div>
  );
}
