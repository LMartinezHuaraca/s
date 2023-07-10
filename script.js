CajaIzquierda=document.getElementById("caiz")
uno = document.getElementById("uno")
dos = document.getElementById("dos")
tres = document.getElementById("tres")
tierra = document.getElementById("div1")
sol = document.getElementById("div2")
i = 0
function R(){
    if(i==0){CajaIzquierda.classList.add("rotalo")
   
   
    
                    i++}
    else{CajaIzquierda.classList.remove("rotalo")
   
                        i--}
}
uno.addEventListener("click",R)
o = 0
function E(){
    if(o==0){dos.classList.add("estrella")
    tierra.classList.add("tierra")
    sol.classList.add("sol")
   
            o++}
            else{dos.classList.remove("estrella")
            tierra.classList.remove("tierra")
            sol.classList.remove("sol")
          
        o--}
}
tres.addEventListener("click",E)
