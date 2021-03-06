export declare class SimpleVM {
    private el;
    private data;
    private template;
    constructor(id: string, data: any, template: (data) => string);
    render(): void;
    modify(cb: (data) => void): void;
}
