# PRMN Angular UI Library

Reusable, themeable UI primitives for Angular, built on top of `@spartan-ng/brain` and Tailwind CSS.

> This README explains how to consume the `ui` library **from an external Angular application**, not how to develop the library itself.

---

## Package name

The library is published from the `projects/ui` workspace library as the scoped package `@billy_mcdowell/prmn-angular-v3`:

```bash
npm install @billy_mcdowell/prmn-angular-v3
```

All import examples below assume this package name.

---

## Prerequisites

- **Angular**: `^20.3.0` (standalone components recommended). Your app should already be an Angular CLI app with `@angular/core` / `@angular/common` installed.
- **Node / package manager**: Node 18+ with npm, pnpm, or yarn.
- **CSS tooling**:
  - Tailwind CSS 4 + PostCSS. The `tailwindcss` and `@tailwindcss/postcss` packages are installed **transitively** with this library; you only need to wire them into your build (see below).
- **UI dependencies used by this library**:
  - `@spartan-ng/brain`
  - `@ng-icons/core`, `@ng-icons/lucide` (for icons)
  - `embla-carousel-angular` (for carousel components)
  - `ngx-sonner` (for toast notifications)

These UI and styling dependencies are regular **dependencies** of `@billy_mcdowell/prmn-angular-v3`, so you do **not** need to install them manually in your app. They will be pulled in automatically when you install this package.

---

## 1. Install the library

From your Angular application:

```bash
npm install @billy_mcdowell/prmn-angular-v3
```

This single command installs:

- The UI library itself.
- All required UI helper libraries (Spartan, icons, carousel, toasts).
- Tailwind CSS 4 and the `@tailwindcss/postcss` plugin.

If you are using pnpm or yarn, use the equivalent command.

---

## 2. Configure Tailwind CSS 4 + PostCSS

Create (or update) `postcss.config.json` in the root of your Angular app:

```json
{
  "plugins": {
    "@tailwindcss/postcss": {}
  }
}
```

Tailwind 4 uses this PostCSS plugin to process the special `@import "tailwindcss";` directive that the library’s styles rely on.  
Because `@tailwindcss/postcss` and `tailwindcss` are shipped as dependencies of this library, you do **not** need to install them separately—just reference them in your PostCSS config as shown above.

---

## 3. Import the styles in your global stylesheet

In your app’s global stylesheet (for example `src/styles.css`), add the following:

```css
@import "tailwindcss";
@import "@spartan-ng/brain/hlm-tailwind-preset.css";

/* Theme tokens & base styles matching this UI library.
   You can start with these values and tweak colors/typography as needed. */
:root {
  --background: #ffffff;
  --foreground: #1d2327;
  --card: #ffffff;
  --card-foreground: #1d2327;
  --popover: #ffffff;
  --popover-foreground: #1d2327;
  --primary: #21016b;
  --primary-foreground: #ffffff;
  --secondary: #4e5a62;
  --secondary-foreground: #ffffff;
  --muted: #f3f5f6;
  --muted-foreground: #5f6c75;
  --accent: #f78e1e;
  --accent-foreground: #121516;
  --destructive: #cb2420;
  --destructive-foreground: #ffffff;
  --border: #b8c0c6;
  --input: #b8c0c6;
  --ring: #5f6c75;
  --sidebar: #f3f5f6;
  --sidebar-foreground: #1d2327;
  --sidebar-primary: #21016b;
  --sidebar-primary-foreground: #ffffff;
  --sidebar-accent: #f78e1e;
  --sidebar-accent-foreground: #121516;
  --sidebar-border: #b8c0c6;
  --sidebar-ring: #5f6c75;
  --font-sans: Libre Franklin, ui-sans-serif, sans-serif, system-ui;
  --font-serif: Merriweather, ui-serif, serif;
  --font-mono: Open Sans, ui-sans-serif, sans-serif, system-ui;
  --radius: 0.125rem;
}

.dark {
  --background: #1d2327;
  --foreground: #ffffff;
  --card: #1d2327;
  --card-foreground: #ffffff;
  --popover: #1d2327;
  --popover-foreground: #ffffff;
  --primary: #21016b;
  --primary-foreground: #ffffff;
  --secondary: #4e5a62;
  --secondary-foreground: #ffffff;
  --muted: #424d55;
  --muted-foreground: #5f6c75;
  --accent: #f78e1e;
  --accent-foreground: #121516;
  --destructive: #cb2420;
  --destructive-foreground: #ffffff;
  --border: #5f6c75;
  --input: #424d55;
  --ring: #5f6c75;
  --sidebar: #1d2327;
  --sidebar-foreground: #ffffff;
  --sidebar-primary: #21016b;
  --sidebar-primary-foreground: #ffffff;
  --sidebar-accent: #f78e1e;
  --sidebar-accent-foreground: #121516;
  --sidebar-border: #5f6c75;
  --sidebar-ring: #5f6c75;
}

@layer base {
  * {
    @apply border-border outline-ring/50;
  }
  body {
    @apply bg-background text-foreground;
  }
}
```

