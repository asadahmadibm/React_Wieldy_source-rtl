import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"
import { DateObject } from "react-multi-date-picker";
class UserService {

       
    GetProfile () {
        var res={
            name: "اسعد",
      family: "احمدی",
      fathername: "عزیز",
      mellicode: 3732026353,
      shenasnameno: "520",
      birthdate: new DateObject({ date: "1355/06/21", calendar: persian, locale: persian_fa }) ,//"1355/05/21",
      sodoordate: new DateObject({ date: "1355/05/31", calendar: persian, locale: persian_fa }),
      sex: 1,
      mobile: "09334252527",
      tel: "02177711772",
      posticode: "146826",
      ostansodoor: "1",
      citysodoor: "1",
      birthostan: "1",
      birthcity: "2",
      ostansokoonat: "2",
      citysokoonat: "2",
      khiyaban: "رسالت",
      kooche: "شیرود",
      pelak: "12",
      mantaghecode: "8",
      address: "تهرانپارس - چهار راه شاهد بطرف پل شاهد",


        }
        return res;

    }
    SaveProfile(values) {
        console.log(values);
        return true;
    }

}
export default new UserService()