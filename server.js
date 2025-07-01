//console.log(' server file is running ')
//function add(a,b){
//    return a+b;
//}
//var result = add(2,9);
//console.log(result);
//var add =(a,b) => {return a+b;}
//var add = (a,b)=> a+b;
//var result = add(2,7);
//console.log(result);
//(function(a,b){
//console.log('gokul is sant ');
//})();
// call Back funtion 
//function callback(){
    //console.log('varinder');
//}

//const add = function(a,b, callback){
//    var result = a+b;
//     console.log('result:'+result);
//     callback();
//}
//add(18,598,function(){
//    console.log('add completed');
//});
//add(2,3,() => console.log('add completed'));
//var fs = require('fs');
//var os = require('os');
//
//var user=   os.userInfo();
//console.log(user.username);
//
//fs.appendFile('greeting1.txt','hi '+user.//username+'!\n',()=>{
//    console.log('file  is created ');
//});
//var user=   os.userInfo();
//console.log(user.username);
//console.log(os);
//const notes = require('./notes.js');
//var _ = require('lodash');
//
//console.log ("this is sant and we reqire notes ");
//var age = notes.age;
//var result = notes.addnumber(age+18,10)
//console.log(age);
//console.log('result is now '+result);
//var data = ["person","person",1,2,1,2,'name','age','2'];
//var filter = _.uniq(data);
//console.log(filter);
//const jsonstring='{"name":"john","age":30,//"city":"ambala"}';
//const jsonObject = JSON.parse(jsonstring);
//console.log(jsonObject.name);
//app.get('/chicken',(req,res)=>{
  //  res.send('sure sir, i would love to provide you a chicken, enjoy sir  ')
//})
//app.get('/idli',(req,res)=>{
//   var customized_idli = {
//       name: 'rawa idli',
//       size: '12 cm diameter',
//       is_samber:true,
//   }
//    res.send(customized_idli    )})
//    app.post('/items',(req,res)=>{
//       console.log('data  is saved');
//    })
const express = require('express');
const app = express();
const db = require('./db'); 
const bodyParser = require('body-parser');
require('dotenv').config();
app.use(bodyParser.json());

// Import models
const MenuItem = require('./models/MenuItem'); 
const Person = require('./models/Person');  // ✅ Fixed: Import Person model
const PORT = process.removeListener.PORT||3000;
// Default route
app.get('/', (req, res) => {
    res.send('Hello sir, welcome to my hotel.');
});

// Import routes
const MenuItemRoutes = require('./routes/MenuItemRoutes');
const personRoutes = require('./routes/PersonRoutes');

app.use('/person', personRoutes);  // ✅ This already handles /person/:workType
app.use('/menuitem', MenuItemRoutes);

// Start the server
app.listen(3000, () => {
    console.log('Listening on port 3000');
});
// Import dependencies
const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const db = require('./db'); // Database connection
const cors = require('cors');

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();

// Middlewares
app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(bodyParser.json());

// Import models
const MenuItem = require('./models/MenuItem');
const Person = require('./models/Person');

// Import routes
const menuItemRoutes = require('./routes/MenuItemRoutes');
const personRoutes = require('./routes/PersonRoutes');

// Default route
app.get('/', (req, res) => {
    res.send('👨‍🍳 Welcome to Gokul’s Hotel API! 🍽️');
});

// Route middleware
app.use('/person', personRoutes);
app.use('/menuitem', menuItemRoutes);

// Global error handler (optional, good for debugging)
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Use port from environment or default to 3000
const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
});

