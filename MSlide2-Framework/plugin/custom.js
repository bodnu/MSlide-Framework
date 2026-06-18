// NOTE: MSlide2.4 and Columbia custom.js are currently identical.
// Mirror runtime fixes in both files until a shared runtime folder exists.
Reveal.initialize({
  // width: width,
  // height: height,
  scale: 1.0,
  margin: 0,
  transition: "fade", // none/fade/slide/convex/concave/zoom
  center: true,
  preloadIframes: true,
  hash: true,
  progress: false,
  navigation: true,
  backgroundIframe: true,
  touch: true,
  jumpToSlide: false,
  showNotes: false,
  pause: false,
  overview: false,
  disableLayout: false,
  scrollProgress: true,
  lightbox: true,
  plugins: [
    RevealMenu,
    RevealMarkdown,
    RevealHighlight,
    RevealNotes,
    Verticator,
    Simplemenu,
  ],
  simplemenu: {
    barhtml: {
      header:
        "<div class='logo-header'><a href='#'><img class='logo' src='assets/brand/MSlide2.svg'></a></div>",
      footer:
        "<div class='menubar'><ul class='menu'><li><a href='https://mslide.bod.nu/mslide-2-docs/interactive-catalog-framework/' target='_parent'>Documentation</a></li><li><a href='https://mslide.bod.nu/terms-conditions/' target='_blank'>Terms & Conditions</a></li><li><a href='https://mslide.bod.nu/cookie-policy/' target='_blank'>Cookie Policy</a></li><li><a href='https://www.trustpilot.com/review/bod.nu?utm_medium=trustbox&utm_source=TrustBoxReviewCollector' target='_blank'>Feedback</a></li></ul><div class='toolbar'><a href='https://www.tiktok.com/@mslide.bod' target='_blank'><button class='toolbar-button'><i class='iconoir-tiktok'></i></button></a><a href='https://www.instagram.com/' target='_blank'><button class='toolbar-button'><i class='iconoir-instagram'></i></button></a><a href='#' target='_blank'><button class='toolbar-button'><i class='iconoir-github-circle'></i></button></a><a href='https://www.youtube.com/@MSlideMedia/'><button class='toolbar-button'><i class='iconoir-youtube'></i></button></a></div><div class='logo-footer'><a href='https://mslide.bod.nu//'><img class='logo' src='assets/brand/MSlide_line.png'></a></div></div>",
    },
  },
  verticator: {
    color: "white",
  },
  toolbar: {
    position: "bottom",
    fullscreen: true,
    help: false,
  },
  dependencies: [{ src: "plugin/toolbar/toolbar.js" }],
});

function initializePreviewLinks() {
  document.querySelectorAll('[data-preview-link]').forEach((element) => {
    if (element.__mslidePreviewBound) return;
    element.__mslidePreviewBound = true;

    element.addEventListener('click', (event) => {
      const url = element.getAttribute('href');

      if (!url) {
        console.warn('Preview link skipped because href is missing.', element);
        return;
      }

      if (typeof Reveal !== 'undefined' && typeof Reveal.showPreview === 'function') {
        event.preventDefault();
        event.stopImmediatePropagation();
        Reveal.showPreview(url);
      }
    });
  });
}

initializePreviewLinks();



// Download scripts
// Initialize deferredPrompt for use later to show browser install prompt.
var deferredPrompt;
var pwaDownloadButton = document.querySelector('.reveal-toolbar-button .fa-arrow-up-right-from-square');
var pwaInstalled = localStorage.getItem('pwaInstalled') || false;

if (pwaInstalled) {
  let pwaInstalledObject = JSON.parse(pwaInstalled);
  if (pwaInstalledObject.timestamp) {
    let currentTime = new Date().getTime();
    let timeDifference = currentTime - pwaInstalledObject.timestamp;
    let daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    if (daysDifference > 10) {
      pwaDownloadButton.style.display = 'block';
      // update the timestamp
      var object = {
        pwaInstalled: true,
        timestamp: new Date().getTime()
      };
      localStorage.setItem('pwaInstalled', JSON.stringify(object));
    } else {
      if (pwaDownloadButton) {
        pwaDownloadButton.style.display = 'none';
      }
    }
  } 
}

window.addEventListener('beforeinstallprompt', (e) => {
  // Prevent the mini-infobar from appearing on mobile
  e.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
});

window.addEventListener('appinstalled', (event) => {
  var object = {
    pwaInstalled: true,
    timestamp: new Date().getTime()
  };
  localStorage.setItem('pwaInstalled', JSON.stringify(object));
  // Clear the deferredPrompt so it can be garbage collected
  deferredPrompt = null;

  // hide the a tag which have reveal-toolbar-button fa-download class
  pwaDownloadButton ? pwaDownloadButton.style.display = 'none' : null;

});

function getPWADisplayMode() {
  const isStandalone = window.matchMedia('(display-mode: standalone)').matches;
  if (document.referrer.startsWith('android-app://')) {
    return 'twa';
  } else if (navigator.standalone || isStandalone) {
    return 'standalone';
  }
  return 'browser';
}

window.matchMedia('(display-mode: standalone)').addEventListener('change', (evt) => {
  var displayMode = 'browser';
  if (evt.matches) {
    displayMode = 'standalone';
  }
  // Log display mode change to analytics
  console.log('DISPLAY_MODE_CHANGED', displayMode);

});

