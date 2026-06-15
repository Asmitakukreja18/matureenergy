// Mobile menu
function toggleMenu(){document.getElementById('mobile-drawer').classList.toggle('hidden')}
function closeMenu(){document.getElementById('mobile-drawer').classList.add('hidden')}

// Highlight active nav link based on current page
document.addEventListener('DOMContentLoaded',()=>{
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link[data-page]').forEach(a=>{
    const pages={'index.html':'home','about.html':'about','services.html':'services','projects.html':'projects','partner.html':'partner','careers.html':'careers','contact.html':'contact','products.html':'products','testimonials.html':'testimonials'};
    if(pages[path]===a.dataset.page) a.classList.add('active');
  });
  // mobile drawer links
  document.querySelectorAll('.mobile-nav-link[data-page]').forEach(a=>{
    const pages={'index.html':'home','about.html':'about','services.html':'services','projects.html':'projects','partner.html':'partner','careers.html':'careers','contact.html':'contact','products.html':'products','testimonials.html':'testimonials'};
    if(pages[path]===a.dataset.page){a.style.background='rgba(16,185,129,0.1)';a.style.color='#059669';a.style.fontWeight='700'}
  });
});
