let buttons = document.querySelectorAll(".box");
let reset = document.querySelector(".resetbutton");
let message = document.querySelector(".winmessage");
let msg = document.querySelector("#msg");


let turn = true;
let winner = false;


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
        checkDraw();
        box.disabled=true;
        box.style.transform = 'none'; 
        
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
                 winner =true;
                 message.classList.remove("hide");
                 msg.innerText = (`winner  ${val1} scroll down to see grid `);
                 
                for(let button of buttons ){
                    button.disabled=true;
                    button.style.transform = 'none';
                }
              
            }
        }
    }
};

const checkDraw = () =>{

    const allfilled = Array.from(buttons).every(button => button.innerText !== "");
    
        if(allfilled && winner===false){

            message.classList.remove("hide");
            msg.innerText = (`Game Draw scroll down to see grid `);
            
        }
}

const resetGame = () =>{

    reset.addEventListener(("click"),() => {

        for(let button of buttons ){
            button.disabled=false;
            button.innerText = "";
            button.style.transform = ''; 
        }
        turn = true;
        winner = false;
        message.classList.add("hide");

       
    });
}

reset.addEventListener("click", resetGame);