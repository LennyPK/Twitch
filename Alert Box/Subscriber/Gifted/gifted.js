//get data from the 🤟 StreamElements 🤟 data injection
const sender = '{{sender}}';
const animation = 'wobble';
const name = '{{name}}'

// vanilla es6 query selection (can use libraries and frameworks too)
const userNameContainer = document.querySelector('#username-container');
const receiverContainer = document.querySelector('#receiver-container');

// change the inner html to animate it 🤪
receiverContainer.innerHTML = stringToAnimatedHTML(sender, animation);
userNameContainer.innerHTML = stringToAnimatedHTML(name, animation);

/**
 * return an html, with animation
 * @param s: the text
 * @param anim: the animation to use on the text
 * @returns {string}
 */
function stringToAnimatedHTML(s, anim) {
    let stringAsArray = s.split('');
    stringAsArray = stringAsArray.map((letter) => {
        return `<span class="animated-letter ${anim}">${letter}</span>`
    });
    return stringAsArray.join('');

}