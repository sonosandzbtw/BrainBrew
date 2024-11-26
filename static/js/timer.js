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
const durationSelect = document.getElementById("duration-select");

// Audio Elements
const audioSelect = document.getElementById("audio-select");
const playAudioButton = document.getElementById("play-audio-btn");
const pauseAudioButton = document.getElementById("pause-audio-btn");
let audio = new Audio(); // Placeholder for the audio object

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
    clearInterval(timerInterval);
    isRunning = false;
}

// Reset the timer
function resetTimer() {
    clearInterval(timerInterval);
    timeRemaining = timerDuration;
    updateDisplay();
    isRunning = false;
}

// Change the timer duration when the user selects a new value
durationSelect.addEventListener("change", () => {
    timerDuration = parseInt(durationSelect.value) * 60; // Convert minutes to seconds
    timeRemaining = timerDuration; // Reset timeRemaining to match new duration
    updateDisplay(); // Update the display
});

// Play the selected audio track
function playAudio() {
    const selectedTrack = audioSelect.value;
    audio.src = `static/sounds/${selectedTrack}.mp3`;
    audio.loop = true; // Loop the audio
    audio.play();
}

// Pause the audio
function pauseAudio() {
    audio.pause();
}

// Event listeners for timer buttons
startButton.addEventListener("click", startTimer);
pauseButton.addEventListener("click", pauseTimer);
resetButton.addEventListener("click", resetTimer);

// Event listeners for audio buttons
playAudioButton.addEventListener("click", playAudio);
pauseAudioButton.addEventListener("click", pauseAudio);

// Initialize the timer display
updateDisplay();

// Get the volume control slider
const volumeControl = document.getElementById("volume-control");

// Adjust the audio volume dynamically
volumeControl.addEventListener("input", () => {
    audio.volume = volumeControl.value; // Set the audio volume to the slider's value
});