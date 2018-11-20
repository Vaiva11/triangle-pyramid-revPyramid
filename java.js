const actions = document.getElementById('actions');
const output = document.getElementById('output');

const render = (piesti) => {output.innerHTML = piesti;}

//const clear = () => {output.innerHTML = ''};

const triangle = () => {
    let drawing = '';
    for(let i = 0; i < 10; i++) {
        for(let j = 0; j <= i; j++) {
            drawing += '* ';
        }
        drawing += '<br>';
    }
    render(drawing);
}

const pyramid = () => {
    let drawing = '';
    for(let i = 0; i < 10; i++){
        //tarpai
        for(let k = 0; k < 10-i; k++){
            drawing += '&nbsp;';
        }
        //zvaigzdutes
        for(let j = 0; j <= i; j++) {
            drawing += '* ';
        }
        drawing += '<br>';
    }
    render(drawing);
}

const reverse = () => {
    let drawing = '';
    for(let i = 9; i >= 0; i--){
        //tarpai
        for(let k = 0; k < 9-i; k++){
            drawing += '&nbsp;';
        }
        //zvaigzdutes
        for(let j = 0; j <= i; j++) {
            drawing += '* ';
        }
        drawing += '<br>';
    }
    render(drawing);
}

actions.addEventListener('click', (event) => {
    const action = event.target.id;

    if(event.target.tagName === "BUTTON") //sutvarko kad veiktu TIK mygtukai
    {
        switch (action) {

            case 'triangle':
                triangle();
                break;

            case 'pyramid':
                pyramid();
                break;

            case 'reverse':
                reverse();
                break;

            case 'clear':
                //clear();
                render('');
                break;

            default:
                render('');
                //clear();
        }
    }
});