import { useOnboarding } from "@onboardjs/react";
import { FinalStep } from "./steps/final-step";

export function OnboardingUI() {
  const { renderStep, currentStep } = useOnboarding();

  if (currentStep === null) {
    return <FinalStep />;
  }

  return <>{renderStep()}</>;
}
