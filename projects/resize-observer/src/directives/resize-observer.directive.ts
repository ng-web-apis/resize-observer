import {Attribute, Directive, Inject, Output} from '@angular/core';
import {Observable} from 'rxjs';
import {ResizeObserverService} from '../services/resize-observer.service';
import {RESIZE_OPTION_BOX} from '../tokens/resize-option-box';

export function boxFactory(
    box: ResizeObserverOptions['box'] | null,
): ResizeObserverOptions['box'] | null {
    return box;
}

// @dynamic
@Directive({
    selector: '[waResizeObserver]',
    providers: [
        ResizeObserverService,
        {
            provide: RESIZE_OPTION_BOX,
            deps: [[new Attribute('waResizeBox')]],
            useFactory: boxFactory,
        },
    ],
})
export class ResizeObserverDirective {
    @Output()
    readonly waResizeObserver: Observable<ResizeObserverEntry[]>;

    constructor(
        @Inject(ResizeObserverService)
        entries$: Observable<ResizeObserverEntry[]>,
        @Attribute('waResizeBox') _box: ResizeObserverOptions['box'] | null,
    ) {
        this.waResizeObserver = entries$;
    }
}
