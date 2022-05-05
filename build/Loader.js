import { h, Fragment } from 'preact';
export function Loader() {
    return h(Fragment, null,
        h("h1", { class: 'loading-header' }, "MarxAtHome"),
        h("div", { class: 'loading-bar' },
            h("div", { class: 'loading-bar-ball ball-1' }),
            h("div", { class: 'loading-bar-ball ball-2' }),
            h("div", { class: 'loading-bar-ball ball-3' }),
            h("div", { class: 'loading-bar-ball ball-4' }),
            h("div", { class: 'loading-bar-ball ball-5' })));
}
