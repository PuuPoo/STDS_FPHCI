

// Requirements for SAT and CS Hours
const requiredSAT = 120;
const requiredCSHours = 30;

// Read current SAT and CS Hours from the HTML
const currentSat = parseInt(document.getElementById("satPoints").textContent);
const currentCSHours = parseInt(document.getElementById("csHours").textContent);




// Calculate the missing SAT and CSHours required
const missingSat = requiredSAT - currentSat;
const missingCSHours = requiredCSHours - currentCSHours;



// Display the result
const display = document.getElementById("Action");


//Both missing sat and comserv hours
if (missingSat > 0 && missingCSHours > 0) {
    display.textContent = `You are missing ${missingSat} SAT points and ${missingCSHours} hours. You should join some events such as Webinars or Workshops`;
} 


//missing only sat
else if (missingSat > 0 && missingCSHours <= 0){
    display.textContent = `You are missing ${missingSat} SAT points. You should join some events such as Webinars or Workshops`;
}


//missing comserv only
else if (missingSat <= 0 && missingCSHours > 0){
    display.textContent = `You are missing ${missingCSHours} hours. You should join some events such as Webinars or Workshops`;
}


//not missing any 
else {
    display.textContent = "You have met the SAT requirement!";
}

