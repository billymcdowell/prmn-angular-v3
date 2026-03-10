import { Directive } from '@angular/core';
import { classes } from '../utils';

@Directive({
	selector: '[hlmInputOtpGroup]',
	host: {
		'data-slot': 'input-otp-group',
	},
})
export class HlmInputOtpGroup {
	constructor() {
		classes(() => 'flex items-center');
	}
}
