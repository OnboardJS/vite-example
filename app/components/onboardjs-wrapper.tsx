import type { PropsWithChildren } from "react";
import { OnboardingProvider } from "@onboardjs/react";
import { steps } from "@/lib/steps";

export function OnboardJSWrapper({ children }: PropsWithChildren) {
  return <OnboardingProvider steps={steps}>{children}</OnboardingProvider>;
}
