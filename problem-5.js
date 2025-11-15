function calculateWatchTime(times) {
    let totalSecond = 0;
    // checking array or non array
    if(!Array.isArray(times)){
        return 'Invalid';
    }
    // calculating watch times
    for(let i of times){
        totalSecond += i;
    }
    // final watch time
    const hours = Math.floor(totalSecond / 3600);
    const minutes = Math.floor(totalSecond / 60);
    const seconds = totalSecond % 60;

    return {hour: hours, minute: minutes, second: seconds};
}



// const seconds = [600, 500, 200];
// const result = calculateWatchTime(seconds);
// console.log(result);