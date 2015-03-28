Router.configure({
  i18n: {
    languages: ['ja', 'en'],
    autoConfLanguage: true,
    setLanguage: function (lang) {}
  }
});
Router.route('/', { template: 'top' });
Router.route('/sub', { template: 'sub' });
