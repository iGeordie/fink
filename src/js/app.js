import {ExampleClass} from './modules/example';

let eg = new ExampleClass('babel eg');
console.log(eg.echo('echo test'));

let worker = new Worker('assets/js/webworkers/worker.js');
worker.onmessage = function(e) {
	console.log(e.data);
};
worker.onerror = function(e) {
	console.log(e);
};
worker.postMessage({'value':'echo from babel'});