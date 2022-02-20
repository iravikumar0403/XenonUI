(()=>{
    const showModal = event => {
        const { xeTarget } = event.target.dataset;
        document.getElementById(xeTarget).classList.add("open"); 
        document.getElementsByTagName("body")[0].classList.add("modal-open");
    }
    
    const dismissModal = event => {
        const { target } = event;
        if(this.classList.contains("modal-close")){
            const activeModals = document.querySelectorAll(".modal.open");
            activeModals.forEach(modal => modal.classList.remove("open"));
            document.getElementsByTagName("body")[0].classList.remove("modal-open");
        }else if(target === this){
            this.classList.remove("open");
            document.getElementsByTagName("body")[0].classList.remove("modal-open");
        }
    }
    
    const modalToggle = document.querySelectorAll("button[data-xe-toggle='modal']");
    const modals = document.querySelectorAll(".modal");
    const modalCloseBtns = document.querySelectorAll(".modal-close");
    
    modalToggle.forEach(element => element.addEventListener('click', showModal));
    modals.forEach(modal => modal.addEventListener('click', dismissModal));
    modalCloseBtns.forEach(modal => modal.addEventListener('click', dismissModal));
})();

(()=>{
    const showToast = event => {
        const { xeTarget } = event.target.dataset;
        const targetElem = document.getElementById(xeTarget)
        targetElem.classList.add("visible");
        timer = setTimeout(()=>{
            targetElem.classList.remove("visible");
        }, 3000)
    }

    const toastToggle = document.querySelectorAll("button[data-xe-toggle='toast']");
    toastToggle.forEach(element => element.addEventListener('click', showToast));
})();
