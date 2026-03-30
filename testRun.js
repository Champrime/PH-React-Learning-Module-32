// var [first, second]  = [2, 5];

// var myNum = [52, 71];
// var [lang, war] = myNum; //[lang, war] = [52, 71]

// function getSomething(){return [52, 71]}
// var [lang, war] = getSomething(); //[lang, war] = [52, 71]


let state = [], index = 0;

function XState (value){

    let currentIndex = index;

    if (state[currentIndex] === undefined){
        state[currentIndex] = value;
    }

    function NeuerState (updatedValue){
        state[currentIndex] = updatedValue;
        render();
    }

    index++;
    return [state[currentIndex], NeuerState]
}

function render(){
    index = 0;
    component();
}

function component () {
    let [count, repeatCount] = XState(0);

    console.log(count);
    console.log(repeatCount);
}

component();