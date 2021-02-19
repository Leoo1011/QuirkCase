window.onclick = (event) => {
    if (event.ctrlKey === true) {
        let target = event.target; // The clicked element
        let text = prompt("eNtEr YoUr TeXt, PlEaSe.").split(""); // Split string into array
        let upOrLow = Math.random() >= 0.5; // Randomize first character's case

        text.forEach( (char) => { // Loop through the array
            if (upOrLow) {
                target.value += char.toUpperCase(); // Change to uppercase...
            }
            else {
                target.value += char.toLowerCase(); // ...or lowercase accordingly
            }
            upOrLow = !upOrLow; // Toggle the next character's case
        });
    }
}