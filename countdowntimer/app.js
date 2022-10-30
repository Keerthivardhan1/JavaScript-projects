 
 
 
 
 function countdowns() {

    const ddate=new Date("2022-11-1").getTime();
    const now=new Date().getTime();
    const gap=ddate-now;

    const sec=1000;
    const min=sec*60;
    const hour=min*60;
    const day =hour*24;

   const  maindays=Math.floor(gap/day);
   const  mainhour=Math.floor((gap%day)/hour);
   const  mainmin=Math.floor((gap%hour)/min);
   const  mainsec=Math.floor((gap%min)/sec);

   //console.log("maindays sre "+ maindays);
//  document.querySelector(".days").innerText=maindays;
//  document.querySelector("hours").innerText=mainhour;

 document.getElementById("days").innerText=maindays;
 document.getElementById("hours").innerText=mainhour;

 document.getElementById("minutes").innerText=mainmin;

 document.getElementById("sec").innerText=mainsec;


 }

setInterval(countdowns,1000);