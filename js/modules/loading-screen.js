export default class LoadingScreen {
  constructor(loading, container, input) {
    this.loading = document.querySelector('.loading-screen');
    this.container = document.querySelector('.container');
  }

  hideLoading() {
    this.loading.style.display = 'none';
  }

  showContainer() {
    this.container.style.display = 'grid';
  }

  init() {
    setInterval(() => {
      this.hideLoading();
      this.showContainer();
    }, 1500);
  }
}
