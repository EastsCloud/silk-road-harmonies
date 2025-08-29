// Scroll reveal
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); }
  });
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

// Hero float-in
document.querySelector('.hero-content')?.classList.add('float-in');
