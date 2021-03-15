const humanScore = document.getElementById('human-score')
const computerScore = document.getElementById('computer-score')
const scissorButton = document.getElementById('scissor')
const buttons = document.querySelectorAll('.selection')
let userScore = 0
let compScore = 0
// console.log(buttons)

const compValue=()=>{
    let comp = ["rock", "paper","scissor"]
    let randomValue = Math.floor(Math.random() *3);
    // console.log(comp[randomValue])
    return comp[randomValue]
}
const win = (userValue,compChoice)=>{
    userScore++
    console.log(userScore)
    humanScore.innerText = userScore
    console.log(`${userValue} beats ${compChoice} You Win...!`)
}
const Lose = (userValue,compChoice)=>{
    compScore++
    computerScore.innerText = compScore
    console.log(`${userValue} Lost to ${compChoice} You Lose...!`)
}
const Draw = (userValue,compChoice)=>{
    console.log(`${userValue} Equals ${compChoice} Its a Draw...!`)
}

const rock=(text)=>{
    let userValue = text
    let compChoice = compValue()
    // console.log(userValue)
    let choice = userValue + compChoice
    console.log(choice)
    switch(choice){
        case "paperrock":
        case "rockscissor":
        case "scissorpaper":
            return win(userValue,compChoice)
            break;
        case "paperscissor":
        case "rockpaper":
        case "scissorrock":
            return Lose(userValue,compChoice)
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorscissor":
            return Draw(userValue,compChoice)
            break;
    }
}

const main=()=>{
    buttons.forEach(button=>{
        button.addEventListener('click',()=>{
            rock(button.innerText)
            compValue()
        })
    })
}
main();