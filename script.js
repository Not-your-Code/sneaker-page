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
        else if(count <1){
            document.getElementById('cart-no').style.visibility = "hidden";
        }

    })
    if(count < 0){
        return
    }
    document.querySelector(".count").textContent = count;
}


