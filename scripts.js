let mainChecked;        //These variables will store the elements of the choosen cards
let drinkChecked;
let dessertChecked;

let mainPrice;
let drinkPrice;
let dessertPrice;
let totalPrice;

let mainName;
let drinkName;
let dessertName;


let orderButton = document.querySelector(".white-background"); 

function pickCard(card, optionType){
    const checkedCard = document.querySelector("." + optionType + " " + ".food__card__green-border"); //Look for a checked card in the respective group of cards.
    if (checkedCard !== null){
        checkedCard.classList.remove("food__card__green-border")
        checkedCard.querySelector("ion-icon").classList.add("hidden");
    }

    card.classList.add("food__card__green-border")                       //Add green-border on selected card

    card.querySelector("ion-icon").classList.remove("hidden");    //Remove green-checkmark on selected card

    enablePlaceOrder();
}

function enablePlaceOrder(){
    mainChecked = document.querySelector(".food__main .food__card__green-border");          //Look for one checked element in each group of cards.
    drinkChecked = document.querySelector(".food__drink .food__card__green-border");
    dessertChecked = document.querySelector(".food__dessert .food__card__green-border");

    if (mainChecked!==null && drinkChecked!==null && dessertChecked!==null) {
        document.querySelector(".place-order__button").classList.add("place-order__button--green");
        document.querySelector(".place-order__button__text").innerHTML = "Fechar pedido";
 
        document.querySelector(".place-order__button").setAttribute("onclick","placeOrder();");
        
     } 
}

function placeOrder(){
    orderButton.classList.remove("hidden");
    findValues();
    updateValues();
    
}

function cancelOrder(){
    orderButton.classList.add("hidden");
}

function findValues(){
    mainPrice = Number(mainChecked.querySelector(".food__price__value").innerHTML.replace(',','.'));
    drinkPrice = Number(drinkChecked.querySelector(".food__price__value").innerHTML.replace(',','.'));
    dessertPrice  = Number(dessertChecked.querySelector(".food__price__value").innerHTML.replace(',','.'));

    totalPrice = (mainPrice + drinkPrice + dessertPrice).toFixed(2);

    mainName = mainChecked.querySelector(".food__name").innerHTML;
    drinkName = drinkChecked.querySelector(".food__name").innerHTML;
    dessertName = dessertChecked.querySelector(".food__name").innerHTML;
}

function updateValues(){
    document.querySelector(".main--name").innerHTML = mainName;
    document.querySelector(".drink--name").innerHTML = drinkName;
    document.querySelector(".dessert--name").innerHTML = dessertName;
   
    document.querySelector(".main--value").innerHTML = mainPrice;
    document.querySelector(".main--value").innerHTML = document.querySelector(".main--value").innerHTML.replace('.',',');

    document.querySelector(".drink--value").innerHTML = drinkPrice;
    document.querySelector(".drink--value").innerHTML = document.querySelector(".drink--value").innerHTML.replace('.',',');
    
    document.querySelector(".dessert--value").innerHTML = dessertPrice;
    document.querySelector(".dessert--value").innerHTML = document.querySelector(".dessert--value").innerHTML.replace('.',',');

    document.querySelector(".total--value").innerHTML = totalPrice;
    document.querySelector(".total--value").innerHTML = document.querySelector(".total--value").innerHTML.replace('.',',');
}