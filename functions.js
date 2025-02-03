const subjects = [
    "A developer",
    "Coding",
    "Debugging",
    "An algorithm",
    "JavaScript",
    "A bug",
    "The compiler",
    "A software update",
    "Open-source projects",
    "AI-generated code",
    "A programming tutorial",
    "Stack Overflow",
    "A new feature",
    "A legacy system",
    "The command line"
];
const actions = [
   "is like a puzzle",
    "never works on the first try",
    "is an endless loop",
    "is full of surprises",
    "can break at any moment",
    "requires patience and coffee",
    "is just a series of if-statements",
    "can be elegant or chaotic",
    "is a mix of logic and frustration",
    "works… until it doesn’t",
    "always has a hidden bug",
    "is 90% Googling errors",
    "feels magical when it works",
    "is harder than it looks",
    "is what happens between Stack Overflow visits" 
];
const conclusions = [
    "until you find that missing semicolon.",
    "but that’s why we have Stack Overflow.",
    "so just restart your computer.",
    "and hope for the best.",
    "because the compiler said so.",
    "and then it crashes anyway.",
    "unless you forgot to save your work.",
    "until you realize you were in the wrong directory.",
    "but at least it’s not assembly.",
    "and then someone changes the requirements.",
    "but it’s working in production, so who cares?",
    "until an intern rewrites it.",
    "but it still runs faster than Java.",
    "and then AI suggests a completely wrong fix.",
    "so you just blame it on cosmic rays."
];

export function createQuote() {
    const subjectIndex = Math.floor(Math.random()*15);
    const actionIndex = Math.floor(Math.random()*15);
    const conclusionIndex = Math.floor(Math.random()*15);
    return `"${subjects[subjectIndex]} ${actions[actionIndex]}, ${conclusions[conclusionIndex]}"`
}
