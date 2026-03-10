import type { Meta, StoryObj } from '@storybook/angular';
import { Component, signal } from '@angular/core';
import { HlmComboboxImports } from './index';

/**
 * Wrapper for single-select combobox with trigger button.
 */
@Component({
  selector: 'combobox-trigger-demo',
  standalone: true,
  imports: [HlmComboboxImports],
  template: `
    <div
      hlmCombobox
      [value]="selected()"
      (valueChange)="selected.set($event)"
      [itemToString]="itemToString"
      class="w-[280px]"
    >
      <hlm-combobox-trigger>
        <span hlmComboboxValue>Select framework...</span>
      </hlm-combobox-trigger>
      <hlm-combobox-content *hlmComboboxPortal>
        <hlm-combobox-list>
          @for (item of frameworks; track item) {
            <hlm-combobox-item [value]="item">{{ item }}</hlm-combobox-item>
          }
          <hlm-combobox-empty>No results found.</hlm-combobox-empty>
        </hlm-combobox-list>
      </hlm-combobox-content>
    </div>
  `,
})
class ComboboxTriggerDemo {
  selected = signal<string | undefined>(undefined);
  frameworks = ['React', 'Vue', 'Angular', 'Svelte', 'Solid', 'Qwik'];
  itemToString = (item: string): string => item ?? '';
}

/**
 * Wrapper for single-select combobox with searchable input.
 */
@Component({
  selector: 'combobox-input-demo',
  standalone: true,
  imports: [HlmComboboxImports],
  template: `
    <div
      hlmCombobox
      [value]="selected()"
      (valueChange)="selected.set($event)"
      [itemToString]="itemToString"
      class="w-[280px]"
    >
      <hlm-combobox-input placeholder="Search framework..." [showClear]="true" />
      <hlm-combobox-content *hlmComboboxPortal>
        <hlm-combobox-list>
          @for (item of frameworks; track item) {
            <hlm-combobox-item [value]="item">{{ item }}</hlm-combobox-item>
          }
          <hlm-combobox-empty>No results found.</hlm-combobox-empty>
        </hlm-combobox-list>
      </hlm-combobox-content>
    </div>
  `,
})
class ComboboxInputDemo {
  selected = signal<string | undefined>(undefined);
  frameworks = ['React', 'Vue', 'Angular', 'Svelte', 'Solid', 'Qwik'];
  itemToString = (item: string): string => item ?? '';
}

/**
 * Wrapper for multiple-select combobox with chips.
 */
@Component({
  selector: 'combobox-multiple-demo',
  standalone: true,
  imports: [HlmComboboxImports],
  template: `
    <div
      hlmComboboxMultiple
      [value]="selected()"
      (valueChange)="selected.set($event)"
      [itemToString]="itemToString"
      class="w-[320px]"
    >
      <hlm-combobox-chips>
        <hlm-combobox-values>
          @for (val of selected(); track val) {
            <hlm-combobox-chip>{{ val }}</hlm-combobox-chip>
          }
          <input hlmComboboxChipInput placeholder="Select..." />
        </hlm-combobox-values>
      </hlm-combobox-chips>
      <hlm-combobox-content *hlmComboboxPortal>
        <hlm-combobox-list>
          @for (item of frameworks; track item) {
            <hlm-combobox-item [value]="item">{{ item }}</hlm-combobox-item>
          }
          <hlm-combobox-empty>No results found.</hlm-combobox-empty>
        </hlm-combobox-list>
      </hlm-combobox-content>
    </div>
  `,
})
class ComboboxMultipleDemo {
  selected = signal<string[]>([]);
  frameworks = ['React', 'Vue', 'Angular', 'Svelte', 'Solid', 'Qwik'];
  itemToString = (item: string): string => item ?? '';
}

/**
 * Wrapper for combobox with groups and labels.
 */
