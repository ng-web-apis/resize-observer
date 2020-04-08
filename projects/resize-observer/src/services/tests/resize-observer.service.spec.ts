import {NgZone} from '@angular/core';
import {ResizeObserverService} from '../resize-observer.service';

describe('ResizeObserverService', () => {
    it('throws when not supported', () => {
        let error = false;
        const service = new ResizeObserverService(
            {
                nativeElement: document.createElement('DIV'),
            },
            false,
            'content-box',
            new NgZone({}),
        );

        service.subscribe({
            error: () => {
                error = true;
            },
        });

        expect(error).toBe(true);
    });
});
