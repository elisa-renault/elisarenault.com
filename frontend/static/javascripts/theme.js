function setPreferredTheme() {
    const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isLightMode = window.matchMedia('(prefers-color-scheme: light)').matches;
    const themeSwitch = document.getElementById('theme-switch');
  
    if (isDarkMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
      if (themeSwitch) {
        themeSwitch.checked = true;
      }
    } else if (isLightMode) {
      document.documentElement.setAttribute('data-theme', 'light');
      if (themeSwitch) {
        themeSwitch.checked = false;
      }
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      if (themeSwitch) {
        themeSwitch.checked = false;
      }
    }
}
  
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');

    if (currentTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'light');
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
}

document.addEventListener('DOMContentLoaded', (event) => {
    setPreferredTheme();

    const themeSwitch = document.getElementById('theme-switch');
    if (themeSwitch) {
        themeSwitch.addEventListener('click', toggleTheme);
    }
});