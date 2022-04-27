
const menuBtn=document.querySelector("#open-btn");
const asideMenu=document.querySelector("aside");
const themeTogger=document.querySelector(".toggle-theme")


const showMenu=()=>{
    asideMenu.classList.toggle("show");
}
menuBtn.addEventListener("click",showMenu);


const themeChange=()=>{
    document.body.classList.toggle("dark-theme");
    themeTogger.querySelector("i:nth-child(1)").classList.toggle("active");
    themeTogger.querySelector("i:nth-child(2)").classList.toggle("active");
}

themeTogger.addEventListener("click", themeChange   )


Orders.forEach(order=>{
    const tr=document.createElement("tr");

    const trContent=`
        <td>${order.productName}</td>
        <td>${order.productNumber}</td>
        <td>${order.paymentStatus}</td>
        <td class="${order.shipping==='pending'? 'warning':order.shipping==='Declined'? 'fail':'sucess'}">${order.shipping}</td>
        <td class="details">Details</td>
    `
    tr.innerHTML=trContent;
    document.querySelector("table tbody").appendChild(tr)
})