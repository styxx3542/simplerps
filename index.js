const getComputerChoice = () => 
{
    let i = Math.random();
    if(i<0.33){return "rock"}
    if(i<0.66){return "paper"}
    return "scissors"
}
let win = 0,loss = 0,draw = 0
const rps = {"rock":1,"paper":2,"scissors":3}
for(let i = 0;i<5;i++)
{
    let userinput = prompt("Enter your choice")
    let a = getComputerChoice()
    let choice = rps[a]
    let diff = choice - rps[userinput]
    if(diff == 1 || diff == -2){alert(`You lost! ${a} beats ${userinput}`);loss++}
    else if(diff == 2 || diff == 1){alert(`You won! ${userinput} beats ${a}`);win++}
    else{alert("go again");draw++}
}
alert(`Win - ${win} Loss - ${loss} Draw - ${draw} `)
