window.addEventListener('hashchange', (e)=>{
    const currentHash = e.newURL.split("#")[1]
    setActivePage(currentHash)
})

window.onload = () => {
    if(window.location.hash){
        currentHash = window.location.hash.slice(1)
        setActivePage(currentHash)
    }else{
        setActivePage("avatar")
    }
}

function setActivePage(currentHash){
    window.scrollTo(0,0)
    const prevActive = document.querySelector(".sidebar-menu-item.active")
    prevActive && prevActive.classList.remove('active')
    const divs = document.querySelectorAll("main > div")
    for(let i=0;i<divs.length;i++){
        divs[i].style.display = "none"
    }

    const currentActive = document.querySelector(`a[href="#${currentHash}"]`)
    currentActive.parentElement.classList.add('active')
    document.getElementById(currentHash).style.display = "block"
}

const menuBtn = document.querySelector(".nav-menu-resp")
menuBtn.addEventListener('click', ()=>{
    const sideNav = document.querySelector(".sidebar");
    sideNav.classList.toggle("show");
    menuBtn.children[0].classList.toggle("fa-times")
})