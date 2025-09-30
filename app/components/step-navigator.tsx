import { useOnboarding } from "@onboardjs/react";
import { Button } from "./ui/button";

export function StepNavigator() {
  const { state, goToStep, engine } = useOnboarding();
  const steps = state?.totalSteps ?? 0;

  return (
    <div className="flex items-center justify-center">
      {Array.from({ length: steps }).map((_, index) => {
        const isCurrentStep = state?.currentStepNumber === index + 1;
        const currentStep = engine?.getRelevantSteps()[index];

        if (!currentStep) {
          return null;
        }

        return (
          <Button
            size="icon"
            variant="ghost"
            key={index}
            disabled={index + 1 >= (state?.currentStepNumber ?? 0)}
            onClick={() => goToStep(String(currentStep.id))}
          >
            <div
              className={`size-2 my-2 mx-2.5 transition-colors rounded-full ${
                isCurrentStep ? "bg-primary" : "bg-primary/20"
              }`}
            ></div>
          </Button>
        );
      })}
    </div>
  );
}
