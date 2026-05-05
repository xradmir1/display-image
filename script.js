input = document.getElementById("image-input");
image = document.getElementById("placeholder-image");
title = document.getElementById("title");
description = document.getElementById("description");
upload_icon = document.getElementById("upload-icon");

input.onchange = () => {
    file = input.files[0];
    if (file) {
        image.src = URL.createObjectURL(file);
    }
    title.innerText = "Click to Fullscreen";
    description.innerText = file.name;
}

image.onclick = () => {
    if (image.requestFullscreen) {
        image.requestFullscreen();
    } else if (image.webkitRequestFullscreen) {
        image.webkitRequestFullscreen();
    } else if (image.msRequestFullscreen) {
        image.msRequestFullscreen();
    }
}

upload_icon.onclick = () => {
    input.click();
}