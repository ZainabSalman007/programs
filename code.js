const result = document.getElementById("result");
const scoreInput = document.getElementById("score");
const gradeButton = document.getElementById("grade");

gradeButton.onclick = function() {
    const score = scoreInput.value;

    let grade;
    if(score>100){
        grade="Score must be between 1-100";
    }
    else if (score >= 90) {
        grade = "A";
    } else if (score >= 80) {
        grade = "B";
    } else if (score >= 70) {
        grade = "C";
    } else if (score >= 60) {
        grade = "D";
    }
    else if(score<60){
    grade = "F";
    }
    else {
        grade = "Invalid score";
    }
result.textContent = "Grade: " + grade;
}