/*var welcomeMessage = 'Hello World!';
console.log(welcomeMessage);*/

var myFunction = function () {
    var x = "Platform: " + navigator.platform;
    var y = "\n" + "Version info: " + navigator.appVersion;
    var z = "\n" + "Browser's Engine Name: " + navigator.product;
    console.log(x, y, z);

}

myFunction();

var isOnline = function () {
    if (navigator.onLine == true) {
        console.log("online");
    } else {
        console.log("offline");
    }
}
isOnline();

var sc = function () {
    var x = screen.availWidth;
    var y = screen.availHeight;
    var z = screen.height;
    console.log("width: " + x + ", " + "height: " + y + ", " + "Total Height: " + z);
}
sc();

var loc = function () {
    console.log(location.href);
    console.log(location.hostname);
    console.log(location.protocol);
    console.log(location.search);
}
loc();

/*var locat = function(){
    location.reload();
}
locat();*/

/*var redir = function(){
    return location.replace("http://www.bgit.rs/");
    
}
redir();
*/
var storage = localStorage;
var save = function (key, value) {
    storage.setItem(key, value);
}
//save("stevan",10);


var get_data = function (key) {

    if (storage.getItem(key) == null) {
        console.log("no data")
    } else {
        return storage.getItem(key);
    }

};

console.log(get_data("tihomir"));


var r = function(){
    return storage.removeItem("tihomir");
}
r();
