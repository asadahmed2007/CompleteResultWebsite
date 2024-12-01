function calculatePercentage() {
    var obtainedMarks = document.getElementById('obtainedMarks').value;
    var totalMarks = document.getElementById('totalMarks').value;

   
    if (obtainedMarks === "" || totalMarks === "") {
        alert("Please enter both obtained and total marks.");
        return;
    }

    obtainedMarks = parseFloat(obtainedMarks);
    totalMarks = parseFloat(totalMarks);

    if (totalMarks <= 0) {
        alert("Total marks should be greater than zero.");
        return;
    }


    var percentage = (obtainedMarks / totalMarks) * 100;


    var resultText = "";

    switch (true) {
        case (percentage >= 90):
            resultText = "Outstanding! You scored " + percentage.toFixed(2) + "%";
            break;
        case (percentage >= 75 && percentage < 90):
            resultText = "Excellent! You scored " + percentage.toFixed(2) + "%";
            break;
        case (percentage >= 60 && percentage < 75):
            resultText = "Good job! You scored " + percentage.toFixed(2) + "%";
            break;
        case (percentage >= 50 && percentage < 60):
            resultText = "Satisfactory. You scored " + percentage.toFixed(2) + "%";
            break;
        case (percentage >= 40 && percentage < 50):
            resultText = "Needs Improvement. You scored " + percentage.toFixed(2) + "%";
            break;
        default:
            resultText = "You failed. You scored " + percentage.toFixed(2) + "%";
            break;
    }

    // Display result
    document.getElementById('percentage').textContent = resultText;
}
