import { CommandStep } from "@/components/steps/command-step";
import { StyleChoice } from "@/components/steps/style-choice";
import { WelcomeStep } from "@/components/steps/welcome-step";
import { WorkspaceStep } from "@/components/steps/workspace-step";
import type { OnboardingStep } from "@onboardjs/react";

export const steps: OnboardingStep[] = [
  {
    id: "workspace",
    component: WorkspaceStep,
  },
  {
    id: "welcome",
    component: WelcomeStep,
  },
  {
    id: "style-choice",
    component: StyleChoice,
  },
  {
    id: "command",
    component: CommandStep,
  },
];
