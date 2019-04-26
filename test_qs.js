const qs = require('qs');




var body = qs.parse(`id[]=1&sizes[]=medium&quantity[]=2`)

console.log(body);
