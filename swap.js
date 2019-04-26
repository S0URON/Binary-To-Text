var newTfacha = [];
var gen = [];
var s = 0;
var resultat = [];
function swap(_arr) {
    console.log(_arr);
    input.value = _arr ;
    for (let i = 0; i < _arr.length; i += 8) {

        newTfacha.push(_arr.substring(i, 8 + i));

    }
    console.log(newTfacha);

}
function reverseString(str) {
    return str.split("").reverse().join("");
}

function convertToDecimal(_input) {

    let x = _input.toString();
    let i = reverseString(x);
    let _output = [];


    for (let r = 0; r < i.length; r++) {
        _output.push(+i.charAt(r));
    }

    for (let j = _output.length - 1; j >= 0; j--) {

        if (_output[j] == 0 || _output[j] == 1) {
            s += Math.pow(2, j) * _output[j];
            //output.innerHTML = s;
            console.log("j :", j);
        }
        else {
            console.log("errrorrroororor");
            //output.innerHTML = "err";
        }
    }

    console.log(_output);
    console.log(s);


}
function genius() {
    output.innerHTML = '';
    swap(input.value);
    input.innerHTML = '';
    for (let i = 0; i < newTfacha.length; i++) {
        convertToDecimal(newTfacha[i]);
        gen.push(s);
        s = 0;

    }
    console.log(gen);
    f();
    newTfacha = [];
    gen = [];
    resultat = [];

}

function f() {

    for(let i = 0; i < gen.length;i++){

        resultat.push(table[gen[i]-65]);

    }
    output.innerHTML = resultat.join('');
}