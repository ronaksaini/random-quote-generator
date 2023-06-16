function genQuote() {
    var randNum = Math.floor(Math.random() * quotes.length);
    document.getElementById('quote').innerHTML = quotes[randNum].text;
    document.getElementById('author').innerHTML = quotes[randNum].author;
  }

  const quotes = [
  {
    text: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "~Nelson Mandela"
  },
  {
    text: "The way to get started is to quit talking and begin doing.",
    author: "~Walt Disney"
  },
  {
    text: "If life were predictable it would cease to be life, and be without flavor.",
    author: "~Eleanor Roosevelt"
  },
  {
    text: "Life is what happens when you're busy making other plans.",
    author: "~John Lennon"
  },
  {
    text: "The future belongs to those who believe in the beauty of their dreams.",
    author: "~Eleanor Roosevelt"
  },
  {
    text: "The only impossible journey is the one you never begin.",
    author: "~Tony Robbins"
  },
  {
    text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "~Winston Churchill"
  }
];