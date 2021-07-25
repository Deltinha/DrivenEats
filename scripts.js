let mainChecked;        //These variables will store the elements of the choosen cards
let drinkChecked;
let dessertChecked;

function pickCard(card, optionType){
    const checkedCard = document.querySelector("." + optionType + " " + ".food__card__green-border"); //Look for a checked card in the respective group of cards.
    if (checkedCard !== null){
        checkedCard.classList.remove("food__card__green-border")
        checkedCard.querySelector("ion-icon").classList.add("checkmark-hidden");
    }

    card.classList.add("food__card__green-border")                       //Add green-border on selected card

    card.querySelector("ion-icon").classList.remove("checkmark-hidden");    //Remove green-checkmark on selected card

    enablePlaceOrder();
}

function enablePlaceOrder(){
    mainChecked = document.querySelector(".food__main .food__card__green-border");          //Look for one checked element in each group of cards.
    drinkChecked = document.querySelector(".food__drink .food__card__green-border");
    dessertChecked = document.querySelector(".food__dessert .food__card__green-border");

    if (mainChecked!==null && drinkChecked!==null && dessertChecked!==null) {
        document.querySelector(".place-order__button").classList.add("place-order__button--green");
        document.querySelector(".place-order__button__text").innerHTML = "Fechar pedido";
 
        document.querySelector(".place-order__button").setAttribute("onclick","")
 
        
     } 
}