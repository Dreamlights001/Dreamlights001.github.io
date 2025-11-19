import { resumeData } from './data.js';
import { initScene } from './scene.js';

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);


let currentLayout = 'sidebar'; // 'sidebar' or 'top'

document.addEventListener('DOMContentLoaded', () => {

  initScene('three-container');


  renderAllSections();


  setupNavigation();
  setupObserver(); // For scroll animations


  lucide.createIcons();
});

function renderAllSections() {
  renderPersonal();
  renderEducation();
  renderSkills();
  renderResearch();
  renderAwards();
  renderCompetitions();
}

/* --- Rendering Functions with Icons & Styling --- */

function renderPersonal() {
  const p = resumeData.personal_info;
  $('#personal-content').innerHTML = `
    <h2 class="section-title text-4xl font-bold mb-8 text-white">Personal Info</h2>
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div class="lg:col-span-2">
        <h1 class="text-5xl md:text-7xl font-bold text-white mb-4 neon-text tracking-tight">${p.name}</h1>
        <h3 class="text-2xl text-primary mb-6 font-mono">${p.title}</h3>
        <p class="text-gray-300 text-lg leading-relaxed mb-8 border-l-4 border-primary/50 pl-6">${p.bio}</p>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
             <div class="glass-card p-4 rounded flex items-center">
                <i data-lucide="map-pin" class="text-secondary mr-3"></i>
                <span class="text-sm">${p.location}</span>
             </div>
             <div class="glass-card p-4 rounded flex items-center">
                <i data-lucide="mail" class="text-secondary mr-3"></i>
                <span class="text-sm">${p.contact.split('|')[1].trim()}</span>
             </div>
        </div>
      </div>
      
      <div class="glass-card p-8 rounded-xl border border-white/10 bg-white/5 flex flex-col justify-center">
         <div class="space-y-6">
            <div>
                <label class="text-xs text-gray-500 uppercase tracking-wider font-bold">Rank</label>
                <div class="text-2xl font-mono text-white">9<span class="text-gray-500 text-sm">/30</span></div>
            </div>
            <div>
                <label class="text-xs text-gray-500 uppercase tracking-wider font-bold">GPA</label>
                <div class="text-2xl font-mono text-primary">86.0</div>
            </div>
            <div>
                <label class="text-xs text-gray-500 uppercase tracking-wider font-bold">CET-6</label>
                <div class="text-2xl font-mono text-white">480</div>
            </div>
         </div>
      </div>
    </div>
  `;
}

function renderEducation() {
  const html = resumeData.education.map((edu, index) => `
    <div class="relative pl-8 pb-12 border-l border-gray-800 last:border-0 last:pb-0">
      <div class="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_10px_var(--color-primary)]"></div>
      <div class="glass-card p-6 rounded-lg hover:border-primary/30 transition border border-transparent">
        <div class="flex flex-col md:flex-row justify-between items-start mb-2">
            <h3 class="text-xl font-bold text-white">${edu.degree}</h3>
            <span class="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded mt-2 md:mt-0">${edu.dates}</span>
        </div>
        <div class="text-gray-400 mb-3 font-medium">${edu.institution}</div>
        <p class="text-gray-400 text-sm leading-relaxed">${edu.details}</p>
      </div>
    </div>
  `).join('');
  $('#education-content').innerHTML = `<h2 class="section-title text-3xl font-bold mb-8 text-white">Education</h2><div class="mt-8">${html}</div>`;
}

function renderSkills() {
  const html = resumeData.skills.map(skill => `
    <div class="bg-white/5 p-6 rounded-xl border border-white/5 hover:border-primary/30 transition group">
      <h3 class="text-lg font-bold text-primary mb-4 flex items-center">
        <span class="w-1 h-6 bg-primary mr-3 rounded-full"></span>
        ${skill.category}
      </h3>
      <div class="flex flex-wrap gap-2">
        ${skill.items.map(item => `
            <span class="px-3 py-1.5 bg-black/40 text-xs rounded-md text-gray-300 font-mono border border-white/5 group-hover:border-white/20 transition">
                ${item}
            </span>
        `).join('')}
      </div>
    </div>
  `).join('');
  $('#skills-content').innerHTML = `<h2 class="section-title text-3xl font-bold mb-8 text-white">Technical Skills</h2><div class="grid grid-cols-1 md:grid-cols-2 gap-6">${html}</div>`;
}

