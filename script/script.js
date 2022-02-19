const showModal = (e) => {
    const { xeTarget } = e.target.dataset
    document.getElementById(xeTarget).classList.add("open")    
    document.getElementsByTagName("body")[0].classList.add("modal-open")
}

function dismissModal (e){
    const { target } = e;
    if(this.classList.contains("modal-close")){
        const activeModals = document.querySelectorAll(".modal.open")
        activeModals.forEach(modal => modal.classList.remove("open"))
        document.getElementsByTagName("body")[0].classList.remove("modal-open")
    }else if(target === this){
        this.classList.remove("open")
        document.getElementsByTagName("body")[0].classList.remove("modal-open")
    }
}

const modalToggle = document.querySelectorAll("button[data-xe-toggle]")
const modals = document.querySelectorAll(".modal");
const modalCloseBtns = document.querySelectorAll(".modal-close");

modalToggle.forEach(element => element.addEventListener('click', showModal));
modals.forEach(modal => modal.addEventListener('click', dismissModal));
modalCloseBtns.forEach(modal => modal.addEventListener('click', dismissModal));
