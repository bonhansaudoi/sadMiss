  
# sadMiss

## Build Setup

```bash
$ npm init -y

$ npm install -D tailwindcss@latest postcss@latest autoprefixer@latest

$ npx tailwindcss init -p 
```

``` [package.json]
"scripts": {
    "dev": "npx tailwindcss -i tailwind.css -o ./src/css/style.css --watch"
  },
```  

```
- tailwind.css

- src/index.html  
``` 

```bash
$ npm run dev
``` 

### [GitHub Pages](https://pages.github.com/) 

``` 
.gitignore
  - node_modules
  - .vscode 
  - /video 
``` 

```bash
$ git init
$ git add .  
$ git commit -m "commit 1"
$ git push -u origin main
``` 




- Create a repository
- Clone the repository
  - git clone https://github.com/username/username.github.io
  - cd username.github.io 
  - echo "Hello World" > index.html
- Push it
  - git add --all
  - git commit -m "Initial commit"
  - git push -u origin main




echo "# sadMiss" >> README.md
git init
git add src README.md tailwind.css
git commit -m "first commit"
git branch -M main 
git remote add origin https://github.com/bonhansaudoi/sadMiss.git
git push -u origin main


or push an existing repository from the command line
git remote add origin https://github.com/bonhansaudoi/sadMiss.git
git branch -M main
git push -u origin main