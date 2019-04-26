var kase = 0;

function convertion() {
    switch (kase) {

        case 0:
            test();
            break;
        case 1:
            genius();
            break;
    }

}

function cwap() {

    if (kase == 0) {
        kase++;
    } else {
        kase--;
    }
    let h = input.value;
    input.value = output.innerHTML;
    output.innerHTML = h;
}