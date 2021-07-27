var i=0;
setInterval(function(){
    var titles=[
"|c|",
"|co|",
"|cor|",
"|cort|",
"|corte|",
"|cortex|",
"|cortex o|",
"|cortex on|",
"|cortex on t|",
"|cortex on to|",
"|cortex on top|",
"|cortex on top|",
"|cortex on top|",
"|cortex on to|",
" |cortex on t|",
"  |cortex on|",
"   |cortex o|",
"    |cortex |",
"     |cortex|",
"      |corte|",
"       |cort|",
"        |cor|",
"         |co|",
"          |c|",
"           ||",

]

    if(i===titles.length) {
        i=0;
    }
    document.title = titles[i];
    i++;
}, 900);
