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