function renderResearch() {
  const html = resumeData.research.map(res => `
    <div class="glass-card p-8 mb-6 rounded-xl relative overflow-hidden group border border-white/10 hover:border-secondary/50 transition-colors">
      <div class="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
        <i data-lucide="microscope" width="100" height="100"></i>
      </div>
      <div class="relative z-10">
          <h3 class="text-2xl font-bold text-white mb-2 group-hover:text-secondary transition-colors">${res.title}</h3>
          <div class="inline-block bg-secondary/10 text-secondary text-xs font-bold px-3 py-1 rounded-full mb-4">${res.role}</div>
          <p class="text-gray-400 leading-relaxed">${res.desc}</p>
      </div>
    </div>
  `).join('');
  $('#research-content').innerHTML = `<h2 class="section-title text-3xl font-bold mb-8 text-white">Research Experience</h2>${html}`;
}

function renderAwards() {
  const html = resumeData.awards.map((award, idx) => `
    <div class="flex items-start mb-4 p-4 rounded-lg hover:bg-white/5 transition">
      <span class="text-primary font-mono mr-4 text-lg opacity-50">0${idx+1}</span>
      <div>
          <p class="text-white font-medium">${award}</p>
      </div>
    </div>
  `).join('');
  $('#awards-content').innerHTML = `
    <h2 class="section-title text-3xl font-bold mb-8 text-white">Honors & Awards</h2>
    <div class="glass-card p-2 rounded-xl border border-white/10 divide-y divide-white/5">
        ${html}
    </div>`;
}

function renderCompetitions() {
  const html = resumeData.competitions.map(comp => `
    <div class="glass-card p-6 rounded-lg border-l-4 border-purple-500 bg-gradient-to-r from-purple-900/10 to-transparent">
      <h3 class="text-xl font-bold text-white">${comp.name}</h3>
      <div class="text-sm text-purple-400 mb-2 font-mono mt-1">${comp.role}</div>
      <p class="text-gray-400 text-sm mt-3">${comp.desc}</p>
    </div>
  `).join('');
  $('#competitions-content').innerHTML = `<h2 class="section-title text-3xl font-bold mb-8 text-white">Competitions</h2><div class="grid grid-cols-1 md:grid-cols-2 gap-4">${html}</div>`;
}

/* --- Navigation Logic --- */

function setupNavigation() {
  const sidebar = $('#sidebar');
  const topNav = $('#top-nav');
  const mainWrapper = $('#main-wrapper');
  

  const toClassicBtn = $('#layout-toggle');
  const toSidebarBtn = $('#sidebar-toggle-btn');
  const mobileToggle = $('#mobile-toggle');
  const mobileClose = $('#mobile-close');
  const mobileDrawer = $('#mobile-drawer');


  window.addEventListener('navigate3d', (e) => {
    scrollToSection(e.detail);
  });


  function setSidebarMode() {
    currentLayout = 'sidebar';
    sidebar.classList.remove('-translate-x-full');
    topNav.classList.add('hidden');
    mainWrapper.classList.add('md:ml-72');
    mainWrapper.classList.remove('pt-20');
  }

  function setTopNavMode() {
    currentLayout = 'top';
    sidebar.classList.add('-translate-x-full');
    topNav.classList.remove('hidden');
    mainWrapper.classList.remove('md:ml-72');
    mainWrapper.classList.add('pt-20'); // Add padding for fixed header
  }

  toClassicBtn.addEventListener('click', setTopNavMode);
  toSidebarBtn.addEventListener('click', setSidebarMode);


  mobileToggle.addEventListener('click', () => {
    mobileDrawer.classList.remove('translate-x-full');
  });
  
  mobileClose.addEventListener('click', () => {
    mobileDrawer.classList.add('translate-x-full');
  });


  $$('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const id = this.getAttribute('href').substring(1);
      scrollToSection(id);
      

      mobileDrawer.classList.add('translate-x-full');
    });
  });
}

function scrollToSection(id) {
  const element = document.getElementById(id);
  if (element) {
    const offset = currentLayout === 'top' ? 100 : 20;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  }
}

/* --- Intersection Observer for Fade In --- */
function setupObserver() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.firstElementChild?.classList.remove('opacity-0', 'translate-y-10');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    $$('.section-pad').forEach(section => {
        observer.observe(section);
    });
}
