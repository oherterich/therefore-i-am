import $ from 'jquery';

import windowService from '../services/windowService';

class Views {
  constructor() {
    this._window = new windowService();

    console.log(this._window.getWidth());

    this._options = {
      numViews: 25,
      numX: 5,
      $container: $('.content')
    };

    this._updateContainer();
    this._createViews();
  }

  _updateContainer() {
    const containerWidth = this._window.getWidth() * this._options.numX;
    this._options.$container.css({
      'width': `${containerWidth}px`
    })
  }

  _createViews() {
    for (let i = 0; i < this._options.numViews; i++) {
      this._createViewHTML(this._options.$container);
    }
  }

  _createViewHTML($main) {
    const $container = $(document.createElement('section'));
    $container.addClass('DataContainer');

    const $wrapper = $(document.createElement('div'));
    $wrapper.addClass('wrapper');

    const $title = $(document.createElement('h1'));
    $title.text('Hello');

    $wrapper.append($title);
    $container.append($wrapper);
    $main.append($container);
  }
}

export default new Views();