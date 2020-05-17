[![Gitpod Ready-to-Code](https://img.shields.io/badge/Gitpod-Ready--to--Code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/BjoernSchilberg/stechlinsee-gebiet) 

# karte

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Tips and Tricks

### Find duplicates in data
```shell
egrep  -i "RasterID" input.json | sort | uniq -d
````

With ogr list all duplicates RasterIDs:

```shell
ogrinfo -dialect SQLITE -sql "SELECT RasterID, Gebiet, COUNT(RasterID) FROM test GROUP BY RasterID HAVING COUNT(RasterID)>1" test.json 
```

Display duplicate rows with all information.:

```shell
ogrinfo -dialect SQLITE -sql "SELECT RasterID, Gebiet FROM (SELECT *, count(*) OVER (PARTITION BY RasterID) as count FROM test) tableWithCount WHERE tableWithCount.count > 1" test.json 
````
Return as CSV to stdout:

```shell
ogr2ogr -F CSV "/vsistdout/" -dialect SQLITE -sql "SELECT RasterID, Gebiet FROM (SELECT *, count(*) OVER (PARTITION BY RasterID) as count FROM test) tableWithCount WHERE tableWithCount.count > 1" test.json 
```
