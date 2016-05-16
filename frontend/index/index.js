import template from './index.jade';
import './index.styl'; 

export default class App {
    constructor() {
        this.el = document.createElement('div');
        this.el.className = ('app');
        this.el.innerHTML = template();
    }
}