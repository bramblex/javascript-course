export declare type ElementPath = [string, number[]];
export declare function getElementPathTo(_element: HTMLElement): ElementPath;
export declare function getElementFromPath(element_path: ElementPath): HTMLElement;
export declare function pickElementByClick(): Promise<[string, number[]]>;
