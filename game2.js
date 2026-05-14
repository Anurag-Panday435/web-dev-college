let box = document.querySelectorAll(".cell")
let resetBtn = document.querySelector("#reset")
let msgBox = document.querySelector("p")

let win = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [0,4,8],
    [2,4,6],
    [2,5,8]
]

let turn0 = true

for(let a of box){

    a.addEventListener("click", ()=>{

        if(turn0){

            a.innerText = "O"
            turn0 = false

        }else{

            a.innerText = "X"
            turn0 = true

        }

        a.disabled = true

        checkWinner()

    })

}

function checkWinner(){

    for(let pattern of win){

        let x = box[pattern[0]].innerText
        let y = box[pattern[1]].innerText
        let z = box[pattern[2]].innerText

        if(x != "" && y != "" && z != ""){

            if(x == y && y == z){

                msgBox.innerText = x + " jeet gaya 🎉"

                console.log(x + " winner")

            }

        }

    }

}