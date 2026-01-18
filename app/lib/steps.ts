import { CommandStep } from "@/components/steps/command-step";
import { GitHubStep } from "@/components/steps/github-step";
import { InviteStep } from "@/components/steps/invite-step";
import { StyleChoice } from "@/components/steps/style-choice";
import { SubscribeStep } from "@/components/steps/subscribe-step";
import { WelcomeStep } from "@/components/steps/welcome-step";
import { WorkspaceStep } from "@/components/steps/workspace-step";
import type { OnboardingStep } from "@onboardjs/react";

export const steps: OnboardingStep[] = [
  {
    id: "workspace",
    component: WorkspaceStep,
    nextStep: "welcome",
  },
  {
    id: "welcome",
    component: WelcomeStep,
    nextStep: "style-choice",
  },
  {
    id: "style-choice",
    component: StyleChoice,
    nextStep: "command",
  },
  {
    id: "command",
    component: CommandStep,
    nextStep: "github",
  },
  {
    id: "github",
    component: GitHubStep,
    nextStep: "invite",
  },
  {
    id: "invite",
    component: InviteStep,
    nextStep: "subscribe",
  },
  {
    id: "subscribe",
    component: SubscribeStep,
    nextStep: null,
  },
];
