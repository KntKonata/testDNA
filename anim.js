var timer = 0;
const timerMax = 360;
const el = document.getElementsByClassName('animate');

function lifeSpan() {

    if(timer<timerMax){
        for(var i=1; i<(el.length+1); i++){

            var newEl = document.getElementById('round-' + i);

            newEl.style.transform = 'rotate(' + (i+timer) + 'deg) scale(2)';

            /*var testVar = window.getComputedStyle(newEl, null).getPropertyValue('background');

            if(testVar.startsWith("rgb(")) {
                newEl.style.backgroundColor = 'hsl(' + (i+timer) + ',100%,50%)';
            } else {
                //
            }*/

        }
        timer++;
    } else {
        timer = 0;
    }

    setTimeout(lifeSpan, 10);
}

lifeSpan();