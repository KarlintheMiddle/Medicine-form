function doGet(request) {
  return HtmlService.createTemplateFromFile('Index').evaluate();
}

/* @Include JavaScript and CSS Files */
function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

/* @Process Form */
function processForm(data) {
  var url = "https://docs.google.com/spreadsheets/d/1fgYYRCLLPDcDfDjwkX9QW34YEJzew1h7fyW1H0Am7gA/edit#gid=741467276";
  var ss = SpreadsheetApp.openByUrl(url);
  var ws = ss.getSheetByName("Input");

  //Declaring variable depending on repeating rows 
  //{0,1,2} is static
  // 0 = date
  // 2 = barangay
  // 1 = batch
  // {3,4,5} onwards are repeating rows
  // 3,6,9 ... is Medicine
  // 4,7,10 ... is amount received
  // 5,8,11 ... is amount utilized
  var s1 = 0, s2 = 1, s3 = 2, r1 = 3, r2 = 4, r3 = 5;
  
 // data length is divided to three and subtracted one for static rows to remain
 // variable r1,r2,r3 are incremented by 3 for repeating rows
 for (var i = 0; i < ((data.length/3)-1); i++, r1+=3, r2+=3,r3+=3){
   
   ws.appendRow([
     data[s3],
     data[s1],
     data[s2],
     data[r1],
     data[r2],
     data[r3]

   ]);

 }


  
  
  
}


