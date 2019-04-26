var input = document.getElementById('in');
var output = document.getElementById('op');
var table = [/*' ', '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ':', ';', '<', '=', '>', '?', '@',*/ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '[', "\\", ']', '^', '_', '`', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '{', '|', '}', '~', 'DEL'];
var arr = [];
var barr = [];
var y = [];
var m;
var result;
var strr
var less = true;
var tafcha;
console.log(table);

function reverse_string(string) {

    return string.split('').reverse().join('');

}

function reset() { y = []; result = ''; console.log(result, strr, y); strr = ''; arr = []; barr = [];less = false; }
function test() {

    reset();
    var neww = input.value;

    strr = reverse_string(neww);
    console.log(strr);


    for (let i = 0; i < strr.length; i++) {
        arr.push(table.indexOf(strr[i]));
        barr.push(arr[i] + 65);
    }
    console.log(barr);
    for (let j = 0; j < barr.length; j++) {

        while (barr[j] > 0) {
            m = barr[j] % 2;
            barr[j] = Math.floor(barr[j] / 2);
            y.push(m);
            if (barr[j] < 64)
                less = false;
            else
                less = true;


        }
    }
    result = y.reverse().join('');
     tafcha = insert(result.match(/.{1,7}/g).join('0'), '0', 0);
    console.log(tafcha);

    //if (less) {
      //  output.innerHTML = insert(result.match(/.{1,6}/g).join('0'), '00', 0);
    //} else {
        output.innerHTML = tafcha;
    //}
    console.log("01101101011001010110010001100001011011010110100101101110");
}

function insert(main_string, ins_string, pos) {
    if (typeof (pos) == "undefined") {
        pos = 0;
    }
    if (typeof (ins_string) == "undefined") {
        ins_string = '';
    }
    return main_string.slice(0, pos) + ins_string + main_string.slice(pos);
}

function isNumberKey(evt) {
    var charCode = (evt.which) ? evt.which : evt.keyCode
    return !(charCode > 32 && (charCode < 65 || charCode > 127));
  }