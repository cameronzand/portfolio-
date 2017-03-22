import angular from 'angular';
import 'angular-ui-router';

import { routerConfig } from './routes';
import { LayoutController } from './controllers/LayoutController';
import { HomeController } from './controllers/HomeController';

angular
	.module('app', ['ui.router'])
	.controller('LayoutController', LayoutController)
	.controller('HomeController', HomeController)

	.config(routerConfig)

	