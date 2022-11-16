const getComputerChoice = () => 
{
    let i = Math.random();
    if(i<0.33){return "rock"}
    if(i<0.66){return "paper"}
    return "scissors"
}
let win = 0,loss = 0,games = 0
const rps = {"rock":1,"paper":2,"scissors":3}
const playRound = (userinput)=>{
    let a = getComputerChoice()
    placeholder = document.querySelector("#user-choice img")
    placeholder.src = `${userinput}.jpg`
    img = document.querySelector(".computer-choice img")
    img.src = `${a}.jpg`
    let choice = rps[a]
    let diff = choice - rps[userinput]
    console.log(diff)
    if(diff == 1 || diff == -2){loss++}
    else if(diff == 2 || diff == -1){win++}
    games++;
    computerScore = document.querySelector(".computer-score")
    computerScore.innerHTML = `Computer Score - ${loss}`
    userScore = document.querySelector(".user-score")
    userScore.innerHTML = `User Score - ${win}`
    result = document.querySelector(".result")
    if(games == 5)
    {
        if(win > loss)result.innerHTML =  "Result - User Won!";
        else if(loss < win)result.innerHTML = "Result - User Lost!";
        else result.innerHTML = "It's a draw!";
    }

}
images = document.querySelectorAll(".choices img");
for(let img of images)
{
    img.addEventListener("click", ()=>(playRound(img.id)))
}
