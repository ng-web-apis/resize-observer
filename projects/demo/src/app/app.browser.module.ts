import {
    APP_BASE_HREF,
    CommonModule,
    LocationStrategy,
    PathLocationStrategy,
} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {ResizeObserverModule} from 'projects/resize-observer/src/public-api';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app.routes';

@NgModule({
    bootstrap: [AppComponent],
    imports: [
        CommonModule,
        FormsModule,
        BrowserModule.withServerTransition({appId: 'demo'}),
        AppRoutingModule,
        ResizeObserverModule,
        ReactiveFormsModule,
    ],
    declarations: [AppComponent],
    providers: [
        {
            provide: LocationStrategy,
            useClass: PathLocationStrategy,
        },
        {
            provide: APP_BASE_HREF,
            useValue: '',
        },
    ],
})
export class AppBrowserModule {}
