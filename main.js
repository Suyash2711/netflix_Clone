const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

//Select tab Content Item
function selectItem(e){
    removeBorder();
    removeShow();
    //Add Border to currnt tab
    this.classList.add('tab-border');
    //Grab Content Items from the DOM
    const tabContentItem = document.querySelector(`#${this.id}-content`);
    //Add Show Class
    tabContentItem.classList.add('show');
}

function removeBorder(){
    tabItems.forEach(item => item.classList.remove('tab-border'));
}

function removeShow(){
    tabContentItems.forEach(item => item.classList.remove('show'));
}
//Listen for Tab Click
tabItems.forEach(item => item.addEventListener('click', selectItem));