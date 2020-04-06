import {ResizeObserverService} from '../resize-observer.service';

describe('ResizeObserverService', () => {
    it('throws when not supported', () => {
        let error = false;
        const service = new ResizeObserverService(
            {
                nativeElement: document.createElement('DIV'),
            },
            false,
            null,
        );

        service.subscribe({
            error: () => {
                error = true;
            },
        });

        expect(error).toBe(true);
    });
});
