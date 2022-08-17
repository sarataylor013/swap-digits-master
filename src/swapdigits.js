const swapDigits = (number)=>{
    let swappedNumber = 0
    //write logic here
    var sNumber = number.toString();
    const len = sNumber.length;
    var tempStr = "";

    if(len == 1){
        swappedNumber = number;
    }
    else if(number<0){
        swappedNumber = 0
    }
    else if(len%2 == 0){
        console.log("here")
        for(let n = 0; n<len; n=n+2){
            tempStr += sNumber[n+1];
            tempStr += sNumber[n];
        }
        swappedNumber = parseInt(tempStr);
    }
    else{
        tempStr += sNumber[0];
        for(let n = 1; n<len; n=n+2){
            tempStr += sNumber[n+1];
            tempStr += sNumber[n];
        }
        swappedNumber = parseInt(tempStr);
    }
    return swappedNumber;
    
}

module.exports = swapDigits
