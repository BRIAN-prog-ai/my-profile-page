// Dynamic Greeting Based on Time
function updateGreeting() {
    const hour = new Date().getHours();
    let greeting;
    if (hour < 12) greeting = "Good Morning!";
    else if (hour < 18) greeting = "Good Afternoon!";
    else greeting = "Good Evening!";
    document.getElementById("greeting").textContent = greeting + " Welcome to My Profile!";
}

// "Read More" Button Functionality
document.getElementById("read-more").addEventListener("click", function() {
    const moreBio = document.getElementById("more-bio");
    if (moreBio.classList.contains("hidden")) {
        moreBio.classList.remove("hidden");
        this.textContent = "Read Less";
    } else {
        moreBio.classList.add("hidden");
        this.textContent = "Read More";
    }
});

// Form Validation
document.getElementById("newsletter-form").addEventListener("submit", function(e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const errorMsg = document.getElementById("error-msg");

    if (!name || !email) {
        errorMsg.textContent = "Please fill in all fields!";
        return;
    }

    if (!email.includes("@") || !email.includes(".")) {
        errorMsg.textContent = "Please enter a valid email!";
        return;
    }

    alert(`Thank you, ${name}! You've subscribed successfully.`);
    this.reset();
    errorMsg.textContent = "";
});

// Initialize greeting on page load
updateGreeting();