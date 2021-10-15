const message = "Hello World!";
const spaces = "         ";
const displayTicker = (tickerMessage, offset) => {
  const msg = spaces + message + spaces;
  const ticker = msg.split("");
  for (let i = offset; i < 10 + offset; i++) {
    tickerMessage += ticker[i];
  }
  console.log(tickerMessage.substring(tickerMessage.length - 10));
  return tickerMessage;
};

const runTicker = () => {
  let offset = 0;
  let tickerMessage = "";
  setInterval(() => {
    tickerMessage = displayTicker(tickerMessage, offset);
    offset++;
    if (offset === 21) {
      offset = 0;
    }
  }, 500);
};

runTicker();
