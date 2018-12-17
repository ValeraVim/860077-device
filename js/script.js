var contactsBtn = document.querySelector(".contacts__btn");      
var modalWrite = document.querySelector(".modal_write-us");
var closeWrite = modalWrite.querySelector(".modal__close");

var contactsMap = document.querySelector(".contacts__map");      
var modalMap = document.querySelector(".modal_map");
var closeMap = modalMap.querySelector(".modal__close");

var deliveryBtn = document.querySelector(".services__tabs-bar-btn_delivery");
var warrantyBtn = document.querySelector(".services__tabs-bar-btn_warranty");  
var creditBtn = document.querySelector(".services__tabs-bar-btn_credit");
var delivery = document.querySelector(".services__tabs-item_delivery"); 
var warranty = document.querySelector(".services__tabs-item_warranty");  
var credit = document.querySelector(".services__tabs-item_credit"); 

contactsBtn.addEventListener ("click", function (evt) {
    evt.preventDefault();
    modalWrite.classList.add("modal_open");
});
      
closeWrite.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalWrite.classList.remove("modal_open");
});

contactsMap.addEventListener ("click", function (evt) {
    evt.preventDefault();
    modalMap.classList.add("modal_open");
});
          
closeMap.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalMap.classList.remove("modal_open");
});

deliveryBtn.addEventListener ("click", function (evt) {
    evt.preventDefault();

    deliveryBtn.classList.add("services__tabs-bar-btn_active");
    warrantyBtn.classList.remove("services__tabs-bar-btn_active");
    creditBtn.classList.remove("services__tabs-bar-btn_active");


    delivery.classList.remove("services__tabs-item_close");
    warranty.classList.add("services__tabs-item_close");
    credit.classList.add("services__tabs-item_close");
});

warrantyBtn.addEventListener ("click", function (evt) {
    evt.preventDefault();
        
    warrantyBtn.classList.add("services__tabs-bar-btn_active");
    deliveryBtn.classList.remove("services__tabs-bar-btn_active");
    creditBtn.classList.remove("services__tabs-bar-btn_active");
    
    warranty.classList.remove("services__tabs-item_close");
    delivery.classList.add("services__tabs-item_close");
    credit.classList.add("services__tabs-item_close");
});

creditBtn.addEventListener ("click", function (evt) {
    evt.preventDefault();
            
    creditBtn.classList.add("services__tabs-bar-btn_active");
    deliveryBtn.classList.remove("services__tabs-bar-btn_active");
    warrantyBtn.classList.remove("services__tabs-bar-btn_active");
     
    credit.classList.remove("services__tabs-item_close");
    delivery.classList.add("services__tabs-item_close");
    warranty.classList.add("services__tabs-item_close");
});
