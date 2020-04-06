import {InjectionToken} from '@angular/core';

export const RESIZE_OPTION_BOX = new InjectionToken<ResizeObserverOptions['box']>(
    'Sets which box model the observer will observe changes to',
);
