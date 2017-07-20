'use strict';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function getChildElementIndex(element) {
    const { parentElement } = element;
    if (!parentElement) {
        throw new Error('Has not parent');
    }
    const { children } = parentElement;
    for (let i = 0, l = children.length; i < l; i++) {
        if (children[i] === element)
            return i;
    }
    throw new Error('impossable');
}
function getElementPathTo(_element) {
    let head = 'body';
    let path = [];
    const body = document.body;
    let element = _element;
    while (true) {
        const { parentElement, id } = element;
        if (element === body) {
            break;
        }
        if (id && id !== '') {
            head = '#' + id;
            break;
        }
        path.push(getChildElementIndex(element));
        if (!parentElement) {
            throw new Error('impossable');
        }
        element = parentElement;
    }
    path = path.reverse();
    return [head, path];
}
function getElementFromPath(element_path) {
    const [head, path] = element_path;
    let element;
    if (head === 'body') {
        element = document.body;
    }
    else {
        element = document.getElementById(head.replace('#', ''));
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
        const _onmouseover = document.onmouseover;
        const _onmouseout = document.onmouseout;
        let _backgroundColor = null;
        const promise = new Promise(resolve => {
            document.onclick =
                event => {
                    event.stopPropagation();
                    event.preventDefault();
                    const element = event.target;
                    element.style.backgroundColor = _backgroundColor;
                    resolve(event.target);
                };
        });
        document.onmouseover = event => {
            const element = event.target;
            _backgroundColor = element.style.backgroundColor;
            element.style.backgroundColor = "yellow";
        };
        document.onmouseout = event => {
            const element = event.target;
            element.style.backgroundColor = _backgroundColor;
        };
        const element = yield promise;
        document.onclick = _onclick;
        document.onmouseover = _onmouseover;
        document.onmouseout = _onmouseout;
        return getElementPathTo(element);
    });
}
function test() {
    return __awaiter(this, void 0, void 0, function* () {
        const path = yield pickElementByClick();
        console.log(JSON.stringify(path));
        console.log(getElementFromPath(path));
    });
}
//# sourceMappingURL=pick-element.js.map