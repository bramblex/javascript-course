declare type ElementPath = [string, number[]];
declare function getChildElementIndex(element: HTMLElement): number;
declare function getElementPathTo(_element: HTMLElement): ElementPath;
declare function getElementFromPath(element_path: ElementPath): HTMLElement;
declare function pickElementByClick(): Promise<[string, number[]]>;
declare function test(): Promise<void>;
