# Redux-inspired Store Implementation

## How to Run the Code

1. Ensure you have Node.js installed on your machine.
2. Create a file named `store.js` and copy the JavaScript code from the      implementation section into this file.
3. Open a terminal and navigate to the directory where `store.js` is located.
4. Run the following command to execute the code:

   ```bash
   node store.js

## Overview of the Approach

This implementation creates a simple Redux-inspired store with the following functionalities:

`getState`: Returns the current state of the store.
`dispatch`: Takes an action and updates the state based on the action type.
`subscribe`: Accepts a function that gets called whenever the state changes.

The reducer function handles three types of actions: ADD, SUBTRACT, and RESET, and updates the state accordingly.

## Challenges faced

1. Ensuring the correct order of state updates when dispatching multiple actions   consecutively.
2. Keeping the implementation simple and focused on state management without involving UI rendering.
3. Making sure the subscription mechanism works correctly and logs the new state every time it changes.
