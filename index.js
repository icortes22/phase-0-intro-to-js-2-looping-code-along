function writeCards(array, feeling){
    let emptyCards = []
    for(let i = 0; i < array.length; i++){
        emptyCards.push(`Thank you, ${array[i]}, for the wonderful ${feeling} gift!`)
    }
    return emptyCards
}
function countDown(number){
    while (number > 0){
        console.log(number)
        number -= 1 
    }
    console.log(number)
}