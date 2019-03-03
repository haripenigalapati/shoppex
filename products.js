class Products{
    constructor(){
        this.productDetails = []
        this.totalPrice=0;
        this.isFormInvalid = false;
    }
   
    validateForm() {
        domElements.formInputCollection.forEach((element)=>{
          this.dynamicValidation({
              htmlElement: element.htmlElement,
              validatorMessage: element.validatorMessage,
              validatorPattern: element.validatorPattern
          });
        });
    }








addProducts() {
    this.validateForm();
    if(!this.isFormInvalid){
    console.log("adding products");
    const productsValue = {
        productName : domElements.productName.querySelector('input').value,
        productNumber : domElements.productNumber.querySelector('input').value,
        productPrice : domElements.productPrice.querySelector('input').value,
        productImage : domElements.productImage.querySelector('input').value,
        productDescription : domElements.productDescription.querySelector('input').value,
    }
    this.productDetails.push(productsValue);
    if(this.productDetails.length > 0){
          this.showProducts();

    }
}
}
showProducts(){
        domElements.listProducts.innerHTML = "";
        this.productDetails.forEach((element)=>{
        console.log(element);
        domElements.noproduct.style = "display:none";
        domElements.listProducts.style = "display:block";
        domElements.listProducts.insertAdjacentHTML("beforeend",
         `<div class="list-wrap" onClick="products.showMoreDesc(this)">
             <div class="list-image" style="background-image:url('`+element.productImage+`')">
                <img src="`+element.productImage+`"></img>
             </div>
             <div class="list-desc">
                <h2>`+element.productName+`</h2>
                <h3>Rs.`+element.productPrice+`</h3>
                <p>`+element.productDescription+`</p>
             </div>
         </div>`
        
        )
});
this.showTotal();
}
showMoreDesc(event){
    event.classList.add('showMore');
}
 showTotal(){
    this.totalPrice=this.productDetails.map(obj =>obj.productPrice).reduce((acc,next)=> parseInt(acc)+ parseInt(next));
    domElements.listProducts.insertAdjacentHTML("beforeend",
    `<div class="total-price">
         <h3>Total Price : `+this.totalPrice+`</h3>
    </div>`
    )};

    dynamicValidation(params) {
        const htmlElement = params.htmlElement;
        const validatorMessage = params.validatorMessage;
        const validatorPattern = params.validatorPattern;
        const validatorPatternResult = validatorPattern === undefined ? false : !validatorPattern.test(htmlElement.value);
        if (htmlElement.value === '' || validatorPatternResult) {
            this.isFormInvalid = true;
            document.getElementById(`${htmlElement.getAttribute('id')}_error`).innerHTML = validatorMessage;
        } else {
            this.isFormInvalid = false;
            document.getElementById(`${htmlElement.getAttribute('id')}_error`).innerHTML = "";
        }
    }

}

 
 products= new Products();