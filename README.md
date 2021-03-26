## Making a plan
1) Make a drawing of your app. Simple "wireframes"
2) Once you have a drawing, name the HTML elements you'll need to realize your vision
3) For each HTML element ask: Why do I need this?
    - This is your pseudocode
4) Once we know _why_ we need each element, think about how to implement the "Why" as a "How"
5) Is there some state we need to initialize?
6) Find all the 'events' (user clicks, form submit, etc) in your app. Ask one by one, "What happens when" for each of these events.
7) Think about how to validate each of your steps

## Downloading images
1. I want to find the three images I am going to use. 
## rock paper scissors app


## HTML Setup

1) Create the buttons
    -Why `addEventListener` to submit user throw
2) Div to display Kai Bai Boh Results
    -How `textContent`
3) div to display who won
    how `textContent`
4) div to display who lost
    how `textContent`
5) We need the machine to choose between rock papar scissors
    How? `querySelector` a hack to get us to make this work.

## Initialize stategit pus

1) wins:0
2) total:0
3) computer throw: 'rock' , 'paper' or 'scissors'

## What happens when (events)
1) User clicks submit
    -randomly pick a computer throw ('rock' | 'paper' | 'Scissors')
    -get the user's guess
        -It lives in the radio button somehow
    -compare user guess to computer throw
    -display if the user won
    -increment the total
    -increment the win, if the use got it right. 
    -display new values for total, wins, and losses. 
