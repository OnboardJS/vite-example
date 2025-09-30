import { OnboardJSWrapper } from "@/components/onboardjs-wrapper";
import type { Route } from "./+types/home";
import { OnboardingUI } from "@/components/onboarding-ui";

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
      <div className="w-full max-w-md">
        <OnboardJSWrapper>
          <OnboardingUI />
        </OnboardJSWrapper>
      </div>
    </div>
  );
}
