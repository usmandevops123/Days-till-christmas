var today= new Date()
 var christmas= new Date(today.getFullYear(),11,25);
 if(today.getMonth()===11 && today.getFullYear()>=25){
     christmas.setFullYear(today.getFullYear()+1)
 }
var oneDay=1000*60*60*24;
document.write(Math.ceil((christmas.getTime()-today.getTime())/(oneDay)), " Days left for christmas");
