//ıkı tarıh arasındaki farki bulup kiyaslama yaapmak icin timesstamps kullanilir

const stratDate=new Date("08/15/2018 9:45:00");

const now= new Date();

console.log(stratDate);

const diff=now.getTime()-stratDate.getTime();
console.log(diff);

 const mins=Math.round(diff/1000/60);
 const hours=Math.round(mins/60);
const days=Math.round(hours/24);
const years=Math.round(days/365);
 console.log(`Video cekmeye ${mins} dakika once basladim`);
 console.log(`Video cekmeye ${hours} saat once basladim`);
 console.log(`Video cekmeye ${days} gun once basladim`);
 console.log(`Video cekmeye ${years} yil once basladim`);


 const timesstamps=162772762629;
 console.log(new Date(timesstamps));



