# Udacity Project:
# Evaluate a news Article with Natural Language project

## Overview
The goal of this project is to give you practice with:
- Setting up Webpack
- Sass styles
- Webpack Loaders and Plugins
- Creating layouts and page design
- Service workers
- Using APIs and creating requests to external urls

In order to develop this project, we are using the concept of Natural language processing and APIs created with the purpose of evaluating Natural language.

Wikipedia offers the following definition:

> Natural language processing (NLP) is a subfield of computer science, information engineering, and artificial intelligence
concerned with the interactions between computers and human (natural) languages, in particular how to program computers to
process and analyze large amounts of natural language data.

We will use an API called MeaningCloud to determine various attributes of an article or blog post.

## Project-Rubric

The project is created in accordance to the following specifications:

* [Nanodegree Project Rubric Guide](https://review.udacity.com/#!/rubrics/2668/view)

## Style-Guide

See below for the Udacity Style Guide used thoroughout the Front End Nanodegree.

* [Nanodegree Style Guide](http://udacity.github.io/frontend-nanodegree-styleguide/)

## Run project

Below shows how to run in development and production mode

### Run in development mode

To start the webpack dev server at port 8081

`$ npm run build-dev`

### Run in production mode

Generate the dist files and then start server at port 8080

`$ npm run build-prod`

`$ npm run start`

## Configs

Here, we have two webpack config files for both development mode(`webpack.config.dev.js`) and production mode(`webpack.config.prod.js` )

We also have a `package.json` to manage dependencies.

## Testing

Testing is done with Jest. To run test, use the command

`npm run test`
