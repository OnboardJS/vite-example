import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("api/onboarding", "./routes/api.onboarding.ts"),
] satisfies RouteConfig;
