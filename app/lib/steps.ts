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
  {
    id: "github",
    component: GitHubStep,
  },
  {
    id: "invite",
    component: InviteStep,
  },
  {
    id: "subscribe",
    component: SubscribeStep,
  },
];
