        const display = document.getElementById("display");
 
        let timer = null;       // holds the interval id
        let startTime = 0;      // when we pressed Start
        let elapsedTime = 0;    // time saved while stopped
 
        function start() {
            if (timer === null) {
                startTime = Date.now() - elapsedTime;
                timer = setInterval(update, 1);
            }
        }
 
        function stop() {
            if (timer !== null) {
                clearInterval(timer);
                timer = null;
                elapsedTime = Date.now() - startTime;
            }
        }
 
        function reset() {
            clearInterval(timer);
            timer = null;
            elapsedTime = 0;
            display.textContent = "00:00:00:000";
        }
 
        function update() {
            elapsedTime = Date.now() - startTime;
 
            let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
            let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
            let seconds = Math.floor(elapsedTime / 1000 % 60);
            let milliseconds = Math.floor(elapsedTime % 1000);
 
            hours = String(hours).padStart(2, "0");
            minutes = String(minutes).padStart(2, "0");
            seconds = String(seconds).padStart(2, "0");
            milliseconds = String(milliseconds).padStart(3, "0");
 
            display.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;

        }
