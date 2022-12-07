function amazonDeals()
{
    //set date we are counting down to 
    var countDownDate = new Date("Nov 11,2022 00:00:00").getTime();

    //update the countdown every 1 sec
    var x = setInterval(function(){
        //get today date and time
        var now = new Date().getTime();//current Time

        //find the distance b/w now and countDownDate
        var distance = countDownDate - now;   // it will get millseconds

       // document.write(distance+"<br/>");

       //time calculations for days,hours,minutes,secs
       var days = Math.floor(distance/(1000*60*60*24))
       var hours = Math.floor(distance % (1000*60*60*24)/(1000*60*60) )
       var minutes = Math.floor(distance % (1000*60*60)/(1000*60) )
       var seconds = Math.floor(distance % (1000*60)/(1000) )

    //output the result in an element with id="demo"
    for(var ele=0; ele<document.getElementsByClassName('demo').length; ele++ )
    {
    document.getElementsByClassName('demo')[ele].innerHTML = days+"days"+hours+"h"+minutes+"m"+seconds+"s";
    }
    //if the countdown is over then write some text
    if(distance<0){
        clearInterval(x);//stop setInterval functionality
        document.getElementsByClassName('demo').innerHTML = "OFFER ENDED";
    }
    }
    ,1000)
}