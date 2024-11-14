let player1 = prompt("Enter name of player 1: ");
let player2 = prompt("Enter name of player 2: ");
let views = document.querySelectorAll(".div");
let bg = document.querySelector("body");
let points = document.querySelectorAll(".col");
for (let i=0;i<views.length;i++){
    views[i].textContent=0;
    views[i].style.color='white';
    views[i].setAttribute("id", i+1);}
let turn = 0,red=0,blue=0,c=0,start=false;
let color = {0:"crimson",1:"skyblue"};
$(".div").click(function(){
    game(($(this).attr("id"))-1,turn);});

function game(x,col){
    if (c==0 || c==1){
        if (views[x].style.backgroundColor=='crimson'){return;}
        views[x].textContent = parseInt(views[x].textContent)+3;
        views[x].style.color="black";
        if (col==0){
            red+=1;
            views[x].style.backgroundColor="crimson";
        }
        else{
            blue+=1;
            views[x].style.backgroundColor="skyblue";
        }
        if (c==0){
            bg.style.backgroundColor="skyblue";
        }
        else if (c==1){
            bg.style.backgroundColor="crimson";
        }
        c+=1;
        turn = 1-turn;
        points[0].textContent = `Red  : ${red}`;
        points[1].textContent = `Blue  : ${blue}`;
        return;
    }
    start=true;
    if (views[x].style.backgroundColor!==color[col]){return;}
    bg.style.backgroundColor=color[1-turn];
    views[x].textContent = parseInt(views[x].textContent)+1;
    views[x].style.backgroundColor=color[col];
    views[x].style.color="black";
    check(x,col);
    turn = 1-turn;
    c+=1;
    points[0].textContent = `Red  : ${red}`;
    points[1].textContent = `Blue  : ${blue}`;
    setTimeout(()=>{
        if(start==true){
            if (red==0){
                conf(player2);
            }
            else if (blue==0){
                conf(player1);
            }}        
    },500);}

function conf(col) {
    if (confirm(`${col} Wins!!!\nDo you want to play again?`)) {
        location.reload();
    }};

function check(x,col){
    let y = views[x].style.backgroundColor;
    if (parseInt(views[x].textContent)>=4){
        let i=x%5;
        if (views[x].style.backgroundColor=='crimson'){red-=1;}
        else if (views[x].style.backgroundColor=='skyblue'){blue-=1;}
        views[x].textContent=0;
        views[x].style.backgroundColor='';
        views[x].style.color='white';
        if (i>0){
            views[x-1].textContent = parseInt(views[x-1].textContent)+1;
            views[x-1].style.color='black';
            if (views[x-1].style.backgroundColor=='crimson'){
                if (y=='skyblue'){
                    blue+=1;
                    red-=1
                    views[x-1].style.backgroundColor='skyblue';
                }
            }
            else if (views[x-1].style.backgroundColor==''){
                if (col==0){red+=1;views[x-1].style.backgroundColor="crimson";}
                else{blue+=1;views[x-1].style.backgroundColor="skyblue";}
            }
            else{
                if (col==0){
                    red+=1;
                    blue-=1;
                    views[x-1].style.backgroundColor='crimson';
                }
            }
            check(x-1,col);
        }
        if (i<4){
            views[x+1].textContent = parseInt(views[x+1].textContent)+1;
            views[x+1].style.color='black';
            if (views[x+1].style.backgroundColor=='crimson'){
                if (y=='skyblue'){
                    blue+=1;
                    red-=1;
                    views[x+1].style.backgroundColor='skyblue';
                }
            }
            else if (views[x+1].style.backgroundColor==''){
                if (col==0){red+=1;}
                else{blue+=1;}
                views[x+1].style.backgroundColor=color[col];
            }
            else{
                if (y=='crimson'){
                    red+=1;
                    blue-=1;
                    views[x+1].style.backgroundColor=color[col];
                }
            }
            check(x+1,col);
        }
        if (x-5>=0){
            views[x-5].textContent = parseInt(views[x-5].textContent)+1;
            views[x-5].style.color='black';
            if (views[x-5].style.backgroundColor=='crimson'){
                if (y=='skyblue'){
                    blue+=1;
                    red-=1;
                    views[x-5].style.backgroundColor=color[col];
                }
            }
            else if (views[x-5].style.backgroundColor==''){
                if (col==0){red+=1;}
                else{blue+=1;}
                views[x-5].style.backgroundColor=color[col];
            }
            else{
                if (y=='crimson'){
                    red+=1;
                    blue-=1;
                    views[x-5].style.backgroundColor='crimson';
                }
            }
            check(x-5,col);
        }
        if (x+5<views.length){
            views[x+5].textContent = parseInt(views[x+5].textContent)+1;
            views[x+5].style.color='black';
            if (views[x+5].style.backgroundColor=='crimson'){
                if (y=='skyblue'){
                    blue+=1;
                    red-=1;
                    views[x+5].style.backgroundColor='skyblue';
                }
            }
            else if (views[x+5].style.backgroundColor==''){
                if (col==0){red+=1;}
                else{blue+=1;}
                views[x+5].style.backgroundColor=color[col];
            }
            else{
                if (y=='crimson'){
                    red+=1;
                    blue-=1;
                    views[x+5].style.backgroundColor='crimson';
                }
            }
            check(x+5,col);
    }}}