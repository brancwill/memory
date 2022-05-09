import iconArray from "./iconArray"

export default function iconBoardCreation(numPieces) {
    //Declare variables
    const firstArray = []
    const randomArray = []

    //Make an array with number of pieces needed
    switch (numPieces) {
        case 16:
            for(let i = 0; i <= 7; i++) {
                firstArray.push(iconArray[i])
                firstArray.push(iconArray[i])
            }
            break
        case 36:
            for(let i = 0; i <= 17; i++) {
                firstArray.push(iconArray[i])
                firstArray.push(iconArray[i])
            }
            break
        default:
            return
    }
    //Create randomized array
    do {
        let num = Math.floor(Math.random() * firstArray.length)
        randomArray.push({value: firstArray[num]})
        firstArray.splice(num, 1)
    } while (firstArray.length > 0);
    
    //Return randomized array
    return randomArray
}