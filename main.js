const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

app.use(express.static('./'));


router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/test.html'));
  //__dirname : It will resolve to your project folder.
});

//add the router
app.use('/', router);
app.listen(process.env.port || 3000);

console.log('Running at Port 3000');