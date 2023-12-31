var nval1 = document.getElementById("val1");
var nval2 = document.getElementById("val2");
var turingVal = [];
var turingVal2 = [];
var i;
var j;
var k;
var l;
var result = 0;
var nowState = 0;
var acceptingState = 10;
var activeState = document.getElementsByClassName("state-active");
var trTape = document.getElementById("turing_tape");
var trTape2 = document.getElementById("turing_tape2");
var dispState = document.getElementById("show-state-now");
var dispAnswer = document.getElementById("show-answer");
var stepController = document.getElementById("controller_step");
var animateController = document.getElementById("controller_animate");
var skipController = document.getElementById("controller_skip");
var initController = document.getElementById("init_step");
var skipController = document.getElementById("controller_skip");
var acceptingState = 10;

function init() {
    trDelete();

    //positif - positif
    if (nval1.value >= 0 && nval2.value >= 0) {
        for (i = 0; i < 2; i++) {
            turingVal.push(new createState("B"));
            turingVal2.push(new createState2("B"));
        }
        if (nval1.value > 0) {
            turingVal.push(new createState("X"));
            turingVal2.push(new createState2("B"));
        }
        for (i = 0; i < nval1.value; i++) {
            turingVal.push(new createState("0"));
            turingVal2.push(new createState2("B"));
        }
        turingVal.push(new createState("1"));
        turingVal2.push(new createState2("B"));
        if (nval2.value > 0) {
            turingVal.push(new createState("X"));
            turingVal2.push(new createState2("B"));
        }
        for (i = 0; i < nval2.value; i++) {
            turingVal.push(new createState("0"));
            turingVal2.push(new createState2("B"));
        }
        for (i = 0; i < 2; i++) {
            turingVal.push(new createState("B"));
            turingVal2.push(new createState2("B"));
        }
        trTape.childNodes[2].classList.add("state-active");
        trTape2.childNodes[2].classList.add("state-active");
    }

    //positif x negatif
    else if (nval1.value >= 0 && nval2.value <= 0) {
        for (i = 0; i < 2; i++) {
            turingVal.push(new createState("B"));
            turingVal2.push(new createState2("B"));
        }
        if (nval1.value > 0) {
            turingVal.push(new createState("X"));
            turingVal2.push(new createState2("B"));
        }
        for (i = 0; i < nval1.value; i++) {
            turingVal.push(new createState("0"));
            turingVal2.push(new createState2("B"));
        }
        turingVal.push(new createState("1"));
        turingVal2.push(new createState2("B"));
        if (nval1.value == 0) {
            turingVal.push(new createState("X"));
            turingVal2.push(new createState2("B"));
        } else {
            turingVal.push(new createState("Y"));
            turingVal2.push(new createState2("B"));
        }
        for (i = 0; i > nval2.value; i--) {
            turingVal.push(new createState("0"));
            turingVal2.push(new createState2("B"));
        }
        for (i = 0; i < 2; i++) {
            turingVal.push(new createState("B"));
            turingVal2.push(new createState2("B"));
        }
        trTape.childNodes[2].classList.add("state-active");
        trTape2.childNodes[2].classList.add("state-active");
    }

    //negatif x positif
    else if (nval1.value <= 0 && nval2.value >= 0) {
        for (i = 0; i < 2; i++) {
            turingVal.push(new createState("B"));
            turingVal2.push(new createState2("B"));
        }
        if (nval1.value < 0) {
            turingVal.push(new createState("X"));
            turingVal2.push(new createState2("B"));
        }
        for (i = 0; i > nval1.value; i--) {
            turingVal.push(new createState("0"));
            turingVal2.push(new createState2("B"));
        }
        turingVal.push(new createState("1"));
        turingVal2.push(new createState2("B"));
        if (nval2.value > 0) {
            turingVal.push(new createState("Y"));
            turingVal2.push(new createState2("B"));
        }
        for (i = 0; i < nval2.value; i++) {
            turingVal.push(new createState("0"));
            turingVal2.push(new createState2("B"));
        }
        for (i = 0; i < 2; i++) {
            turingVal.push(new createState("B"));
            turingVal2.push(new createState2("B"));
        }
        trTape.childNodes[2].classList.add("state-active");
        trTape2.childNodes[2].classList.add("state-active");
    }

    //negatif-negatif
    else if (nval1.value <= 0 && nval2.value <= 0) {
        for (i = 0; i < 2; i++) {
            turingVal.push(new createState("B"));
            turingVal2.push(new createState2("B"));
        }
        if (nval1.value < 0) {
            turingVal.push(new createState("X"));
            turingVal2.push(new createState2("B"));
        }
        for (i = 0; i > nval1.value; i--) {
            turingVal.push(new createState("0"));
            turingVal2.push(new createState2("B"));
        }
        turingVal.push(new createState("1"));
        turingVal2.push(new createState2("B"));
        if (nval2.value < 0) {
            turingVal.push(new createState("X"));
            turingVal2.push(new createState2("B"));
        }
        for (i = 0; i > nval2.value; i--) {
            turingVal.push(new createState("0"));
            turingVal2.push(new createState2("B"));
        }
        for (i = 0; i < 2; i++) {
            turingVal.push(new createState("B"));
            turingVal2.push(new createState2("B"));
        }
        trTape.childNodes[2].classList.add("state-active");
        trTape2.childNodes[2].classList.add("state-active");
    }
    j = 2;
    state = 0;
    k = 2;
    state = 0;
}

