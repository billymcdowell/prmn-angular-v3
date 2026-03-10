import type { Meta, StoryObj } from '@storybook/angular';
import { HlmCalendarRange } from './hlm-calendar-range';
import { HlmCalendarImports } from './index';

const meta: Meta<HlmCalendarRange<Date>> = {
	component: HlmCalendarRange,
	title: 'Components/CalendarRange',
	parameters: {
		docs: {
			description: {
				component:
					'Date range calendar. Select start and end date. Same options as Calendar: captionLayout, min/max, disabled, dateDisabled, weekStartsOn, defaultFocusedDate.',
			},
		},
	},
	argTypes: {
		captionLayout: {
			control: 'select',
			options: ['label', 'dropdown', 'dropdown-months', 'dropdown-years'],
			description: 'Header navigation style.',
		},
		disabled: {
			control: 'boolean',
			description: 'Disable the calendar.',
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
 * Default range picker with label caption.
 */
export const Default: Story = {
	args: {
		captionLayout: 'label',
	},
	render: (args) => ({
		props: { ...args, startDate: undefined as Date | undefined, endDate: undefined as Date | undefined },
		template: `
			<hlm-calendar-range [captionLayout]="captionLayout" [(startDate)]="startDate" [(endDate)]="endDate" />
		`,
		moduleMetadata: { imports: defaultImports },
	}),
};

/**
 * Dropdown caption for quick month/year jump.
 */
export const CaptionDropdown: Story = {
	args: {
		captionLayout: 'dropdown',
	},
	render: (args) => ({
		props: { ...args, startDate: undefined as Date | undefined, endDate: undefined as Date | undefined },
		template: `
			<hlm-calendar-range [captionLayout]="captionLayout" [(startDate)]="startDate" [(endDate)]="endDate" />
		`,
		moduleMetadata: { imports: defaultImports },
	}),
};

/**
 * With min and max to constrain selectable range.
 */
export const WithMinMax: Story = {
	render: () => ({
		props: {
			min: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
			max: new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0),
			startDate: undefined as Date | undefined,
			endDate: undefined as Date | undefined,
		},
		template: `
			<hlm-calendar-range [min]="min" [max]="max" [(startDate)]="startDate" [(endDate)]="endDate" />
		`,
		moduleMetadata: { imports: defaultImports },
	}),
};

/**
 * Disabled state.
 */
export const Disabled: Story = {
	args: {
		disabled: true,
	},
	render: (args) => ({
		props: { ...args, startDate: undefined as Date | undefined, endDate: undefined as Date | undefined },
		template: `
			<hlm-calendar-range [disabled]="disabled" [(startDate)]="startDate" [(endDate)]="endDate" />
		`,
		moduleMetadata: { imports: defaultImports },
	}),
};

/**
 * Week starts on Monday.
 */
export const WeekStartsOnMonday: Story = {
	render: () => ({
		props: {
			weekStartsOn: 1 as 0 | 1 | 2 | 3 | 4 | 5 | 6,
			startDate: undefined as Date | undefined,
			endDate: undefined as Date | undefined,
		},
		template: `
			<hlm-calendar-range [weekStartsOn]="weekStartsOn" [(startDate)]="startDate" [(endDate)]="endDate" />
		`,
		moduleMetadata: { imports: defaultImports },
	}),
};

/**
 * Pre-selected range for editing or display.
 */
export const WithPreselectedRange: Story = {
	render: () => ({
		props: {
			startDate: new Date(new Date().getFullYear(), new Date().getMonth(), 10),
			endDate: new Date(new Date().getFullYear(), new Date().getMonth(), 18),
		},
		template: `
			<hlm-calendar-range [(startDate)]="startDate" [(endDate)]="endDate" />
		`,
		moduleMetadata: { imports: defaultImports },
	}),
};

/**
 * All caption layouts side by side.
 */
export const AllCaptionLayouts: Story = {
	render: () => ({
		props: {
			start1: undefined as Date | undefined,
			end1: undefined as Date | undefined,
			start2: undefined as Date | undefined,
			end2: undefined as Date | undefined,
			start3: undefined as Date | undefined,
			end3: undefined as Date | undefined,
			start4: undefined as Date | undefined,
			end4: undefined as Date | undefined,
		},
		template: `
			<div class="flex flex-wrap gap-8">
				<div>
					<p class="mb-2 text-sm font-medium text-muted-foreground">label</p>
					<hlm-calendar-range captionLayout="label" [(startDate)]="start1" [(endDate)]="end1" />
				</div>
				<div>
					<p class="mb-2 text-sm font-medium text-muted-foreground">dropdown</p>
					<hlm-calendar-range captionLayout="dropdown" [(startDate)]="start2" [(endDate)]="end2" />
				</div>
				<div>
					<p class="mb-2 text-sm font-medium text-muted-foreground">dropdown-months</p>
					<hlm-calendar-range captionLayout="dropdown-months" [(startDate)]="start3" [(endDate)]="end3" />
				</div>
				<div>
					<p class="mb-2 text-sm font-medium text-muted-foreground">dropdown-years</p>
					<hlm-calendar-range captionLayout="dropdown-years" [(startDate)]="start4" [(endDate)]="end4" />
				</div>
			</div>
		`,
		moduleMetadata: { imports: defaultImports },
	}),
};
