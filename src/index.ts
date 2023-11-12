const greet = document.querySelector('.greet');


function greeting(): void {
    const markup: string = `<h1>Hello TypeScript</h1>`;
    return greet?.insertAdjacentHTML("beforeend", markup);
}

greeting();
