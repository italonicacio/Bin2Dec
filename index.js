function BinaryToDecimal() {
    var binary = document.getElementById("value").value;
    var decimal = 0;

    for(i = binary.length - 1; i >= 0; i--) {
        if( binary[i] === "1" || binary[i] === "0")
        {
            if( binary[i] == "1") {
                decimal += Math.pow(2, (binary.length-1)-i );
            }
        } else {
            alert("Não é um número binário");
            break;
        }
            
    }
    
    document.getElementById("result").value = decimal;

}