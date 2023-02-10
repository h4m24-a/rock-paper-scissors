const computerPlay = () => {
    const choices = ['rock', 'paper', 'scissors']
    const randomNum = Math.floor(Math.random() * 3)
    console.log(choices[randomNum])
}

computerPlay()