@Component({
  selector: 'combobox-groups-demo',
  standalone: true,
  imports: [HlmComboboxImports],
  template: `
    <div
      hlmCombobox
      [value]="selected()"
      (valueChange)="selected.set($event)"
      [itemToString]="itemToString"
      class="w-[280px]"
    >
      <hlm-combobox-input placeholder="Select a fruit..." />
      <hlm-combobox-content *hlmComboboxPortal>
        <hlm-combobox-list>
          <hlm-combobox-group>
            <hlm-combobox-label>Citrus</hlm-combobox-label>
            @for (item of citrus; track item) {
              <hlm-combobox-item [value]="item">{{ item }}</hlm-combobox-item>
            }
          </hlm-combobox-group>
          <hlm-combobox-separator />
          <hlm-combobox-group>
            <hlm-combobox-label>Berries</hlm-combobox-label>
            @for (item of berries; track item) {
              <hlm-combobox-item [value]="item">{{ item }}</hlm-combobox-item>
            }
          </hlm-combobox-group>
          <hlm-combobox-empty>No results found.</hlm-combobox-empty>
        </hlm-combobox-list>
      </hlm-combobox-content>
    </div>
  `,
})
class ComboboxGroupsDemo {
  selected = signal<string | undefined>(undefined);
  citrus = ['Lemon', 'Lime', 'Orange', 'Grapefruit'];
  berries = ['Strawberry', 'Blueberry', 'Raspberry', 'Blackberry'];
  itemToString = (item: string): string => item ?? '';
}

const meta: Meta = {
  title: 'Components/Combobox',
  parameters: {
    docs: {
      description: {
        component:
          'Single or multi-select dropdown with optional search. Use hlm-combobox (single) or hlm-combobox-multiple (multi). Pair with hlm-combobox-trigger or hlm-combobox-input, hlm-combobox-value or hlm-combobox-values/chips, and *hlmComboboxPortal with hlm-combobox-content, hlm-combobox-list, hlm-combobox-item. Supports groups, labels, separators, and empty state.',
      },
    },
  },
};

export default meta;

type Story = StoryObj;

/** Single select with button trigger; click to open and pick an option. */
export const WithTrigger: Story = {
  render: () => ({
    template: `<combobox-trigger-demo />`,
    moduleMetadata: { imports: [HlmComboboxImports, ComboboxTriggerDemo] },
  }),
};

/** Single select with searchable input; type to filter, clear button to reset. */
export const WithSearchableInput: Story = {
  render: () => ({
    template: `<combobox-input-demo />`,
    moduleMetadata: { imports: [HlmComboboxImports, ComboboxInputDemo] },
  }),
};

/** Multiple select with chips; selected values shown as removable chips. */
export const MultipleWithChips: Story = {
  render: () => ({
    template: `<combobox-multiple-demo />`,
    moduleMetadata: { imports: [HlmComboboxImports, ComboboxMultipleDemo] },
  }),
};

/** Options grouped with labels and a separator. */
export const WithGroupsAndLabels: Story = {
  render: () => ({
    template: `<combobox-groups-demo />`,
    moduleMetadata: { imports: [HlmComboboxImports, ComboboxGroupsDemo] },
  }),
};

/**
 * Wrapper for disabled combobox.
 */
@Component({
  selector: 'combobox-disabled-demo',
  standalone: true,
  imports: [HlmComboboxImports],
  template: `
    <div
      hlmCombobox
      [disabled]="true"
      [value]="selected()"
      (valueChange)="selected.set($event)"
      [itemToString]="itemToString"
      class="w-[280px]"
    >
      <hlm-combobox-trigger>
        <span hlmComboboxValue>Disabled combobox</span>
      </hlm-combobox-trigger>
      <hlm-combobox-content *hlmComboboxPortal>
        <hlm-combobox-list>
          <hlm-combobox-item [value]="'Option'">Option</hlm-combobox-item>
          <hlm-combobox-empty>No results.</hlm-combobox-empty>
        </hlm-combobox-list>
      </hlm-combobox-content>
    </div>
  `,
})
class ComboboxDisabledDemo {
  selected = signal<string | undefined>(undefined);
  itemToString = (item: string): string => item ?? '';
}

/** Disabled state: combobox that does not open. */
export const Disabled: Story = {
  render: () => ({
    template: `<combobox-disabled-demo />`,
    moduleMetadata: { imports: [HlmComboboxImports, ComboboxDisabledDemo] },
  }),
};
