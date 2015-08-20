import $ from 'jquery';

class windowService {
  constructor() {
    this._$window = $(window);
  }

  getWidth() {
    return this._$window.width();
  }
}

export default windowService;
