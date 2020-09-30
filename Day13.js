function display(){
    var d = new Date();
    // var e= new TimeRanges();
    document.getElementById("demo").innerHTML = d.toDateString() +" "+ d.toTimeString();
    // document.getElementById("demo").innerHTML = d.toTimeString();
    // document.write(d.toDateString() + d.toTimeString());
}
