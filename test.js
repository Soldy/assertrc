'use strict';


let nanoTestFull=()=>{
    let nanotest = require('./index.js').test;
    let nanoTest = new nanotest();
    nanoTest.run();
};
nanoTestFull();
