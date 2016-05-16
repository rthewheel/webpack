import template from './menu.jade'
import './menu.styl'

export default class Menu {
    constructor(options) {
        this.el = document.createElement('nav');
        this.el.innerHTML = template(options);
    }
}