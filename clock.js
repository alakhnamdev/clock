function getTime(){
    let t = new Date();
    let sec = t.getSeconds();
    let min = t.getMinutes();
    let hr = t.getHours();
    return [sec,min,hr];
}
let sec = document.getElementById('hour');
let min = document.getElementById('minute');
let hr = document.getElementById('second');
let digital = document.querySelector('#currentTime');
let digitalLoop = setInterval(()=>{
    let time = getTime();
    let second = time[0];
    let minute = time[1];
    let hour = time[2];
    let zone = 'a.m.';
    if(hour > 13){
        hour = hour - 12;
        zone = 'p.m.';
    }
    let count = hour+':'+minute+':'+second+' '+zone;
    digital.innerHTML = count;
},1000);
let analogLoop = setInterval(()=>{
    let time = getTime();
    let second = time[0];
    let minute = time[1];
    let hour = time[2];
    let count = second*6;
    let count1 = minute*6;
    let count2 = hour*30;
    if(second == 360){
        count = 0;
    }
    else{
        count = count+6;
    }
    if(minute == 360){
        count1 = 0;
    }
    else{
        count1 = count1+6;
    }
    if(hour == 360){
        count2 = 0;
    }
    sec.style.transform = 'rotate('+count+'deg)';
    min.style.transform = 'rotate('+count1+'deg)';
    hr.style.transform = 'rotate('+count2+'deg)';
},1000);