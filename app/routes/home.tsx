import { OnboardJSWrapper } from "@/components/onboardjs-wrapper";
import type { Route } from "./+types/home";
import { OnboardingUI } from "@/components/onboarding-ui";
import { StepNavigator } from "@/components/step-navigator";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "OnboardJS - React Router Example" },
    {
      name: "description",
      content: "An example of using OnboardJS with React Router",
    },
  ];
}

export default function Home() {
  return (
    <div className="bg-background flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <OnboardJSWrapper>
        <div className="min-h-[540px] py-12 overflow-x-hidden shrink-0 flex-[1_1_auto] flex flex-col items-center justify-center">
          <OnboardingUI />
        </div>
        <div className="h-12 shrink-0 flex items-center justify-center w-full">
          <StepNavigator />
        </div>
      </OnboardJSWrapper>
    </div>
  );
}