// check if the device is mobile
function isMobile() {
  return window.innerWidth < 480;
}

function showToast(button) {
  const message = button.dataset.message;
  const type = button.dataset.type || 'is-success';
  const animate = button.dataset.animate || { in: 'fadeIn', out: 'fadeOut' };

  bulmaToast.toast({
    message,
    type,
    position: isMobile() ? 'bottom-center' : 'top-right',
    animate,
    dismissible: true,
    duration: 3000,
  });
}

const toastButtons = document.querySelectorAll('.toast-button');

toastButtons.forEach(button => {
  button.addEventListener('click', () => showToast(button));
});

const initializedSlides = new Set();

Reveal.on('slidechanged', (event) => {
  const activeSlideIndex = event.indexh + '-' + event.indexv;

  if (!initializedSlides.has(activeSlideIndex)) {
    const carouselElements = event.currentSlide.querySelectorAll('.carousel');
    const heroCarousel = event.currentSlide.querySelector('#heroCarousel');

    if (heroCarousel) {
      bulmaCarousel.attach(heroCarousel, {
        slidesToScroll: 1,
        slidesToShow: 1,
        loop: true,
        autoplay: true,
        autoplaySpeed: 5000,
        effect: 'fade',
        pagination: true,
        navigation: true,
        navigationKeys: false,
    });
    }

    if (carouselElements.length > 0) {
      carouselElements.forEach(carouselElement => {
        bulmaCarousel.attach(carouselElement, {
          slidesToScroll: 1,
          slidesToShow: 1,
          loop: true,
          autoplay: true,
          pagination: true,
          navigation: true,
          navigationKeys: false,
        });
      });
    }

    initializedSlides.add(activeSlideIndex);
  }
});


// JavaScript to handle consent
    const gdprBanner = document.getElementById('gdpr-consent-banner');
    const gdprAccept = document.getElementById('gdpr-accept');
    const gdprDecline = document.getElementById('gdpr-decline');

    // Check if consent has already been given
    if (localStorage.getItem('gdpr-consent') === 'accepted') {
      gdprBanner.style.display = 'none'; // Hide banner if already accepted
    } else {
      gdprBanner.style.display = 'block'; // Show banner if no consent
    }

    // Handle Accept button
    gdprAccept.addEventListener('click', () => {
      localStorage.setItem('gdpr-consent', 'accepted'); // Store consent
      gdprBanner.style.display = 'none'; // Hide banner
      // Add your cookie or tracking code here
    });

    // Handle Decline button
    gdprDecline.addEventListener('click', () => {
      localStorage.setItem('gdpr-consent', 'declined'); // Store decline
      gdprBanner.style.display = 'none'; // Hide banner
      // Optionally, disable cookies or tracking here
    });

    // Hide preloader and display slides after content is loaded
window.addEventListener('load', () => {
    const preloader = document.querySelector('.preloader-overlay');
    if (preloader) preloader.style.display = 'none';

    const slides = document.querySelector('.slides');
    if (slides) slides.style.display = 'block';

    setTimeout(() => window.scrollTo(0, 1), 100); // Hide URL bar
});

// Sidebar Toggle Button functionality
const sidebarToggleBtn = document.getElementById('sidebar-toggle-btn');
if (sidebarToggleBtn && typeof Reveal !== 'undefined') {
  sidebarToggleBtn.addEventListener('click', () => {
    // Get the menu plugin instance
    const menuPlugin = Reveal.getPlugin('menu');
    if (menuPlugin) {
      // Toggle the menu
      menuPlugin.toggle();
      
      // Update button position after toggle
      setTimeout(() => {
        const sidebar = document.querySelector('.slide-menu');
        const isOpen = document.body.classList.contains('slide-menu-active');
        if (sidebar && isOpen) {
          const sidebarWidth = sidebar.offsetWidth;
          sidebarToggleBtn.style.left = sidebarWidth + 'px';
        } else {
          sidebarToggleBtn.style.left = '0px';
        }
      }, 50);
    }
  });
  
  // Monitor sidebar state changes
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.attributeName === 'class') {
        const isOpen = document.body.classList.contains('slide-menu-active');
        const sidebar = document.querySelector('.slide-menu');
        if (sidebar && isOpen) {
          const sidebarWidth = sidebar.offsetWidth;
          sidebarToggleBtn.style.left = sidebarWidth + 'px';
        } else {
          sidebarToggleBtn.style.left = '0px';
        }
      }
    });
  });
  
  observer.observe(document.body, {
    attributes: true,
    attributeFilter: ['class']
  });
}

// Thumb Navigation Toast functionality - auto-show for 7 seconds
const thumbNavToast = document.getElementById('thumb-nav-toast');
if (thumbNavToast) {
  // Show toast after page loads
  setTimeout(() => {
    thumbNavToast.classList.add('show');
    
    // Auto-hide after 7 seconds
    setTimeout(() => {
      thumbNavToast.classList.remove('show');
    }, 7000);
  }, 500);
  
  // Allow manual dismiss on click
  thumbNavToast.addEventListener('click', () => {
    // When clicked, open the sidebar menu
    const menuPlugin = Reveal.getPlugin('menu');
    if (menuPlugin) {
      menuPlugin.toggle();
    }
    thumbNavToast.classList.remove('show');
  });
}
