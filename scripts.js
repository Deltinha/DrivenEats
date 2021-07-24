function pickCard(card, optionType){
    const checkedCard = document.querySelector("." + optionType + " " + ".food__card__green-border"); //Look for a checked card in the respective group of cards.
    if (checkedCard !== null){
        checkedCard.classList.remove("food__card__green-border")
        checkedCard.querySelector("ion-icon").classList.add("checkmark-hidden");
    }

    card.classList.add("food__card__green-border")                       //Toggles green-border on selected card

    card.querySelector("ion-icon").classList.remove("checkmark-hidden");    //Toggles green-checkmark on selected card

    //função para verificar se as 3 opções estão selectionadas aqui
    //função para habilitar place order aqui
}