

    const arrMonth = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var arrMonNDay = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const arrDay   = ["Sunday", "Monday", "Tuesday", "Wedsneday", "Thursday", "Friday", "Saturday"];
    const arrDay2  = ["Sun",    "Mon",    "Tue",     "Wed",       "Thu",      "Fri",    "Sat"];

   

    let calDay = { year: 1955, month: 9, day: 11 };


function calender(e) {

   

    console.log(" In calender().js");

    let date = new Date();
    console.log("The Current Date is::  " + date);
    year = date.getFullYear();
    console.log("The         year is::  " + year);  




    ////////////////////////////////
    ///  beginning of the month  ///
    ////////////////////////////////
    date.setDate(1);  
    var month     = date.getMonth();
    let monthName = arrMonth[date.getMonth()]
    dow           = date.getDay();

    calDay.month = month;
    calDay.year  = year;
    
    console.log("   The current month   name :: " + monthName); 
    console.log("   The 1st month   as number:: " + month);
    console.log("   The 1st of month    is on::  " + arrDay[date.getDay()])
    console.log(`   The 1st dom as wk day int::  ${dow}`)
    
    

    let h1_Title = document.querySelector("#mname")
    h1_Title.innerText = monthName;

    let nMonDays = arrMonNDay[month];
    buildMonth(dow, nMonDays,month);
 

    let refBtn = document.getElementById("bdwn");
    refBtn.addEventListener("click", (evt) => {
        try {
            console.log(evt.target.textContent);
            month++;
            if (month > 11) { 
                month = 0;
                year++;
                calDay.month = month;
                calDay.year  = year;
            }    

            date = new Date(year, month, 1);
             
            console.log("   New  Date:: " + date);
            console.log("   New Month:: " + month);
            console.log("   New  Year:: " + year);

            h1_Title.textContent = arrMonth[month] + "  😜";

            dow      = date.getDay();
            nMonDays = arrMonNDay[month];
            buildMonth(dow, nMonDays, month);
        }
        catch (error) {
            console.log(err);
        }
    })

    let refBtnDwn = document.getElementById("bup");
    refBtnDwn.addEventListener("click", (evt) => {
        try {
            console.log(evt.target.textContent);
            if( month == 0){
                month = 11;
                year--;
            } 
            else month--;
            
            calDay.month = month;
            calDay.year  = year;
            date = new Date(year, month, 1);
            h1_Title.textContent = arrMonth[month] + "  🤔";
            dow = date.getDay()
            nMonDays = arrMonNDay[month];
            buildMonth(dow, nMonDays, month);
        }
        catch (error) {
            console.log(err);
        }
    })
}



let buildMonth = function (dow, nMonthDays, pMonth) {

    console.log("   pMonth:: " + pMonth);
    //console.log("cal.month:: " + cal.month);

    let calRef = document.getElementById('cal');

    /////////////////////////
    /// Remove existing days
    let lst_blkDay = document.querySelectorAll('#cal .boxND');
    for (k = 0; k < lst_blkDay.length; k++) {
        lst_blkDay[k].remove();
    }

    let lstHTML = document.querySelectorAll('#cal .box');
    for (k = 0; k < lstHTML.length; k++) {
        lstHTML[k].remove();
    }
    /// End Remove existing days
    ////////////////////
    /////////////////////////


    ///First Row - Blank Days
    let newDiv = document.createElement("div");
    newDiv.classList.add("boxND");
    for (j = 0; j < dow; j++) {
        newDiv = document.createElement('div');
        newDiv.className = "boxND";
        // newDiv.style.backgroundColor = "pink";
        calRef.appendChild(newDiv);
    }

    //set to  pink
    for (k = 0; k < (nMonthDays); k++) {
        newDiv = document.createElement('div');
        newDiv.className = "box";
        var  xyear = calDay.year;
        
          var xmonth = calDay.month;
        // calDate= new Date(xyear,xmonth,k+1);
         calDate= new Date(xyear,pMonth,k+1);
        calDOW = calDate.getDay();  
        if (calDOW > 0  &&  calDOW < 5) {
            newDiv.style.backgroundColor = "lightpink";
        }
        newH1 = document.createElement('h1');
        newH1.innerText = parseInt(k + 1);;
        newDiv.appendChild(newH1);
        calRef.appendChild(newDiv);


        newDiv.addEventListener("click", (e) => {

            try {
                console.log("\n\n\n *** Day Click Event *** ");
                
                var month = calDay.month;
                var year  = calDay.year;
                console.log("    The PEE month  # :: " + pMonth);
                console.log("    The Cal month  # :: " + calDay.month);
                console.log("    The Cal month is :: " + arrMonth[calDay.month]);
                console.log("    The Cal   DOM is :: " + e.target.textContent);

                let dateDOM = new Date( year, pMonth, e.target.textContent );
                console.log("    The Cal   date is::  " + dateDOM); 
                let dayName = arrDay2[dateDOM.getDay()];
                console.log("    The Cal  Day Name:: " + dayName);


                var filen = "../CalDays/dSched_" + arrMonth[pMonth] + "_" + e.target.textContent + "_" + dayName + ".html" ;
                console.log("File Name is :: "  + filen);

                window.location.href = filen;

            }
            catch (e) {
                console.log(e);
            }
        });

    }

        
}


 