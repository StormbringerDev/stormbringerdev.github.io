/*
   Copyright 2026 StormbringerDev

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
const toggle = document.querySelector('.theme-toggle');
const html = document.documentElement;

toggle.addEventListener('click', () => {
  const current = html.getAttribute('data-theme');
  const nextTheme = current === 'dark' ? 'light' : 'dark';

  html.setAttribute('data-theme', nextTheme);

  toggle.innerHTML =
    nextTheme === 'dark' ? '<i class="fas fa-moon"></i>' : '<i class="fas fa-sun"></i>';
});

window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-links a');

  let current = '';
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 200;
    if (scrollY >= sectionTop) current = section.getAttribute('id');
  });

  navLinks.forEach((link) => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});
