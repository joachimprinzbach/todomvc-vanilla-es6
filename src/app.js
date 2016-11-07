import '../lib/todo-base.js';
import Controller from './controller';
import {$on} from './helpers';
import Template from './template';
import Store from './store';
import View from './view';

require('./app.less');

const store = new Store('todos-vanilla-es6');

const template = new Template();
const view = new View(template);

/**
 * @type {Controller}
 */
const controller = new Controller(store, view);

const setView = () => controller.setView(document.location.hash);
$on(window, 'load', setView);
$on(window, 'hashchange', setView);
