let bodyColor = document.getElementsByTagName("body");

document.addEventListener("click",(e) =>{
    
    let x = Math.floor(Math.random()*255)
    let z = Math.floor(Math.random()*255)
    let y = Math.floor(Math.random()*255)

    console.log(x, y, z)
    document.body.style.backgroundColor = `rgb(${x}, ${y}, ${z})`;
    
} );
