let height = window.innerHeight
let Width = window.innerWidth

document.write( 'inner height : '+ height + " , inner width: "+ Width + '<br>');

let screenwidth = window.screen.width
let screenheight = window.screen.height

document.write( 'Screen height : '+ screenheight + " , screen width: "+ screenwidth + '<br>');

let availWidth = window.screen.availWidth
document.write( "available Width : "+ availWidth + '<br>');

let availHeight = window.screen.availHeight
document.write( "avilable Height : "+ availHeight + '<br>');
let colorDepth = window.screen.colorDepth
document.write( "colorDepth : "+ colorDepth + '<br>');
let pixelDepth = window.screen.pixelDepth
document.write( "pixelDepth : "+ pixelDepth + '<br>');


// Location
let href = location.href
document.write( "page location is: "+ href + '<br>');

let hostname = location.hostname
document.write( "page hostname is: "+ hostname + '<br>');

let pathname = location.pathname
document.write( "page pathname is: "+ pathname + '<br>');

let protocol = location.protocol
document.write( "page protocol is: "+ protocol + '<br>');
let port = location.port 
document.write( "page protocol is: "+ port + '<br>');
// let assign = window.location.assign("https://w3scool.com") 
// document.write( "page protocol is: "+ assign + '<br>');

// history
// document.write( "page goback is: "+ history.back() + '<br>');
// document.write( "page goforward is: "+ history.forward() + '<br>');
document.write( "page goback is: "+ history.back() + '<br>');
document.write( "page goforward is: "+ history.forward() + '<br>');

function myFun() {
    let text;

    let person = prompt("Write Your Name")

   if (person == null || person == "") {
    text = "User Cancel the prompt."
   }else {
    text = "hellow " + person+ "! How are you today?"
   }
   document.getElementById("demo").innerText = text

}
function alertFun() {
    alert('This is after 3 sconds')
}

function myTimer() {
    let d = new Date();

    document.getElementById("time").innerHTML = d.toLocaleTimeString()
    // console.log(d.toLocaleTimeString());
}
// myTimer()
let timeStart = setInterval(myTimer, 1000 )