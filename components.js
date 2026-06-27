// Mobile menu
function toggleMenu(){
  const d = document.getElementById('mobile-drawer');
  d.classList.toggle('hidden');
  document.body.classList.toggle('menu-open');
}
function closeMenu(){
  document.getElementById('mobile-drawer').classList.add('hidden');
  document.body.classList.remove('menu-open');
}

// Logo Intro Animation
function hideLogoIntro(){
  const intro = document.getElementById('logo-intro');
  if(intro){
    setTimeout(()=>{intro.classList.add('hidden')}, 2500);
  }
}

// Highlight active nav link based on current page
document.addEventListener('DOMContentLoaded',()=>{
  hideLogoIntro();
  const path = window.location.pathname.split('/').pop() || 'index.html';
  const pages={'index.html':'home','about.html':'about','services.html':'services','projects.html':'projects','partner.html':'partner','careers.html':'careers','contact.html':'contact','products.html':'products','testimonials.html':'testimonials','safety.html':'safety','blog.html':'blog'};
  document.querySelectorAll('.nav-link[data-page]').forEach(a=>{
    if(pages[path]===a.dataset.page) a.classList.add('active');
  });
  document.querySelectorAll('.mobile-nav-link[data-page]').forEach(a=>{
    if(pages[path]===a.dataset.page){a.style.background='rgba(16,185,129,0.1)';a.style.color='#059669';a.style.fontWeight='700'}
  });
});
