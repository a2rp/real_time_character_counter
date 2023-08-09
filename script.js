window.onload = () => {
    const input = document.querySelector("#input");
    input.focus();
    const maxLength = input.getAttribute("maxlength");
    input.addEventListener("keydown", (event) => {
        const totalCharacters = input.value.length;
        let remainingCharacters = maxLength - totalCharacters;
        remainingCharacters = remainingCharacters < 10 ? "0" + remainingCharacters : remainingCharacters;

        if (parseInt(remainingCharacters, 10) > 30) {
            document.querySelector(".remaining").innerHTML = `<span style="color: #0f0;">${remainingCharacters}</span>`;
        } else if (parseInt(remainingCharacters, 10) > 40) {
            document.querySelector(".remaining").innerHTML = `<span style="color: orange;">${remainingCharacters}</span>`;
        } else if (parseInt(remainingCharacters, 10) > 45) {
            document.querySelector(".remaining").innerHTML = `<span style="color: orangered;">${remainingCharacters}</span>`;
        } else {
            document.querySelector(".remaining").innerHTML = `<span style="color: red;">${remainingCharacters}</span>`;
        }
    });
};

