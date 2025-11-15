// Load saved preferences on page load
window.onload = function () {
    let savedName = localStorage.getItem("username");
    let savedTheme = localStorage.getItem("theme");

    if (savedName) {
        document.getElementById("welcome").innerText = "Welcome back, " + savedName + "!";
    }

    if (savedTheme) {
        document.body.className = savedTheme;
    }
};

// Save preferences (name + theme)
function savePreferences() {
    let name = document.getElementById("username").value;

    if (name) {
        localStorage.setItem("username", name);

        // Save as JSON example
        let userData = { username: name, theme: document.body.className };
        localStorage.setItem("userDataJSON", JSON.stringify(userData));

        console.log("Saved user data: ", userData);
        alert("Preferences Saved!");
    } else {
        console.log("Name field empty!");
        alert("Enter a name first!");
    }
}

// Toggle theme and save it
function toggleTheme() {
    let current = document.body.className;

    if (current === "light") {
        document.body.className = "dark";
    } else {
        document.body.className = "light";
    }

    localStorage.setItem("theme", document.body.className);
    console.log("Theme changed to:", document.body.className);
}

// GEOLOCATION
function getLocation() {
    if (!navigator.geolocation) {
        document.getElementById("locationResult").innerText = "Geolocation not supported";
        return;
    }

    navigator.geolocation.getCurrentPosition(success, error);
}

function success(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;

    console.log("Latitude:", lat, "Longitude:", lon);

    // Using OpenStreetMap reverse geocode API
    fetch(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`)
        .then(response => response.json())
        .then(data => {
            console.log("Location data:", data);
            document.getElementById("locationResult").innerText =
                "You are in: " + (data.address.city || data.address.state || "Unknown");
        })
        .catch(err => console.log("Error fetching city:", err));
}

function error(err) {
    console.log("Geolocation error:", err);
    document.getElementById("locationResult").innerText = "Unable to fetch location";
}
