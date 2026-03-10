import type { Meta, StoryObj } from '@storybook/angular';
import { Component, signal } from '@angular/core';
import { HlmTabs } from './hlm-tabs';
import { HlmTabsImports } from './index';

@Component({
  selector: 'story-tabs-demo',
  standalone: true,
  imports: [HlmTabsImports],
  template: `
    <div hlmTabs [tab]="currentTab()" (tabActivated)="currentTab.set($event)">
      <hlm-tabs-list>
        <button hlmTabsTrigger="account">Account</button>
        <button hlmTabsTrigger="password">Password</button>
        <button hlmTabsTrigger="billing">Billing</button>
      </hlm-tabs-list>
      <div hlmTabsContent="account" class="mt-2">
        <p class="text-sm text-muted-foreground">Account settings and profile.</p>
      </div>
      <div hlmTabsContent="password" class="mt-2">
        <p class="text-sm text-muted-foreground">Change your password.</p>
      </div>
      <div hlmTabsContent="billing" class="mt-2">
        <p class="text-sm text-muted-foreground">Billing and subscription.</p>
      </div>
    </div>
  `,
})
class StoryTabsDemo {
  currentTab = signal('account');
}

@Component({
  selector: 'story-tabs-line-demo',
  standalone: true,
  imports: [HlmTabsImports],
  template: `
    <div hlmTabs [tab]="currentTab()" (tabActivated)="currentTab.set($event)">
      <hlm-tabs-list variant="line">
        <button hlmTabsTrigger="overview">Overview</button>
        <button hlmTabsTrigger="analytics">Analytics</button>
      </hlm-tabs-list>
      <div hlmTabsContent="overview" class="mt-2">Overview content.</div>
      <div hlmTabsContent="analytics" class="mt-2">Analytics content.</div>
    </div>
  `,
})
class StoryTabsLineDemo {
  currentTab = signal('overview');
}

@Component({
  selector: 'story-tabs-vertical-demo',
  standalone: true,
  imports: [HlmTabsImports],
  template: `
    <div hlmTabs [tab]="currentTab()" (tabActivated)="currentTab.set($event)" orientation="vertical" class="flex gap-4">
      <hlm-tabs-list class="flex flex-col">
        <button hlmTabsTrigger="one">Tab one</button>
        <button hlmTabsTrigger="two">Tab two</button>
      </hlm-tabs-list>
      <div hlmTabsContent="one" class="flex-1">Content one.</div>
      <div hlmTabsContent="two" class="flex-1">Content two.</div>
    </div>
  `,
})
class StoryTabsVerticalDemo {
  currentTab = signal('one');
}

@Component({
  selector: 'story-tabs-paginated-demo',
  standalone: true,
  imports: [HlmTabsImports],
  template: `
    <div hlmTabs [tab]="currentTab()" (tabActivated)="currentTab.set($event)">
      <hlm-paginated-tabs-list class="w-64">
        <button hlmTabsTrigger="tab1">Tab 1</button>
        <button hlmTabsTrigger="tab2">Tab 2</button>
        <button hlmTabsTrigger="tab3">Tab 3</button>
        <button hlmTabsTrigger="tab4">Tab 4</button>
        <button hlmTabsTrigger="tab5">Tab 5</button>
      </hlm-paginated-tabs-list>
      <div hlmTabsContent="tab1" class="mt-2">Content 1</div>
      <div hlmTabsContent="tab2" class="mt-2">Content 2</div>
      <div hlmTabsContent="tab3" class="mt-2">Content 3</div>
      <div hlmTabsContent="tab4" class="mt-2">Content 4</div>
      <div hlmTabsContent="tab5" class="mt-2">Content 5</div>
    </div>
  `,
})
class StoryTabsPaginatedDemo {
  currentTab = signal('tab1');
}

const meta: Meta<HlmTabs> = {
  component: HlmTabs,
  title: 'Components/Tabs',
  parameters: {
    docs: {
      description: {
        component:
          'Tabbed content. Use hlmTabs (with tab binding and tabActivated), hlmTabsList, hlmTabsTrigger (value), hlmTabsContent (value). Supports orientation (horizontal/vertical), variant (default/line) on list, and lazy content via hlmTabsContentLazy.',
      },
    },
  },
};
export default meta;

type Story = StoryObj<HlmTabs>;

/**
 * Default horizontal tabs with pill list style.
 */
export const Default: Story = {
  render: () => ({
    template: `<story-tabs-demo />`,
    moduleMetadata: { imports: [StoryTabsDemo] },
  }),
};

/**
 * Line variant: underline on active tab instead of pill background.
 */
export const LineVariant: Story = {
  render: () => ({
    template: `<story-tabs-line-demo />`,
    moduleMetadata: { imports: [StoryTabsLineDemo] },
  }),
};

/**
 * Vertical tabs. Set orientation on the tabs container.
 */
export const Vertical: Story = {
  render: () => ({
    template: `<story-tabs-vertical-demo />`,
    moduleMetadata: { imports: [StoryTabsVerticalDemo] },
  }),
};

/**
 * Many tabs: use paginated list when there are many triggers (scroll + arrows).
 */
export const PaginatedList: Story = {
  render: () => ({
    template: `<story-tabs-paginated-demo />`,
    moduleMetadata: { imports: [StoryTabsPaginatedDemo] },
  }),
};
