function doit(){
    var torrentclientapi="http://localhost:7657/i2psnark/_post";
    var a=document.getElementsByTagName("a");
    for(var i=0;i<a.length;i++){
        if(a[i].href.match(/^magnet:/)){
            var magnet=a[i].href;
            var xhr=new XMLHttpRequest();
            xhr.open("POST",torrentclientapi,true);
            xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
            xhr.send("action=Add&foo=Add+torrent&nofilter_newDir=&nofilter_newURL="+encodeURIComponent(magnet));
        }
    }
}
doit();
