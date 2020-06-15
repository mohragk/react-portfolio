 // a key map of allowed keys
 const allowedKeys = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down',
    65: 'a',
    66: 'b'
};

// the 'official' Konami Code sequence
const konamiCode = ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a'];

// a variable to remember the 'position' the user has reached so far.
let konamiCodePosition = 0;


// add keydown event listener
document.addEventListener('keydown', function(e) {

    // Only when holding down shift-key
    //if (e.getModifierState("Shift")) 
    {
        // Handle Accel + Shift + C
        //e.preventDefault(); // consume the key event

        // get the value of the key code from the key map
        let key = allowedKeys[e.keyCode];
        // get the value of the required key from the konami code
        let requiredKey = konamiCode[konamiCodePosition];

        // compare the key with the required key
        if (key == requiredKey) {

            // move to the next key in the konami code sequence
            konamiCodePosition++;

            // if the last key is reached, activate cheats
            if (konamiCodePosition == konamiCode.length) {
                activateCheats();
                konamiCodePosition = 0;
            }
        } else {
            konamiCodePosition = 0;
        }

    }
});

function activateCheats() {
    const responses = [
        "Thank you Mario! But our Princess is in another castle!",
        "There are 69,105 leaves in the pile.",
        "The cake is a lie.",
        "I wanna be a pirate!",
        "I apologize for the cage. I'm afraid this situation has often required of me a more... primitive code of conduct than I might otherwise have chosen.",
        "The right man in the wrong place can make all the difference in the world.",
        "It's super effective!",
        "It's time to kick ass and chew bubblegum... and I'm all outta gum.",
        "Science isn’t about why! It’s about why not!",
        "You have received a gift. A great secret has been revealed to you. There are dimensions beyond the ones you know.",
        "Now... about that beer I owed ya!",
        "Did you know you can donate one or all of your vital organs to the Aperture Science Self-Esteem Fund for Girls? It's true!",
        "It is pitch black. You are likely to be eaten by a Grue."
    ]
    const max = responses.length
    const randomIndex = Math.floor(Math.random() * max)
    alert(responses[randomIndex])
}