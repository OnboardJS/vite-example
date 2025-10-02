import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { useOnboarding } from "@onboardjs/react";
import { GalleryVerticalEnd } from "lucide-react";

export function WelcomeStep({ className }: React.ComponentProps<"div">) {
  const { next } = useOnboarding();
  return (
    <div className={cn("flex flex-col gap-6", className)}>
      <div className="flex flex-col items-center gap-2 text-center">
        <a href="#" className="flex flex-col items-center gap-2 font-medium">
          <div className="flex size-32 items-center justify-center rounded-md relative">
            <GalleryVerticalEnd className="size-12 animate-logo absolute z-10" />
          </div>
          <span className="sr-only">Acme Inc.</span>
        </a>
        <h1 className="text-5xl font-bold mb-4 animate-content">
          Welcome to Linear
        </h1>
        <p className="text-muted-foreground w-[620px] max-w-[90vw] mb-8 animate-content">
          Linear is a purpose-built system for developing products.
          <br />
          Streamline issues, projects, and product roadmaps.
        </p>

        <Button
          className="w-[336px] h-12 animate-button"
          onClick={() => next()}
        >
          Get started
        </Button>
      </div>
    </div>
  );
}
