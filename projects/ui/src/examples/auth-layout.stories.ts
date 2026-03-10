import type { Meta, StoryObj } from '@storybook/angular';
import { HlmTypographyImports } from '../lib/typography';
import { HlmButtonImports } from '../lib/button';
import { HlmCardImports } from '../lib/card';
import { HlmInputImports } from '../lib/input';
import { HlmSeparatorImports } from '../lib/separator';
import { HlmAlertImports } from '../lib/alert';
import { HlmCheckboxImports } from '../lib/checkbox';

const meta: Meta<unknown> = {
  title: 'Examples/Layouts/Auth',
  parameters: {
    docs: {
      description: {
        component:
          'Authentication layout example with a centered card, form fields, alerts, and secondary actions demonstrating composition of multiple primitives.',
      },
    },
  },
};

export default meta;

type Story = StoryObj<unknown>;

const defaultImports = [
  HlmTypographyImports,
  HlmButtonImports,
  HlmCardImports,
  HlmInputImports,
  HlmSeparatorImports,
  HlmAlertImports,
  HlmCheckboxImports,
];

export const Auth: Story = {
  render: () => ({
    template: `
      <section class="flex min-h-[600px] items-center justify-center bg-muted px-4 py-10">
        <div class="mx-auto grid w-full max-w-4xl gap-10 md:grid-cols-[1.2fr,1fr]">
          <!-- Marketing column -->
          <div class="hidden flex-col justify-center space-y-6 text-left md:flex">
            <div class="space-y-3">
              <h1 hlmH1>Sign in to your workspace</h1>
              <p hlmMuted>Access dashboards, collaborate with your team, and manage projects in one place.</p>
            </div>
            <ul hlmUl>
              <li>Centralize analytics and reporting.</li>
              <li>Share insights securely with your team.</li>
              <li>Stay on top of updates with notifications.</li>
            </ul>
          </div>

          <!-- Auth card -->
          <hlm-card class="mx-auto w-full max-w-md">
            <hlm-card-header>
              <h2 hlmH3>Welcome back</h2>
              <p hlmMuted>Use your email and password or continue with SSO.</p>
            </hlm-card-header>
            <div hlmCardContent class="space-y-4">
              <hlm-alert variant="default">
                <p hlmSmall><span class="font-medium">Tip:</span> Use the same email you use for workspace invites.</p>
              </hlm-alert>

              <form class="space-y-4" (submit)="$event.preventDefault()">
                <div class="space-y-1.5">
                  <label hlmLabel for="email">Email</label>
                  <input hlmInput id="email" type="email" autocomplete="email" placeholder="you@example.com" required />
                </div>
                <div class="space-y-1.5">
                  <div class="flex items-center justify-between gap-2">
                    <label hlmLabel for="password">Password</label>
                    <button hlmBtn variant="link" class="px-0 text-xs">Forgot password?</button>
                  </div>
                  <input hlmInput id="password" type="password" autocomplete="current-password" required />
                </div>
                <label class="flex items-center justify-between gap-2">
                  <div class="flex items-center gap-2">
                    <hlm-checkbox [checked]="true" aria-label="Remember this device" />
                    <span hlmSmall>Remember this device</span>
                  </div>
                </label>
                <button hlmBtn type="submit" class="w-full">Continue</button>
              </form>

              <div class="relative py-2">
                <hlm-separator></hlm-separator>
                <span hlmSmall class="absolute inset-x-0 -top-3 mx-auto w-max bg-background px-2 text-muted-foreground">
                  or
                </span>
              </div>

              <div class="flex flex-col gap-2">
                <button hlmBtn variant="outline" class="w-full">Continue with Google</button>
                <button hlmBtn variant="outline" class="w-full">Continue with GitHub</button>
              </div>
            </div>
            <hlm-card-footer class="border-t text-center">
              <p hlmSmall class="text-muted-foreground">
                New here?
                <button hlmBtn variant="link" class="px-1">Create an account</button>
              </p>
            </hlm-card-footer>
          </hlm-card>
        </div>
      </section>
    `,
    moduleMetadata: { imports: defaultImports },
  }),
};

