var quotes = [
    ' "You only live once, but if you do it right, once is enough." ',
 '"A room without books is like a body without a soul" ' ,
 ' "So many books, so little time." ' 
    
    ]
    var quotesname = [ "-  Mae West", "- Marcus Tullius Cicero", "-  Frank Zappa"]
    function NewQuote(){
    var randomnumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('showquote').innerHTML=quotes[randomnumber ] + quotesname[randomnumber];
    }