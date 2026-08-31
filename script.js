const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{ if(entry.isIntersecting) entry.target.classList.add('show'); });
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

const menu = document.querySelector('.menu');
const nav = document.querySelector('.nav nav');
menu?.addEventListener('click', ()=>{
  const open = nav.style.display === 'flex';
  nav.style.display = open ? '' : 'flex';
  nav.style.position = 'absolute';
  nav.style.top = '76px';
  nav.style.left = '0';
  nav.style.right = '0';
  nav.style.padding = '22px 7vw';
  nav.style.background = '#09090b';
  nav.style.flexDirection = 'column';
  nav.style.borderBottom = '1px solid #202024';
});
nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.style.display='';}));
