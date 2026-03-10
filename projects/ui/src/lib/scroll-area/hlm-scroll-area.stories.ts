import type { Meta, StoryObj } from '@storybook/angular';

import { HlmScrollAreaImports } from './index';

const meta: Meta = {
  title: 'Components/Scroll Area',
  parameters: {
    docs: {
      description: {
        component:
          'Styled wrapper around `ng-scrollbar` for consistently themed scroll areas. Use for long lists, code blocks, or scrollable panels inside cards and dialogs.',
      },
    },
  },
};

export default meta;

type Story = StoryObj;

const imports = [HlmScrollAreaImports];

/**
 * Basic scroll area with constrained height.
 */
export const Basic: Story = {
  render: () => ({
    template: `
      <div class="w-full max-w-sm">
        <ng-scrollbar hlm class="h-40 rounded-md border bg-card">
          <div class="space-y-2 p-4 text-sm">
            <p *ngFor="let item of items">
              Item {{ item }} — This is some example content to demonstrate the custom scrollbar styling.
            </p>
          </div>
        </ng-scrollbar>
      </div>
    `,
    moduleMetadata: { imports },
    props: {
      items: Array.from({ length: 20 }, (_, i) => i + 1),
    },
  }),
};

/**
 * Scroll area inside a card, useful for long settings or activity feeds.
 */
export const InsideCard: Story = {
  render: () => ({
    template: `
      <div class="w-full max-w-md rounded-lg border bg-card">
        <div class="flex items-center justify-between px-4 py-3">
          <div>
            <h2 class="text-sm font-medium">Recent activity</h2>
            <p class="text-xs text-muted-foreground">
              Scroll to see more events.
            </p>
          </div>
        </div>
        <ng-scrollbar hlm class="h-56 border-t">
          <ul class="divide-y text-sm">
            <li *ngFor="let event of events" class="px-4 py-2">
              <p class="font-medium">{{ event.title }}</p>
              <p class="text-xs text-muted-foreground">
                {{ event.timestamp }}
              </p>
            </li>
          </ul>
        </ng-scrollbar>
      </div>
    `,
    moduleMetadata: { imports },
    props: {
      events: Array.from({ length: 25 }, (_, i) => ({
        title: `Event #${i + 1}`,
        timestamp: 'Just now',
      })),
    },
  }),
};

/**
 * Scroll area suitable for code blocks or logs with monospace font.
 */
export const CodeLikeContent: Story = {
  render: () => ({
    template: `
      <div class="w-full max-w-2xl">
        <ng-scrollbar hlm class="h-60 rounded-md border bg-background">
          <pre class="m-0 p-4 text-xs font-mono leading-relaxed">
@for (line of lines; track $index) {
{{ line }}
}
          </pre>
        </ng-scrollbar>
      </div>
    `,
    moduleMetadata: { imports },
    props: {
      lines: Array.from({ length: 80 }, (_, i) => `INFO  [${i + 1}] Application log line ${i + 1}`),
    },
  }),
};
