'use strict';
const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  writing() {
    this.composeWith('@jswork/github');
    this.fs.copy(
      this.templatePath(['docs', 'example']),
      this.destinationPath()
    );
  }
};
