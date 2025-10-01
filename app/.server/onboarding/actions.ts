import { inMemoryDB } from "@/lib/in-memory-db";

export const persistData = (context: any) => {
  console.log("persist_data", context);
  inMemoryDB["onboardingContext"] = context;
  console.log("persisted_data", inMemoryDB);
};

export const loadData = () => {
  console.log("load_data", inMemoryDB);

  return inMemoryDB["onboardingContext"] || {};
};
