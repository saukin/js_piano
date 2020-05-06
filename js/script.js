const possibleKeys = ["A","S","D","F","G","H","J","W","E","T","Y","U"];

function hasName(name) {
    for (let i of possibleKeys) {
        if (i === name) return true;
    }
    return false;
}

function playSound(name) {
    if (hasName(name)) {
       var sound  = new Audio(`white_keys/${name}.mp3`);
    } else {
        console.log("No such a key");
    }

    const kbds = document.querySelectorAll("kbd");
    for (let i of kbds) {
        if (i.innerText == name) {
            if (i.parentNode.className == "white-keys") {
                i.style.backgroundColor = "blue";
                setTimeout(function () {
                    i.style.backgroundColor = "white";
                }, 2000);
            } else {
                i.style.backgroundColor = "green";
                setTimeout(function () {
                    i.style.backgroundColor = "black";
                }, 2000);
            }
        }
    }
    sound.play();
}

document.addEventListener("keydown", function (e) {
    playSound(e.key.toUpperCase());
})