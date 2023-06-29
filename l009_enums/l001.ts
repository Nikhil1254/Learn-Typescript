/**
 * 1. if we just have enum it will create a lot of js code
 * 2. if we use const enum if will just create what is needed in js
 */

enum seatChoice{
    AISLE,
    MIDDLE,
    WINDOW
}

enum seatChoice1{
    AISLE = 10,
    MIDDLE = 22,
    WINDOW,
    FOURTH
}

const enum seatChoice2{
    AISLE = "aisle",
    MIDDLE = "middle",
    WINDOW = 0,
    FOURTH 
}

const hcSeat = seatChoice.MIDDLE;
const seat = seatChoice2.AISLE;