function createState(val) {
    this.val = val;
    var item = document.createElement("p");
    var n = document.createTextNode(this.val);
    item.appendChild(n);
    trTape.appendChild(item);
    this.replaceWith = function (newValue) {
        this.val = newValue;
    };
}
function createState2(val2) {
    this.val = val2;
    var item2 = document.createElement("p");
    var n2 = document.createTextNode(this.val);
    item2.appendChild(n2);
    trTape2.appendChild(item2);
    this.replaceWith = function (newValue) {
        this.val = newValue;
    };
}

function createMostLeftNode(val) {
    this.val = val;
    var item = document.createElement("p");
    var n = document.createTextNode(this.val);
    item.appendChild(n);
    trTape.insertBefore(item, trTape.firstChild);
    this.replaceWith = function (newValue) {
        this.val = newValue;
    };
}

function createMostLeftNode2(val2) {
    this.val = val2;
    var item2 = document.createElement("p");
    var n2 = document.createTextNode(this.val);
    item2.appendChild(n2);
    trTape2.insertBefore(item2, trTape2.firstChild);
    this.replaceWith = function (newValue) {
        this.val = newValue;
    };
}

function displayAnswer() {
    let result = 0;
    let hasY = false;
    if (nval1.value == 0 && nval2.value >= 0) {
        for (let i = 0; i < turingVal2.length; i++) {
            console.log(turingVal2.length);
            if (turingVal2[i].val === "Y") {
                hasY = true;
            }

            if (turingVal2[i].val === "0" && !hasY) {
                result++;
            } else if (turingVal2[i].val === "0" && hasY) {
                result--;
            }
        }
    } else if (nval1.value > 0) {
        console.log(nval1);
        for (let i = 0; i < turingVal2.length; i++) {
            console.log(turingVal2.length);
            if (turingVal2[i].val === "Y") {
                hasY = true;
            }

            if (turingVal2[i].val === "0" && !hasY) {
                result++;
            } else if (turingVal2[i].val === "0" && hasY) {
                result--;
            }
        }
    } else {
        console.log(nval2);
        for (let i = 0; i < turingVal2.length; i++) {
            console.log(turingVal2.length);
            if (turingVal2[i].val === "Y") {
                hasY = true;
            }

            if (turingVal2[i].val === "0" && !hasY) {
                result--;
            } else if (turingVal2[i].val === "0" && hasY) {
                result++;
            }
        }
    }
    dispAnswer.value = result;
}

function displayState(str) {
    dispState.textContent = str;
}

function trDelete() {
    dispState.textContent = "null";
    dispAnswer.value = "?";
    trTape.innerHTML = "";
    trTape2.innerHTML = "";
    turingVal = [];
    turingVal2 = [];
    result = 0;
    stepController.disabled = false;
}

