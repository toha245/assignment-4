function electionResult(electionChart){
    // checking: is may input array or non array?
    if(Array.isArray(electionChart) === false){
        return 'Invalid';
    }

    // counting vote
    let resultCount = {};
    for(let item of electionChart){
        if(resultCount[item]){
            resultCount[item]++;
        }
        else{
            resultCount[item] = 1;
        }
    }

    // winning condition
    if(resultCount['mango'] > resultCount['banana']){
        return 'Mango';
    }
    else if(resultCount['banana'] > resultCount['mango']){
        return 'Banana';
    }
    else{
        return 'Draw';
    }
}

// const result = electionResult(['mango', 'banana', 'mango', 'banana', 'na_vote', 'banana', 'mango', 'mango']);
// console.log(result);