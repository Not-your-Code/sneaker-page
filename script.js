let count= 0 ; 
document.querySelector(".dec").addEventListener('click' , () =>{
    changenum(-1)
})
document.querySelector(".inc").addEventListener('click' , () =>{
    changenum(1)
})

changenum = (number) => {
    count +=number
    document.querySelector(".addtocart").addEventListener('click' , () => {
        
        document.querySelector("#cart-no").textContent = count;
        if(count >= 1){
            document.getElementById('cart-no').style.visibility = "visible";
        }
       

    })
    if(count < 0){
        return
    }
    if(count <1){
        document.getElementById('cart-no').style.visibility = "hidden";
    }
    document.querySelector(".count").textContent = count;
}


document.querySelector(".cart").addEventListener('click' , e=>{
 
    document.getElementById('CartboX').style.visibility="visible"
    
  
})

document.querySelector("#Close").addEventListener('click' , ()=>{
    document.getElementById('CartboX').style.visibility="hidden"
})