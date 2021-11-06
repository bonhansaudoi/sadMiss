  
# sadMiss

## Install 

```bash
$ npm init -y

$ npm install -D tailwindcss@latest postcss@latest autoprefixer@latest

$ npx tailwindcss init -p 
```

## Config

``` [package.json]
"scripts": {
    "dev": "npx tailwindcss -i tailwind.css -o ./src/css/style.css --watch"
  },
```  

``` 
- tailwind.css
- src/index.html   
``` 

## Run

```bash
$ npm run dev
``` 

## [GitHub Pages](https://pages.github.com/) 

``` 
.gitignore
  - /video
  - node_modules
  - .vscode  
  - package.json
  - package-lock.json
  - postcss.config.js 
```  

```bash
$ git init
$ git add .  
$ git remote add origin https://github.com/bonhansaudoi/sadMiss.git
$ git commit -m "commit"
$ git push -u origin master
```  

## Link

https://bonhansaudoi.github.io/sadMiss/src/