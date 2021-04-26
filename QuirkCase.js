window.onclick = (event) => {
    if (event.ctrlKey === true) {
        let target = event.target; // The clicked element
        let text = prompt("eNtEr YoUr TeXt, PlEaSe.").split(""); // Split string into array
        let upOrLow = Math.random() >= 0.5; // Randomize first character's case

        if (target.tagName === "INPUT" && target.type === "text" || target.type === "textarea") {
            // Code for text inputs
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
        else { // Code for other types of (text) elements (i.e. any element with the contenteditable attribute)
            if (target.isContentEditable) {
                text.forEach( (char) => {
                    if (upOrLow) {
                        target.innerText += char.toUpperCase();
                    }
                    else {
                        target.innerText += char.toLowerCase();
                    }
                    upOrLow = !upOrLow;
                });
            }
        }
    }
}
