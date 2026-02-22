@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Outfit:wght@400;500;600;700;800&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  body {
    @apply font-sans text-gray-800 bg-white antialiased;
  }
  h1, h2, h3, h4, h5, h6 {
    @apply font-heading;
  }
  
  /* Enhanced mobile touch targets */
  @media (max-width: 768px) {
    button, a {
      min-height: 44px;
    }
  }
}

@layer components {
  .container-padding {
    @apply px-4 sm:px-6 lg:px-8;
  }
  
  .btn-primary {
    @apply inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-primary hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5;
  }
  
  .btn-secondary {
    @apply inline-flex items-center justify-center px-6 py-3 border-2 border-primary text-base font-medium rounded-full text-primary bg-transparent hover:bg-primary/5 transition-all duration-300;
  }
}

/* Hide Wegic branding badge */
@layer utilities {
  [class*="wegic"] {
    display: none !important;
  }
  
  a[href*="wegic.com"] {
    display: none !important;
  }
  
  /* Smooth scrolling for better mobile UX */
  html {
    scroll-behavior: smooth;
  }
}

/* CRITICAL: Mobile Navigation - PURE CSS SOLUTION */
/* Must be OUTSIDE @layer to override Tailwind */
@media screen and (max-width: 767px) {
  /* FORCE HIDE desktop nav on mobile */
  .nav-desktop-only {
    display: none !important;
    visibility: hidden !important;
    opacity: 0 !important;
    pointer-events: none !important;
    position: absolute !important;
    left: -99999px !important;
  }
  
  /* FORCE SHOW mobile hamburger */
  .nav-mobile-only {
    display: flex !important;
    visibility: visible !important;
  }
}

@media screen and (min-width: 768px) {
  /* FORCE HIDE mobile hamburger on desktop */
  .nav-mobile-only {
    display: none !important;
    visibility: hidden !important;
  }
  
  /* FORCE SHOW desktop nav */
  .nav-desktop-only {
    display: flex !important;
    visibility: visible !important;
  }
}

/* CRITICAL: Mobile Navigation - PURE CSS SOLUTION */
/* Must be OUTSIDE @layer to override Tailwind */
@media screen and (max-width: 767px) {
  /* FORCE HIDE desktop nav on mobile */
  .nav-desktop-only {
    display: none !important;
    visibility: hidden !important;
    opacity: 0 !important;
    pointer-events: none !important;
    position: absolute !important;
    left: -99999px !important;
  }
  
  /* FORCE SHOW mobile hamburger */
  .nav-mobile-only {
    display: flex !important;
    visibility: visible !important;
  }
}

@media screen and (min-width: 768px) {
  /* FORCE HIDE mobile hamburger on desktop */
  .nav-mobile-only {
    display: none !important;
    visibility: hidden !important;
  }
  
  /* FORCE SHOW desktop nav */
  .nav-desktop-only {
    display: flex !important;
    visibility: visible !important;
  }
}
