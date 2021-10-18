// Code your solution in this file!
const hq = 42

function distanceFromHqInBlocks(location){
    return Math.abs (location - hq); 
}

function distanceFromHqInFeet(location) {
    distanceFromHqInBlocks(location);
    return (Math.abs (location - hq) * 264);
}

function distanceTravelledInFeet (hq, location){
    distanceFromHqInBlocks(location);
    return (Math.abs (location - hq) * 264);
}

const calculatesFarePrice = (sBlock, eBlock) => {
    let ride = distanceTravelledInFeet(sBlock, eBlock);

    if (ride <= 400) {
        return 0;
    } else if (ride <= 2000) {
        return (ride - 400) * 0.02;
    } else if (ride <= 2500) {
        return 25;
    } else {
        return 'cannot travel that far';
    }
}

