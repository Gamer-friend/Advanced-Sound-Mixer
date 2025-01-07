const terminalOutput = document.getElementById('terminal-output');

function appendToTerminal(text) {
    terminalOutput.innerHTML += text + "\n";
    terminalOutput.scrollTop = terminalOutput.scrollHeight; // Scroll to the bottom
}

function startTerminalOutput() {
    const messages = [
        "$~bash user 2294",
        "login CLI~~DC832999.223 ADN INSTALL?=audio HDMI",
        "Loading software please wait... 100% done. (1.2 MS)",
        "Detecting CNM... Loading context... 100% done. (0.9 MS)",
        "detecting HDMI direct connected to device or USB C / USB A dongle + hdmi connector..."
    ];

    let index = 0;

    function displayNextMessage() {
        if (index < messages.length) {
            appendToTerminal(messages[index]);
            index++;
            setTimeout(displayNextMessage, 2000); // Wait 2 seconds before displaying the next message
        } else {
            setTimeout(() => {
                appendToTerminal("DETECTED SUCCESSFULLY. TAKING YOU TO THE SOFTWARE...");
                setTimeout(() => {
                    window.location.href = 'mixer.html'; // Redirect to mixer.html
                }, 2000); // Wait 2 seconds before redirecting
            }, 2000); // Wait 2 seconds before showing detection success
        }
    }

    displayNextMessage();
}

// Start the terminal output when the page loads
window.onload = startTerminalOutput;
