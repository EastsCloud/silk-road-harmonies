// mobile menu
const btn = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');
btn?.addEventListener('click', ()=> nav.classList.toggle('open') );

// Scroll reveal
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); }
  });
},{threshold:.12});
document.querySelectorAll('.reveal, .fullbleed').forEach(el=>io.observe(el));
document.querySelector('.hero .hero-content')?.classList.add('float-in');
