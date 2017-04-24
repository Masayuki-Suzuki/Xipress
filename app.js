const express     = require('express'),
      app         = express(),
      path        = require('path'),
      mongoose    = require('mongoose'),
      IP          = '127.0.0.1',
      PORT        = 3000;

app.set('view engine', 'ejs');

app.listen(PORT,IP, ()=>{
  "use strict";
  console.log('SERVER HAS STARTED!!');
});