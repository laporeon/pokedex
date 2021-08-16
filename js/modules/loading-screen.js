export default class LoadingScreen {
  constructor(loading, main) {
    this.loading = document.querySelector('.loading-screen');
    this.main = document.querySelector('main');
  }

  hideLoad() {
    this.loading.style.display = 'none';
  }

  showMain() {
    this.main.style.display = 'block';
  }

  init() {
    setInterval(() => {
      this.hideLoad();
      this.showMain();
    }, 3000);
  }
}
