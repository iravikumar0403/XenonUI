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
    const prevActive = document.querySelector(".sidebar-menu-item.active")
    prevActive && prevActive.classList.remove('active')

    const currentActive = document.querySelector(`a[href="#${currentHash}"]`)
    currentActive.parentElement.classList.add('active')
}