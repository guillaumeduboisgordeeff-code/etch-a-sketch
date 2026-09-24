const container=document.querySelector("#container");
const btn=document.createElement("button");
btn.textContent="Try me";
container.before(btn);

function squareSize(dimension) {
    const total=dimension**2;
    for (let i=0; i <total; i++) {
        const div = document.createElement("div");
        div.classList.add("squareDiv");
        const width=100/dimension;
        div.style.width=`${width}%`;
        div.addEventListener('mouseenter', () => {
            const r = Math.floor(Math.random()*256);
            const g = Math.floor(Math.random()*256);
            const b = Math.floor(Math.random()*256);    
            div.style.backgroundColor=`rgb(${r},${g},${b})`;
        });
        container.appendChild(div);
    }
}

squareSize(16);

btn.addEventListener('click', ()=> {
    const askUser=prompt("How many squares per side do you want the new grid to be?");
    container.innerHTML="";
    const value=Number(askUser);
    if (!Number.isNaN(value) && value>0) {
        squareSize(value);
    }
});




