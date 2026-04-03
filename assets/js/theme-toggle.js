(function () {
  var storageKey = 'argitobras-theme';

  function getTheme() {
    var theme = document.documentElement.getAttribute('data-theme');
    return theme === 'light' ? 'light' : 'dark';
  }

  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    document.documentElement.style.colorScheme = theme;

    var isDark = theme === 'dark';
    document.querySelectorAll('[data-theme-toggle]').forEach(function (button) {
      var icon = button.querySelector('[data-theme-icon]');
      var label = button.querySelector('[data-theme-label]');

      if (icon) {
        icon.className = isDark ? 'fas fa-sun mr-2' : 'fas fa-moon mr-2';
      }

      if (label) {
        label.textContent = isDark ? 'Modo claro' : 'Modo oscuro';
      }

      button.setAttribute('aria-pressed', String(isDark));
      button.setAttribute('aria-label', isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro');
    });
  }

  function init() {
    setTheme(getTheme());

    document.querySelectorAll('[data-theme-toggle]').forEach(function (button) {
      button.addEventListener('click', function () {
        var nextTheme = getTheme() === 'dark' ? 'light' : 'dark';

        try {
          window.localStorage.setItem(storageKey, nextTheme);
        } catch (e) {
          // Ignore storage failures and still apply the theme.
        }

        setTheme(nextTheme);
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
}());

