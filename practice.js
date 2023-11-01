myTimer();

function myTimer() {
    let count = document.querySelector(".counts");
    
    function updateCountdown() {
        let myDate = "Jan 01 2024 00:00:00";
        let date = new Date(myDate);
        let currentDate = new Date();
        let totalSeconds = (date - currentDate) / 1000;
        let days = Math.floor(totalSeconds / 3600 / 24);
        let hours = Math.floor(totalSeconds / 3600) % 24;
        let minutes = Math.floor(totalSeconds / 60) % 60;
        let seconds = Math.floor(totalSeconds % 60);
        let result = `${days} Day ${hours} Hours ${minutes} Minutes ${seconds} Seconds`;
        count.innerHTML = result;
    }

    // Call the function initially to set the initial countdown
    updateCountdown();

    // Update the countdown every second (1000 milliseconds)
    setInterval(updateCountdown, 1000);
}
