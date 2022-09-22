/**
 * This program calculates microwave times
 *
 * By:      Aidan Lalonde-Novales
 * Version: 1.0
 * Since:   2022-09-21
 */

import promptSync from 'prompt-sync'

const prompt = promptSync()
let time = 0
let seconds = 0
let minutes = 0
let percent = 0

// Input
const foodString = prompt(
  'What are you microwaving? (1 for sub, 2 for soup, 3 for pizza): '
)
const quantityString = prompt(
  'How many would you like to microwave? (max is 3): '
)

const food = parseInt(foodString)
const quantity = parseInt(quantityString)

// Process
if (food === 1) {
  time = 60
} else if (food === 2) {
  time = 105
} else if (food === 3) {
  time = 45
} else {
  console.log('\nInvalid Input for First Prompt.')
}

if (quantity === 1) {
  percent = 1
} else if (quantity === 2) {
  percent = 1.5
} else if (quantity === 3) {
  percent = 2
} else {
  console.log('\nInvalid Input for Second Prompt.')
}

time = time * percent
seconds = time % 60
minutes = Math.floor(time / 60)

// Output
if (time > 0) {
  console.log(`\nSet minutes to ${minutes}, and seconds to ${seconds}.`)
}

console.log('\nDone.')
