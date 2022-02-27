const root = document.documentElement;
const horizontalNav = document.querySelector(".horizontal-nav");
const threeLines = document.querySelector(".three-lines");
const verticalNav = document.querySelector(".vertical-nav");
const rootSet = root.style.setProperty.bind(root.style);

horizontalNav.addEventListener("mousemove",e=>{
    if (e.target.matches(".horizontal-nav")){
        rootSet("--horizontal-nav-before-width", "1rem");
        rootSet("--horizontal-nav-before-left",e.clientX + "px");
    }else{
        rootSet("--horizontal-nav-before-width", "0");
    }
});
horizontalNav.addEventListener("mouseleave", ()=>{
    rootSet("--horizontal-nav-before-width", "0");
});
document.addEventListener("click", e=>{
    if (e.target.matches(".dropdown-trigger")){
        if(e.target.classList.contains("dropdown1-trigger")){
            rootSet("--dropdown1-display","flex");
            rootSet("--dropdown7-scale",0.5);
            setTimeout(()=>{
                rootSet("--dropdown1-scale",1);
            },5);
            setTimeout(()=>{
                rootSet("--dropdown7-display","none");
            },100);
        }
        else{
            rootSet("--dropdown7-display","flex");
            rootSet("--dropdown1-scale",0.5);
            setTimeout(()=>{
                rootSet("--dropdown7-scale",1);
            },5);
            setTimeout(()=>{
                rootSet("--dropdown1-display","none");
            },100);
        }
    }
    else if(e.target.matches(".three-lines")){
        rootSet("--dark-overlay-background-color","rgba(0,0,0,0.4)");
            rootSet("--vertical-nav-translateX",0);

        rootSet("--dark-overlay-pointer-events","auto");
    }
    else{
        rootSet("--dropdown1-display","none");
        rootSet("--dropdown1-scale",0.5);
        rootSet("--dropdown7-display","none");
        rootSet("--dropdown7-scale",0.5);
        rootSet("--dark-overlay-background-color","rgba(0,0,0,0)");
        rootSet("--vertical-nav-translateX","-100%");
        rootSet("--dark-overlay-pointer-events","none");
    }
});


