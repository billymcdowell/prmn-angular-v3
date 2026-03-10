import type { Meta, StoryObj } from '@storybook/angular';
import { Component } from '@angular/core';
import { HlmDatePickerImports } from './index';

@Component({
  selector: 'date-range-value-demo',
  standalone: true,
  imports: [HlmDatePickerImports],
  template: `
    <hlm-date-range-picker [date]="range">
      <span>Select date range</span>
    </hlm-date-range-picker>
  `,
})
class DateRangeValueDemo {
  range: [Date, Date] = [new Date(2025, 2, 10), new Date(2025, 2, 20)];
}

@Component({
  selector: 'date-range-minmax-demo',
  standalone: true,
  imports: [HlmDatePickerImports],
  template: `
    <hlm-date-range-picker [min]="minDate" [max]="maxDate">
      <span>Select range (March 2025)</span>
    </hlm-date-range-picker>
  `,
})
class DateRangeMinMaxDemo {
  minDate = new Date(2025, 2, 1);
  maxDate = new Date(2025, 2, 31);
}

@Component({
  selector: 'date-range-disabled-demo',
  standalone: true,
  imports: [HlmDatePickerImports],
  template: `
    <hlm-date-range-picker [disabled]="true" [date]="range">
      <span>Select date range</span>
    </hlm-date-range-picker>
  `,
})
class DateRangeDisabledDemo {
  range: [Date, Date] = [new Date(2025, 2, 1), new Date(2025, 2, 15)];
}

@Component({
  selector: 'date-range-format-demo',
  standalone: true,
  imports: [HlmDatePickerImports],
  template: `
    <hlm-date-range-picker [formatDates]="formatDates">
      <span>Select date range</span>
    </hlm-date-range-picker>
  `,
})
class DateRangeFormatDemo {
  formatDates = (dates: [Date | undefined, Date | undefined]): string =>
    dates
      .filter(Boolean)
      .map((d) => d!.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }))
      .join(' – ');
}

const meta: Meta = {
  title: 'Components/Date Range Picker',
  parameters: {
    docs: {
      description: {
        component:
          'Range date picker: select start and end date. Supports captionLayout, min/max, disabled, formatDates, transformDates, and autoCloseOnEndSelection. Use with forms via ngModel or formControlName.',
      },
    },
  },
};

export default meta;

type Story = StoryObj;

const imports = [HlmDatePickerImports];

/**
 * Default: click to open, select start date then end date. Placeholder when empty.
 */
export const Default: Story = {
  render: () => ({
    template: `
      <hlm-date-range-picker>
        <span>Select date range</span>
      </hlm-date-range-picker>
    `,
    moduleMetadata: { imports },
  }),
};

/**
 * Preselected range.
 */
export const WithValue: Story = {
  render: () => ({
    template: `<date-range-value-demo />`,
    moduleMetadata: { imports: [HlmDatePickerImports, DateRangeValueDemo] },
  }),
};

/**
 * captionLayout="dropdown" for month/year navigation.
 */
export const CaptionLayoutDropdown: Story = {
  render: () => ({
    template: `
      <hlm-date-range-picker captionLayout="dropdown">
        <span>Select date range</span>
      </hlm-date-range-picker>
    `,
    moduleMetadata: { imports },
  }),
};

/**
 * captionLayout="dropdown-months".
 */
export const CaptionLayoutDropdownMonths: Story = {
  render: () => ({
    template: `
      <hlm-date-range-picker captionLayout="dropdown-months">
        <span>Select date range</span>
      </hlm-date-range-picker>
    `,
    moduleMetadata: { imports },
  }),
};

/**
 * captionLayout="dropdown-years".
 */
export const CaptionLayoutDropdownYears: Story = {
  render: () => ({
    template: `
      <hlm-date-range-picker captionLayout="dropdown-years">
        <span>Select date range</span>
      </hlm-date-range-picker>
    `,
    moduleMetadata: { imports },
  }),
};

/**
 * Min and max constrain the selectable range.
 */
export const WithMinAndMax: Story = {
  render: () => ({
    template: `<date-range-minmax-demo />`,
    moduleMetadata: { imports: [HlmDatePickerImports, DateRangeMinMaxDemo] },
  }),
};

/**
 * Disabled state.
 */
export const Disabled: Story = {
  render: () => ({
    template: `<date-range-disabled-demo />`,
    moduleMetadata: { imports: [HlmDatePickerImports, DateRangeDisabledDemo] },
  }),
};

/**
 * Custom format for the range display.
 */
export const CustomFormat: Story = {
  render: () => ({
    template: `<date-range-format-demo />`,
    moduleMetadata: { imports: [HlmDatePickerImports, DateRangeFormatDemo] },
  }),
};
