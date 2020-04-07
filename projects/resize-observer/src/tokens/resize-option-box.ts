import {InjectionToken} from '@angular/core';

export const RESIZE_OPTION_BOX = new InjectionToken<ResizeObserverOptions['box']>(
    'Box model to observe changes',
);
