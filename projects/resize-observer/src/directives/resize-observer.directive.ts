import {Attribute, Directive, ElementRef, Inject, Output} from '@angular/core';
import {Observable} from 'rxjs';

import {ResizeObserverService} from '../services/resize-observer.service';
import {RESIZE_OPTION_BOX, RESIZE_OPTION_BOX_DEFAULT} from '../tokens/resize-option-box';

// TODO switch to Attribute once https://github.com/angular/angular/issues/36479 is fixed
export function boxExtractor({
    nativeElement,
}: ElementRef<Element>): ResizeObserverBoxOptions {
    const attribute = nativeElement.getAttribute(
        'waResizeBox',
    ) as ResizeObserverBoxOptions;

    return boxFactory(attribute);
}

export function boxFactory(
    box: ResizeObserverBoxOptions | null,
): ResizeObserverBoxOptions {
    return box || RESIZE_OPTION_BOX_DEFAULT;
}

@Directive({
    selector: '[waResizeObserver]',
    providers: [
        ResizeObserverService,
        {
            provide: RESIZE_OPTION_BOX,
            deps: [ElementRef],
            useFactory: boxExtractor,
        },
    ],
})
export class ResizeObserverDirective {
    @Output()
    readonly waResizeObserver: Observable<ResizeObserverEntry[]>;

    constructor(
        @Inject(ResizeObserverService)
        entries$: Observable<ResizeObserverEntry[]>,
        @Attribute('waResizeBox') _box: ResizeObserverBoxOptions,
    ) {
        this.waResizeObserver = entries$;
    }
}
