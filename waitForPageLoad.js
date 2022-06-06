async function loadImages() {
    let images = []
    for (let i = 0; i < 7; i++) {
        let img = new Image();
        img.src = `pics/${i}.gif`;
        images.push[img]
    }

    window.addEventListener("load", event => {
        for (let img of images) {
            if (!img.complete){
                break
            }
        }
        window.dispatchEvent(new Event("imagesReady"))
        document.body.classList.remove("hidden-start")
    })
}

loadImages()