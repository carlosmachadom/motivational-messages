const MESSAGES = [
    "Have a nice day",
    "I wish you the best day in your life",
    "If you are going to try, go all the way",
    "Find you want, always you can",
    "There is no such thing as a good or bad memory",
    "There is always an horizon beyond mountains",
    "Sometimes you win, sometimes you learn",
];

const randomMessage = () => {
    const message = MESSAGES[Math.floor(Math.random() * MESSAGES.length)];
    console.log(message);
};

module.exports = { randomMessage };