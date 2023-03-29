class UserService {

    
    GetProfile () {
        var res={
            name: "اسعد",
      family: "احمدی",
      fathername: "عزیز",
      mellicode: 3732026353,
      shenasnameno: "520",
      birthdate: "1355/05/21",
      sodoordate: "1355/05/31",
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