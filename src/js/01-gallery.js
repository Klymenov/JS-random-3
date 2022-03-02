// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery')
const cardsMarkup = createGalleryMarkup(galleryItems)

galleryContainer.insertAdjacentHTML('beforeend', cardsMarkup)

galleryContainer.addEventListener('click', onClick)

function createGalleryMarkup(gallery) {
    return gallery.map(({ preview, original, description }) => {
        return `
            <a class="gallery__item" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}" />
            </a>
    `;
    })
    .join('');
}

let gallery = new SimpleLightbox('.gallery a');
gallery.on('show.simplelightbox', function () {
	
});



function onClick(event) {
    event.preventDefault()
    if (event.target.nodeName !== "IMG") { 
        return
    }
}