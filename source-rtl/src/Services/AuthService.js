
class AuthService {
    getCurrentUser() {
        console.log(localStorage.getItem('authUser'));
        return JSON.parse(localStorage.getItem('authUser'));
    }
    login(user) {
        console.log(user.email);;
        console.log(user.password);;
        if (user.email === "demo@example.com") {
            localStorage.setItem("authUser", JSON.stringify("response.data"));
            return true;
        }
        return false;

    }

    logout(){
        localStorage.removeItem("authUser");
    }
}

export default new AuthService()