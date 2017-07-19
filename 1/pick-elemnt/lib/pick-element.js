'use strict';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function getElementPathTo(_element) {
    let head = 'body';
    let path = [];
    const body = document.body;
    let element = _element;
    while (true) {
        const { id, parentElement } = element;
        if (parentElement === null) {
            throw new Error('impossable');
        }
        else if (parentElement === body) {
            head = 'body';
            break;
        }
        else if (id && id !== '') {
            head = id;
        }
        else {
            const { children } = parentElement;
            const l = children.length;
            for (let i = 0; i < l; i++) {
                const child = children[i];
                if (child === element) {
                    path.push(i);
                    break;
                }
            }
        }
        element = parentElement;
    }
    path = path.reverse();
    return { head, path };
}
function getElemntFromPath(element_path) {
    const { head, path } = element_path;
    let element;
    if (head === false) {
        element === document.body;
    }
    else {
        element === document.getElementById(head);
    }
    for (let i of path) {
        element = element.children[i];
        if (!element) {
            throw new Error('Cannot find Element from path: ' + JSON.stringify(element_path));
        }
    }
    return element;
}
function pickElementByClick() {
    return __awaiter(this, void 0, void 0, function* () {
        const _onclick = document.onclick;
        const promise = new Promise(resolve => {
            document.onclick =
                event => {
                    event.preventDefault();
                    resolve(event.target);
                };
        });
        const element = yield promise;
        return getElementPathTo(element);
    });
}
function test() {
    return __awaiter(this, void 0, void 0, function* () {
        const path = yield pickElementByClick();
        console.log();
    });
}
//# sourceMappingURL=pick-element.js.map