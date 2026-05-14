// let h1=document.querySelector("h1")
// let p= doucument.createElement("p")
// p.innerText="hello"
// h1.append(p)
// h1.remove()
// console.log(h1);
// console.log(h1.innerText);
// h1.innerText="byeee"

// let inp=document.querySelector("input")
// let h1=document.querySelector("h1")

let inp=document.querySelector("input")
let h1=document.querySelector("h1")
let btn=document.querySelector("button")

let data = ""

inp.addEventListener("input", (e)=>{
    // console.log(e.target.value);
    data=e.target.value
    
})
btn.addEventListener("click",()=>{
    h1.innerText= data
    inp.value=""
    data = ""
})