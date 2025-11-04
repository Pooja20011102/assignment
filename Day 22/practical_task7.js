// Build an object user with login and logout methods

user = {
    name : "Varun",
    login : function(){
        console.log(`${this.name} successfully logged in!`);
        },
    logout :function(){
        console.log(`${this.name} successfully logged out!`);
        
    }
}

console.log(user.name);
user.login();
user.logout();

