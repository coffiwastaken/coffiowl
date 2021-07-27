var i=0;
setInterval(function(){
    var titles=[
"|c|",
"|co|",
"|cof|",
"|coff|",
"|coffi|",
"|coffi o|",
"|coffi on|",
"|coffi on t|",
"|coffi on to|",
"|coffi on top|",
"|coffi on top|",
"|coffi on top|",
"|coffi on to|",
" |coffi on t|",
"  |coffi on|",
"   |coffi o|",
"    |coffi|",
"     |coff|",
"      |cof|",
"       |co|",
"        |c|",
"          ||",

]

    if(i===titles.length) {
        i=0;
    }
    document.title = titles[i];
    i++;
}, 500);
