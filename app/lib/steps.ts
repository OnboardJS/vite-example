import { WorkspaceStep } from "@/components/steps/workspace-step";
import type { OnboardingStep } from "@onboardjs/react";

export const steps: OnboardingStep[] = [
  {
    id: "workspace",
    component: WorkspaceStep,
  },
];
