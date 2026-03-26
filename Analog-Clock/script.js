let hour = document.getElementById("hour");
let minute = document.getElementById("min");
let second = document.getElementById("sec");

setInterval(() => {
    let d = new Date();
    let htime = d.getHours();
    let mtime = d.getMinutes();
    let stime = d.getSeconds();

    let hrotation = 30 * htime + mtime / 2;
    let mrotation = 6 * mtime;
    let srotation = 6 * stime;

    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;

}, 1000);


// now understand this in very simple way that (htime,mtime,stime) are variables and (let d = new Date();) this only shows the current whole time and other 3 functions (gethours,getminutes,getseconds) these aslo show time seprately.

// Now the tricky part:- (hrotation,mrotation,srotataion) these are variables hrotation is explained as 30*htime + mtime/2 means a clock needs 360 degree rotate to complete 12 hours if we divide (360/12=30) it will rotate 360 degree rotation next part is (30*htime) htime is equals to get the current hours then its (added mtime means current minutes) then divide by (2 or 0.5) it will come from  (1 hours = 30 degree rotation and 60 minutes un 1 hour so 30/60 = 0.5).

// next part is mrotation in this the 6 is coming from the (360 degree / 60 = 6 )(360 degree and there are 60 min in 1 hour) that multiple by the current minutes in that time

// last part is also the same like previos one there are (60 sec in 1 min 360/60=6 )same like previos just it will be multiply by the stime that is current seconds in that time thats ALL!