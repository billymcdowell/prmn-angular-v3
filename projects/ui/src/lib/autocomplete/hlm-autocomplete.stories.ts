import type { Meta, StoryObj } from '@storybook/angular';
import { Component, Input, computed, signal } from '@angular/core';
import { HlmAutocompleteInput } from './hlm-autocomplete-input';
import { HlmAutocompleteImports } from './index';

/**
 * Wrapper component that holds autocomplete state for stories.
 */
@Component({
  selector: 'autocomplete-demo',
  standalone: true,
  imports: [HlmAutocompleteImports],
  template: `
    <div
      hlmAutocomplete
      [value]="value()"
      (valueChange)="value.set($event)"
      [search]="search()"
      (searchChange)="search.set($event)"
      [itemToString]="itemToString"
    >
      <hlm-autocomplete-input
        [placeholder]="placeholder"
        [showSearch]="showSearch"
        [showClear]="showClear"
      />
      <hlm-autocomplete-content *hlmAutocompletePortal>
        <hlm-autocomplete-list>
          @for (item of filteredItems(); track item) {
            <hlm-autocomplete-item [value]="item">{{ item }}</hlm-autocomplete-item>
          }
          <hlm-autocomplete-empty>No results found.</hlm-autocomplete-empty>
        </hlm-autocomplete-list>
      </hlm-autocomplete-content>
    </div>
  `,
})
class AutocompleteDemoComponent {
  value = signal<string | null>(null);
  search = signal('');
  @Input() placeholder = 'Search...';
  @Input() showSearch = true;
  @Input() showClear = false;
  itemToString = (item: string): string => item;

  private _items = signal<string[]>([
    'Apple',
    'Banana',
    'Blueberry',
    'Cherry',
    'Grape',
    'Orange',
    'Peach',
    'Strawberry',
  ]);

  filteredItems = computed(() => {
    const s = this.search().toLowerCase();
    const list = this._items();
    if (!s) return list;
    return list.filter((item) => item.toLowerCase().includes(s));
  });
}

const meta: Meta<HlmAutocompleteInput> = {
  component: HlmAutocompleteInput,
  title: 'Components/Autocomplete',
  parameters: {
    docs: {
      description: {
        component:
          'Searchable dropdown: type to filter options and select one. Use hlm-autocomplete (or hlm-autocomplete-search), hlm-autocomplete-input, hlm-autocomplete-content with *hlmAutocompletePortal, hlm-autocomplete-list, hlm-autocomplete-item, and hlm-autocomplete-empty. Optional: groups, separators, labels.',
      },
    },
  },
};
export default meta;

type Story = StoryObj<HlmAutocompleteInput>;

/**
 * Basic autocomplete with search icon and filtered list. Type to filter, click to select.
 */
export const Default: Story = {
  render: () => ({
    template: `<autocomplete-demo />`,
    moduleMetadata: {
      imports: [HlmAutocompleteImports, AutocompleteDemoComponent],
    },
  }),
};

/**
 * With clear button: show a control to clear the current value.
 */
export const WithClearButton: Story = {
  render: () => ({
    template: `<autocomplete-demo [showClear]="true" />`,
    moduleMetadata: {
      imports: [HlmAutocompleteImports, AutocompleteDemoComponent],
    },
  }),
};

/**
 * Without search icon: plain input with no leading search icon.
 */
export const WithoutSearchIcon: Story = {
  render: () => ({
    template: `<autocomplete-demo [showSearch]="false" />`,
    moduleMetadata: {
      imports: [HlmAutocompleteImports, AutocompleteDemoComponent],
    },
  }),
};

/**
 * Custom placeholder.
 */
export const CustomPlaceholder: Story = {
  render: () => ({
    template: `<autocomplete-demo placeholder="Choose a fruit..." />`,
    moduleMetadata: {
      imports: [HlmAutocompleteImports, AutocompleteDemoComponent],
    },
  }),
};
