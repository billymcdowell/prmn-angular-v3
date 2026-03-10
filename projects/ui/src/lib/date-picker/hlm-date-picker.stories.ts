import type { Meta, StoryObj } from '@storybook/angular';
import { Component } from '@angular/core';
import { HlmDatePickerImports } from './index';

@Component({
  selector: 'date-picker-value-demo',
  standalone: true,
  imports: [HlmDatePickerImports],
  template: `
    <hlm-date-picker [date]="preselected">
      <span>Pick a date</span>
    </hlm-date-picker>
  `,
})
class DatePickerValueDemo {
  preselected = new Date(2025, 2, 15);
}

@Component({
  selector: 'date-picker-minmax-demo',
  standalone: true,
  imports: [HlmDatePickerImports],
  template: `
    <hlm-date-picker [min]="minDate" [max]="maxDate">
      <span>Pick a date (March 2025 only)</span>
    </hlm-date-picker>
  `,
})
class DatePickerMinMaxDemo {
  minDate = new Date(2025, 2, 1);
  maxDate = new Date(2025, 2, 31);
}

@Component({
  selector: 'date-picker-disabled-demo',
  standalone: true,
  imports: [HlmDatePickerImports],
  template: `
    <hlm-date-picker [disabled]="true" [date]="someDate">
      <span>Pick a date</span>
    </hlm-date-picker>
  `,
})
class DatePickerDisabledDemo {
  someDate = new Date(2025, 2, 10);
}

@Component({
  selector: 'date-picker-format-demo',
  standalone: true,
  imports: [HlmDatePickerImports],
  template: `
    <hlm-date-picker [formatDate]="formatDate">
      <span>Pick a date</span>
    </hlm-date-picker>
  `,
})
class DatePickerFormatDemo {
  formatDate = (d: Date): string =>
    d.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' });
}

/** Standalone date picker for use in Examples/Showcase. */
@Component({
  selector: 'date-picker-showcase-demo',
  standalone: true,
  imports: [HlmDatePickerImports],
  template: `
    <hlm-date-picker>
      <span>Pick a date</span>
    </hlm-date-picker>
  `,
})
export class DatePickerShowcaseDemo {}

const meta: Meta = {
  title: 'Components/Date Picker',
  parameters: {
    docs: {
      description: {
        component:
          'Single date picker with calendar in a popover. Supports captionLayout (label, dropdown, dropdown-months, dropdown-years), min/max, disabled, formatDate, transformDate, and autoCloseOnSelect. Use with forms via ngModel or formControlName.',
      },
    },
  },
};

export default meta;

type Story = StoryObj;

const imports = [HlmDatePickerImports];

/**
 * Default: click to open calendar, select a date. Placeholder shown when no date selected.
 */
export const Default: Story = {
  render: () => ({
    template: `
      <hlm-date-picker>
        <span>Pick a date</span>
      </hlm-date-picker>
    `,
    moduleMetadata: { imports },
  }),
};

/**
 * Preselected date (use date input or form binding in real usage).
 */
export const WithValue: Story = {
  render: () => ({
    template: `<date-picker-value-demo />`,
    moduleMetadata: { imports: [HlmDatePickerImports, DatePickerValueDemo] },
  }),
};

/**
 * captionLayout="dropdown": month and year dropdowns for quick navigation.
 */
export const CaptionLayoutDropdown: Story = {
  render: () => ({
    template: `
      <hlm-date-picker captionLayout="dropdown">
        <span>Pick a date</span>
      </hlm-date-picker>
    `,
    moduleMetadata: { imports },
  }),
};

/**
 * captionLayout="dropdown-months": only month dropdown.
 */
export const CaptionLayoutDropdownMonths: Story = {
  render: () => ({
    template: `
      <hlm-date-picker captionLayout="dropdown-months">
        <span>Pick a date</span>
      </hlm-date-picker>
    `,
    moduleMetadata: { imports },
  }),
};

/**
 * captionLayout="dropdown-years": only year dropdown.
 */
export const CaptionLayoutDropdownYears: Story = {
  render: () => ({
    template: `
      <hlm-date-picker captionLayout="dropdown-years">
        <span>Pick a date</span>
      </hlm-date-picker>
    `,
    moduleMetadata: { imports },
  }),
};

/**
 * Min and max constrain selectable dates.
 */
export const WithMinAndMax: Story = {
  render: () => ({
    template: `<date-picker-minmax-demo />`,
    moduleMetadata: { imports: [HlmDatePickerImports, DatePickerMinMaxDemo] },
  }),
};

/**
 * Disabled: button is not clickable.
 */
export const Disabled: Story = {
  render: () => ({
    template: `<date-picker-disabled-demo />`,
    moduleMetadata: { imports: [HlmDatePickerImports, DatePickerDisabledDemo] },
  }),
};

/**
 * Custom format: display date in a custom format via formatDate input.
 */
export const CustomFormat: Story = {
  render: () => ({
    template: `<date-picker-format-demo />`,
    moduleMetadata: { imports: [HlmDatePickerImports, DatePickerFormatDemo] },
  }),
};
