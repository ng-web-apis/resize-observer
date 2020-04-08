import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {RESIZE_OBSERVER_SUPPORT} from 'projects/resize-observer/src/public-api';

@Component({
    selector: 'main',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
    ratio = 0;
    widthPercent = 50;

    constructor(@Inject(RESIZE_OBSERVER_SUPPORT) readonly support: boolean) {}

    onResize(entry: ResizeObserverEntry[]) {
        this.ratio = Math.round(entry[0].contentRect.width / 110);
    }
}
