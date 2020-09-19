function welcomeMessage(fullName) {
    const message = "Welcome ";

    return function() {
        alert(message + fullName);
    };
}

const guillaume = welcomeMessage("Guillaume");
const alex = welcomeMessage("Alex");
const fred = welcomeMessage("Fred");