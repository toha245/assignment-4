function isBestFriend (friend1, friend2){
    // checking is input an object?
    if(typeof friend1 !== 'object' || friend1 === null || Array.isArray(friend1)){
        return "Invalid";
    }
    else if(typeof friend2 !== 'object' || friend2 === null || Array.isArray(friend2)){
        return "Invalid";
    }
    // checking are they best friend?
    else if(friend1.bestFriend === friend2.roll && friend2.bestFriend === friend1.roll){
        return true;
    }
    else{
        return false;
    }

}


// const friends1 = {
//     name: 'abul', roll: 2, bestFriend: 1
// };
// const friends2 = {
//     name:'babul', roll: 1, bestFriend: 2
// };
// const result = isBestFriend(friends1, friends2);
// console.log(result);


// if (typeof friends1 === 'object' && friends1 !== null && !Array.isArray(friends1)) {
//     console.log('It is a valid object');
// } else {
//     console.log('Not an object');
// }