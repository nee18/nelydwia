class ThemeManager {
  constructor() {
    this.toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
    this.toggleCollapse = document.querySelector('.project-card-collapse');
    this.init();
  }

  init() {
    this.loadTheme();
    this.addEventListeners();
  }

  loadTheme() {
    const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;
    if (currentTheme) {
      document.documentElement.setAttribute('data-theme', currentTheme);
      if (currentTheme === 'dark') {
        this.toggleSwitch.checked = true;
        document.querySelector('.theme-switch i').className = 'far fa-moon';
        document.querySelector('.navbar').className = 'navbar navbar-expand-lg navbar-dark fixed-top bg-main';
      }
    }
  }

  switchTheme(event) {
    if (event.target.checked) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
      document.querySelector('.theme-switch i').className = 'far fa-moon';
      document.querySelector('.navbar').className = 'navbar navbar-expand-lg navbar-dark fixed-top bg-main';
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
      document.querySelector('.theme-switch i').className = 'fas fa-moon';
      document.querySelector('.navbar').className = 'navbar navbar-expand-lg navbar-light fixed-top bg-main';
    }
  }

  collapseProjects(event) {
    const expanded = event.currentTarget.getAttribute('aria-expanded');
    if (expanded !== 'false') {
      event.currentTarget.innerHTML = `
        Less
        <i class="fas fa-angle-up"></i>
      `;
    } else {
      event.currentTarget.innerHTML = `
        More
        <i class="fas fa-angle-down"></i>
      `;
    }
  }

  addEventListeners() {
    this.toggleSwitch.addEventListener('change', this.switchTheme.bind(this), false);
    this.toggleCollapse.addEventListener('click', this.collapseProjects.bind(this), false);
  }
}

window.onload = () => {
  new ThemeManager();
};