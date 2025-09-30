import { cn } from "@/lib/utils";
import { ControlKey, CommandKey, KKey } from "../key";
import { useDevice } from "@/hooks/useDevice";
import { Button } from "../ui/button";
import { useOnboarding, type StepComponentProps } from "@onboardjs/react";
import { CommandMenu } from "../command-dialog";
import { useState } from "react";

export function CommandStep({
  className,
  context,
}: React.ComponentProps<"div"> & StepComponentProps) {
  const { isMac } = useDevice();
  const { next } = useOnboarding();
  const [isCommandOpen, setIsCommandOpen] = useState(false);
  const [hasOpenedCommand, setHasOpenedCommand] = useState(false);

  return (
    <div className={cn("flex flex-col", className)}>
      <CommandMenu
        workspace={context.flowData?.workspace}
        onOpenChange={(open) => {
          setIsCommandOpen(open);
          if (open) {
            setHasOpenedCommand(true);
          }
        }}
      />
      <div className="flex flex-col items-center gap-2 text-center">
        {isCommandOpen ? (
          <p className="text-muted-foreground w-[620px] max-w-[90vw] mb-8">
            Let's try it out. Filter, select and perform an action with your
            keyboard or mouse.
          </p>
        ) : hasOpenedCommand ? (
          <>
            <h1 className="text-2xl font-bold mb-3">That was easy!</h1>
            <p className="text-muted-foreground w-[620px] max-w-[90vw] mb-8">
              Remember, use{" "}
              <span aria-label={`${isMac ? "Command" : "Control"} K`}>
                <kbd className="p-[3px] font-medium border border-input inline-block rounded-[3px] text-[11px]">
                  {isMac ? "⌘" : "Ctrl"}
                </kbd>
                <kbd className="p-[3px] font-medium border border-input inline-block rounded-[3px] text-[11px]">
                  K
                </kbd>
              </span>{" "}
              to bring it up.
              <br />
              Try it out again once you've created your first issue in Linear.
            </p>
          </>
        ) : (
          <>
            <h1 className="text-2xl font-bold mb-3">Meet the command menu</h1>
            <p className="text-muted-foreground w-[620px] max-w-[90vw] mb-8">
              Complete any action in seconds by typing into the command menu.
            </p>
          </>
        )}

        {(!hasOpenedCommand || isCommandOpen) && (
          <div
            className={cn(
              "max-w-[90vw] w-[600px] h-[190px] border border-input rounded-lg flex p-4",
              isCommandOpen ? "opacity-0" : "opacity-100"
            )}
          >
            <div className="flex flex-col gap-2 justify-center items-center w-full">
              <span className="mb-6 font-semibold">
                Try opening the command menu with:
              </span>
              <div className="flex gap-4">
                {!isMac ? (
                  <div className="flex items-center">
                    <ControlKey width={80} />
                  </div>
                ) : (
                  <div className="flex items-center">
                    <CommandKey position="Left" width={80} />
                  </div>
                )}
                <div className="flex items-center">
                  <KKey width={80} />
                </div>
              </div>
            </div>
          </div>
        )}

        <Button
          className={cn(
            "w-[336px] h-12",
            !hasOpenedCommand || isCommandOpen ? "mt-12" : ""
          )}
          variant={isCommandOpen || hasOpenedCommand ? "default" : "ghost"}
          onClick={() => next()}
        >
          Continue
        </Button>
      </div>
    </div>
  );
}
