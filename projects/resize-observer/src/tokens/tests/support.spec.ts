import {TestBed} from '@angular/core/testing';

import {RESIZE_OBSERVER_SUPPORT} from '../support';

describe('RESIZE_OBSERVER_SUPPORT', () => {
    it('true in modern browsers', () => {
        TestBed.configureTestingModule({});

        expect(TestBed.inject(RESIZE_OBSERVER_SUPPORT)).toBe(true);
    });
});
