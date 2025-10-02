import { OnboardJSWrapper } from "@/components/onboardjs-wrapper";
import type { Route } from "./+types/home";
import { OnboardingUI } from "@/components/onboarding-ui";
import { StepNavigator } from "@/components/step-navigator";
import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import { OnboardJSLogo } from "@/components/svg/onboardjs-logo";

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
    <div className="bg-background flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10 relative">
      <div className="absolute top-6 right-6 md:top-10 md:right-10 text-muted-foreground">
        <Link
          to="https://onboardjs.com?ref=vite-example"
          target="_blank"
          className="animate-content"
        >
          <Button variant="ghost" size="sm" className="gap-2 py-5">
            <OnboardJSLogo className="size-8 inline-block" />
          </Button>
        </Link>
        <Link
          to="https://github.com/OnboardJS/vite-example"
          target="_blank"
          className="animate-content"
        >
          <Button variant="ghost" size="sm" className="gap-2 py-5">
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              version="1.1"
              data-view-component="true"
              fill="currentColor"
              className="size-8 inline-block"
            >
              <path d="M12 1C5.923 1 1 5.923 1 12c0 4.867 3.149 8.979 7.521 10.436.55.096.756-.233.756-.522 0-.262-.013-1.128-.013-2.049-2.764.509-3.479-.674-3.699-1.292-.124-.317-.66-1.293-1.127-1.554-.385-.207-.936-.715-.014-.729.866-.014 1.485.797 1.691 1.128.99 1.663 2.571 1.196 3.204.907.096-.715.385-1.196.701-1.471-2.448-.275-5.005-1.224-5.005-5.432 0-1.196.426-2.186 1.128-2.956-.111-.275-.496-1.402.11-2.915 0 0 .921-.288 3.024 1.128a10.193 10.193 0 0 1 2.75-.371c.936 0 1.871.123 2.75.371 2.104-1.43 3.025-1.128 3.025-1.128.605 1.513.221 2.64.111 2.915.701.77 1.127 1.747 1.127 2.956 0 4.222-2.571 5.157-5.019 5.432.399.344.743 1.004.743 2.035 0 1.471-.014 2.654-.014 3.025 0 .289.206.632.756.522C19.851 20.979 23 16.854 23 12c0-6.077-4.922-11-11-11Z"></path>
            </svg>
          </Button>
        </Link>
      </div>
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
