import type { Meta, StoryObj } from '@storybook/angular';
import { Component } from '@angular/core';
import { HlmDatePickerImports } from './index';

@Component({
  selector: 'date-picker-multi-value-demo',
  standalone: true,
  imports: [HlmDatePickerImports],
  template: `
    <hlm-date-picker-multi [date]="selected">
      <span>Select dates</span>
    </hlm-date-picker-multi>
  `,
})
class DatePickerMultiValueDemo {
  selected: Date[] = [
    new Date(2025, 2, 5),
    new Date(2025, 2, 12),
    new Date(2025, 2, 19),
  ];
}

@Component({
  selector: 'date-picker-multi-limits-demo',
  standalone: true,
  imports: [HlmDatePickerImports],
  template: `
    <hlm-date-picker-multi [minSelection]="2" [maxSelection]="5">
      <span>Select 2–5 dates</span>
    </hlm-date-picker-multi>
  `,
})
class DatePickerMultiLimitsDemo {}

@Component({
  selector: 'date-picker-multi-minmax-demo',
  standalone: true,
  imports: [HlmDatePickerImports],
  template: `
    <hlm-date-picker-multi [min]="minDate" [max]="maxDate">
      <span>Select dates (March 2025)</span>
    </hlm-date-picker-multi>
  `,
})
class DatePickerMultiMinMaxDemo {
  minDate = new Date(2025, 2, 1);
  maxDate = new Date(2025, 2, 31);
}

@Component({
  selector: 'date-picker-multi-disabled-demo',
  standalone: true,
  imports: [HlmDatePickerImports],
  template: `
    <hlm-date-picker-multi [disabled]="true" [date]="selected">
      <span>Select dates</span>
    </hlm-date-picker-multi>
  `,
})
class DatePickerMultiDisabledDemo {
  selected: Date[] = [new Date(2025, 2, 10)];
}

@Component({
  selector: 'date-picker-multi-format-demo',
  standalone: true,
  imports: [HlmDatePickerImports],
  template: `
    <hlm-date-picker-multi [formatDates]="formatDates">
      <span>Select dates</span>
    </hlm-date-picker-multi>
  `,
})
class DatePickerMultiFormatDemo {
  formatDates = (dates: Date[]): string =>
    dates.length === 0
      ? ''
      : dates
          .map((d) => d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }))
          .join(', ');
}

const meta: Meta = {
  title: 'Components/Date Picker Multi',
  parameters: {
    docs: {
      description: {
        component:
          'Multi date picker: select multiple dates. Supports captionLayout, min/max, minSelection, maxSelection, disabled, formatDates, transformDates, and autoCloseOnMaxSelection. Use with forms via ngModel or formControlName.',
      },
    },
  },
};

export default meta;

type Story = StoryObj;

const imports = [HlmDatePickerImports];

/**
 * Default: click to open, select multiple dates. Placeholder when none selected.
 */
export const Default: Story = {
  render: () => ({
    template: `
      <hlm-date-picker-multi>
        <span>Select dates</span>
      </hlm-date-picker-multi>
    `,
    moduleMetadata: { imports },
  }),
};

/**
 * Preselected multiple dates.
 */
export const WithValue: Story = {
  render: () => ({
    template: `<date-picker-multi-value-demo />`,
    moduleMetadata: { imports: [HlmDatePickerImports, DatePickerMultiValueDemo] },
  }),
};

/**
 * Min and max selection: user must select between 2 and 5 dates.
 */
export const MinMaxSelection: Story = {
  render: () => ({
    template: `<date-picker-multi-limits-demo />`,
    moduleMetadata: { imports: [HlmDatePickerImports, DatePickerMultiLimitsDemo] },
  }),
};

/**
 * captionLayout="dropdown" for month/year navigation.
 */
export const CaptionLayoutDropdown: Story = {
  render: () => ({
    template: `
      <hlm-date-picker-multi captionLayout="dropdown">
        <span>Select dates</span>
      </hlm-date-picker-multi>
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
      <hlm-date-picker-multi captionLayout="dropdown-months">
        <span>Select dates</span>
      </hlm-date-picker-multi>
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
      <hlm-date-picker-multi captionLayout="dropdown-years">
        <span>Select dates</span>
      </hlm-date-picker-multi>
    `,
    moduleMetadata: { imports },
  }),
};

/**
 * Min and max date constrain the calendar range.
 */
export const WithMinAndMax: Story = {
  render: () => ({
    template: `<date-picker-multi-minmax-demo />`,
    moduleMetadata: { imports: [HlmDatePickerImports, DatePickerMultiMinMaxDemo] },
  }),
};

/**
 * Disabled state.
 */
export const Disabled: Story = {
  render: () => ({
    template: `<date-picker-multi-disabled-demo />`,
    moduleMetadata: { imports: [HlmDatePickerImports, DatePickerMultiDisabledDemo] },
  }),
};

/**
 * Custom format for the selected dates display.
 */
export const CustomFormat: Story = {
  render: () => ({
    template: `<date-picker-multi-format-demo />`,
    moduleMetadata: { imports: [HlmDatePickerImports, DatePickerMultiFormatDemo] },
  }),
};
