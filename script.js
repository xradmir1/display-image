/*
 * Copyright (C) 2026 Radmir Xayrullayev
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License.
 */

const input = document.getElementById("image-input");
const image = document.getElementById("placeholder-image");
const title = document.getElementById("title");
const description = document.getElementById("description");
const upload_icon = document.getElementById("upload-icon");

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