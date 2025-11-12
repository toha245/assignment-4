function validEmail(email){
    if(typeof email !== 'string'){
        return 'Invalid';
    }
    else if(email !== email.toLowerCase()){
        return false;
    }
    else if(email[0] === '.' || email[0] === '-' || email[0] === '_' || email[0] === '+' || email[0] === '@'){
        return false;
    }
    else if(!email.includes('@')){
        return false;
    }
    else if(email.split('@').length - 1 !== 1){
        return false;
    }
    else if(email.includes(' ')){
        return false;
    }
    else if(!email.endsWith('.com')){
        return false;
    }
    else{
        return true;
    }
}
// const result = validEmail('tohamd245@gmail.com');
// console.log(result);
