import { useOnboarding } from "@onboardjs/react";

export function OnboardingUI() {
  const { renderStep } = useOnboarding();
  return <>{renderStep()}</>;
}