Notes:

- The color/spacing/font variables above are the same design tokens used by this library (you can customize them as needed).
- Ensure your `index.html` (or root layout) toggles a `.dark` class on the `<html>` or `<body>` element if you want dark mode.

---

## 4. Import and use components

All public components/directives are exported from the library’s public API (`src/public-api.ts`), which is what consumers import from the npm package.

### Example: Button

```ts
// app/example/example.component.ts
import { Component } from '@angular/core';
import { HlmButton } from '@billy_mcdowell/prmn-angular-v3';

@Component({
  standalone: true,
  selector: 'app-example',
  imports: [HlmButton],
  template: `
    <button hlmBtn variant="default">
      Primary button
    </button>
  `,
})
export class ExampleComponent {}
```

You can also use the convenience import group where available (for example, `HlmButtonImports`):

```ts
import { HlmButtonImports } from '@billy_mcdowell/prmn-angular-v3';

@Component({
  standalone: true,
  selector: 'app-example',
  imports: [...HlmButtonImports],
  template: `<button hlmBtn>Click me</button>`,
})
export class ExampleComponent {}
```

### Other components

The library exposes many primitives, for example:

- Accordion, Alert, Dialog, Dropdown Menu
- Button, Badge, Avatar, Breadcrumb
- Form elements (`Input`, `Textarea`, `Checkbox`, `RadioGroup`, `Switch`, `Select`, `NativeSelect`, etc.)
- Layout and navigation (`Sidebar`, `NavigationMenu`, `Tabs`, `Pagination`, `Collapsible`, `ScrollArea`, `Resizable`)
- Feedback components (`AlertDialog`, `Popover`, `Tooltip`, `Sonner` toasts, `Skeleton`, `Spinner`, `Progress`)
- Typography utilities (`hlmH1`–`hlmH4`, `hlmP`, `hlmLead`, etc.)

Each feature is exported from the root package (for example `import { HlmInput } from '@billy_mcdowell/prmn-angular-v3';`).  
When in doubt, check the library’s `public-api.ts` for the full list of exports.

---

## 5. Running your app

After installation and setup:

```bash
npm run build      # build your Angular app
npm start          # or ng serve
```

You should now see the components rendered with the design system styles from this library.

---

## Local development / Storybook (optional)

If you are working in this monorepo:

- **Build the library**:

  ```bash
  npm run build:ui
  ```

- **Run Storybook for the UI library**:

  ```bash
  npm run storybook
  ```

These commands are for contributors to this repo; external consumers only need the steps in sections 1–4.

# PRMN Angular UI Library

Reusable, themeable UI primitives for Angular, built on top of `@spartan-ng/brain` and Tailwind CSS.

> This README explains how to consume the `ui` library **from an external Angular application**, not how to develop the library itself.

---

## Package name

The library is published from the `projects/ui` workspace library as the scoped package `@billy_mcdowell/prmn-angular-v3`:

```bash
npm install @billy_mcdowell/prmn-angular-v3
```

All import examples below assume this package name.

---

## Prerequisites

- **Angular**: `^20.3.0` (standalone components recommended)
- **Node / package manager**: Node 18+ with npm, pnpm, or yarn
- **CSS tooling**:
  - `tailwindcss@^4`
  - `@tailwindcss/postcss`
- **UI dependencies used by this library** (install them in your app):
  - `@spartan-ng/brain`
  - `@ng-icons/core`, `@ng-icons/lucide` (for icons)
  - `embla-carousel-angular` (for carousel components)
  - `ngx-sonner` (for toast notifications)

You may not need all of these for every project, but they are used across components exported by this library.

---

## 1. Install the library and peer dependencies

From your Angular application:

```bash
npm install @billy_mcdowell/prmn-angular-v3 @spartan-ng/brain @ng-icons/core @ng-icons/lucide embla-carousel-angular ngx-sonner tailwindcss @tailwindcss/postcss
```

If you are using pnpm or yarn, use the equivalent command.

---

## 2. Configure Tailwind CSS 4 + PostCSS

Create (or update) `postcss.config.json` in the root of your Angular app:

```json
{
  "plugins": {
    "@tailwindcss/postcss": {}
  }
}
```

Tailwind 4 uses this PostCSS plugin to process the special `@import "tailwindcss";` directive that the library’s styles rely on.

---

## 3. Import the styles in your global stylesheet

In your app’s global stylesheet (for example `src/styles.css`), add the following:

