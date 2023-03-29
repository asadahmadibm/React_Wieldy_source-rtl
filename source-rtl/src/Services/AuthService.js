
class AuthService {
    getCurrentUser() {
        console.log(localStorage.getItem('user'));
        return JSON.parse(localStorage.getItem('user'));
    }
    login(user) {
        console.log(user.email);;
        console.log(user.password);;
        if (user.email === "demo@example.com") {
            localStorage.setItem("user", JSON.stringify("response.data"));
            return true;
        }
        return false;

    }

    logout(){
        localStorage.removeItem("user");
    }
}

export default new AuthService()