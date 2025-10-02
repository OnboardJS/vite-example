# OnboardJS Vite Example with ShadCN UI

A comprehensive example demonstrating the integration of OnboardJS with Vite and React Router for building interactive, multi-step onboarding experiences in React applications. This example is heavily inspired by [Linear](https://linear.app/)'s onboarding flow.

## Overview

This project showcases how to leverage OnboardJS, a powerful React library for managing complex onboarding flows, alongside modern web development tools like Vite for fast builds and React Router for client-side routing. It provides a complete, production-ready template for creating guided user experiences with multiple steps, form handling, and theme support.

## Tech Stack

- **Framework**: React 19 with TypeScript
- **Build Tool**: Vite
- **Routing**: React Router v7
- **Onboarding**: OnboardJS (`@onboardjs/core`, `@onboardjs/react`)
- **Styling**: TailwindCSS v4
- **UI Components**: Radix UI primitives
- **Forms**: React Hook Form + Zod
- **Icons**: Lucide React
- **Theming**: next-themes

## Onboarding Steps

The example includes a complete onboarding flow with the following steps:

1. **Workspace Setup**: Initial configuration and preferences
2. **Welcome**: Introduction to the application
3. **Style Choice**: Theme and appearance customization
4. **Command Interface**: Interactive command-line style interactions
5. **GitHub Integration**: Repository and collaboration setup
6. **Team Invites**: User invitation and team building
7. **Subscription**: Final setup and subscription options

## Getting Started

### Prerequisites

- Node.js 22+ and pnpm (recommended) or npm

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/OnboardJS/vite-example.git
cd vite-example
pnpm install
```

### Development

Start the development server with hot reload:

```bash
pnpm dev
```

The application will be available at `http://localhost:5173`.

### Building for Production

Create an optimized production build:

```bash
pnpm build
```

### Preview Production Build

Serve the production build locally:

```bash
pnpm start
```

## Project Structure

```
├── app/
│   ├── components/
│   │   ├── steps/          # Individual onboarding step components
│   │   ├── ui/             # ShadCN UI components
│   │   ├── onboarding-ui.tsx  # Main onboarding UI
│   │   └── onboarding-wrapper.tsx  # Main onboarding wrapper
│   ├── hooks/              # Custom React hooks
│   ├── lib/
│   │   ├── steps.ts        # Step configuration
│   │   └── utils.ts        # Utility functions
│   └── routes/             # React Router route components
└── public/                 # Static assets
```

## Usage

### Configuration Caveats

Ensure to include the following snippet in your `vite.config.ts`:

```ts
export default defineConfig({
  plugins: [...],
  ssr: {
    noExternal: ["@onboardjs/react", "@onboardjs/core"],
  },
});
```

### Integrating OnboardJS

1. **Configure Steps**: Define your onboarding steps in `app/lib/steps.ts`
2. **Create Step Components**: Build individual step components in `app/components/steps/`
3. **Wrap with OnboardingUI**: Use the `OnboardingUI` component in your routes
4. **Manage State**: OnboardJS handles step navigation and state automatically

### Customization

- **Themes**: Modify themes in `app/components/theme-provider.tsx`
- **Styling**: Customize with TailwindCSS classes
- **Steps**: Add, remove, or modify steps in the steps configuration
- **Validation**: Update Zod schemas for form validation

### Persistence

Implement remote persistence of onboarding state by integrating with your backend and database.
Use the `customOnDataLoad` and `customOnDataPersist` props of the `OnboardingProvider` to handle loading and saving state.

See: [OnboardingWrapper.tsx](app/components/onboardjs-wrapper.tsx)

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Make your changes and add tests
4. Commit your changes: `git commit -am 'Add new feature'`
5. Push to the branch: `git push origin feature/your-feature`
6. Submit a pull request

## License

This project is part of the OnboardJS examples and follows the same licensing terms as the main OnboardJS library.

## Related

- [OnboardJS Documentation](https://onboardjs.com/)
- [React Router Documentation](https://reactrouter.com/)
- [Vite Documentation](https://vitejs.dev/)

---

Built with ❤️ using OnboardJS, Vite, and React Router.
