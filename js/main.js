//JS Hover

const image = document.getElementById('kauaiimg');

image.onmouseenter = (e) => {
	document.getElementById("kauaiscene").style.display = "none";
    document.getElementById("kauaispecific").style.display = "block";
};

image.onmouseleave = (e) => {
    document.getElementById("kauaispecific").style.display = "none";
    document.getElementById("kauaiscene").style.display = "block";
};

//JS Click

const image2 = document.getElementById('oahuimg');

let scene = true;

image2.onclick = (c) => {
    if (scene === true){
        document.getElementById("oahuscene").style.display = "none";
        document.getElementById("oahuspecific").style.display = "block";
        scene = false;
    } else {
        document.getElementById("oahuspecific").style.display = "none";
        document.getElementById("oahuscene").style.display = "block";
        scene = true;
    }
}


