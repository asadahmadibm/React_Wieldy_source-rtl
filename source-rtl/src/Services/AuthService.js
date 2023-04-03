
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
class AuthService {
    getCurrentUser() {
        return JSON.parse(localStorage.getItem('authUser'));
    }
    login(user) {
        let LoginInputVM={UserName :user.email,Password:user.password}
        document.body.classList.add('loading-indicator');
        axios.post("/Auth",  LoginInputVM )
          .then(response => {
            document.body.classList.remove('loading-indicator')
            let res = response.data.token;
            if (res != null) {
                localStorage.setItem("authUser", JSON.stringify(res));
                console.log(res);
                return true;
            }
            else {
                toast.error("اطلاعات کاربر یافت نشد ");
                return false;
            }
          })
          .catch(res=>{
            console.log("catch");
            console.log(res);
            document.body.classList.remove('loading-indicator');
            return false;

            });


    }

    logout(){
        localStorage.removeItem("authUser");
    }
}

export default new AuthService()