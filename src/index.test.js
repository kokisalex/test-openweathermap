it('should not throw', () => {
  const root = document.createElement('div');

  root.className = 'Reducer';
  root.setAttribute('id', 'root');

  document.body.appendChild(root);

  require('./index');
});