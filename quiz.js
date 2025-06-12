// Step 1: Define the function
function checkAnswer() {
    // Step 2: Correct answer
    const correctAnswer = "4";

    // Step 3: Retrieve the selected radio button
    const selectedOption = document.querySelector('input[name="quiz"]:checked');

    // Step 4: Handle if nothing is selected
    const feedback = document.getElementById('feedback');
    if (!selectedOption) {
        feedback.textContent = "Please select an answer before submitting.";
        return;
    }

    // Step 5: Get the user’s selected value
    const userAnswer = selectedOption.value;

    // Step 6: Compare and give feedback
    if (userAnswer === correctAnswer) {
        feedback.textContent = "Correct! Well done.";
    } else {
        feedback.textContent = "That's incorrect. Try again!";
    }
}

// Step 7: Add event listener to submit button
const submitButton = document.getElementById('submit-answer');
submitButton.addEventListener('click', checkAnswer);
