const computerPlay = () => {
    const choices = ['rock', 'paper', 'scissors']
    const randomNum = Math.floor(Math.random() * 3)
    const compChoice = choices[randomNum]
    return compChoice
}

