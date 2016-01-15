function doit(){
    var a=document.getElementsByTagName("a");
    var d=document.createElement("div");
    var z=[];
    for(var i=0;i<a.length;i++){
        var imgurl=a[i].href;
        if((imgurl.match(/(png|jpg|gif)$/))&&(z.indexOf(imgurl)<0)){
            var img=document.createElement("img");
            img.src=imgurl;
            img.style="border:4px solid #444;max-width:100%;";
            d.appendChild(img);
            z.push(imgurl);
        }
    }
    d.style="background:#111;text-align:center;position:absolute;top:0px;max-width:100%;";
    document.getElementsByTagName("body")[0].appendChild(d);
}
doit();
