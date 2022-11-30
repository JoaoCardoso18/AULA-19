function decimalToBinario(decimal){
    var binario = "";
    var temp = decimal;
 
    while(temp > 0){
        if(temp % 2 == 0){
            binario = "0" + binario;
        }
        else {
            binario = "1" + binario;
        }

        temp = Math.floor(temp / 2);
    }

    return binario;
}