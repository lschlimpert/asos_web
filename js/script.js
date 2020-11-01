const main = document.querySelector('main'),
      footer = document.querySelector('footer'),
      footerNav = document.querySelector('footer > nav'),
      footerSmall = document.querySelector('footer > small'),
      header = document.querySelector('header'),
      headerLogo = document.querySelector('header .logo'),
      headerLogoContainer = document.querySelector('header .logo-container'),
      headerNav = document.querySelector('header .header-nav'),
      specialSection = document.querySelector('section#optimisation');

const bgImages = [
  {
    src: "url('/img/1_bg.png')",
    position: "left 0 top"
  },
  {
    src: "url('/img/2_bg.png')",
    position: "left 25% top"
  },
  {
    src: "url('/img/3_bg.png')",
    position: "left 50% top"
  },
  {
    src: "url('/img/4_bg.png')",
    position: "right 0 top"
  }
];

let bodyWidth

window.addEventListener('resize', e => {
  e.preventDefault();
  resizePage();
})

function hoverEffect (n) {
  bgReset()

  main.style.backgroundImage = bgImages[n].src;
  main.style.backgroundPosition = bgImages[n].position;

  if (n == 0) {
    footerNav.classList.add('white');
    headerLogoContainer.classList.add('white');
    headerLogo.src = `${headerLogo.dataset.white}`;
  } else if (n == 3) {
    footerSmall.classList.add('white');
    headerNav.classList.add('white');
  }
}

function bgReset () {
  main.style.backgroundImage = 'none';

  footerNav.classList.remove('white');
  headerLogoContainer.classList.remove('white');
  headerLogo.src = '/img/logo.svg';

  footerSmall.classList.remove('white');
  headerNav.classList.remove('white');
}

function resizePage () {
  bodyWidth = document.querySelector('body').offsetWidth;
  if (bodyWidth != 1440) {
    header.classList.add('hidden')
    main.classList.add('hidden')
    footer.classList.add('hidden')
    specialSection.classList.remove('hidden')
  } else {
    header.classList.remove('hidden')
    main.classList.remove('hidden')
    footer.classList.remove('hidden')
    specialSection.classList.add('hidden')
  }
}

resizePage();