'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');
const nav = document.querySelector('.nav');

///////////////////////////////////////
// Modal window

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn =>
  btn.addEventListener('click', openModal));


btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

////////////////////////////////////////
//Scrolling

btnScrollTo.addEventListener('click', function (e) {

  //modern way
  section1.scrollIntoView({ behavior: "smooth" });

  /*const s1cords = section1.getBoundingClientRect();
  console.log(s1cords);

  console.log(e.target.getBoundingClientRect())

  console.log('Current scroll X/Y', window.pageXOffset, window.pageYOffset);

  console.log(
    'height/width viewport',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  window.scrollTo(s1cords);

  window.scrollTo(
    s1cords.left + window.pageXOffset,
    s1cords.top + window.pageYOffset
  );

  window.scrollTo({
    left: s1cords.left + window.pageXOffset,
    top: s1cords.top + window.pageYOffset,
    behavior: "smooth",
  });
*/
});

///////////////////////////////////////
//Page navigation


//Event Delegation
//1.Add event listener to common parent element
//2. Determine what element originated the event

document.querySelector('.nav__links').addEventListener
  ('click', function (e) {
    e.preventDefault();
    //console.log(e.target);  where that event happened

    //Matching strategy
    if (e.target.classList.contains('nav__link')) {
      e.preventDefault();
      const id = e.target.getAttribute('href');
      document.querySelector(id).scrollIntoView({ behavior: "smooth" });
    }
  })

//Tabbed Component

tabsContainer.addEventListener('click', function (e) {

  const clicked = e.target.closest('.operations__tab');

  if (!clicked) return;

  //remove active classses
  tabs.forEach(
    t => t.classList.remove('operations__tab--active'));
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));

  clicked.classList.add('operations__tab--active');

  //Activate content area
  document.
    querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active');

})

//Menu fade animation
const handleHover = function (e, opacity) {
  //console.log(this, e.currentTarget);

  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach((el) => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

//Passing argument into handler
nav.addEventListener('mouseover', handleHover.bind(0.5));
nav.addEventListener('mouseout', handleHover.bind(1));

//sticky navigation
const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting)
    nav.classList.add('sticky')
  else
    nav.classList.remove('sticky');
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});

headerObserver.observe(header);

//reveal sections

const allSec = document.querySelectorAll('.section')
const revealSec = function (entries, observer) {
  const [entry] = entries;
  // console.log(entry);

  if (!entry.isIntersecting) return;

  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
  //no more console
}

const sectionObs = new IntersectionObserver(revealSec,
  {
    root: null,
    threshold: 0.15,

  });

allSec.forEach(function (sec) {
  sectionObs.observe(sec);
  sec.classList.add('section--hidden');

})
//lazy loading images
const imgTargets = document.querySelectorAll('img[data-src]');

const loadImg = function (entries, observer) {
  const [entry] = entries;
  // console.log(entry);
  if (!entry.isIntersecting) return;

  //replace src  with data src
  entry.target.src = entry.target.dataset.src;
  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });
  observer.unobserve(entry.target);
}



const imgObs = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: '200px'
});

imgTargets.forEach(img => imgObs.observe(img));

// window.addEventListener('beforeload', function (e) {
//   e.preventDefault();
//   console.log(e);
//   e.returnValue = '';
// })

///////////////////////////////////////////////
//////////////////////LECTURES/////////////////
/*
console.log(document.documentElement);

//----select elements-----


//returns html collection (live)
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

//WILL RETURN LIVE HTML COLLECTION
console.log(document.getElementsByClassName('btn'));

//---create elements----

const msg = document.createElement('div'); //creates an element

//add class
msg.classList.add('cookie-message');
msg.textContent = 'We use cookies for improved functionality';
msg.innerHTML = 'We use cookies for improved functionality. <button class = "btn btn--close-cookie">Got it! </button>';


const header = document.querySelector('.header');

header.prepend(msg); //adds element as first child (top)
// header.append(msg); //bottom


//header.after(msg);

//-----Delete  elements------

document.querySelector('.btn--close-cookie').addEventListener('click', function () {
  // msg.remove();
});

///-----------STYLES ATTRIBUTES AND CLASSES----------

////STYLES
//inline styling
msg.style.backgroundColor = '#37383d';
msg.style.width = '120%';

console.log(msg.style.height);

console.log(getComputedStyle(msg).color);

document.documentElement.style.setProperty('--color-primary', 'orangered');

//---ATTRIBUTES
const logo = document.querySelector('.nav__logo');

console.log(logo.alt);
console.log(logo.src); //standard
console.log(logo.getAttribute('src')); //relative

logo.setAttribute('company', 'Bankist');

//data attributes

console.log(logo.dataset.versionNumber); //camel Case

//---CLASSES----
logo.classList.add('c')
logo.classList.remove('c')
logo.classList.toggle('c')
logo.classList.contains('c')

*/

////EVENTS
/*
const h1 = document.querySelector('h1');

const alerth1 = function (e) {
  alert('addEvent Listener: heading');

  // h1.removeEventListener('mouseenter', alerth1);
}

h1.addEventListener('mouseenter', alerth1);
setTimeout(() =>
  h1.removeEventListener('mouseenter', alerth1, 3000));
  */

///////////////////////////////////////////////
/*
const randomInt = (min, max) =>
Math.floor(Math.random() * (max - min + 1) + min);

const randomColor = () =>
`rgb(${randomInt(0, 255)}, ${randomInt(0, 255)},
${randomInt(0, 255)})`;

document.querySelector('.nav__link').addEventListener('click',
function (e) {
  this.style.backgroundColor = randomColor();
  console.log('LINK', e.target, e.currentTarget);
});

document.querySelector('.nav__links').addEventListener(
'click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('NAV LINK', e.target, e.currentTarget);
});


document.querySelector('.nav').addEventListener(
'click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('NAV', e.target, e.currentTarget);
});
*/


///////////DOM TRAVERSING
/*
const h1 = document.querySelector('h1');

//downwards (child elements of h1)
console.log(h1.querySelectorAll('.highlight'));
console.log(h1.childNodes);
console.log(h1.children);
h1.firstElementChild.style.color = 'white';
h1.lastElementChild.style.color = 'red';

//upwards (parents)
console.log(h1.parentNode);
console.log(h1.parentElement);

//closest -> parents while query Selector -> child
h1.closest('.header').style.background = 'var(--gradient-secondary)';

//sideways -- siblings

console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

console.log(h1.parentElement.children);
[...h1.parentElement.children].forEach(function (e) {
  if (e !== h1) e.style.transform = 'scale(1)'
})
*/