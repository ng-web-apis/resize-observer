import {InjectionToken} from '@angular/core';

export const RESIZE_OPTION_BOX_DEFAULT = 'content-box';

export const RESIZE_OPTION_BOX = new InjectionToken<ResizeObserverBoxOptions>(
    'Box model to observe changes',
    {
        providedIn: 'root',
        factory: () => RESIZE_OPTION_BOX_DEFAULT,
    },
);
