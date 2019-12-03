"use strict";
const Generator = require("yeoman-generator");
const chalk = require("chalk");
const yosay = require("yosay");
const glob = require("glob");
const { resolve } = require("path");
const remote = require("yeoman-remote");
const yoHelper = require("@feizheng/yeoman-generator-helper");
const replace = require("replace-in-file");

module.exports = class extends Generator {
  prompting() {
    this.log(
      yosay(
        `Welcome to the stunning ${chalk.red("generator-book-notes")} generator!`
      )
    );
    this.composeWith("github", this.props);
  }

  writing() {
    const done = this.async();
    remote(
      "afeiship",
      "boilerplate-book-notes",
      function(err, cachePath) {
        // copy files:
        this.fs.copy(
          glob.sync(resolve(cachePath, "{**,.*}")),
          this.destinationPath()
        );
        done();
      }.bind(this)
    );
  }
};
