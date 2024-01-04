let con=document.querySelectorAll(".con");
let gamerules=document.querySelectorAll("gamerules");
let random=Math.floor(Math.random()*3);
let triangle=document.querySelector(".triangle");
let user=document.querySelector(".user");
let computer=document.querySelector(".computer")
let winmodal=document.querySelector(".winmodal")
let winner=document.querySelector(".winner")
let lose=document.querySelector(".lose")
let play=document.querySelector(".play")
let play1=document.querySelector(".play1")
let draw=document.querySelector(".draw")
let play2=document.querySelector(".play2")
let score=JSON.parse(localStorage.getItem("scor"))
let score1=JSON.parse(localStorage.getItem("sc"))
let computerscore=document.getElementById("b2")
let total=document.getElementById("b4")
let count=0;
let rulesbutton=document.getElementById("rulesbutton")
let gamerule=document.querySelector(".gamerules")
let gameimage=document.querySelector(".rulesimg")
let next=document.querySelector(".next")
let rules=document.querySelector(".rules")
let new1=document.getElementById("new")

if(score){
    total.innerText=score;
}
if(score1){
    computerscore.innerText=score1;
}
con.forEach((element,index)=>{
    element.addEventListener("click",()=>{
        triangle.style.display="none";
        con.forEach(item=>{
            item.style.display="none";
        })
        user.style.opacity="1";
        element.style.display="block";
        element.classList.add("show");
        setTimeout(()=>{
            computer.style.opacity="1";
            setTimeout(()=>{
                con[random].style.display="block";
                con[random].classList.add("right");
            },1000)

        },500);
        setTimeout(()=>{
            if(random==index){
                draw.style.display="block";
            }
            else if(index==0 && random==2 || index==1 && random==0 || index==2 &&random==1){

winmodal.style.display="block";
count=score;
count++;
total.innerText=count;
localStorage.setItem("scor",JSON.stringify(count));

            }
            
            else{
                lose.style.display="block";
                count1=score1;
                count1++;
                computerscore.innerText=count1;
                localStorage.setItem("sc",JSON.stringify(count1))


            }

        },1500);
        setTimeout(()=>{
            next.style.transform="translateY(0)";
            rules.classList.add("shift")

        },2000)
        {
            next.addEventListener("click",()=>{
                document.querySelector(".game").style.display="none"
                document.querySelector(".container1").style.display="none"
                document.querySelector(".winning").style.display="flex"
                new1.addEventListener("click",()=>{
                 count1=0
                 localStorage.setItem("sc",JSON.stringify(count1))
                 localStorage.setItem("scor",JSON.stringify(0))
                 window.location.reload();
 
                })
 
        

        })
    }
})
})
play.addEventListener("click",()=>{
    window.location.reload();
})
play1.addEventListener("click",()=>{
    window.location.reload();
})
play2.addEventListener("click",()=>{
    window.location.reload();
})
rulesbutton.addEventListener("click",()=>{
    gamerule.style.display="flex"
    setTimeout(()=>{
        gameimage.style.transform="translateY(0)"
    },500)
})
let close=document.getElementById("close")
close.addEventListener("click",()=>{
    setTimeout(()=>{
        gameimage.style.display="none";
    },1000)
})
