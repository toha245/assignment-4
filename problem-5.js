function calculateWatchTime(times) {

    // checking array or not
    if(!Array.isArray(times)) {
        return "Invalid";
    }

    // checking every element must be number
    for(let t of times){
        if(typeof t !== 'number'){
            return "Invalid";
        }
    }

    // calculate total seconds
    let totalSecond = 0;
    for(let i of times){
        totalSecond += i;
    }

    // convert to hour → minute → second
    const hours = Math.floor(totalSecond / 3600);

    const remaining = totalSecond % 3600;   // ঘণ্টা বাদে বাকি

    const minutes = Math.floor(remaining / 60);

    const seconds = remaining % 60;

    return { hour: hours, minute: minutes, second: seconds };
}


const seconds = [10000, 500, 200];
const result = calculateWatchTime(seconds);
console.log(result);