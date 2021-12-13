function convert(amount, expectedOutputFormat){
    
    if(expectedOutputFormat === 'kb'){
        amount = (amount*0.001).toFixed(3);
    }
    

    if(expectedOutputFormat === 'mb'){
        amount = (amount/1000*0.001).toFixed(3);
    }

    return Number(amount);
    
}



console.log( convert(1000,"kb") );


module.exports = {convert}

