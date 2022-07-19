/* get the qoutes from https://type.fit/api/quotes and add it in UI */
var quotes = [];
var quote = document.querySelector('.card_header');
var author = document.querySelector('.card_info');
var button = document.querySelector('.card_button');
var twitter = document.querySelector('.twitter');
button.innerHTML = 'Get Quote';

var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://type.fit/api/quotes');
xhr.onload = function () {
    if (xhr.status === 200) {
        quotes = JSON.parse(xhr.responseText);
        getQoute();
    } else {
        alert('Request failed.  Returned status of ' + xhr.status);
    }
};
xhr.send();

function getQoute() {
    var random = Math.floor(Math.random() * quotes.length);
    var auth = quotes[random].author;
    if (auth == null) {
        auth = "Anonymous";
    }
    quote.innerHTML = quotes[random].text;
    author.innerHTML = "~ " + auth;
}

button.addEventListener('click', getQoute);


/* add tweet functionality */

twitter.onclick = function () {
    var tweet = "“" + quote.innerHTML + "”\n" + author.innerHTML;
    var url = 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(tweet);
    window.open(url, '_blank');
};
document.body.appendChild(twitterButton);

