# Javascript Single Page Application
[![Build Status](https://travis-ci.org/jeantoledo/jfront.svg?branch=master)](https://travis-ci.org/jeantoledo/jfront)

Application [Demo](https://jeantoledo.github.io/jfront/)

## Stack:

- Babel (env preset)
- Webpack 3+
- Yarn 1+
- Webpack Dev Server
- ESLint (airbnb)
- Bulma (UI Framework)
- Travis CI
- React 16
- Jest

## Decisions

- Not use HMR with Webpack Dev Server
  - Why? I think that HMR isn't a requirement. Despite the productivity improvement, HMR have some side effects that require code to work properly (like old events attached in dom nodes and append elements logic).
- Bulma instead of Bootstrap, Foundation, Semantic UI, etc.
  - Why? Bulma is simple, modularized and CSS Only.

## Useful commands

Updating project packages: `yarn upgrade-interactive`
