import type { ActionFunctionArgs } from "react-router";
import { persistData, loadData } from "@/.server/onboarding/actions";

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const action = formData.get("action");

  if (action === "persist") {
    const context = formData.get("context");
    console.log(context);

    await persistData(JSON.parse(context as string));
    return { success: true };
  }

  if (action === "load") {
    const data = await loadData();
    return { data };
  }

  return { error: "Invalid action" };
}
