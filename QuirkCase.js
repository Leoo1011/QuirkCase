function turnToQuirkCase(text) {
    let newText = "";
    let upOrLow = Math.random() >= 0.5;
    text.forEach(char => {
        newText += upOrLow ? char.toUpperCase() : char.toLowerCase();
        upOrLow = !upOrLow; // Toggle the next character's case
    });

    return newText;
}

window.onclick = event => {
    if (event.ctrlKey) {
        const target = event.target;
        const text = prompt("eNtEr YoUr TeXt, PlEaSe.").split("");

        if (target.tagName === "INPUT" && target.type === "text" || target.type === "textarea") {
            target.value += turnToQuirkCase(text);
        }
        else if (target.isContentEditable) {
            target.innerText += turnToQuirkCase(text);
        }
    }
}
