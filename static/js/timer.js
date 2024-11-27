document.addEventListener("DOMContentLoaded", () => {
    // Timer variables
    let timerDuration = 25 * 60; // Default 25 minutes in seconds
    let timeRemaining = timerDuration;
    let timerInterval = null;
    let isRunning = false;

    // DOM Elements
    const timerDisplay = document.getElementById("timer-display");
    const startButton = document.getElementById("start-btn");
    const pauseButton = document.getElementById("pause-btn");
    const resetButton = document.getElementById("reset-btn");

    // Check if elements exist
    if (!timerDisplay || !startButton || !pauseButton || !resetButton) {
        console.error("One or more timer elements are missing!");
        return;
    }

    // Format time as MM:SS
    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${minutes.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
    }

    // Update the timer display
    function updateDisplay() {
        timerDisplay.textContent = formatTime(timeRemaining);
    }

    // Start the timer
    function startTimer() {
        console.log("Start button clicked!");
        if (!isRunning) {
            isRunning = true;
            timerInterval = setInterval(() => {
                if (timeRemaining > 0) {
                    timeRemaining--;
                    updateDisplay();
                } else {
                    clearInterval(timerInterval);
                    alert("Time's up! Take a break.");
                    isRunning = false;
                }
            }, 1000);
        }
    }

    // Pause the timer
    function pauseTimer() {
        console.log("Pause button clicked!");
        clearInterval(timerInterval);
        isRunning = false;
    }

    // Reset the timer
    function resetTimer() {
        console.log("Reset button clicked!");
        clearInterval(timerInterval);
        timeRemaining = timerDuration;
        updateDisplay();
        isRunning = false;
    }

    // Event listeners
    startButton.addEventListener("click", startTimer);
    pauseButton.addEventListener("click", pauseTimer);
    resetButton.addEventListener("click", resetTimer);

    // Initialize the timer display
    updateDisplay();
});

// Audio Elements
const audioSelect = document.getElementById("audio-select");
const playAudioButton = document.getElementById("play-audio-btn");
const pauseAudioButton = document.getElementById("pause-audio-btn");
let audio = new Audio(); // Placeholder for the audio object

// Play the selected audio track
function playAudio() {
    const selectedTrack = audioSelect.value;
    audio.src = `static/sounds/${selectedTrack}.mp3`; // Ensure the path is correct
    audio.loop = true; // Loop the audio
    audio.play();
}

// Pause the audio
function pauseAudio() {
    audio.pause();
}

// Event listeners for audio buttons
playAudioButton.addEventListener("click", playAudio);
pauseAudioButton.addEventListener("click", pauseAudio);