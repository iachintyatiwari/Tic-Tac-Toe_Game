let buttons = document.querySelectorAll(".box");
let reset = document.querySelector(".reset");

let turn = true;

buttons.forEach((box) =>{

    box.addEventListener("click", ()=>{

        if(turn === true){

            box.innerText = ("o");
            turn = false;
            
        }else{

            box.innerText = ("x");
            turn = true;
        }
        checkWinner();
        box.disabled=true;
    });
});

const winPattern =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const checkWinner = () =>{

    for(let pattern of winPattern){
        let val1=buttons[pattern[0]].innerText;
        let val2 =buttons[pattern[1]].innerText;
        let val3=buttons[pattern[2]].innerText;

        if(val1 != "" && val2 != "" && val3 != ""){

            if(val1 === val2 && val2 === val3){
                console.log(`winner ${val1}`);

                for(let button of buttons ){
                    button.disabled=true;
                }
            }
        }
    }
};

const resetGame = () =>{

    reset.addEventListener(("click"),() => {

        for(let button of buttons ){
            button.disabled=false;
            button.innerText = "";
        }
        turn = true;
    });
}

reset.addEventListener("click", resetGame);