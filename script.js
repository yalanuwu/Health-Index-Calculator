const inRange = function(a, b, c) {
    return c >= a && c <= b;
}

function calculate(){
    event.preventDefault();
    const user_name = document.getElementById('name').value;
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
    let bp_score
    if(inRange(110, 130, systolic_bp) && inRange(70, 85, diastolic_bp)){
        bp_score = 10
    }
    else if ((inRange(90, 109, systolic_bp) && inRange(60, 69, diastolic_bp)) || inRange(131, 139, systolic_bp) && inRange(86, 89, diastolic_bp)){
        bp_score = 7 
    } 
    else if ((inRange(140, 159, systolic_bp) && inRange(90, 99, diastolic_bp)) || inRange(80, 89, systolic_bp) && inRange(50, 59, diastolic_bp)){
        bp_score = 4
    } 
    else if ((inRange(160, 250, systolic_bp) && inRange(100, 150, diastolic_bp))){
        bp_score = 2
    } 

    const health_index = ((bp_score + Number(pulse_score) + age_score) / 3) * 10;

    console.log(age_score, pulse_score, bp_score);
    console.log(health_index);
    
}

