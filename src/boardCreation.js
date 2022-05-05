export default function boardCreation(numPieces) {
    //Declare variables
    const firstArray = []
    const randomArray = []

    //Make an array with number of pieces needed
    switch (numPieces) {
        case 16:
            for(let i = 1; i <= 8; i++) {
                firstArray.push(i)
                firstArray.push(i)
            }
            break
        case 36:
            for(let i = 1; i <= 18; i++) {
                firstArray.push(i)
                firstArray.push(i)
            }
            break
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