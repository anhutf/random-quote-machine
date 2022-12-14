window.onload = randomQuoteMachine;

function randomQuoteMachine() {
  randomQuote();
  $("#new-quote").click(() => {
    randomQuote();
  });
}

const randomQuote = () => {
  const quotes = [
    {
      id: 1,
      text: "I have just three things to teach: simplicity, patience, compassion. These three are your greatest treasures.",
      source: "Lao Tzu",
    },
    {
      id: 2,
      text: "Do today what others won't and achieve tomorrow what others can't.",
      source: "Jerry Rice",
    },
    {
      id: 3,
      text: "In character, in manner, in style, in all things, the supreme excellence is simplicity.",
      source: "Henry Wadsworth Longfellow",
    },
    {
      id: 4,
      text: "If we don't discipline ourselves, the world will do it for us.",
      source: "William Feather",
    },
    {
      id: 5,
      text: "Rule your mind or it will rule you.",
      source: "Horace",
    },
    {
      id: 6,
      text: "All that we are is the result of what we have thought.",
      source: "Buddha",
    },
    {
      id: 7,
      text: "Doing just a little bit during the time we have available puts you that much further ahead than if you took no action at all.",
      source: "Pulsifer, Take Action; Don't Procrastinate",
    },
    {
      id: 8,
      text: "Never leave that till tomorrow which you can do today.",
      source: "Benjamin Franklin",
    },
    {
      id: 9,
      text: "Procrastination is like a credit card: it's a lot of fun until you get the bill.",
      source: "Christopher Parker",
    },
    {
      id: 10,
      text: "Someday is not a day of the week.",
      source: "Author Unknown",
    },
  ];

  const quote = quotes[Math.floor(Math.random() * quotes.length)];

  $("#text").text(quote.text);
  $("#author").html("&mdash; " + quote.source);

  $("#tweet-quote").attr("href", tweetLink(quote.text + " - " + quote.source));
};

const tweetLink = (string) => {
  const stringToLink = string
    .split(" ")
    .join("%20")
    .split("@")
    .join("%40")
    .split("!")
    .join("%21");

  console.log(stringToLink);
  return "https://twitter.com/intent/tweet?text=" + stringToLink;
};
