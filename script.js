var popup = document.getElementById('popup-container');
var closeBtn = document.getElementsByClassName("close-btn")[0];
var nextImageBtn = document.getElementById('next-image');
var popupImagesContainer = document.querySelector('.popup-images');
var currentImageIndex = 0;

function clearPopupImages() {
    popupImagesContainer.innerHTML = '';
}

function handleClickAnimation(event) {
    const element = event.target;
    element.classList.add('click-animate');

    element.addEventListener('animationend', () => {
        element.classList.remove('click-animate');
    }, { once: true });
}

document.querySelectorAll('.popup-trigger').forEach(element => {
    element.addEventListener('click', handleClickAnimation);
});
document.querySelectorAll('a, button, .popup-trigger, [onclick], .clickable').forEach(element => {
    element.classList.add('clickable');
});

function loadPopupImages(imageArray) {
    imageArray.forEach((src, index) => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = `Image ${index + 1}`;
        img.classList.add('popup-image');
        img.style.display = index === 0 ? 'block' : 'none';
        popupImagesContainer.appendChild(img);
    });
    images = document.querySelectorAll('.popup-image');
}

function updateImageVisibility() {
    images.forEach((img, index) => {
        img.style.display = index === currentImageIndex ? 'block' : 'none';
    });
}

closeBtn.onclick = function() {
    popup.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == popup) {
        popup.style.display = "none";
    }
}

document.querySelectorAll('.figure').forEach(figure => {
    figure.addEventListener('click', function() {
        var name = figure.getAttribute('data-name');
        var info = figure.getAttribute('data-info');
        var imageFiles = figure.getAttribute('data-images').split(',');

        popup.querySelector('h2').textContent = `Hi I'm ${name}`;
        popup.querySelector('p').textContent = info;
        currentImageIndex = 0;

        clearPopupImages();
        loadPopupImages(imageFiles);

        popup.style.display = "block";
    });
});

document.querySelector('.about-trigger').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('about-popup').style.display = 'block';
});

document.querySelector('.close-popup').addEventListener('click', function() {
    document.getElementById('about-popup').style.display = 'none';
});

window.onclick = function(event) {
    var popup = document.getElementById('about-popup');
    if (event.target == popup) {
        popup.style.display = 'none';
    }
};

nextImageBtn.addEventListener('click', function() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    updateImageVisibility();
});

document.querySelectorAll('.animated-text span').forEach((element) => {
    element.onmouseover = () => {
      element.style.transform = 'translateY(-5px)';
    };
    element.onmouseout = () => {
      element.style.transform = 'translateY(0px)';
    };
});
