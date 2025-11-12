function cashOut (money){
    if(typeof money !== 'number'){
        return 'Invalid';
    }
    else if(money <= 0){
        return 'Invalid';
    }
    else{
        const cashOutCharge = money * 1.75 / 100;
        return cashOutCharge;
    }
}

// const result = cashOut(2000);
// console.log(result);