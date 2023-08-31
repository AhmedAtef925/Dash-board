var AsideBar=document.querySelector("aside"),
MenuBtn=document.getElementById("menu-btn"),
CloseBtn=document.getElementById("close-btn"),
ThemeToggle=document.getElementById("theme-toggle");

// add class Active 
var menuItem =document.querySelectorAll(".sideBar a");

const removeActive=()=>{
    menuItem.forEach((item)=>{
            item.classList.remove("active");
    })
}
menuItem.forEach((item)=>{
    item.addEventListener("click",()=>{
        removeActive();
        item.classList.add("active");
    })
})
//show slide-Bar
 MenuBtn.addEventListener("click",()=>{
    AsideBar.style.display="block"
});

//Close slide-Bar
 CloseBtn.addEventListener("click",()=>{
    AsideBar.style.display="none"
})
//schange theme-light/dark
ThemeToggle.addEventListener("click",()=>{
    
    document.body.classList.toggle("dark-theme-variables");
    
    ThemeToggle.querySelector("span:nth-of-type(1)").classList.toggle("active");
    ThemeToggle.querySelector("span:nth-of-type(2)").classList.toggle("active");

  })


//fill the table 

orders.forEach((item)=>{
    let tr=document.createElement("tr"),
    trContent=` 
    <td>${item.productName}</td>
    <td>${item.productNumber}</td>
    <td>${item.Payment}</td>
    <td class=${item.Status==='pending'?'waring':
    item.Status==='Delince'?'primary':'danger'}>${item.Status}</td>
    <td class=${item.Status==='pending'?'waring':
    item.Status==='Delince'?'primary':'danger'}>${item.Detials}</td>`;

    tr.innerHTML=trContent;
    document.querySelector("table tbody").appendChild(tr);
})

/*
//start the jquery option
$(Document).ready(function(){
    $(".sideBar a").hover(function(){ 
            $(this).addClass("active").siblings().removeClass("active");
        
    },function(){
        $(".sideBar a").removeClass("active");
    })
})
*/

