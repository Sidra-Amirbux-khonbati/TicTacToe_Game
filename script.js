const box = document.querySelectorAll(".box1");
const btn = document.querySelector("#reset");
const newGame = document.querySelector("#newGame");
const msg = document.querySelector(".msg");
const msgcont = document.querySelector("#winningmsg");

let turnO = true;

const winRoad = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];
box.forEach((box1) => {
    box1.addEventListener("click" , () => {
        if(turnO){
            box1.innerText = "O";
            turnO = false;
        }else{
            box1.innerText = "X";
            turnO = true;
        }
        box1.disabled = true;
        checkWinner();
    })
})

const boxDisable = () => {
    for(let boxes of box){
        boxes.disabled = true;
    }
}

const boxEnable = () => {
    for(let boxes of box){
        boxes.disabled = false;
        boxes.innerText = "";
        boxes.style.backgroundColor = "";
    }
}

const reset = () => {
    turnO = true;
    boxEnable();
    msg.classList.add("hide");
}

const showWinner = (winner, pattern) => {
    msgcont.innerText = "Congratulations, Winner is " +winner;
    msg.classList.remove("hide");
    boxDisable();

       pattern.forEach((index) => {
        box[index].style.backgroundColor = "#c7d01892";
    });

}
const checkWinner = () =>{
    for(let pattern of winRoad){
        let ps1val = box[pattern[0]].innerText;
        let ps2val = box[pattern[1]].innerText;
        let ps3val = box[pattern[2]].innerText;

        if(ps1val != "" && ps2val != "" && ps3val != ""){
            if(ps1val === ps2val && ps2val === ps3val){
                showWinner(ps1val, pattern);
            }
        }
    }
};

newGame.addEventListener("click", reset);
btn.addEventListener("click", reset);