function calculate(){
    event.preventDefault();
    const user_name = document.getElementById('name').value;
    document.getElementById("result-text").innerHTML=`${user_name.toUpperCase()}'S RESULT`;
    const age = document.getElementById('age').value;
    // const pulse = document.getElementById('pulse').value;
    const systolic_bp = document.getElementById('bp-systolic').value;
    const diastolic_bp = document.getElementById('bp-diastolic').value;

    //Age Score Calculation
    let age_score
    if (age >= 18 && age <= 35) age_score = 10
    else if(age > 35 && age <= 55) age_score = 7
    else if(age > 55 && age <= 75) age_score = 5
    else age_score = 3

    const pulse_score = document.getElementById('pulse').value;

    //BP Score Calculation
    let bp_score = 0;
    if (systolic_bp >= 110 && systolic_bp <= 130 && diastolic_bp >= 70 && diastolic_bp <= 85) {
        bp_score = 10;
    } else if ((systolic_bp >= 90 && systolic_bp <= 109 && diastolic_bp >= 60 && diastolic_bp <= 69) || 
               (systolic_bp >= 131 && systolic_bp <= 139 && diastolic_bp >= 86 && diastolic_bp <= 89)) {
        bp_score = 7;
    } else if ((systolic_bp >= 140 && systolic_bp <= 159 && diastolic_bp >= 90 && diastolic_bp <= 99) || 
               (systolic_bp >= 80 && systolic_bp <= 89 && diastolic_bp >= 50 && diastolic_bp <= 59)) {
        bp_score = 4;
    } else {
        alert("Provided BP values are not valid. Please Check Once Again");
        return;
    }

    const health_index = ((bp_score + Number(pulse_score) + age_score) / 3) * 10;
    const rounded_health_index = Math.round(health_index);
    if(bp_score-Number(pulse_score)>=4 || (Number(pulse_score)-bp_score)>=4){
        alert("Values you provided are not ideal. Consult a doctor");
        return;
    }
    let remarks;
    if (rounded_health_index >= 90) remarks = "EXCELLENT";
    else if (rounded_health_index >= 75) remarks = "GOOD";
    else if (rounded_health_index >= 50) remarks = "AVERAGE";
    else if (rounded_health_index >= 30) remarks = "POOR";
    else remarks = "CRITICAL";

    let scoreCard1 = document.getElementById("score-card-1");

    if (remarks == "EXCELLENT") {
        scoreCard1.style.backgroundColor = "#8AC926";
    } else if (remarks == "GOOD") {
        scoreCard1.style.backgroundColor = "#C5CA30";
    } else if (remarks == "AVERAGE") {
        scoreCard1.style.backgroundColor = "#FFCA3A";
    } else if (remarks=="POOR"){
        scoreCard1.style.backgroundColor = "#FF924C";
    }else{
        scoreCard1.style.backgroundColor = "#FF595E";
    }


    document.querySelector('.container').classList.add('show-both');
    void document.querySelector('.score-card').offsetWidth;

    document.querySelector('.score-card').style.display = 'flex';
    document.querySelector('.card').style.display = 'block';


    document.getElementById('overall_score').innerHTML = `${rounded_health_index}`;
    document.getElementById('overall_score_remarks').innerHTML = `${remarks}`;
    document.getElementById('age_score').innerHTML = `${age_score}`;
    document.getElementById('pulse_score').innerHTML = `${pulse_score}`;
    document.getElementById('bp_score').innerHTML = `${bp_score}`;

    console.log(age_score, pulse_score, bp_score);
    console.log(health_index);

    // **Trigger Ripple Effect**
    const resultBox = document.querySelector(".results-summary-container__result");

    const ripple = document.createElement("span");
    const rect = resultBox.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${rect.width / 2 - size / 2}px`;
    ripple.style.top = `${rect.height / 2 - size / 2}px`;
    ripple.classList.add("ripple-effect");

    resultBox.appendChild(ripple);

    // Remove ripple effect after animation completes
    setTimeout(() => ripple.remove(), 1000);


    
}

function reset() {
    document.getElementById('name').value = "";
    document.getElementById('age').value = "";
    document.getElementById('pulse').value = "";
    document.getElementById('bp-systolic').value = "";
    document.getElementById('bp-diastolic').value = "";

    document.getElementById('overall_score').innerHTML = "--";
    document.getElementById('overall_score_remarks').innerHTML = "--";
    document.getElementById('age_score').innerHTML = "--";
    document.getElementById('pulse_score').innerHTML = "--";
    document.getElementById('bp_score').innerHTML = "--";

    document.querySelector('.score-card').style.opacity = '0';

    setTimeout(() => {
        document.querySelector('.container').classList.remove('show-results');
        document.querySelector('.score-card').style.display = 'none';
        document.querySelector('.score-card').style.opacity = '1'; // Reset for next time
        document.getElementById("score-card-1").style.backgroundColor = "#007bff";
      }, 300);
}