#### Mongodb
+ See all running processes: `ps ax | grep mongod`
    - Kill a process: `kill PID` (PID: Process ID, the first column)
+ Start server, db and client: 
    - Move to app folder: `nodemon`
    - Open another terminal window in app folder: `webpack`
    - Move to mongodb folder: `./mongod --dbpath ~/mongo/dbs`

#### Universal App
+ Install ejs package in dependencies: `npm i --save ejs`
+ Create initialState: initialState: `initialState = JSON.stringify(store.getState()).replace(/<\/script/g, '<\\/script').replace(/<!--/g,'<\\!--');`



#### DB online
+ Create an account on mLab. Create db: bookshop.
+ Create test user: testUser/12345678
+ Export local mongo db: Go to mongo db folder/bin: `./mongodump --db bookshop -o target-folder`
+ Import exported db to mLab: `./mongorestore -h ds113915.mlab.com:13915 -d bookshop -u testUser -p 12345678  ~/Downloads/bookshop`


#### Using GIT:
+ Install `git`
+ Check git version: `git --version`
+ Move to app folder: `git init`
+ Create `.gitignore` file containing folder that are not observed by git:
    - `node_modules/`