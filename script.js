// Mobile Menu

const menuBtn = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if(menuBtn){
    menuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}


// Gallery Filter

const filterButtons = document.querySelectorAll('.filter-btn');
const galleryItems = document.querySelectorAll('.gallery-item');

filterButtons.forEach(btn => {

    btn.addEventListener('click', () => {

        document.querySelector('.filter-btn.active')
        .classList.remove('active');

        btn.classList.add('active');

        const filter = btn.dataset.filter;

        galleryItems.forEach(item => {

            if(filter === 'all' || item.classList.contains(filter)){
                item.style.display='block';
            }else{
                item.style.display='none';
            }

        });

    });

});


// Lightbox

const images = document.querySelectorAll('.gallery-item img');
const lightbox = document.getElementById('lightbox');

if(lightbox){

const lightImg = lightbox.querySelector('img');
const closeBtn = lightbox.querySelector('span');

images.forEach(img=>{

img.addEventListener('click',()=>{

lightbox.style.display='flex';
lightImg.src=img.src;

});

});

closeBtn.onclick=()=>{
lightbox.style.display='none';
};

}
