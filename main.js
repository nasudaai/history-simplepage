const app = document.getElementById('app');
console.log(app);

const topTitle = 'Top';
app.innerHTML = `<h1>${topTitle}</h1>`;

const link = document.querySelectorAll('a');
console.log(link);

const updateView = () => {
  const pages = {
    '/': `<h1>TOP</h1>`,
    '/about': `<h1>About Page</h1>`,
    '/profile': `<h1>Profile</h1>`
  };
  app.innerHTML = pages[window.location.pathname];
}



link.forEach(a => {
  a.onclick = e => {
    e.preventDefault();
    window.history.pushState(null, '', a.href);
    updateView();
  };
});
