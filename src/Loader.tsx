import { h, Fragment } from 'preact'
import { MarxAtHome } from './MarxAtHome'

export function Loader() {
    return <>
        <MarxAtHome width={500} />
        <div class='loading-bar'>
            <div class='loading-bar-ball ball-1' />
            <div class='loading-bar-ball ball-2' />
            <div class='loading-bar-ball ball-3' />
            <div class='loading-bar-ball ball-4' />
            <div class='loading-bar-ball ball-5' />
        </div>
    </>
}