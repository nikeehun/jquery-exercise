let color = 'purple';
let number = 10;
let word = 'cool';

if (color == 'purple') {
    $('.north').css('background-color', 'purple')
};

$('.east').text('East2');

if (number>100) {
    console.log("whoah, that's a big number.")
} else {
    console.log("just a regular number, please.")
};

if (word === 'cool') {
    $('.south').text('Power of DOM')
} else {
    $('.west').text('Power of DOM')
}