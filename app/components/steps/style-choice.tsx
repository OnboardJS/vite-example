import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { useOnboarding } from "@onboardjs/react";
import { LightAppSvg } from "../svg/light-app";
import { DarkAppSvg } from "../svg/dark-app";
import { useTheme } from "../theme-provider";

export function StyleChoice({ className }: React.ComponentProps<"div">) {
  const { next } = useOnboarding();
  const { theme, setTheme } = useTheme();

  return (
    <div className={cn("flex flex-col", className)}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold mb-3">Choose your style</h1>
        <p className="text-muted-foreground w-[620px] max-w-[90vw] mb-8">
          Change your theme at any time via the command menu or settings.
        </p>

        <div className="max-w-[90vw] h-[190px] border border-input rounded-lg flex">
          <div
            className="w-[300px] border-r border-input flex flex-col items-center justify-center"
            role="button"
            onClick={() => setTheme("light")}
          >
            <LightAppSvg
              className={cn(
                "h-auto w-[60%] my-3 mx-8 rounded-[6px]",
                theme === "light"
                  ? "border-2 border-primary"
                  : "border-transparent"
              )}
            />
            <span className="font-semibold text-md">Light</span>
          </div>
          <div
            className="w-[300px] flex flex-col items-center justify-center"
            role="button"
            onClick={() => setTheme("dark")}
          >
            <DarkAppSvg
              className={cn(
                "h-auto w-[60%] my-3 mx-8 rounded-[6px]",
                theme === "dark"
                  ? "border-2 border-primary"
                  : "border-transparent"
              )}
            />
            <span className="font-semibold text-md">Dark</span>
          </div>
        </div>

        <Button className="w-[336px] h-12 mt-12" onClick={() => next()}>
          Continue
        </Button>
      </div>
    </div>
  );
}
