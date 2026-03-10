import type { Meta, StoryObj } from '@storybook/angular';
import { HlmCalendar } from './hlm-calendar';
import { HlmCalendarImports } from './index';

const meta: Meta<HlmCalendar<Date>> = {
	component: HlmCalendar,
	title: 'Components/Calendar',
	parameters: {
		docs: {
			description: {
				component:
					'Single-date calendar. Supports captionLayout (label, dropdown, dropdown-months, dropdown-years), min/max, disabled, dateDisabled, weekStartsOn, defaultFocusedDate.',
			},
		},
	},
	argTypes: {
		captionLayout: {
			control: 'select',
			options: ['label', 'dropdown', 'dropdown-months', 'dropdown-years'],
			description: 'Header navigation: label (arrows only), dropdown (month + year), or mixed.',
		},
		disabled: {
			control: 'boolean',
			description: 'Disable the entire calendar.',
		},
	},
};
export default meta;

type Story = StoryObj<{
	captionLayout?: 'label' | 'dropdown' | 'dropdown-months' | 'dropdown-years';
	disabled?: boolean;
}>;

const defaultImports = [HlmCalendarImports];

/**
 * Default: label caption with prev/next arrows only.
 */
export const Default: Story = {
	args: {
		captionLayout: 'label',
	},
	render: (args) => ({
		props: { ...args, selectedDate: undefined as Date | undefined },
		template: `
			<hlm-calendar [captionLayout]="captionLayout" [(date)]="selectedDate" />
		`,
		moduleMetadata: { imports: defaultImports },
	}),
};

/**
 * Dropdown caption: month and year select dropdowns for quick navigation.
 */
export const CaptionDropdown: Story = {
	args: {
		captionLayout: 'dropdown',
	},
	render: (args) => ({
		props: { ...args, selectedDate: undefined as Date | undefined },
		template: `
			<hlm-calendar [captionLayout]="captionLayout" [(date)]="selectedDate" />
		`,
		moduleMetadata: { imports: defaultImports },
	}),
};

/**
 * Dropdown for months only; year shown as label.
 */
export const CaptionDropdownMonths: Story = {
	args: {
		captionLayout: 'dropdown-months',
	},
	render: (args) => ({
		props: { ...args, selectedDate: undefined as Date | undefined },
		template: `
			<hlm-calendar [captionLayout]="captionLayout" [(date)]="selectedDate" />
		`,
		moduleMetadata: { imports: defaultImports },
	}),
};

/**
 * Dropdown for years only; month shown as label.
 */
export const CaptionDropdownYears: Story = {
	args: {
		captionLayout: 'dropdown-years',
	},
	render: (args) => ({
		props: { ...args, selectedDate: undefined as Date | undefined },
		template: `
			<hlm-calendar [captionLayout]="captionLayout" [(date)]="selectedDate" />
		`,
		moduleMetadata: { imports: defaultImports },
	}),
};

/**
 * With min and max dates to restrict selection range.
 */
export const WithMinMax: Story = {
	render: () => ({
		props: {
			min: new Date(new Date().getFullYear(), new Date().getMonth(), 5),
			max: new Date(new Date().getFullYear(), new Date().getMonth(), 25),
			selectedDate: undefined as Date | undefined,
		},
		template: `
			<hlm-calendar [min]="min" [max]="max" [(date)]="selectedDate" />
		`,
		moduleMetadata: { imports: defaultImports },
	}),
};

/**
 * Calendar in disabled state.
 */
export const Disabled: Story = {
	args: {
		disabled: true,
	},
	render: (args) => ({
		props: { ...args, selectedDate: undefined as Date | undefined },
		template: `
			<hlm-calendar [disabled]="disabled" [(date)]="selectedDate" />
		`,
		moduleMetadata: { imports: defaultImports },
	}),
};

/**
 * Week starts on Monday (1). Use 0 for Sunday.
 */
export const WeekStartsOnMonday: Story = {
	render: () => ({
		props: { weekStartsOn: 1 as 0 | 1 | 2 | 3 | 4 | 5 | 6, selectedDate: undefined as Date | undefined },
		template: `
			<hlm-calendar [weekStartsOn]="weekStartsOn" [(date)]="selectedDate" />
		`,
		moduleMetadata: { imports: defaultImports },
	}),
};

/**
 * Pre-focused date (e.g. today or a default selection).
 */
export const DefaultFocusedDate: Story = {
	render: () => ({
		props: {
			defaultFocused: new Date(new Date().getFullYear(), 5, 15), // June 15
			selectedDate: undefined as Date | undefined,
		},
		template: `
			<hlm-calendar [defaultFocusedDate]="defaultFocused" [(date)]="selectedDate" />
		`,
		moduleMetadata: { imports: defaultImports },
	}),
};

/**
 * All caption layouts for comparison.
 */
export const AllCaptionLayouts: Story = {
	render: () => ({
		props: {
			selected1: undefined as Date | undefined,
			selected2: undefined as Date | undefined,
			selected3: undefined as Date | undefined,
			selected4: undefined as Date | undefined,
		},
		template: `
			<div class="flex flex-wrap gap-8">
				<div>
					<p class="mb-2 text-sm font-medium text-muted-foreground">label</p>
					<hlm-calendar captionLayout="label" [(date)]="selected1" />
				</div>
				<div>
					<p class="mb-2 text-sm font-medium text-muted-foreground">dropdown</p>
					<hlm-calendar captionLayout="dropdown" [(date)]="selected2" />
				</div>
				<div>
					<p class="mb-2 text-sm font-medium text-muted-foreground">dropdown-months</p>
					<hlm-calendar captionLayout="dropdown-months" [(date)]="selected3" />
				</div>
				<div>
					<p class="mb-2 text-sm font-medium text-muted-foreground">dropdown-years</p>
					<hlm-calendar captionLayout="dropdown-years" [(date)]="selected4" />
				</div>
			</div>
		`,
		moduleMetadata: { imports: defaultImports },
	}),
};
