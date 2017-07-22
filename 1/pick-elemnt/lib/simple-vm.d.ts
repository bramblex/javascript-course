export declare const event_map: {
    click: string;
    change: string;
};
export declare type CallbackFunc = (vm: SimpleVM, el: HTMLElement, event: Event) => void;
export interface VMOpts {
    el: string | HTMLElement;
    data: any;
    template: (data: any) => string;
    funcs: {
        [propNames: string]: CallbackFunc;
    };
}
export declare class SimpleVM {
    private el;
    private data;
    private funcs;
    private template;
    constructor({el: _el, data, template, funcs}: VMOpts);
    render(): void;
    modify(cb: (data) => void): void;
}
