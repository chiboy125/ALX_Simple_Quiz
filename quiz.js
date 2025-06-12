// Step 1: Declare the checkAnswer function
function checkAnswer() {
    // Step 2: Define the correct answer
    const correctAnswer = "4";

    // Step 3: Get the user's selected answer
    const selectedOption = document.querySelector('input[name="quiz"]:checked');

    // Step 4: Check if an option is selected
    if (!selectedOption) {
        document.getElementById('feedback').textContent = "Please select an answer before submitting.";
        return;
    }

    const userAnswer = selectedOption.value;

    // Step 5: Compare with correct answer and give feedback
    const feedback = document.getElementById('feedback');
    if (userAnswer === correctAnswer) {
        feedback.textContent = "Correct! Well done.";
    } else {
        feedback.textContent = "That's incorrect. Try again!";
    }
}

// Step 6: Add event listener to the Submit button
document.getElementById('submit-answer').addEventListener('click', checkAnswer);
