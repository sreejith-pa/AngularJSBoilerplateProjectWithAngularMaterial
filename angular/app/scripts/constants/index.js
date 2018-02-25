import angular from 'angular';
const bulk = require('bulk-require');

const submodule = angular.module('app.constants', []);

const files = bulk(__dirname, ['./**/!(*index|*.spec).js']);

function declare(constantMap) {
  Object.keys(constantMap).forEach((key) => {
    let item = constantMap[key];

    if (!item) {
      return;
    }

    if (item.fn && typeof item.fn === 'object') {
      submodule.constant(item.name, item.fn);
    } else {
      declare(item);
    }
  });
}

declare(files);
