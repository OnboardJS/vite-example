# OnboardJS Vite Example with ShadCN UI

A production-ready example demonstrating OnboardJS integration with Vite, React Router, and ShadCN UI for building interactive, multi-step onboarding experiences. This project showcases a complete onboarding flow inspired by [Linear](https://linear.app/)'s user experience.

## Tech Stack

- **Framework**: React 19 with TypeScript
- **Build Tool**: Vite
- **Routing**: React Router v7
- **Onboarding**: OnboardJS (`@onboardjs/core`, `@onboardjs/react`)
- **Styling**: TailwindCSS v4
- **UI Components**: Radix UI primitives with ShadCN
- **Forms**: React Hook Form + Zod validation
- **Icons**: Lucide React
- **Theming**: next-themes

## Getting Started

### Prerequisites

- Node.js 22+ and pnpm (recommended) or npm/yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/OnboardJS/vite-example.git
cd vite-example

# Install dependencies
pnpm install
```

### Development

```bash
# Start development server with hot reload
pnpm dev
```

The application will be available at `http://localhost:5173`.

### Production Build

```bash
# Create optimized production build
pnpm build

# Preview production build locally
pnpm start
```

## Integration Guide

### 1. Vite Configuration

Ensure your `vite.config.ts` includes the OnboardJS packages in the SSR noExternal list:

```ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  ssr: {
    noExternal: ["@onboardjs/react", "@onboardjs/core"],
  },
});
```

### 2. Setup OnboardJS Provider

Wrap your application with the `OnboardingProvider` in your root layout. See [app/components/onboardjs-wrapper.tsx](app/components/onboardjs-wrapper.tsx):

```tsx
import { OnboardingProvider } from "@onboardjs/react";
import { OnboardingUI } from "./components/onboarding-ui";
import steps from "./lib/steps";

export default function Root() {
  return (
    <OnboardingProvider
      steps={steps}
      customOnDataLoad={loadOnboardingState}
      customOnDataPersist={saveOnboardingState}
    >
      <OnboardingUI>{children}</OnboardingUI>
    </OnboardingProvider>
  );
}
```

### 3. Define Your Steps

Create your onboarding steps in `app/lib/steps.ts`. Each step should reference specific elements using their `id`:

```ts
const steps = [
  {
    id: "workspace-setup",
    component: WorkspaceStep,
    nextStep: "welcome",
  },
  {
    id: "welcome",
    component: WelcomeStep,
    nextStep: "style-choice",
  },
  // ... more steps
];

export default steps;
```

### 4. Create Step Components

Build individual step components in `app/components/steps/`. Each component receives the step data and navigation handlers:

```tsx
// app/components/steps/welcome-step.tsx
export function WelcomeStep() {
  const { next } = useOnboarding();
  return (
    <div id="welcome-step">
      <h2>Welcome to OnboardJS</h2>
      <p>This is the welcome step of your onboarding flow.</p>
      <button onClick={() => next()}>Next</button>
    </div>
  );
}
```

## Onboarding Steps

This example includes a complete 7-step onboarding flow:

1. **Workspace Setup** - Initial configuration and preferences
2. **Welcome** - Introduction to the application
3. **Style Choice** - Theme and appearance customization
4. **Command Interface** - Interactive command-line style interactions
5. **GitHub Integration** - Repository and collaboration setup
6. **Team Invites** - User invitation and team building
7. **Subscription** - Final setup and subscription options

## Customization

### Themes

Use TailwindCSS 4 classes to style all components consistently with your app.

### Form Validation

Update Zod schemas for form validation in your step components:

```tsx
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  email: z.string().email("Invalid email"),
  workspace: z.string().min(3, "Workspace name too short"),
});

export function WorkspaceStep() {
  const form = useForm({ resolver: zodResolver(schema) });
  // ... form implementation
}
```

## State Persistence

Implement remote persistence of onboarding state by connecting your backend and database. Use the `customOnDataLoad` and `customOnDataPersist` props:

```tsx
const loadOnboardingState = async () => {
  const response = await fetch("/api/onboarding/state");
  return response.json();
};

const saveOnboardingState = async (state: OnboardingState) => {
  await fetch("/api/onboarding/state", {
    method: "POST",
    body: JSON.stringify(state),
  });
};

<OnboardingProvider
  steps={steps}
  customOnDataLoad={loadOnboardingState}
  customOnDataPersist={saveOnboardingState}
>
  {/* ... */}
</OnboardingProvider>;
```

See [app/components/onboardjs-wrapper.tsx](app/components/onboardjs-wrapper.tsx) for implementation details.

## Analytics

OnboardJS provides built-in analytics to track user onboarding progress and engagement. Enable analytics by signing up for a free account on [onboardjs.com](https://onboardjs.com).

### Setup

1. **Create an Account**: Visit [onboardjs.com](https://onboardjs.com) and sign up for a free account
2. **Get Your API Key**: Copy your public API key from the dashboard
3. **Add Environment Variables**: Create a `.env.local` file (or update `.env.example`):

```bash
VITE_ONBOARDJS_KEY=your-api-key-here
VITE_ONBOARDJS_HOST=https://eu.onboardjs.com
```

4. **Configure Provider**: The `OnboardingProvider` is already configured in [app/components/onboardjs-wrapper.tsx](app/components/onboardjs-wrapper.tsx) to use these credentials:

```tsx
<OnboardingProvider
  steps={steps}
  customOnDataLoad={handleLoad}
  customOnDataPersist={handlePersist}
  publicKey={import.meta.env.VITE_ONBOARDJS_KEY}
  apiHost={import.meta.env.VITE_ONBOARDJS_HOST}
>
  {children}
</OnboardingProvider>
```

### What You Get

With OnboardJS analytics, you can track:

- **Step Completion Rates**: See how many users complete each step
- **Drop-off Points**: Identify where users abandon the onboarding flow
- **Time Spent**: Measure average time spent on each step
- **User Progress**: Monitor when users start, progress, and complete onboarding
- **Custom Events**: Track specific user interactions and behaviors

The analytics dashboard provides insights to help you optimize your onboarding experience and improve user activation rates.

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Make your changes and add tests
4. Commit your changes: `git commit -am 'Add new feature'`
5. Push to the branch: `git push origin feature/your-feature`
6. Submit a pull request

## License

MIT License. See [LICENSE.md](LICENSE.md) file for details.

## Resources

- [OnboardJS Documentation](https://onboardjs.com/)
- [React Router Documentation](https://reactrouter.com/)
- [Vite Documentation](https://vitejs.dev/)
- [ShadCN UI Components](https://ui.shadcn.com/)
- [TailwindCSS Documentation](https://tailwindcss.com/)

---

Built with ❤️ using OnboardJS, Vite, and React Router.
