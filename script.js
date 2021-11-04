let count= 0 ; 
document.querySelector(".dec").addEventListener('click' , () =>
{
    changenum(-1)
})

document.querySelector(".inc").addEventListener('click' , () =>
{
    changenum(1)
})

changenum = (number) => 
{
    count +=number
    if(count < 0)
    {
        return
    }
    document.getElementById("NoItem").textContent= count;
    document.getElementById("MainPrice").textContent= '$'+125*count+'.00';
    document.querySelector(".count").textContent = count;
    document.querySelector(".addtocart").addEventListener('click' , () => 
    {
        document.querySelector("#cart-no").textContent = count;
        if(count >= 1)
        {
            document.getElementById('cart-no').style.visibility = "visible";
        }
    })

    
    
    if(count <1)
    {
        document.getElementById('cart-no').style.visibility = "hidden";
    }
    
    
}


document.querySelector(".cart").addEventListener('click' , e=>
{ 
    document.getElementById('CartboX').style.visibility="visible"
})

document.querySelector("#Close").addEventListener('click' , ()=>
{
    document.getElementById('CartboX').style.visibility="hidden"

    document.querySelector("#CartItem").style.visibility = "hiddden"
})



document.querySelector(".addtocart").addEventListener('click' , () => 
{
    let Cart = document.querySelector("#CartboX");
    let computed = window.getComputedStyle(Cart, null);
    let Visi = computed.getPropertyValue("visibility")
    
    if(Visi == "visible"){
        document.querySelector("#CartItem").style.visibility = "visible"
        document.querySelector("#Btn").style.visibility = "visible"
    }
})

document.querySelector("#Close").addEventListener('click' , ()=>
{
    document.getElementById('CartboX').style.visibility="hidden"
    document.querySelector("#Btn").style.visibility = "hidden"
    document.querySelector("#CartItem").style.visibility = "hidden"
})

document.querySelector("#Btn").addEventListener('click' , ()=>{
    
window.alert("Purchase Unsuccessfull")
})  

document.getElementById('Delete').addEventListener('click' , ()=>{
    document.querySelector("#Btn").style.visibility = "hidden"
    document.querySelector("#CartItem").style.visibility = "hidden"
 
    document.querySelector("#cart-no").style.visibility = "hidden";
}) 