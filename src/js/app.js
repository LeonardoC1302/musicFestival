document.addEventListener('DOMContentLoaded', function() {
    startApp();
});

function startApp(){
    createGallery();
    scrollNav();
}

function scrollNav(){
    const links = document.querySelectorAll('.main-navigation a');
    links.forEach( link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const section = document.querySelector(e.target.attributes.href.value);
            section.scrollIntoView({behavior: 'smooth'});
        });
    });
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
        image.onclick = () => showImage(i)
        gallery.appendChild(image);
    }
}

function showImage(id) {
    const image = document.createElement('picture');
        image.innerHTML = `
            <source srcset="build/img/grande/${id}.avif" type="image/avif">
            <source srcset="build/img/grande/${id}.webp" type="image/webp">
            <img loading="lazy" width="200" height="300" src="build/img/grande/${id}.jpg" alt="Gallery Image">
        `;
    // Create overlay with image
    const overlay = document.createElement('div');
    overlay.appendChild(image);
    overlay.classList.add('overlay');
    overlay.onclick = () => {
        overlay.remove();
        const body = document.querySelector('body');
        body.classList.remove('fixed-body');
    }
    // Button to close the image
    const closePhoto = document.createElement('p');
    closePhoto.textContent = 'X';
    closePhoto.classList.add('btn-close');
    closePhoto.onclick = () => {
        overlay.remove();
        const body = document.querySelector('body');
        body.classList.remove('fixed-body');
    }
    overlay.appendChild(closePhoto);
    // Add overlay to body
    const body = document.querySelector('body');
    body.appendChild(overlay);
    body.classList.add('fixed-body');
}