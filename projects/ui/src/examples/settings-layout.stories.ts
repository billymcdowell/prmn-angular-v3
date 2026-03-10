import type { Meta, StoryObj } from '@storybook/angular';
import { HlmTypographyImports } from '../lib/typography';
import { HlmButtonImports } from '../lib/button';
import { HlmCardImports } from '../lib/card';
import { HlmInputImports } from '../lib/input';
import { HlmTextareaImports } from '../lib/textarea';
import { HlmSwitchImports } from '../lib/switch';
import { HlmSeparatorImports } from '../lib/separator';
import { HlmTabsImports } from '../lib/tabs';
import { HlmBadgeImports } from '../lib/badge';
import { HlmAlertImports } from '../lib/alert';
import { HlmCheckboxImports } from '../lib/checkbox';

const meta: Meta<unknown> = {
  title: 'Examples/Layouts/Settings',
  parameters: {
    docs: {
      description: {
        component:
          'Account settings layout combining forms, switches, checkboxes, cards, alerts, and tabs to showcase a realistic preferences page.',
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
  HlmTextareaImports,
  HlmSwitchImports,
  HlmSeparatorImports,
  HlmTabsImports,
  HlmBadgeImports,
  HlmAlertImports,
  HlmCheckboxImports,
];

export const Settings: Story = {
  render: () => ({
    template: `
      <section class="flex flex-col gap-6 p-6 max-w-5xl">
        <header class="space-y-2">
          <div class="flex items-center gap-3">
            <h1 hlmH2>Account settings</h1>
            <span hlmBadge variant="secondary">Team</span>
          </div>
          <p hlmMuted>Manage your profile, notifications, and workspace preferences.</p>
        </header>

        <hlm-alert variant="default">
          <p hlmP class="font-medium">You are on the Pro plan.</p>
          <p hlmSmall>Billing renews on April 24, 2026. <button hlmBtn variant="link" class="px-0">Manage billing</button></p>
        </hlm-alert>

        <hlm-tabs value="profile">
          <hlm-tab-list class="mb-4">
            <button hlm-tab value="profile">Profile</button>
            <button hlm-tab value="security">Security</button>
            <button hlm-tab value="notifications">Notifications</button>
          </hlm-tab-list>
        </hlm-tabs>

        <div class="grid gap-6 lg:grid-cols-[2fr,1fr]">
          <!-- Left column -->
          <div class="space-y-6">
            <hlm-card>
              <hlm-card-header>
                <h2 hlmH3>Profile</h2>
                <p hlmMuted>Basic information about you and your workspace.</p>
              </hlm-card-header>
              <div hlmCardContent class="space-y-4">
                <div class="grid gap-4 md:grid-cols-2">
                  <div class="space-y-1.5">
                    <label hlmLabel for="name">Full name</label>
                    <input hlmInput id="name" placeholder="Jane Doe" />
                  </div>
                  <div class="space-y-1.5">
                    <label hlmLabel for="role">Role</label>
                    <input hlmInput id="role" placeholder="Product manager" />
                  </div>
                </div>
                <div class="space-y-1.5">
                  <label hlmLabel for="email">Email</label>
                  <input hlmInput id="email" type="email" placeholder="you@example.com" />
                  <p hlmSmall hlmMuted>Used for notifications and account recovery.</p>
                </div>
                <div class="space-y-1.5">
                  <label hlmLabel for="bio">Bio</label>
                  <textarea hlmTextarea id="bio" rows="3" placeholder="Tell your team a little about you."></textarea>
                </div>
              </div>
              <hlm-card-footer class="border-t flex justify-end gap-2">
                <button hlmBtn variant="outline" size="sm">Discard</button>
                <button hlmBtn size="sm">Save changes</button>
              </hlm-card-footer>
            </hlm-card>

            <hlm-card>
              <hlm-card-header>
                <h2 hlmH3>Security</h2>
                <p hlmMuted>Control sign-in methods and session settings.</p>
              </hlm-card-header>
              <div hlmCardContent class="space-y-4">
                <div class="flex items-center justify-between gap-4">
                  <div class="space-y-0.5">
                    <p hlmP>Password</p>
                    <p hlmSmall hlmMuted>Last changed 3 months ago.</p>
                  </div>
                  <button hlmBtn variant="outline" size="sm">Change</button>
                </div>
                <hlm-separator></hlm-separator>
                <div class="flex items-center justify-between gap-4">
                  <div class="space-y-0.5">
                    <p hlmP>Two-factor authentication</p>
                    <p hlmSmall hlmMuted>Add an extra layer of security to your account.</p>
                  </div>
                  <label class="inline-flex items-center gap-2">
                    <span hlmMuted>Off</span>
                    <button hlmSwitch aria-label="Toggle 2FA"></button>
                  </label>
                </div>
                <div class="flex items-center justify-between gap-4">
                  <div class="space-y-0.5">
                    <p hlmP>Session timeout</p>
                    <p hlmSmall hlmMuted>Automatically sign you out after inactivity.</p>
                  </div>
                  <button hlmSwitch aria-label="Toggle session timeout" [checked]="true"></button>
                </div>
              </div>
            </hlm-card>
          </div>

          <!-- Right column -->
          <div class="space-y-6">
            <hlm-card>
              <hlm-card-header>
                <h2 hlmH3>Email notifications</h2>
                <p hlmMuted>Choose when we email you.</p>
              </hlm-card-header>
              <div hlmCardContent class="space-y-3">
                <label class="flex items-start gap-3">
                  <hlm-checkbox [checked]="true" aria-label="Security alerts" />
                  <div class="space-y-0.5">
                    <p hlmP>Security alerts</p>
                    <p hlmSmall hlmMuted>Important notifications about your account security.</p>
                  </div>
                </label>
                <label class="flex items-start gap-3">
                  <hlm-checkbox [checked]="true" aria-label="Product updates" />
                  <div class="space-y-0.5">
                    <p hlmP>Product updates</p>
                    <p hlmSmall hlmMuted>Major changes and new features.</p>
                  </div>
                </label>
                <label class="flex items-start gap-3">
                  <hlm-checkbox aria-label="Tips and best practices" />
                  <div class="space-y-0.5">
                    <p hlmP>Tips &amp; best practices</p>
                    <p hlmSmall hlmMuted>Occasional emails to help you get more value.</p>
                  </div>
                </label>
              </div>
              <hlm-card-footer class="border-t flex justify-end">
                <button hlmBtn variant="outline" size="sm">Save preferences</button>
              </hlm-card-footer>
            </hlm-card>

            <hlm-card>
              <hlm-card-header>
                <h2 hlmH3>Danger zone</h2>
                <p hlmMuted>Delete or transfer this workspace.</p>
              </hlm-card-header>
              <div hlmCardContent class="space-y-3">
                <p hlmP>This action cannot be undone. Make sure you have exported any important data before proceeding.</p>
                <button hlmBtn variant="destructive" size="sm">Delete workspace</button>
              </div>
            </hlm-card>
          </div>
        </div>
      </section>
    `,
    moduleMetadata: { imports: defaultImports },
  }),
};

