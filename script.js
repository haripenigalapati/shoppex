class DomElements{
    constructor(){
        this.submitbtn = document.querySelector('input[type="submit"]');
        this.noproduct = document.querySelector("#no-product");
        this.listProducts = document.querySelector('.list-product-details');
        this.productName=document.querySelector('.product-name');
        this.productNumber=document.querySelector('.product-number');
        this.productPrice=document.querySelector('.product-price');
        this.productImage=document.querySelector('.product-image');
        this.productDescription=document.querySelector('.product-discription');
        this.formInputCollection = [
            {
                htmlElement: this.productName.querySelector('input'),
                validatorMessage: "please enter Product Name"
            },
            {
                htmlElement: this.productNumber.querySelector('input'),
                validatorMessage: "please enter valid Product Number",
                validatorPattern: /^\d+$/
            },
            {
                htmlElement: this.productPrice.querySelector('input'),
                validatorMessage: "please enter valid Product Price",
                validatorPattern: /^\d+$/
            },
            {
                htmlElement: this.productImage.querySelector('input'),
                validatorMessage: "please enter valid Product Image URL",
                validatorPattern:/(http(s?):)([/|.|\w|\s|-])*.(?:jpg|gif|png|svg|)/
            },
                
 
                 
 
                 
 








        ];
        this.setInitialStyling();
    }
    setInitialStyling(){
        this.noproduct.style = "display:block";
        this.listProducts.style = "display:none";
    }
}
const domElements = new DomElements();
 
class Events {
    static addEventListener() {
        if(domElements.submitbtn != null){
            domElements.submitbtn.addEventListener("click",(event)=>{
                event.preventDefault();
                products.addProducts();
            });
        }
        domElements.formInputCollection.forEach( (element) => {
            element.htmlElement.addEventListener("keyup", () => {
                products.dynamicValidation({
                    htmlElement: element.htmlElement,
                    validatorMessage: element.validatorMessage,
                    validatorPattern: element.validatorPattern
                });
            });
        });
    }
}
Events.addEventListener();

