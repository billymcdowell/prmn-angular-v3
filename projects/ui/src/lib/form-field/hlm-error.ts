import { Directive } from '@angular/core';
import { classes } from '../utils';

@Directive({
	selector: 'hlm-error',
})
export class HlmError {
	constructor() {
		classes(() => 'text-destructive block text-sm font-medium');
	}
}