function step() {
    if (turingVal.length) {
        for (i = 0; i < activeState.length; i++) {
            activeState[i].classList.remove("state-active");
            activeState[i].classList.remove("state-active");
        }
    }
    finished = 0;
    //nowState,oldvalue1,oldvalue2 | nextState,newvalue1,newvalue2,dir1,dir2,dir3,addblank

    transition(0, "X", "B", 1, "B", "B", "R", "S");
    transition(0, "1", "B", 8, "B", "B", "R", "S");
    transition(1, "0", "B", 1, "B", "0", "R", "R");
    transition(1, "1", "B", 2, "B", "B", "R", "S");
    transition(2, "Y", "B", 3, "B", "B", "R", "S");
    transition(2, "X", "B", 6, "B", "B", "R", "L");
    transition(2, "B", "B", 4, "B", "B", "S", "L");
    transition(3, "0", "B", 3, "B", "0", "R", "R");
    transition(3, "B", "B", 4, "B", "B", "L", "L");
    transition(4, "B", "0", 4, "B", "0", "S", "L");
    transition(4, "B", "B", 5, "B", "X", "S", "R");
    transition(5, "B", "0", 5, "B", "0", "S", "R");
    transition(5, "B", "B", 10, "B", "B", "S", "R");
    transition(6, "B", "0", 4, "B", "0", "S", "L");
    transition(6, "0", "0", 6, "B", "B", "R", "L");
    transition(6, "0", "B", 7, "0", "Y", "S", "R");
    transition(6, "B", "B", 10, "B", "B", "R", "R");
    transition(7, "0", "B", 7, "B", "0", "R", "R");
    transition(7, "B", "B", 10, "B", "B", "R", "R");
    transition(8, "X", "B", 9, "B", "Y", "R", "R");
    transition(8, "B", "B", 10, "B", "B", "R", "R");
    transition(9, "0", "B", 9, "B", "0", "R", "R");
    transition(9, "B", "B", 10, "B", "B", "R", "R");

    if (state == acceptingState) {
        displayState("Selesai");
        displayAnswer();
        stepController.disabled = true;
        skipController.disabled = true;
        animateController.disabled = true;
    }
}

function skipState() {
    while (state != acceptingState) {
        step();
    }
}

function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function animateState() {
    while (state !== acceptingState) {
        step();
        await delay(250);
    }
}

function skipState() {
    while (state != acceptingState) {
        step();
    }
}

function transition(
    nowState,
    oldVal,
    oldVal2,
    nextState,
    newVal,
    newVal2,
    directiont1,
    directiont2
) {
    if (
        turingVal[j].val == oldVal &&
        turingVal2[k].val == oldVal2 &&
        state == nowState &&
        finished == 0
    ) {
        turingVal[j].replaceWith(newVal);
        turingVal2[k].replaceWith(newVal2);
        trTape.childNodes[j].textContent = newVal;
        trTape2.childNodes[k].textContent = newVal2;
        trTape.childNodes[j].classList.add("state-active");
        trTape2.childNodes[k].classList.add("state-active");
        trTape.childNodes[j].scrollIntoView();
        trTape2.childNodes[k].scrollIntoView();
        state = nextState;
        displayState(
            "(q" +
                nowState +
                " | q" +
                nextState +
                ") | " +
                oldVal +
                "," +
                oldVal2 +
                "/" +
                newVal +
                "," +
                newVal2 +
                ", " +
                directiont1 +
                "," +
                directiont2 +
                ","
        );
        if (j == turingVal.length - 1 || k == turingVal.length - 1) {
            turingVal.push(new createState("B"));
            turingVal2.push(new createState2("B"));
        }

        if (j == 0 || k == 0) {
            turingVal.unshift(new createMostLeftNode("B"));
            turingVal2.unshift(new createMostLeftNode2("B"));
            j++;
            k++;
        }
        decide(directiont1, directiont2);
        finished = 1;
    }
}
function decide(dt1, dt2) {
    //mungkin ganti switch case
    if (dt1 == "R") {
        j++;
    } else if (dt1 == "L") {
        j--;
    } else {
        j;
    }
    if (dt2 == "R") {
        k++;
    } else if (dt2 == "L") {
        k--;
    } else {
        k;
    }
}
