function validateForm() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    
    if (!username || !password) {
        alert("Please enter both a username and password.");
        return false;
    }
    
    return true;
}