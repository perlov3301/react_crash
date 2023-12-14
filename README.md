 git init
  git add README.md
  git commit -m "first commit"
  git branch -M main
  git remote add origin https://github.com/perlov3301/react_crash.git
  git push -u origin main

 * install mock server
  npm install -g serve
   *run cmd as administrator
  serve -s build
 * install json-server locally 
 // pretend to be backend data base
 // even it gives IDs
/react1> npm i json-server
*package.json:
"scripts":{
    "server":"json-server --watch db.json --port 5000"
}