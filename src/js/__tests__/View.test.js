import View from '../View';

test('should get layout', () => {
  document.body.innerHTML = '<div id="container"></div>';
  const container = document.querySelector('#container');
  const view = new View(container);
  view.getMark([{ name: 'samsung', cost: 10, id: 1 }]);
  const button = container.querySelector('#new-product');
  const tbody = container.querySelector('tbody');
  expect(button).toBeTruthy();
  expect(tbody).toBeTruthy();
});