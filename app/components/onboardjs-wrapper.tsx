"use client";

import type { PropsWithChildren } from "react";
import { useFetcher } from "react-router";
import { OnboardingProvider } from "@onboardjs/react";
import { steps } from "@/lib/steps";
import type { DataPersistFn } from "@onboardjs/core";

export function OnboardJSWrapper({ children }: PropsWithChildren) {
  const fetcher = useFetcher();

  const handlePersist: DataPersistFn = async (context, currentStepId) => {
    const formData = new FormData();
    formData.append("action", "persist");
    formData.append("context", JSON.stringify(context));
    formData.append("currentStepId", String(currentStepId));
    fetcher.submit(formData, {
      method: "post",
      action: "/api/onboarding",
    });
  };

  const handleLoad = async () => {
    const formData = new FormData();
    formData.append("action", "load");
    fetcher.submit(formData, {
      method: "post",
      action: "/api/onboarding",
    });
    return fetcher.data?.data || {};
  };

  return (
    <OnboardingProvider
      steps={steps}
      customOnDataLoad={handleLoad}
      customOnDataPersist={handlePersist}
    >
      {children}
    </OnboardingProvider>
  );
}
