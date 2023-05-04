document.addEventListener('DOMContentLoaded', function() {
    startApp();
});

function startApp(){
    createGallery();
}

function createGallery(){
    const gallery = document.querySelector('.photo-gallery');
    for(let i=1; i<=12; i++){
        const image = document.createElement('picture');
        image.innerHTML = `
            <source srcset="build/img/thumb/${i}.avif" type="image/avif">
            <source srcset="build/img/thumb/${i}.webp" type="image/webp">
            <img loading="lazy" width="200" height="300" src="build/img/thumb/${i}.jpg" alt="Gallery Image">
        `;
        console.log(image);
        gallery.appendChild(image);
    }
}