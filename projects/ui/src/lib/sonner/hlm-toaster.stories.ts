import type { Meta, StoryObj } from '@storybook/angular';
import { Component } from '@angular/core';
import { HlmToaster } from './hlm-toaster';
import { HlmToasterImports } from './index';
import { HlmButtonImports } from '../button';
import { toast } from 'ngx-sonner';

@Component({
  selector: 'story-sonner-demo',
  standalone: true,
  imports: [HlmToasterImports, HlmButtonImports],
  template: `
    <hlm-toaster />
    <div class="flex flex-wrap gap-2">
      <button hlmBtn variant="outline" (click)="default()">Default</button>
      <button hlmBtn variant="outline" (click)="success()">Success</button>
      <button hlmBtn variant="outline" (click)="error()">Error</button>
      <button hlmBtn variant="outline" (click)="withDescription()">With description</button>
      <button hlmBtn variant="outline" (click)="withAction()">With action</button>
    </div>
  `,
})
class StorySonnerDemo {
  default() {
    toast('Your message has been sent.');
  }
  success() {
    toast.success('Event created.');
  }
  error() {
    toast.error('Something went wrong.');
  }
  withDescription() {
    toast('Event created', {
      description: 'Monday, January 3rd at 6:00pm',
    });
  }
  withAction() {
    toast('Item in cart', {
      action: {
        label: 'Undo',
        onClick: () => {
          console.log('Undo toast action clicked');
        },
      },
    });
  }
}

const meta: Meta<HlmToaster> = {
  component: HlmToaster,
  title: 'Components/Sonner',
  parameters: {
    docs: {
      description: {
        component:
          'Toast notifications via ngx-sonner. Add hlm-toaster once (e.g. in app root), then call toast() or toast.success/error/etc. from anywhere. Supports position, theme, duration, closeButton, and custom styles.',
      },
    },
  },
};
export default meta;

type Story = StoryObj<HlmToaster>;

/**
 * Toaster with buttons to trigger different toast types. Add hlm-toaster once; use toast() in your app to show notifications.
 */
export const Default: Story = {
  render: () => ({
    template: `<story-sonner-demo />`,
    moduleMetadata: { imports: [StorySonnerDemo] },
  }),
};

/**
 * Toaster with custom position and theme. Set position (e.g. top-right, bottom-center) and theme (light, dark, system) on hlm-toaster.
 */
export const WithPositionAndTheme: Story = {
  render: () => ({
    template: `
      <hlm-toaster position="top-right" theme="light" />
      <p class="text-muted-foreground mb-2 text-sm">Toaster is top-right, light. Use toast() from ngx-sonner to show toasts.</p>
    `,
    moduleMetadata: { imports: [HlmToasterImports] },
  }),
};
