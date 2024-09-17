
let x ;
let y;
let z;

document.getElementById("btn").onclick = function(){
    
    x = Math.floor(Math.random()*9+1);   
    y = Math.floor(Math.random()*9+1);  
    z = Math.floor(Math.random()*9+1);  

   


     document.getElementById("a").innerHTML = x;
     document.getElementById("b").innerHTML = y;
     document.getElementById("c").innerHTML = z;
  if(x==y && y==z){
    console.log("winner")
    document.getElementById("result").innerText = "winner , you got a prize, contact us" ; 

    
  }
  else{
    console.log("try it again ");
    document.getElementById("result").innerText = "Try Again";
    console.count("count");
  }
}