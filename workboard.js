


function binaryAgent(str) {
    // Removes the spaces from the binary string
    str = str.replace(/\s+/g, '');
    // Pretty (correct) print binary (add a space every 8 characters)
    str = str.match(/.{1,8}/g).join(" ");

    var newBinary = str.split(" ");
    var binaryCode = [];

    for (var i = 0; i < newBinary.length; i++) {
        binaryCode.push(String.fromCharCode(parseInt(newBinary[i], 2)));
    }
    
    return binaryCode.join("");
}

function myFunction(){
document.getElementById("demo").innerHTML = binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
}