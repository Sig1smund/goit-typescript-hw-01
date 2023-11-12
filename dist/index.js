"use strict";
const greet = document.querySelector('.greet');
function greeting() {
    const markup = `<h1>Hello TypeScript</h1>`;
    return greet.insertAdjacentHTML("beforeend", markup);
}
greeting();
//# sourceMappingURL=index.js.map