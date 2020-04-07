let Form = document.forms[index];
let { pre, db, og } = require("../index.js")
let p = Form.elements["prefix"].value
let ownk = Form.elements["ownerkey"].value
  
pre.set(og.get(ownk).value, { prefix: p })
