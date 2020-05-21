[![Gitpod Ready-to-Code](https://img.shields.io/badge/Gitpod-Ready--to--Code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/BjoernSchilberg/stechlinsee-gebiet)

# Urwaldpate

- [Urwaldpate](#urwaldpate)
  - [Project setup](#project-setup)
    - [Compiles and hot-reloads for development](#compiles-and-hot-reloads-for-development)
    - [Compiles and minifies for production](#compiles-and-minifies-for-production)
    - [Run your tests](#run-your-tests)
    - [Lints and fixes files](#lints-and-fixes-files)
    - [Customize configuration](#customize-configuration)
    - [Publish on github pages](#publish-on-github-pages)
  - [Tips and Tricks](#tips-and-tricks)
    - [ogr count features](#ogr-count-features)
    - [Find duplicates in data](#find-duplicates-in-data)
    - [Firebase rules](#firebase-rules)

## Project setup

```shell
yarn install
```

### Compiles and hot-reloads for development

```shell
yarn run serve
```

### Compiles and minifies for production

```shell
yarn run build
```

### Run your tests

```shell
yarn run test
```

### Lints and fixes files

```shell
yarn run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

### Publish on github pages

Publish on github pages is handling via github actions by pushing tags
following [SemVer vX.Y.Z](https://semver.org/).

```shell
git tag vX.Y.Z
git push origin --tags
```

## Tips and Tricks

### ogr count features

```shell
ogrinfo -sql "Select count(*) from RasterWGS_normal where Gebiet ='Stechlinsee-Gebiet'" RasterWGS_normal.json
```

### Find duplicates in data

```shell
egrep  -i "RasterID" input.json | sort | uniq -d
````

With ogr list all duplicates RasterIDs:

```shell
ogrinfo -dialect SQLITE -sql "SELECT RasterID, Gebiet, COUNT(RasterID) FROM test GROUP BY RasterID HAVING COUNT(RasterID)>1" test.json
```

Display duplicate rows with all information:

```shell
ogrinfo -dialect SQLITE -sql "SELECT RasterID, Gebiet FROM (SELECT *, count(*) OVER (PARTITION BY RasterID) as count FROM test) tableWithCount WHERE tableWithCount.count > 1" test.json
````

Return as CSV to stdout:

```shell
ogr2ogr -F CSV "/vsistdout/" -dialect SQLITE -sql "SELECT RasterID, Gebiet FROM (SELECT *, count(*) OVER (PARTITION BY RasterID) as count FROM test) tableWithCount WHERE tableWithCount.count > 1" test.json
```

### Firebase rules

```json
{
  "rules": {
    ".read": "true",
    ".write": "auth != null"
  }
}
```