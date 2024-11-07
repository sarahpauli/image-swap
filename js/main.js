//JS Hover

const image = document.querySelector('#kauaiscene');

image.onmouseenter = (e) => {
   e.target.setAttribute('src', 'images/kauaispecific.JPG');
};

image.onmouseleave = (e) => {
   e.target.setAttribute('src', 'images/kauaiscene.JPG');
};

//JS Click

const image2 = document.querySelector('#oahuscene');

image2.onclick = (e) => {
    if (image2.getAttribute('src') === 'images/oahuscene.JPG') {
        image2.setAttribute('src', 'images/oahuspecific.jpg');
    } else {
        image2.setAttribute('src', 'images/oahuscene.JPG');
    }
}
