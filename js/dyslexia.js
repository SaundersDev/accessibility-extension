$(function() {
    var attrs = { };
    var hexcolour = '';
    var backgroundColorChange = "#FFFFF0";
    var rgbRegex = /rgb\(25[0-6],\s25[0-6],\s25[0-6]\)/g;
    var rgbaRegex = /rgba\(25[0-6],\s25[0-6],\s25[0-6],\s(\d*\.\d+),?\)/g;
    var doubleSpaceRegex = / +/g;
    var doubleSpace = "  ";
    var isGifRegex = /.gif/g;
    console.log("Run Dyslexia Module");
    //addJavascript('gifplayer.js', onload)
    
    jQuery.fx.off = true;
    $("img").each(function(){
        if($(this).attr("src").match(isGifRegex)){
            console.log($(this).attr("src"));
            var classname = '.' + $(this).attr('class');
            $(classname).gifplayer(); 
        }
    });
    $("i").replaceWith(function () {
        console.log("Italics");
        return $("<strong />", attrs).append($(this).contents());
    });
    $("em").replaceWith(function () {
        console.log("Italics: Emphasis");
        return $("<strong />", attrs).append($(this).contents());
    });
     $("p").each(function(){
        console.log("Paragraph");
        $(this).text().replace(doubleSpaceRegex, " ");
        
    }); 

   $(":visible").find('*').each(function(){
       var colour = $(this).css("background-color");
       //console.log(colour);

       if(colour.match(rgbRegex) != null){
            $(this).css("background-color", backgroundColorChange);
            console.log($(this).css("background-color"));
       }else if(colour.match(rgbaRegex) != null){
            var [r,g,b,a] = colour.match(/[\d\.]+/g);;
            var newColour = "rgba(255, 255, 240, ${a})";
            $(this).css("background-color", newColour);
       }
        $(this).css({"font-family": "Arial, Helvetica, sans-serif","word-spacing": "10",});
        if($(this).css("line-height") < 1.5){
            $(this).css("line-height", "1.5");
        }
        if($(this).css("font-style")=="italic"){
            $(this).css("font-style", "normal");
        }
        $(this).text().replace(doubleSpaceRegex, " ");
    })
});
// function hexc(colorval) {
//     var parts = colorval.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
//     delete(parts[0]);
//     for (var i = 1; i <= 3; ++i) {
//         parts[i] = parseInt(parts[i]).toString(16);
//         if (parts[i].length == 1) parts[i] = '0' + parts[i];
//     }
//     hexcolour = '#' + parts.join('');
// }
// function addJavascript(fileName, onload) {
//     var imported = document.createElement('script');
//     document.head.appendChild(imported);            
//     imported.src = fileName;
//     if(onload != undefined)
//         imported.onload = onload;
// }
// function removeJavascript(fileName) {
//     $('head script[src*="' + fileName + '"]').remove();
// }
/* function addHexColor(c1, c2) {
    var hexStr = (parseInt(c1, 16) + parseInt(c2, 16)).toString(16);
    while (hexStr.length < 6) { hexStr = '0' + hexStr; } // Zero pad.
   // alert(hexStr);
    return hexStr;
  }
function subHexColor(c1, c2) {
    var hexStr = (parseInt(c1, 16) - parseInt(c2, 16)).toString(16);
    while (hexStr.length < 6) { hexStr = '0' + hexStr; } // Zero pad.
    return hexStr;
}
 */
/* function RGBToHex(rgb) {
// Choose correct separator
let sep = rgb.indexOf(",") > -1 ? "," : " ";
// Turn "rgb(r,g,b)" into [r,g,b]
rgb = rgb.substr(4).split(")")[0].split(sep);

let r = (+rgb[0]).toString(16),
    g = (+rgb[1]).toString(16),
    b = (+rgb[2]).toString(16);

if (r.length == 1)
    r = "0" + r;
if (g.length == 1)
    g = "0" + g;
if (b.length == 1)
    b = "0" + b;

return "#" + r + g + b;
} */
      // $(function(){
    //$("p").css("background-color","red");
    //$(":header").css("background-color","red");
    //$(":button").css("background-color","red");
    //$(":checkbox").css("background-color","red");
    //$(":radio").css("background-color","red");
    //$(":reset").css("background-color","red");
    //$(":input").css("background-color","red");
    //$(":submit").css("background-color","red");
    //$(":text").css("background-color","red");
        ///const style = getComputedStyle(element)
   //style.backgroundColor //the RGB value
   //document.body.style.backgroundColor = "#ffff00";
      // $(document).ready(function(){    
    //});
    //.css("background-color","red");
    //$(":root").css("background-color","red");
    //$( "body" ).first().css( "background-color", "red" );
    //$("content").css("background-color","red");
    //$("mw-body-content").css("background-color","red");
    //document.body.style.backgroundColor = "lightred";
    // }
    //var existing_classes = [];
    //$('body').find('*').each(function(){ 
    //    if($(this)[0].className) {
    //        if(!existing_classes.includes($(this)[0].className)) {
    //            existing_classes.push($(this)[0].className);
    //        }
    //    }
    //    $
    //});
   // document.querySelectorAll("div")
    //var style = document.createElement('style');
    //document.head.appendChild(style);
    //style.sheet.insertRule('#target {color: darkseagreen}');
    //const element = document.querySelector('.my-element')
    ///const style = getComputedStyle(element)
   //style.backgroundColor //the RGB value
   /*  $(document).ready(function(){
        // Loop through each div element with the class box
        $(".element").each(function(){
            // Test if the div element is empty
            if($(this).is(":empty")){
                $(this).css("background", "red");
            }
        });
    });  */
    //
   // document.getElementById("content").style.backgroundColor = "lightblue";
    //document.getElementById("mw-body-content").style.backgroundColor = "lightblue";



//    var existing_classes = [];
 /*   $('body').find('*.css').each(function(){ 
        if($(this)[0].className) {
            if(!existing_classes.includes($(this)[0].className)) {
                existing_classes.push($(this)[0].className);
            }
        }
        $
    });
    //    if(document.body.style.backgroundColor == "white"){
    

    //    }
*/
/* 
    var currentNode,
    ni = document.createNodeIterator(document.documentElement, NodeFilter.SHOW_ELEMENT);
 */
/*     while(currentNode = ni.nextNode()) {
        currentNode.style.
        console.log(currentNode.nodeName);
    } */
