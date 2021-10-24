let galleryItems = document.querySelectorAll('.gallery__item');

window.addEventListener('scroll', onScroll);
function onScroll(params) {
    for (let i = 0; i < galleryItems.length; i++) {
        const galleryItem = galleryItems[i];
        const galleryItemHeight = galleryItem.offsetHeight;
        const galleryItemOffset = offset(galleryItem).top;
        const galleryStart = 4;

        let galleryItemPoint = window.innerHeight - galleryItemHeight / galleryStart;
        if (galleryItemHeight > window.innerHeight) {
            galleryItemPoint = window.innerHeight - window.innerHeight / galleryStart
        }

        if ((pageYOffset > galleryItemOffset - galleryItemPoint) && pageYOffset < (galleryItemOffset + galleryItemHeight)) {
            galleryItem.classList.add('_active');
        }
        else {
            galleryItem.classList.remove('_active');
        }
    }
}

function offset(el) {
    const rect = el.getBoundingClientRect(),
          scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
          scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return {top: rect.top + scrollTop, left: rect.left +scrollLeft}
}

const gallery = document.querySelectorAll(".gallery__item");
shuffle(gallery);

for (let i = 0; i < gallery.length; i++) {
    let img = gallery[i].firstElementChild;
  }

function shuffle(items) {
    const arr = Array.from(Array(15), (e, i) => i + 1);
    arr.sort(() => Math.random() - 0.5);
    for (let i = 0; i < arr.length; i++) {
      const img = document.createElement("img");
      img.src = `./img/gallery/galery${arr[i]}.webp`;
      img.alt = `gallery${arr[i]}`;
      img.className = "gallery__item-image";
      items[i].append(img);
    }
  }