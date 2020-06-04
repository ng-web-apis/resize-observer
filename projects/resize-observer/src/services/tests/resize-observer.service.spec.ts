import {ElementRef} from '@angular/core';
import {TestBed} from '@angular/core/testing';
import {catchError} from 'rxjs/operators';
import {RESIZE_OBSERVER_SUPPORT} from '../../tokens/support';
import {ResizeObserverService} from '../resize-observer.service';

describe('Resize Observer token', () => {
    let service: ResizeObserverService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                ResizeObserverService,

                {
                    provide: ElementRef,
                    useValue: {
                        nativeElement: document.createElement('DIV'),
                    },
                },
            ],
        });

        service = TestBed.get(ResizeObserverService).pipe(
            catchError((_err, caught) => caught),
        );
    });

    it('defined', () => {
        expect(service).toBeDefined();
    });

    it('disconnect', () => {
        expect(service.subscribe().unsubscribe()).toBeDefined();
    });
});

describe('throws when not supported', () => {
    it('Throws an error if ResizeObserver is not supported', done => {
        TestBed.configureTestingModule({
            providers: [
                ResizeObserverService,

                {
                    provide: ElementRef,
                    useValue: {
                        nativeElement: document.createElement('DIV'),
                    },
                },
                {
                    provide: RESIZE_OBSERVER_SUPPORT,
                    useValue: false,
                },
            ],
        });

        const service$: ResizeObserverService = TestBed.get(ResizeObserverService);

        service$.subscribe({
            error: err => {
                expect(err).toBe('ResizeObserver is not supported in your browser');

                done();
            },
        });
    });
});
