# ![ng-web-apis logo](projects/demo/src/assets/logo.svg) Resize Observer API for Angular

> Part of <img src="projects/demo/src/assets/web-api.svg" align="top"> [Web APIs for Angular](https://ng-web-apis.github.io/)

[![npm version](https://img.shields.io/npm/v/@ng-web-apis/resize-observer.svg)](https://npmjs.com/package/@ng-web-apis/resize-observer)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@ng-web-apis/resize-observer)](https://bundlephobia.com/result?p=@ng-web-apis/resize-observer)
[![.github/workflows/ci.yml](https://github.com/ng-web-apis/resize-observer/actions/workflows/ci.yml/badge.svg?branch=master)](https://github.com/ng-web-apis/resize-observer/actions/workflows/ci.yml)
[![Coveralls github](https://img.shields.io/coveralls/github/ng-web-apis/resize-observer)](https://coveralls.io/github/ng-web-apis/resize-observer?branch=master)
[![angular-open-source-starter](https://img.shields.io/badge/made%20with-angular--open--source--starter-d81676?logo=angular)](https://github.com/TinkoffCreditSystems/angular-open-source-starter)

This is a library for declarative use of
[Resize Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Resize_Observer_API)
with Angular.

## Install

If you do not have [@ng-web-apis/common](https://github.com/ng-web-apis/common):

```
npm i @ng-web-apis/common
```

Now install the package:

```
npm i @ng-web-apis/resize-observer
```

Also, you need to install types:

```
npm install --save @types/resize-observer-browser
```

## Usage

1. Use `waResizeObserver` directive to observe an element:

```html
<section>
    <h1 waResizeBox="content-box" (waResizeObserver)="onResize($event)">
        I'm being observed
    </h1>
</section>
```

Use `waResizeBox` to configure
[ResizeObserver options](https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver/observe)

**NOTE:** Keep in mind these are used one time in constructor so you cannot use
binding, only strings.

## Service

Alternatively you can use `Observable`-based `ResizeObserverService` and provide token
`RESIZE_OPTION_BOX` manually:

```typescript
@Component({
    selector: 'my-component',
    providers: [
        ResizeObserverService,
        {
            provide: RESIZE_OPTION_BOX,
            useValue: 'border-box',
        },
    ],
})
export class MyComponent {
    constructor(@Inject(ResizeObserverService) entries$: ResizeObserverService) {
        entries$.subscribe(entries => {
            // This will trigger when the component resizes
            // Don't forget to unsubscribe
            console.log(entries);
        });
    }
}
```

## Browser support

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/> | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/> | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/> | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/> | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari-ios/safari-ios_48x48.png" alt="iOS Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/> |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 79+                                                                                                                                                                                                    | 69+                                                                                                                                                                                                        | 64+                                                                                                                                                                                                     | 13.1+                                                                                                                                                                                                   | 13.4+                                                                                                                                                                                                               |

> You can use [polyfill](https://www.npmjs.com/package/resize-observer-polyfill) to support older browsers

## Demo

You can [try online demo here](https://ng-web-apis.github.io/resize-observer)

## See also

Other [Web APIs for Angular](https://ng-web-apis.github.io/) by [@ng-web-apis](https://github.com/ng-web-apis)

## Open-source

Do you also want to open-source something, but hate the collateral work?
Check out this [Angular Open-source Library Starter](https://github.com/TinkoffCreditSystems/angular-open-source-starter)
we’ve created for our projects. It got you covered on continuous integration,
pre-commit checks, linting, versioning + changelog, code coverage and all that jazz.
