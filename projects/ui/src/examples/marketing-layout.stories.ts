import type { Meta, StoryObj } from '@storybook/angular';
import { HlmTypographyImports } from '../lib/typography';
import { HlmButtonImports } from '../lib/button';
import { HlmCardImports } from '../lib/card';
import { HlmBadgeImports } from '../lib/badge';
import { HlmSeparatorImports } from '../lib/separator';
import { HlmTabsImports } from '../lib/tabs';

const meta: Meta<unknown> = {
  title: 'Examples/Layouts/Marketing',
  parameters: {
    docs: {
      description: {
        component:
          'Marketing-style landing layout that uses hero, badges, cards, and tabs to demonstrate composition for a public page.',
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
  HlmBadgeImports,
  HlmSeparatorImports,
  HlmTabsImports,
];

export const Marketing: Story = {
  render: () => ({
    template: `
      <section class="space-y-16 bg-gradient-to-b from-background to-muted px-6 py-16">
        <!-- Hero -->
        <div class="mx-auto flex max-w-5xl flex-col items-center gap-8 text-center">
          <div class="inline-flex items-center gap-2 rounded-full bg-background/60 px-3 py-1 text-xs font-medium shadow-sm ring-1 ring-border">
            <span hlmBadge variant="outline">New</span>
            <span>Workspaces 2.0 just launched</span>
            <button hlmBtn variant="link" class="px-1">See what’s new</button>
          </div>
          <div class="space-y-4">
            <h1 hlmH1 class="max-w-3xl">Design dashboards that feel native to your product</h1>
            <p hlmLead class="max-w-2xl text-muted-foreground">
              Use composable primitives to build marketing pages, in-app dashboards, and settings screens without fighting your design system.
            </p>
          </div>
          <div class="flex flex-wrap items-center justify-center gap-3">
            <button hlmBtn size="lg">Start for free</button>
            <button hlmBtn variant="outline" size="lg">Book a demo</button>
          </div>
          <p hlmSmall class="text-muted-foreground">No credit card required · 14-day free trial</p>
        </div>

        <!-- Feature cards -->
        <div class="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
          <hlm-card>
            <hlm-card-header>
              <h2 hlmH3>Composable layouts</h2>
              <p hlmMuted>Build complex UI screens from small, reusable components.</p>
            </hlm-card-header>
            <div hlmCardContent>
              <p hlmP>Cards, tables, navigation, and form elements work together out of the box with consistent spacing and typography.</p>
            </div>
          </hlm-card>
          <hlm-card>
            <hlm-card-header>
              <h2 hlmH3>Design tokens</h2>
              <p hlmMuted>Keep your brand consistent across marketing and product.</p>
            </hlm-card-header>
            <div hlmCardContent>
              <p hlmP>Use the same primitives for hero sections, pricing tables, and in-app dashboards to reduce design drift.</p>
            </div>
          </hlm-card>
          <hlm-card>
            <hlm-card-header>
              <h2 hlmH3>Accessible by default</h2>
              <p hlmMuted>Ship experiences that work for everyone.</p>
            </hlm-card-header>
            <div hlmCardContent>
              <p hlmP>Components include focus states, color contrast, and keyboard navigation baked in.</p>
            </div>
          </hlm-card>
        </div>

        <hlm-separator class="mx-auto max-w-5xl"></hlm-separator>

        <!-- Use cases tabs -->
        <div class="mx-auto max-w-5xl space-y-6">
          <div class="flex flex-col items-center gap-3 text-center">
            <h2 hlmH2>Built for your team</h2>
            <p hlmMuted class="max-w-2xl">
              Whether you’re designing dashboards, admin panels, or onboarding flows, start from a layout example and customize from there.
            </p>
          </div>
          <hlm-tabs value="dashboards">
            <hlm-tab-list class="mb-6 flex justify-center gap-2">
              <button hlm-tab value="dashboards">Dashboards</button>
              <button hlm-tab value="settings">Settings</button>
              <button hlm-tab value="marketing">Marketing</button>
            </hlm-tab-list>
          </hlm-tabs>

          <div class="grid gap-6 md:grid-cols-[1.5fr,1fr]">
            <hlm-card>
              <hlm-card-header>
                <h3 hlmH3>Dashboard layout</h3>
                <p hlmMuted>Combine cards, tables, and filters for analytics views.</p>
              </hlm-card-header>
              <div hlmCardContent class="space-y-3">
                <p hlmP>Use cards for KPIs, tables for lists, and tabs for switching between metrics. Buttons and badges provide clear call-to-actions and statuses.</p>
                <p hlmSmall class="text-muted-foreground">
                  Start from the <code hlmCode>Dashboard</code> example layout story and adapt it to your data.
                </p>
              </div>
              <hlm-card-footer class="border-t flex justify-end gap-2">
                <button hlmBtn variant="outline" size="sm">View in Storybook</button>
                <button hlmBtn size="sm">Copy layout</button>
              </hlm-card-footer>
            </hlm-card>

            <div class="space-y-4">
              <hlm-card>
                <hlm-card-header>
                  <h3 hlmH4>Settings layout</h3>
                  <p hlmMuted>Forms, switches, and alerts for configuration screens.</p>
                </hlm-card-header>
              </hlm-card>
              <hlm-card>
                <hlm-card-header>
                  <h3 hlmH4>Auth layout</h3>
                  <p hlmMuted>Centered card with form and SSO buttons.</p>
                </hlm-card-header>
              </hlm-card>
              <hlm-card>
                <hlm-card-header>
                  <h3 hlmH4>Data table layout</h3>
                  <p hlmMuted>Toolbar, filters, and pagination around your data grid.</p>
                </hlm-card-header>
              </hlm-card>
            </div>
          </div>
        </div>
      </section>
    `,
    moduleMetadata: { imports: defaultImports },
  }),
};

