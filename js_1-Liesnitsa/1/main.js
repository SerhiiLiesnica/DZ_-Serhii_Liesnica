let name = prompt('Як вас звати?');
let higeDiv = prompt('Висота блоку');
let widthDiv = prompt('Ширина блоку');
let bgColor = prompt('Колір блолку, англійською');
let secHigeDiv = prompt('Висота другого блоку');
let secWidthDiv = prompt('Висота другого блоку');
let secBgColor = prompt('Колір блолку, англійською');

document.write(`<div style='height:${higeDiv}px; width:${widthDiv}px; background-color:${bgColor}; margin-left: 400px; margin-top: 20px ; text-align:center;'> <div style= 'height:${secHigeDiv}px; width:${secWidthDiv}px; background-color:url(${bgColor}); margin-left: 10px; margin-top: 10px ; text-align:center;'> <h2>Привіт, ${name}</h2></div>`)