import { h, Fragment } from 'preact';
import { MarxAtHome } from './MarxAtHome';
export function Loader() {
    return h(Fragment, null,
        h(MarxAtHome, { width: 500 }),
        h("div", { class: 'loading-bar' },
            h("div", { class: 'loading-bar-ball ball-1' }),
            h("div", { class: 'loading-bar-ball ball-2' }),
            h("div", { class: 'loading-bar-ball ball-3' }),
            h("div", { class: 'loading-bar-ball ball-4' }),
            h("div", { class: 'loading-bar-ball ball-5' })));
}
