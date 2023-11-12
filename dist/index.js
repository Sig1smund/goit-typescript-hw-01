"use strict";
const greet = document.querySelector('.greet');
function greeting() {
    const markup = `<h1>Hello TypeScript</h1>`;
    return greet === null || greet === void 0 ? void 0 : greet.insertAdjacentHTML("beforeend", markup);
}
greeting();
//# sourceMappingURL=index.js.map