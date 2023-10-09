// JavaScript for profile.html

function editProfile() {
    document.getElementById("profile-info").style.display = "none";
    document.getElementById("profileForm").style.display = "block";
}

function saveProfile() {
    // Implement code to save profile changes to the server/database
    // Update the displayed profile information
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var address = document.getElementById("address").value;

    // Update profile info display
    document.getElementById("userName").textContent = name;
    document.getElementById("userEmail").textContent = email;
    document.getElementById("userAddress").textContent = address;

    document.getElementById("profileForm").style.display = "none";
    document.getElementById("profile-info").style.display = "block";
}

function cancelProfile() {
    // Implement code to revert changes or cancel profile editing
    // Update the displayed profile information
    document.getElementById("profileForm").style.display = "none";
    document.getElementById("profile-info").style.display = "block";
}
