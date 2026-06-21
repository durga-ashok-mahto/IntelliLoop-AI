document.addEventListener("DOMContentLoaded", () => {

const form = document.getElementById("chat-form");
const input = document.getElementById("user-input");
const chatBox = document.getElementById("chat-messages");

const responses = {

hello:"Hello 👋! Welcome to IntelliLoop AI. How can I help you today?",

hi:"Hi there 😊",

hey:"Hey! Nice to meet you.",

about:`
IntelliLoop AI is a Rule-Based Chatbot.

Technologies Used:
• HTML
• CSS
• JavaScript

No external API is used.
`,

project:`
Project Features:

✔ Rule Based Chatbot
✔ Modern Glassmorphism UI
✔ Diagnostics Panel
✔ Logic Quiz
✔ Local Processing
✔ Dynamic Responses
✔ Responsive Design
`,

help:`
Available Commands:

• hello
• about
• project
• help
• date
• time
• joke
• motivation
• quiz
• diagnose
`,

joke:"Why do programmers prefer dark mode? Because light attracts bugs 😂",

motivation:"Keep learning. Every bug you solve makes you a stronger developer 🚀",

quiz:`
Logic Quiz:

Question:
What is 2 + 2 ?

A) 3
B) 4
C) 5

Correct Answer: B
`,

diagnose:`
System Diagnostics

Status : Online

CPU : Stable
Memory : Good
Latency : 14ms

All systems operational.
`
};

function getBotResponse(message){

message = message.toLowerCase().trim();

if(message.includes("hello")) return responses.hello;

if(message.includes("hi")) return responses.hi;

if(message.includes("hey")) return responses.hey;

if(message.includes("about")) return responses.about;

if(message.includes("project")) return responses.project;

if(message.includes("help")) return responses.help;

if(message.includes("joke")) return responses.joke;

if(message.includes("motivation")) return responses.motivation;

if(message.includes("quiz")) return responses.quiz;

if(message.includes("diagnose")) return responses.diagnose;

if(message.includes("date")) return new Date().toDateString();

if(message.includes("time")) return new Date().toLocaleTimeString();

return `
Sorry 😅

I don't understand that command.

Try:

• help
• about
• project
• joke
• date
• time
`;
}

function addMessage(text,sender){

const div=document.createElement("div");

div.className=`message ${sender}-message`;

div.innerHTML = `
<div class="message-bubble">
${text.replace(/\n/g,"<br>")}
</div>
`;

chatBox.appendChild(div);

chatBox.scrollTop=chatBox.scrollHeight;
}

form.addEventListener("submit",(e)=>{

e.preventDefault();

const text=input.value.trim();

if(!text) return;

addMessage(text,"user");

input.value="";

setTimeout(()=>{

const reply=getBotResponse(text);

addMessage(reply,"bot");

},500);

});

});
input.addEventListener("keydown",(e)=>{

if(e.key==="Enter" && !e.shiftKey){

e.preventDefault();

form.dispatchEvent(
new Event("submit")
);

}

});const canvas = document.getElementById("bubble-canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let bubbles=[];

for(let i=0;i<25;i++){

bubbles.push({
x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
r:Math.random()*10+5,
dy:Math.random()*1+0.5
});

}

function animate(){

ctx.clearRect(0,0,canvas.width,canvas.height);

bubbles.forEach(b=>{

ctx.beginPath();

ctx.arc(b.x,b.y,b.r,0,Math.PI*2);

ctx.fillStyle="rgba(0,242,254,0.15)";

ctx.fill();

b.y-=b.dy;

if(b.y<0){
b.y=canvas.height;
}

});

requestAnimationFrame(animate);

}

animate();