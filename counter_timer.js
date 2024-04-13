const daysElement=document.querySelector(".days"),
      hoursElement=document.querySelector(".hours"),
      minutesElement=document.querySelector(".minutes"),
      secondsElement=document.querySelector(".seconds"),
      heading=document.querySelector("h1"),
      counterTimer=document.querySelector(".countertimer");

const second=1000, minute=60*second, hour=60*minute, day=24*hour;

const timerfunction=()=>{
    //Generating current date in mm/dd/yy format
    let now=new Date(),
        dd=String(now.getDate()).padStart(2,"0"),
        mm=String(now.getMonth()+1).padStart(2,"0"),
        yyy=now.getFullYear();
        now=`${mm}/${dd}/${yyy}`;

        //Taking users input 
    const enteredDay=prompt("Enter Day").padStart(2,"0"),
          enteredMonth=prompt("Enter Month").padStart(2,"0");
    let targetDate=`${enteredMonth}/${enteredDay}/${yyy}`;


    //Creating  conditions to make difference positive 
    if(now>targetDate){
        targetDate=`${enteredMonth}/${enteredDay}/${yyy+1}`;
    }

    const intervalID=setInterval(()=>{
        const timer=new Date(targetDate).getTime(),
              today=new Date().getTime(),
              difference=timer-today;
    
              //Calculation
        const leftDay= Math.floor(difference/day),
              leftHour= Math.floor((difference%day)/hour),
              leftMinute= Math.floor((difference%hour)/minute),
              leftSecond= Math.floor((difference%minute)/second);

        daysElement.innerText= leftDay;
        hoursElement.innerText= leftHour;
        minutesElement.innerText= leftMinute;
        secondsElement.innerText= leftSecond;

        //Condition if time is achieved
        if(difference<0){
            counterTimer.style.display="none";
            heading.innerText="time's up";
            clearInterval(intervalID);
        }
    },1000);
}

timerfunction();