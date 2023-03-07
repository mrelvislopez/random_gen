let btn = document.getElementById('btn');
let output = document.getElementById('output');
let quote = [
    "The Dress Maker of Auschwitz by Lucy Adlington",
    "The Spanish Love Deception by Elena Arma",
    "The Deal by Elle Kennedy",
    "Just Like Home by Sarah Gailey",
    "A Witch's Guide to Fake Dating a Demon by Sarah Hawley",
    "Icebreaker by Hannah Grace",
    "Serpent & Dove by Shelby Mahurin"

];

btn.addEventListener('click', function(){
    var randomQuote = quote[Math.floor(Math.random() * quote.length)]
    output.innerHTML = randomQuote;
});

let popup =  document.getElementById('popup');

function openPopup() {
    popup.classList.add('open-popup');
}

function closePopup() {
    popup.classList.remove('open-popup');
    popup.classList.add('close-popup');
}
console.log('hello peeps');