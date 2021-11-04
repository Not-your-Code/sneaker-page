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


let img1 = document.getElementById('img1')
let img2 = document.getElementById('img2')
let img3 = document.getElementById('img3')
let img4 = document.getElementById('img4')
let thumbImg = document.getElementById('Thumb')

img1.addEventListener('click' ,e=>{
    
    let source =img1.getAttribute('src')
    thumbImg.setAttribute('src' , source)
})
img2.addEventListener('click' ,e=>{
    
    let source =img2.getAttribute('src')
    thumbImg.setAttribute('src' , source)
})

img3.addEventListener('click' ,e=>{
    
    let source =img3.getAttribute('src')
    thumbImg.setAttribute('src' , source)
})

img4.addEventListener('click' ,e=>{
    
    let source =img4.getAttribute('src')
    thumbImg.setAttribute('src' , source)
})


window.alert("Try this webpage on Desktop for now  , will not look good on mobile ;-). There are some bugs in page too , will fix it (CODED BY VINEET) ")