```css
@import "tailwindcss";
@import "@spartan-ng/brain/hlm-tailwind-preset.css";

/* Theme tokens & base styles matching this UI library.
   You can start with these values and tweak colors/typography as needed. */
:root {
  --background: #ffffff;
  --foreground: #1d2327;
  --card: #ffffff;
  --card-foreground: #1d2327;
  --popover: #ffffff;
  --popover-foreground: #1d2327;
  --primary: #21016b;
  --primary-foreground: #ffffff;
  --secondary: #4e5a62;
  --secondary-foreground: #ffffff;
  --muted: #f3f5f6;
  --muted-foreground: #5f6c75;
  --accent: #f78e1e;
  --accent-foreground: #121516;
  --destructive: #cb2420;
  --destructive-foreground: #ffffff;
  --border: #b8c0c6;
  --input: #b8c0c6;
  --ring: #5f6c75;
  --sidebar: #f3f5f6;
  --sidebar-foreground: #1d2327;
  --sidebar-primary: #21016b;
  --sidebar-primary-foreground: #ffffff;
  --sidebar-accent: #f78e1e;
  --sidebar-accent-foreground: #121516;
  --sidebar-border: #b8c0c6;
  --sidebar-ring: #5f6c75;
  --font-sans: Libre Franklin, ui-sans-serif, sans-serif, system-ui;
  --font-serif: Merriweather, ui-serif, serif;
  --font-mono: Open Sans, ui-sans-serif, sans-serif, system-ui;
  --radius: 0.125rem;
}

.dark {
  --background: #1d2327;
  --foreground: #ffffff;
  --card: #1d2327;
  --card-foreground: #ffffff;
  --popover: #1d2327;
  --popover-foreground: #ffffff;
  --primary: #21016b;
  --primary-foreground: #ffffff;
  --secondary: #4e5a62;
  --secondary-foreground: #ffffff;
  --muted: #424d55;
  --muted-foreground: #5f6c75;
  --accent: #f78e1e;
  --accent-foreground: #121516;
  --destructive: #cb2420;
  --destructive-foreground: #ffffff;
  --border: #5f6c75;
  --input: #424d55;
  --ring: #5f6c75;
  --sidebar: #1d2327;
  --sidebar-foreground: #ffffff;
  --sidebar-primary: #21016b;
  --sidebar-primary-foreground: #ffffff;
  --sidebar-accent: #f78e1e;
  --sidebar-accent-foreground: #121516;
  --sidebar-border: #5f6c75;
  --sidebar-ring: #5f6c75;
}

@layer base {
  * {
    @apply border-border outline-ring/50;
  }
  body {
    @apply bg-background text-foreground;
  }
}
```

Notes:

- The color/spacing/font variables above are the same design tokens used by this library (you can customize them as needed).
- Ensure your `index.html` (or root layout) toggles a `.dark` class on the `<html>` or `<body>` element if you want dark mode.

---

## 4. Import and use components

All public components/directives are exported from the library’s public API (`src/public-api.ts`), which is what consumers import from the npm package.

### Example: Button

```ts
// app/example/example.component.ts
import { Component } from '@angular/core';
import { HlmButton } from '@billy_mcdowell/prmn-angular-v3';

@Component({
  standalone: true,
  selector: 'app-example',
  imports: [HlmButton],
  template: `
    <button hlmBtn variant="default">
      Primary button
    </button>
  `,
})
export class ExampleComponent {}
```

You can also use the convenience import group where available (for example, `HlmButtonImports`):

```ts
import { HlmButtonImports } from '@billy_mcdowell/prmn-angular-v3';

@Component({
  standalone: true,
  selector: 'app-example',
  imports: [...HlmButtonImports],
  template: `<button hlmBtn>Click me</button>`,
})
export class ExampleComponent {}
```

### Other components

The library exposes many primitives, for example:

- Accordion, Alert, Dialog, Dropdown Menu
- Button, Badge, Avatar, Breadcrumb
- Form elements (`Input`, `Textarea`, `Checkbox`, `RadioGroup`, `Switch`, `Select`, `NativeSelect`, etc.)
- Layout and navigation (`Sidebar`, `NavigationMenu`, `Tabs`, `Pagination`, `Collapsible`, `ScrollArea`, `Resizable`)
- Feedback components (`AlertDialog`, `Popover`, `Tooltip`, `Sonner` toasts, `Skeleton`, `Spinner`, `Progress`)
- Typography utilities (`hlmH1`–`hlmH4`, `hlmP`, `hlmLead`, etc.)

Each feature is exported from the root package (for example `import { HlmInput } from '@billy_mcdowell/prmn-angular-v3';`).  
When in doubt, check the library’s `public-api.ts` for the full list of exports.

---

## 5. Running your app

After installation and setup:

```bash
npm run build      # build your Angular app
npm start          # or ng serve
```

You should now see the components rendered with the design system styles from this library.

---

## Local development / Storybook (optional)

If you are working in this monorepo:

- **Build the library**:

  ```bash
  npm run build:ui
  ```

- **Run Storybook for the UI library**:

  ```bash
  npm run storybook
  ```

These commands are for contributors to this repo; external consumers only need the steps in sections 1–4.

