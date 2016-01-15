/*
This example searches the current page for <a> elements that contain magnet links and posts the magnet link to i2psnark
*/
function doit(){
    var nonce="123";
    var torrentclientapi="http://localhost:7657/i2psnark/_post";
    var a=document.getElementsByTagName("a");
    for(var i=0;i<a.length;i++){
        if(a[i].href.match(/^magnet:/)){
            var magnet=a[i].href;
            var xhr=new XMLHttpRequest();
            xhr.open("POST",torrentclientapi,true);
            xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
            xhr.send("nonce="+nonce+"&action=Add&foo=Add+torrent&nofilter_newDir=&nofilter_newURL="+encodeURIComponent(magnet));
        }
    }
}
doit();
