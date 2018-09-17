import { Directive, HostListener, Output, EventEmitter } from '@angular/core';

export interface BuxScrollInfo {
    target: HTMLElement;
    //
    scrollLeft: number;
    scrollWidth: number;
    clientWidth: number;
    //
    scrollTop: number;
    scrollHeight: number;
    clientHeight: number;
}

/**
 * Scrcoller directive looking after the horizontal and vertical scroll positions of the host element
 * and generates the BuxScrollInfo event. Typical usage:
 * <div [bux-scroller]="onScroll($event)">...scrolling content</div>
 * 
 * In code:
 * onScroll(info: BuxScrollInfo) {
 *  console.log(info);
 * }
 * 
 * Look at shadow scrollbar implementation in BuxDrawerComponent.
 */
@Directive({
    selector: '[bux-scroller]'
})
export class BuxScrollerDirective {

    @Output('bux-scroller') buxScroller: EventEmitter<BuxScrollInfo> = new EventEmitter();

    @HostListener('scroll', ['$event.target']) scrolling(target: HTMLElement) {
        if (target) {
            let info: BuxScrollInfo = {
                target: target,
                scrollLeft: target.scrollLeft,
                scrollWidth: target.scrollWidth,
                clientWidth: target.clientWidth,
                //
                scrollTop: target.scrollTop,
                scrollHeight: target.scrollHeight,
                clientHeight: target.clientHeight
            };
            this.buxScroller.next(info);
        }
    }

    // @HostListener('click') clicking() {
    //     console.log('clicking...');
    // }

    constructor() { }

}