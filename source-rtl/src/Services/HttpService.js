import axios from 'axios';
import { NotificationManager } from 'react-notifications'
// import { GetAuthToken, Logout } from "./authorization"
// import history from './history'
import { object } from 'prop-types';


const BASE_ADDRESS = process.env.NODE_ENV == 'development' ? "https://localhost:7012" : ""; //'https://swagger.tnlink.ir'//

const GetBaseAddress = () => { return BASE_ADDRESS; }

const getHeader = (shouldLog) => ({
  'Authorization': "bearer " + GetAuthToken(),
  "Content-Type": 'application/json',
  "IsSOCLog": (shouldLog == false ? false : true)
});

function GetAuthToken() {
  return localStorage.getItem('authUser');
  return window.sessionStorage.getItem("auth_token");
}

// axios.interceptors.response.use(function (response) {
//   // Any status code that lie within the range of 2xx cause this function to trigger
//   // Do something with response data
//   var serverAppVer = response.headers.cbiappversion;
//   var appVer = window.sessionStorage.getItem("cbiappversion");
//   if (response.request.responseURL.indexOf('login') > 0) {
//     window.sessionStorage.setItem("cbiappversion", serverAppVer);
//   } else {
//     if (appVer != serverAppVer) {
//       window.sessionStorage.setItem("cbiappversion", serverAppVer);
//       NotificationManager.warning('نسخه برنامه قدیمی می باشد. به طور خودکار بارگذاری مجدد انجام خواهد شد.');

//       setTimeout(() => {
//         window.location.reload(true);
//       }, 5000);
//     }
//   }

//   return response;
// }, function (error) {
//   console.log("error", error)
//   // Any status codes that falls outside the range of 2xx cause this function to trigger
//   // Do something with response error
//   return Promise.reject(error);
// });
const processoringFailedRequest = (result) => {
  if (result.response && result.response.status == 401) {
    NotificationManager.error(' شما دسترسی به این عملیات ندارید و یا مدت زمان نشست شما به پایان رسیده است')
    setTimeout(
      function () {
        console.log("کد را کامنت کرده ام");
        // Logout();
        // history.push('/login')
        window.location.reload(true);// به منظور دریافت آخرین نسخه بهتر است Reload شود.
      }
        .bind(this),
      3002
    );
  }
  else if (result.response && result.response.status == 403) {
    NotificationManager.error('شما دسترسی به این عملیات ندارید')
  }
  else if (result.response && result.response.status == 400) {
    NotificationManager.error(result.response.data, '', 5000)

  }
  else if (result.response && result.response.status == 500) {
    NotificationManager.error('خطای سمت سرور. لطفا کمی صبر کرده و مجددا تلاش کنید، در صورت وجود خطا با پشتیبانی تماس بگیرید.')
  }
}



const httpCall = {

  Post: (address, data, successCallback, failCallback, option) => {
    var defOpt = { showLoading: true, IsSOCLog: true };
    option = Object.assign({}, option, defOpt);
    console.log(`Post Data to ${address}:`, data);
    var shouldLog = option.IsSOCLog
    if (option.showLoading) {
      document.body.classList.add('loading-indicator');
    }

    axios.post(BASE_ADDRESS + address, data, { headers: getHeader(shouldLog) })
      .then(result => { document.body.classList.remove('loading-indicator'); console.log("Post call Success:", result); successCallback && successCallback(result.data); })
      .catch(e => { document.body.classList.remove('loading-indicator'); console.log("Post call Error:", e); processoringFailedRequest(e); (failCallback && failCallback(e)); })
  },
  Get: (address, successCallback, failCallback, option) => {

    var defOpt = { showLoading: true, IsSOCLog: true };
    option = Object.assign({}, option, defOpt);
    console.log(`Get Data from ${address}`);
    var shouldLog = option.IsSOCLog
    if (option.showLoading) {
      document.body.classList.add('loading-indicator');
    }

    axios.get(BASE_ADDRESS + address, { headers: getHeader(shouldLog) })
      .then(result => { document.body.classList.remove('loading-indicator'); console.log("Get call Success:", result); (successCallback && successCallback(result.data)); })
      .catch(e => { document.body.classList.remove('loading-indicator'); console.log("Get call Error:", e); processoringFailedRequest(e); (failCallback && failCallback(e)); })
  },
  GetFile: (fileName, address, successCallback, failCallback, option = { showLoading: true, IsSOCLog: true }) => {
    console.log(`Get Data from ${address}`);
    var shouldLog = option.IsSOCLog
    if (option.showLoading) {
      document.body.classList.add('loading-indicator');
    }

    axios.get(BASE_ADDRESS + address, { headers: getHeader(shouldLog) })
      .then(result => {
        document.body.classList.remove('loading-indicator');

        const url = window.URL.createObjectURL(new File([result.data], fileName, { type: 'application/vnd.ms-excel' }));
        const link = document.createElement('a');
        link.href = url;
        document.body.appendChild(link);
        link.click();

        (successCallback && successCallback(result.data));
      })
      .catch(e => {
        document.body.classList.remove('loading-indicator');
        console.log("Get call Error:", e);
        processoringFailedRequest(e); (failCallback && failCallback(e));
      })
  }
}
const Sarafi = {

  GetSarafiList: (data, onFulfilled, onRejected, isSOCLog) => {
    httpCall.Post('/api/SarafiManagment/PostSarafiList?SarafiData=' + data.SarafiData + '&currentPage=' + data.currentPage + '&pageSize=' + data.pageSize + '&accessToSecondRate=' + data.accessToSecondRate, data, onFulfilled, onRejected, { IsSOCLog: isSOCLog })
  },
  GetSarafDetails: (sarafiid, onFulfilled, onRejected) => {
    httpCall.Get('/api/SarafiManagment/SarafiDetailsById?id=' + sarafiid, onFulfilled, onRejected)
  },
  getSarafPermission: (exchangeId, onFulfilled, onRejected) => {
    httpCall.Get('/api/SarafiManagment/ExchangePermissionsById?id=' + exchangeId, onFulfilled, onRejected)
  },
  getSarafTahood: (exchangeId, onFulfilled, onRejected) => {
    httpCall.Get('/api/SarafiManagment/ExchangeTahoodById?id=' + exchangeId, onFulfilled, onRejected)
  },
  getSarafiOpenPosition: (exchangeId, onFulfilled, onRejected) => {
    httpCall.Get('/api/SarafiManagment/ExchangeOpenPositionById?id=' + exchangeId, onFulfilled, onRejected)
  },
  updatePermission: (param, onFulfilled, onRejected) => {
    httpCall.Post(`/api/SarafiManagment/UpdateExchangePermissions?exchangeId=${param.exchangeId}&allowBuy=${param.checkedBuy}&allowSell=${param.checkedSell}&accessImportExportTalars=${param.accessImportExportTalars}&desc=${param.description}`, null, onFulfilled, onRejected)
    // httpCall.Post(`/api/SarafiManagment/UpdateExchangePermissions`, data, onFulfilled, onRejected)
  },
  updateTaahod: (param, onFulfilled, onRejected) => {
    httpCall.Post(`/api/SarafiManagment/UpdateExchangeTaahod?exchangeId=${param.exchangeId}&taahodCeiling=${param.taahodCeiling}&taahodKind=${param.taahodKind}`, null, onFulfilled, onRejected)
  },
  updateOpenPosition: (param, onFulfilled, onRejected) => {
    httpCall.Post(`/api/SarafiManagment/UpdateExchangeOpenPosition?exchangeId=${param.exchangeId}&positionCeiling=${param.openPositionCeiling}&openPositionKind=${param.openPositionKind}`, null, onFulfilled, onRejected)
  },

  GetBalanceSarafPosition: (idsarafi, fromDate, toDate, onFulfilled, onRejected) => {
    httpCall.Get(`/api/SarafiManagment/GetBalanceSarafPosition?exchangeId=${idsarafi}&fromDateShamsi=${fromDate}&toDateShamsi=${toDate}`, onFulfilled, onRejected)
  },
  GetSanaSarafReportBuy: (idsarafi, fromDate, toDate, onFulfilled, onRejected) => {
    httpCall.Get(`/api/SarafiManagment/GetSanaSarafReportBuy?exchangeId=${idsarafi}&fromDateShamsi=${fromDate}&toDateShamsi=${toDate}`, onFulfilled, onRejected)
  },
  GetSanaSarafReportSell: (idsarafi, fromDate, toDate, onFulfilled, onRejected) => {
    httpCall.Get(`/api/SarafiManagment/GetSanaSarafReportSell?exchangeId=${idsarafi}&fromDateShamsi=${fromDate}&toDateShamsi=${toDate}`, onFulfilled, onRejected)
  },


  GetNimaSarafPositionBuy: (idsarafi, fromDate, toDate, onFulfilled, onRejected) => {
    httpCall.Get(`/api/SarafiManagment/GetNimaSarafPositionBuy?exchangeId=${idsarafi}&fromDateShamsi=${fromDate}&toDateShamsi=${toDate}`, onFulfilled, onRejected)
  },
  GetNimaSarafPositionSell: (idsarafi, fromDate, toDate, onFulfilled, onRejected) => {
    httpCall.Get(`/api/SarafiManagment/GetNimaSarafPositionSell?exchangeId=${idsarafi}&fromDateShamsi=${fromDate}&toDateShamsi=${toDate}`, onFulfilled, onRejected)
  },
  GetBankSarafPositionBuyFromBank: (idsarafi, fromDate, toDate, onFulfilled, onRejected) => {
    httpCall.Get(`/api/SarafiManagment/GetBankSarafPositionBuyFromBank?exchangeId=${idsarafi}&fromDateShamsi=${fromDate}&toDateShamsi=${toDate}`, onFulfilled, onRejected)
  },
  GetBankSarafPositionSaleToBank: (idsarafi, fromDate, toDate, onFulfilled, onRejected) => {
    httpCall.Get(`/api/SarafiManagment/GetBankSarafPositionSaleToBank?exchangeId=${idsarafi}&fromDateShamsi=${fromDate}&toDateShamsi=${toDate}`, onFulfilled, onRejected)
  },
  GetPositionFileDownloadLink: (param) => {
    return GetBaseAddress() + `/api/SarafiManagment/download?exchangeId=${param.idsarafi}&fromDateShamsi=${param.fromDate}&toDateShamsi=${param.toDate}&authtoken=${GetAuthToken()}`;
  },
  GetSarafiLicenseHistory: (exchangeId, onFulfilled, onRejected) => {
    httpCall.Get(`/api/SarafiManagment/GetSarafiLicenseHistory?exchangeId=${exchangeId}`, onFulfilled, onRejected)
  },
  GetAllSarafies: (name, onFulfilled, onRejected, isSOCLog) => {
    httpCall.Get(`/api/SarafiManagment/GetSarafiList?name=${name}`, onFulfilled, onRejected, { IsSOCLog: isSOCLog })
  },
  GetPositionCorrections: (input, onFulfilled, onRejected, isSOCLog) => {
    httpCall.Get(`/api/SarafiManagment/GetPositionCorrections?pageIndex=${input.pageIndex}&sarId=${input.sarId}`, onFulfilled, onRejected, { IsSOCLog: isSOCLog })
  },
  AddPositionCorrection: (data, onFulfilled, onRejected, isSOCLog) => {
    httpCall.Post(`/api/SarafiManagment/AddNewPositionCorrection`, data, onFulfilled, onRejected)
  },
  DeletePositionCorrection: (id, onFulfilled, onRejected, isSOCLog) => {
    httpCall.Get(`/api/SarafiManagment/DeletePositionCorrection?id=${id}`, onFulfilled, onRejected)
  }
}

const User = {

  GetUsers: (param, onFulfilled, onRejected, option) => {
    let pageIndex = !param.pageIndex ? '' : param.pageIndex;
    let pageSize = !param.pageSize ? '' : param.pageSize;
    let sarafiCodeOrName = !param.sarafiCodeOrName ? '' : param.sarafiCodeOrName;
    let searchType = !param.searchType ? '' : param.searchType;
    let searchContain = !param.searchContain ? '' : param.searchContain;
    let userType = !param.userType ? '' : param.userType;

    httpCall.Get(`/api/User/Users?pageIndex=${pageIndex}&pageSize=${pageSize}&sarafiCodeOrName=${sarafiCodeOrName}&searchType=${searchType}&searchContain=${searchContain}&userType=${userType}`, onFulfilled, onRejected, option)
  },

  GetCbiUsers: (param, onFulfilled, onRejected, option) => {
    let pageIndex = !param.pageIndex ? '' : param.pageIndex;
    let pageSize = !param.pageSize ? '' : param.pageSize;
    let sarafiCodeOrName = !param.sarafiCodeOrName ? '' : param.sarafiCodeOrName;
    let searchType = !param.searchType ? '' : param.searchType;
    let searchContain = !param.searchContain ? '' : param.searchContain;
    let userType = !param.userType ? '' : param.userType;
    let userKind = !param.userKind ? 'ُSanaAdminPanel' : param.userKind;


    httpCall.Get(`/api/User/CbiUsers?pageIndex=${pageIndex}&pageSize=${pageSize}&sarafiCodeOrName=${sarafiCodeOrName}&searchType=${searchType}&searchContain=${searchContain}&userType=${userType}&userKind=${userKind}`, onFulfilled, onRejected, option)
  },

}



const AppUser = {

  CreateAppUser: (data, onFulfilled, onRejected) => {
    httpCall.Post('/api/User/CreateAppUser', data, onFulfilled, onRejected)
  },

  // CreateRandomPassword: (onFulfilled, onRejected) => {
  //     httpCall.Post('/api/User/CreateRandomPassword', null, onFulfilled, onRejected);
  // },

  GetAppUserById: (id, onFulfilled, onRejected, show, isSOCLog) => {
    httpCall.Post('/api/User/GetAppUserById?id=' + id, null, onFulfilled, onRejected, { showLoading: show, IsSOCLog: isSOCLog });
  },

  GetAppUserByIdAnonymous: (id, onFulfilled, onRejected, show, isSOCLog) => {
    httpCall.Post('/api/User/GetAppUserByIdAnonymous?id=' + id, null, onFulfilled, onRejected, { showLoading: show, IsSOCLog: isSOCLog });
  },

  UpdateAppUser: (data, onFulfilled, onRejected) => {
    httpCall.Post('/api/User/UpdateAppUser', data, onFulfilled, onRejected);
  }
}

const Auth = {



  saveRole: (data, onFulfilled, onRejected) => {
    httpCall.Post(`/api/Auth/SaveRole`, data, onFulfilled, onRejected)
  },
  getUsersInRole: (data, onFulfilled, onRejected) => {
    httpCall.Get(`/api/Auth/GetUsersInRole/?roleId=${data.roleId}&pageSize=${data.pageSize}&pageIndex=${data.pageIndex}`, onFulfilled, onRejected)
  },

  getRole: (param, onFulfilled, onRejected) => {
    httpCall.Get(`/api/Auth/getrole?id=${param.id}`, onFulfilled, onRejected)
  },

  getRoleUserCountInfo: (param, onFulfilled, onRejected) => {
    httpCall.Get(`/api/Auth/GetRoleUserCountInfo?roleName=${param.roleName}&pageIndex=${param.pageIndex}`, onFulfilled, onRejected)
  },

  getRolesInfo: (param, onFulfilled, onRejected) => {
    httpCall.Get(`/api/Auth/GetRolesInfo?userId=${param.userId}`, onFulfilled, onRejected)
  },

  // RequestPasswordReset: (data, onFulfilled, onRejected, show) => {
  //     httpCall.Post('/api/Auth/RequestPasswordReset', data, onFulfilled, onRejected, { showLoading: show })
  // },
  addUserToRole: (param, onFulfilled, onRejected) => {
    httpCall.Get(`/api/Auth/addUserToRole?userId=${param.userId}&roleId=${param.roleId}`, onFulfilled, onRejected)
  },
  removeUserFromRole: (param, onFulfilled, onRejected) => {
    httpCall.Get(`/api/Auth/removeUserFromRole?userId=${param.userId}&roleId=${param.roleId}`, onFulfilled, onRejected)
  },
  getRolePermission: (param, onFulfilled, onRejected) => {
    httpCall.Get(`/api/Auth/GetRolePermission?roleId=${param.roleId}`, onFulfilled, onRejected)
  },
  getUserRolesPermission: (param, onFulfilled, onRejected) => {
    httpCall.Get(`/api/Auth/GetUserRolesPermission?userId=${param.userId}`, onFulfilled, onRejected)
  },


  getAllPermission: (onFulfilled, onRejected) => {
    httpCall.Get("/api/Auth/GetAllPermission", onFulfilled, onRejected)
  },
  updatePermission: (param, onFulfilled, onRejected) => {
    httpCall.Post(`/api/Auth/UpdatePermission?roleId=${param.roleId}`, param.permissions, onFulfilled, onRejected)
  },
  SavePassword: (data, onFulfilled, onRejected) => {
    httpCall.Post(`/api/Auth/SavePassword`, data, onFulfilled, onRejected)
  },
  deleteRole: (param, onFulfilled, onRejected) => {
    httpCall.Get(`/api/Auth/DeleteRole?roleId=${param.roleId}`, onFulfilled, onRejected)
  },
  getRolesForUser: (data, onFulfilled, onRejected, isSOCLog) => {
    httpCall.Get(`/api/Auth/GetRolesForUser/?userId=${data.userId}&pageSize=${data.pageSize}&pageIndex=${data.pageIndex}`, onFulfilled, onRejected, { IsSOCLog: isSOCLog })
  },
  softDeleteUser: (param, onFulfilled, onRejected) => {
    httpCall.Post(`/api/Auth/SoftDeleteUser?userId=${param.userId}`, onFulfilled, onRejected)
  },
  getIdentityUserByUserName: (param, onFulfilled, onRejected, isSOCLog) => {
    httpCall.Get(`/api/Auth/GetIdentityUserByUserName?userName=${param.userName}`, onFulfilled, onRejected, { IsSOCLog: isSOCLog })
  },
  sendSMS: (data, onFulfilled, onRejected) => {
    httpCall.Post(`/api/Auth/SendSMS`, data, onFulfilled, onRejected)
  },
  validateConfirmationCode: (data, onFulfilled, onRejected) => {
    httpCall.Post(`/api/Auth/ValidateConfirmationCode`, data, onFulfilled, onRejected)
  },
  loadCaptcha: (onFulfilled, onRejected, show, isSOCLog) => {
    httpCall.Post(`/api/Auth/LoadCaptchaImage`, onFulfilled, onRejected, { showLoading: show, IsSOCLog: isSOCLog })
  },
  validateCaptcha: (data, onFulfilled, onRejected, show) => {
    httpCall.Post(`/api/Auth/ValidateCaptcha`, data, onFulfilled, onRejected, { showLoading: show })
  },
  login: (param, onFulfilled) => {
    httpCall.Post(`/api/Auth/login`, param, onFulfilled, null)
  }
}

const NimaImport = {
  GetCurrencies: (onFulfilled, onRejected, isSOCLog) => httpCall.Get('/api/Import/GetCurrencies', onFulfilled, onRejected, { IsSOCLog: isSOCLog }),
  SearchRequest: (data, onFulfilled, onRejected) => {
    httpCall.Post(`/api/Import/SearchRequest`, data, onFulfilled, onRejected)
  },
  SearchOffer: (data, onFulfilled, onRejected) => {
    httpCall.Post(`/api/Import/SearchOffer`, data, onFulfilled, onRejected)
  },
  GetRequestById: (requestId, onFulfilled, onRejected) => {
    httpCall.Get(`/api/Import/GetRequestById?requestId=${requestId}`, onFulfilled, onRejected)
  },
  GetSelectedOffer: (requestId, onFulfilled, onRejected, isSOCLog) => {
    httpCall.Get(`/api/Import/GetSelectedOffer?reqId=${requestId}`, onFulfilled, onRejected, { IsSOCLog: isSOCLog })
  },
  GetOffers: (requestId, onFulfilled, onRejected) => {
    httpCall.Get(`/api/Import/GetOffers?reqId=${requestId}`, onFulfilled, onRejected)
  },
  GetOfferById: (Id, onFulfilled, onRejected, show) => {
    httpCall.Get(`/api/Import/GetOfferById?offerId=${Id}`, onFulfilled, onRejected, { showLoading: show })
  },
  GetOfferPayments: (Id, onFulfilled, onRejected, show) => {
    httpCall.Get(`/api/Import/GetOfferPayments?offerId=${Id}`, onFulfilled, onRejected, { showLoading: show })
  },
  GetPaymentIdentifier: (Id, onFulfilled, onRejected, show) => {
    //  httpCall.Get(`/api/Import/GetOfferPayments?offerId=${Id}`, onFulfilled, onRejected, { showLoading: show })
  },
  ReturnFromMakhtoome: (param, onFulfilled, onRejected) => {
    httpCall.Get(`/api/Import/ReturnFromMakhtoome?offerId=${param.offerId}&description=${param.desc}`, onFulfilled, onRejected)
  },
  CancelOffer: (param, onFulfilled, onRejected) => {
    httpCall.Get(`/api/Import/CancelOffer?offerId=${param.offerId}&description=${param.desc}`, onFulfilled, onRejected)
  },
  ConfirmApplicantCancel: (param, onFulfilled, onRejected) => {
    httpCall.Get(`/api/Import/ConfirmApplicantCancel?offerId=${param.offerId}&description=${param.desc}&isConfirmed=${param.isConfirmed}`, onFulfilled, onRejected)
  },
  GetOfferDocuments: (Id, onFulfilled, onRejected, show) => {
    httpCall.Get(`/api/Import/GetOfferDocuments?offerId=${Id}`, onFulfilled, onRejected, { showLoading: show })
  },
  GetOfferFileDownloadLink: (param) => {
    return GetBaseAddress() + `/api/Import/DownloadFile?fileId=${param.id}&authtoken=${GetAuthToken()}`;
  },
}


const NimaExport = {
  GetSupplyList: (param, onFulfilled, onRejected) => httpCall.Get(`/api/Export/GetSupplyList?pageIndex=${param.pageIndex}&id=${param.id}&nationalId=${param.nationalId}`, onFulfilled, onRejected),
  GetDemandList: (param, onFulfilled, onRejected) => httpCall.Get(`/api/Export/GetDemandList?pageIndex=${param.pageIndex}&id=${param.id}&sarafiId=${param.sarafiId}`, onFulfilled, onRejected),
  FullSearch: (param, onFulfilled, onRejected) => httpCall.Post(`/api/Export/FullSearch`, param, onFulfilled, onRejected),
  GetDealingList: (param, onFulfilled, onRejected) => httpCall.Get(`/api/Export/GetDealingList?pageIndex=${param.pageIndex}&id=${param.id}&sarafiId=${param.sarafiId}`, onFulfilled, onRejected),
  GetSupplyDetails: (param, onFulfilled, onRejected) => httpCall.Get(`/api/Export/GetSupplyDetails?id=${param.id}`, onFulfilled, onRejected),
  GetDemandInfo: (param, onFulfilled, onRejected, isSOCLog) => httpCall.Get(`/api/Export/GetDemandInfo?id=${param.demandId}`, onFulfilled, onRejected, { IsSOCLog: isSOCLog }),
  GetDealingPayment: (param, onFulfilled, onRejected) => httpCall.Get(`/api/Export/GetDealingPayment?dealingId=${param.dealingId}`, onFulfilled, onRejected),
  GetPaymentIdentifier: (param, onFulfilled, onRejected) => httpCall.Get(`/api/Export/GetPaymentIdentifier?dealingId=${param.dealingId}`, onFulfilled, onRejected),
  ReturnFromFinal: (param, onFulfilled, onRejected) => httpCall.Get(`/api/Export/ReturnFromFinal?dealingId=${param.dealingId}&description=${param.description}`, onFulfilled, onRejected),
  CancelDealing: (param, onFulfilled, onRejected) => httpCall.Get(`/api/Export/CancelDealing?dealingId=${param.dealingId}&description=${param.description}`, onFulfilled, onRejected),
  FinalDealing: (param, onFulfilled, onRejected) => httpCall.Get(`/api/Export/FinalDealing?dealingId=${param.dealingId}&description=${param.description}`, onFulfilled, onRejected),
  ReplySupplierCanceling: (param, onFulfilled, onRejected) => httpCall.Get(`/api/Export/ReplySupplierCanceling?confirm=${param.confirm}&dealingId=${param.dealingId}&description=${param.description}`, onFulfilled, onRejected),
  GetSupplyCottages: (suppId, onFulfilled, onRejected) => httpCall.Get(`/api/Export/GetSupplyCottages?supplyId=${suppId}`, onFulfilled, onRejected),
  GetAllCurrencyRateInfo: (param, onFulfilled, onRejected) => httpCall.Get(`/api/Export/GetAllCurrencyRateInfo`, onFulfilled, onRejected),
  SaveCurrencyCellingVales: (data, onFulfilled, onRejected) => {
    httpCall.Post(`/api/Export/SaveCurrencyCellingVales`, data, onFulfilled, onRejected)
  },
  GetOldCurrencyCelling: (param, onFulfilled, onRejected) =>
    httpCall.Get(`/api/Export/GetOldCurrencyCelling?searchFromDate=${param.fromDate}&searchToDate=${param.toDate}&forumType=${param.forumType}`, onFulfilled, onRejected)
}

const BlackList = {
  AddToBlackListExceptions: (data, onFulfilled, onRejected) => { httpCall.Post(`/api/Import/AddToBlackListExceptions`, data, onFulfilled, onRejected) },
  RemoveFromBlackListExceptions: (param, onFulfilled, onRejected) => { httpCall.Get(`/api/Import/RemoveFromBlackListExceptions?Id=${param.id}&description=${param.description}`, onFulfilled, onRejected) },
  SearchBlackListExceptions: (param, onFulfilled, onRejected) => { httpCall.Get(`/api/Import/SearchBlackListExceptions?offerId=${param.offerId}&merchantNationalId=${param.merchantNationalId}&merchantName=${param.merchantName}&pageSize=${param.pageSize}&pageIndex=${param.pageIndex}`, onFulfilled, onRejected) }
}

const System = {
  GetEvents: (param, onFulfilled, onRejected) => httpCall.Get(`/api/System/GetEvents?pageIndex=${param.pageIndex}&userName=${param.userName}&category=${param.category}&message=${param.message}`, onFulfilled, onRejected),
}

const Dashboard = {
  GetTodayExportData: (onFulfilled, onRejected) => httpCall.Get(`/api/Dashboard/GetTodayExportData`, onFulfilled, onRejected),
  GetDealingData: (param, onFulfilled, onRejected) => httpCall.Get(`/api/Dashboard/GetDealingData?year=${param.year}`, onFulfilled, onRejected),
  GetDealingStatusData: (param, onFulfilled, onRejected) => httpCall.Get(`/api/Dashboard/GetDealingStatusData?year=${param.year}`, onFulfilled, onRejected),
  GetDashboardImportDaily: (onFulfilled, onRejected) => httpCall.Get(`/api/Dashboard/GetDashboardImportDaily`, onFulfilled, onRejected),
  GetDashboardOfferTotal: (param, onFulfilled, onRejected) => httpCall.Get(`/api/Dashboard/GetDashboardOfferTotal?year=${param.year}`, onFulfilled, onRejected),
  GetDashboardOfferByStatus: (param, onFulfilled, onRejected) => httpCall.Get(`/api/Dashboard/GetDashboardOfferByStatus?year=${param.year}`, onFulfilled, onRejected),
  GetRpt1NimaExport: (curCode, onFulfilled, onRejected) => httpCall.Get(`/api/Dashboard/GetRpt1NimaExport?curCode=${curCode}`, onFulfilled, onRejected),
  GetRpt1Currency: (onFulfilled, onRejected) => httpCall.Get(`/api/Dashboard/GetRpt1Currency`, onFulfilled, onRejected),
  ExportExcelRpt1: (curCode) => GetBaseAddress() + `/api/Dashboard/ExportExcelRpt1?curCode=${curCode}&authtoken=${GetAuthToken()}`,
  ExportRptTotalNimaExport: () => GetBaseAddress() + `/api/Dashboard/ExportRptTotalNimaExport?authtoken=${GetAuthToken()}`,
  ExportDetailsRptTotalNimaExport: () => GetBaseAddress() + `/api/Dashboard/ExportDetailsRptTotalNimaExport?authtoken=${GetAuthToken()}`,

  ExportExcelRialiPaymentAsync: (fromDate, toDate) => GetBaseAddress() + `/api/Dashboard/ExportExcelRialiPayment?fromDate=${fromDate}&toDate=${toDate}&authtoken=${GetAuthToken()}`,
  ExportDetailsRptTotalNimaExportWithDate: (fileName, toDate) => httpCall.GetFile(fileName, `/api/Dashboard/ExportDetailsRptTotalNimaExport?dayDate=${toDate}`),

  GetRptTotalNimaExport: (onFulfilled, onRejected) => httpCall.Get(`/api/Dashboard/GetRptTotalNimaExport`, onFulfilled, onRejected),
}

const HesabTasvieh = {
  DigitalChequePayments: (data, onFulfilled, onRejected) =>
    httpCall.Post(`/api/PaymentTasvieh/SearchDigitalChequePayments`, data, onFulfilled, onRejected),
  GetDigitalChequePaymentById: (id, onFulfilled, onRejected) => httpCall.Get(`/api/PaymentTasvieh/GetDigitalChequePaymentById?paymentId=${id}`, onFulfilled, onRejected),
  GetInvalidPaymentIdentifier: (data, onFulfilled, onRejected) =>
    httpCall.Get(`/api/Export/GetInvalidPaymentIdentifier?fromDate=${data.fromDate}&toDate=${data.toDate}&pageIndex=${data.pageIndex}&pageSize=${data.pageSize}`
      , onFulfilled, onRejected),
}

const Sana = {

  //GetCurrencyUses: (onFulfilled, onRejected, isSOCLog) => httpCall.Get(`/api/Sana/GetCurrencyUses`, onFulfilled, onRejected, {IsSOCLog: isSOCLog }),
  GetExceptionalCurUseBySarafiById: (id, onFulfilled, onRejected, show, isSOCLog) => httpCall.Get(`/api/Sana/GetExceptionalCurUseBySarafiById?id=${id}`, onFulfilled, onRejected, { showLoading: show, IsSOCLog: isSOCLog }),
  SearchExceptionalCurUseBySarafi: (data, onFulfilled, onRejected, isSOCLog) => httpCall.Post(`/api/Sana/SearchExceptionalCurUseBySarafi`, data, onFulfilled, onRejected, { IsSOCLog: isSOCLog }),
  DeleteExceptionalCurUseBySarafi: (id, onFulfilled, onRejected) => httpCall.Get(`/api/Sana/DeleteExceptionalCurUseBySarafi?id=${id}`, onFulfilled, onRejected),
  InsertExceptionalCurUseBySarafi: (data, onFulfilled, onRejected) => httpCall.Post(`/api/Sana/InsertExceptionalCurUseBySarafi`, data, onFulfilled, onRejected),


  GetCurrencyUses: (onFulfilled, onRejected, isSOCLog) => httpCall.Get(`/api/Sana/GetCurrencyUses`, onFulfilled, onRejected, { IsSOCLog: isSOCLog }),
  GetCurrencyUseById: (id, onFulfilled, onRejected, show, isSOCLog) => httpCall.Get(`/api/Sana/GetCurrencyUseById?id=${id}`, onFulfilled, onRejected, { showLoading: show, IsSOCLog: isSOCLog }),
  SearchCurrencyUse: (data, onFulfilled, onRejected, isSOCLog) => httpCall.Post(`/api/Sana/SearchCurrencyUse`, data, onFulfilled, onRejected, { IsSOCLog: isSOCLog }),
  UpdateCurrencyUse: (data, onFulfilled, onRejected) => httpCall.Post(`/api/Sana/UpdateCurrencyUse`, data, onFulfilled, onRejected),
  InsertCurrencyUse: (data, onFulfilled, onRejected) => httpCall.Post(`/api/Sana/InsertCurrencyUse`, data, onFulfilled, onRejected),

  GetSellFromResourceBank: (param, onFulfilled, onRejected, isSOCLog) => httpCall.Get(`/api/Sana/GetSellResourceBank?pageIndex=${param.pageIndex}&schDate=${param.schDate}`, onFulfilled, onRejected, { IsSOCLog: isSOCLog }),
  GetAllYearsSellFromResource: (onFulfilled, onRejected) => httpCall.Get(`/api/Sana/GetAllYearsSellFromResource`, onFulfilled, onRejected),
  GetExchanges: (onFulfilled, onRejected, isSOCLog) => httpCall.Get(`/api/Sana/GetExchanges`, onFulfilled, onRejected, { IsSOCLog: isSOCLog }),
  SaveSellFromResource: (param, onFulfilled, onRejected) => httpCall.Post(`/api/Sana/SaveSellFromResource`, param, onFulfilled, onRejected),
  RemoveSellFromResource: (id, onFulfilled, onRejected) => httpCall.Get(`/api/Sana/RemoveSellFromResource?id=${id}`, onFulfilled, onRejected),
  GetExportSellFromResourceBank: (year) => GetBaseAddress() + `/api/Sana/ExportExcellSellFromResource?year=${year}&authtoken=${GetAuthToken()}`,
  // GetExportSellFromResourceBank: (onFulfilled, onRejected) => {
  //     httpCall.Get(`/api/Sana/ExportExcellSellFromResource`, onFulfilled, onRejected)
  // },
}

const CoinDealing = {
  GetCoinDealings: (param, onFulfilled, onRejected, isSOCLog) => httpCall.Get(`/api/Sana/GetCoinDealings?pageIndex=${param.pageIndex}&fromDate=${param.fromDate}&toDate=${param.toDate}&sarafiIds=${param.sarafiIds}&nationalId=${param.nationalId}&trackingCode=${param.trackingCode}`, onFulfilled, onRejected, { IsSOCLog: isSOCLog }),
  GetCoinDealingsExcel: (filename, param) => httpCall.GetFile(filename, `/api/Sana/GetCoinDealingsExcel?fromDate=${param.fromDate}&toDate=${param.toDate}&sarafiIds=${param.sarafiIds}&nId=${param.nationalId}&trackingCode=${param.trackingCode}`),
}

const Setting = {
  saveShahkar: (data, onFulfilled, onRejected) => httpCall.Get(`/api/Setting/GetSettings`, data, onFulfilled, onRejected),
  saveNimaDate: (data, onFulfilled, onRejected) => httpCall.Post(`/api/Setting/SaveSettings`, data, onFulfilled, onRejected),
  SavePolicyCoefficients: (data, onFulfilled, onRejected) => httpCall.Post(`/api/Setting/SetPolicyCoefficient`, data, onFulfilled, onRejected),
  getShahkar: (onFulfilled, onRejected, isSOCLog) => httpCall.Get(`/api/Setting/getShahkar`, onFulfilled, onRejected, { IsSOCLog: isSOCLog }),
  getNimaDate: (onFulfilled, onRejected, isSOCLog) => httpCall.Post(`/api/Setting/getNimaDate`, onFulfilled, onRejected, { IsSOCLog: isSOCLog }),
  GetPolicyCoefficients: (onFulfilled, onRejected) => httpCall.Get(`/api/Setting/GetPolicyCoefficientSetting`, onFulfilled, onRejected),
  GetCalendar: (year, month, onFulfilled, onRejected) => httpCall.Get(`/api/Setting/GetCalendar?year=${year}&month=${month}`, onFulfilled, onRejected),
  ChangeHoliday: (date1, holiday, onFulfilled, onRejected) => httpCall.Get(`/api/Setting/ChangeHoliday?date=${date1}&isHoliday=${holiday}`, onFulfilled, onRejected),
}


const Reports = {
  GetRilaliPaymentStatus: (param, onFulfilled, onRejected) => httpCall.Get(`/api/Sana/GetRialiPaymentStatus?pageIndex=${param.pageIndex}&fromDate=${param.fromDate}&toDate=${param.toDate}&payType=${param.payType}&paymentStatus=${param.paymentStatus}&paymentValidity=${param.paymentValidity}&sarafiIds=${param.sarafiIds}`, onFulfilled, onRejected),
  GetRialiPaymentAggregate: (param, onFulfilled, onRejected) => httpCall.Get(`/api/Sana/GetRialiPaymentAggregate?pageIndex=${param.pageIndex}&fromDate=${param.fromDate}&toDate=${param.toDate}&sarafiIds=${param.sarafiIds}`, onFulfilled, onRejected),
  //GetRilaliPaymentStatusExcel:(param, onFulfilled, onRejected) => httpCall.Get(`/api/Sana/GetRialiPaymentStatusExcel?fromDate=${param.fromDate}&toDate=${param.toDate}&payType=${param.payType}&status=${param.status}&sarafiIds=${param.sarafiIds}`, onFulfilled, onRejected),
  GetRilaliPaymentStatusExcel: (filename, param) => httpCall.GetFile(filename, `/api/Sana/GetRialiPaymentStatusExcel?fromDate=${param.fromDate}&toDate=${param.toDate}&payType=${param.payType}&paymentStatus=${param.paymentStatus}&paymentValidity=${param.paymentValidity}&sarafiIds=${param.sarafiIds}`),
  GetRialiPaymentAggregateExcel: (filename, param) => httpCall.GetFile(filename, `/api/Sana/GetRialiPaymentAggregateExcel?fromDate=${param.fromDate}&toDate=${param.toDate}&sarafiIds=${param.sarafiIds}`),
  ShowExchangePosition: (param, onFulfilled, onRejected) => httpCall.Get(`/api/Sana/ShowExchangePosition?pageIndex=${param.pageIndex}&dateDay=${param.dateDay}&sarafiId=${param.sarafiId}`, onFulfilled, onRejected),
  GetLastCalcStartPositionDate: (onFulfilled, onRejected) => httpCall.Get(`/api/Sana/GetLastCalcStartPositionDate`, onFulfilled, onRejected),
  GetRialiPaymentValidityReport: (param, onFulfilled, onRejected) => httpCall.Get(`/api/Sana/GetRialiPaymentValidityReport?pageIndex=${param.pageIndex}&fromDate=${param.fromDate}&toDate=${param.toDate}&sarafiIds=${param.sarafiIds}`, onFulfilled, onRejected),
  GetRialiPaymentValidityReportExcel: (filename, param) => httpCall.GetFile(filename, `/api/Sana/GetRialiPaymentValidityReportExcel?fromDate=${param.fromDate}&toDate=${param.toDate}&sarafiIds=${param.sarafiIds}`),

}
const Merchant = {
  GetBusinessmens: (pageIndex, pageSize, nationalId, fullName, hasAccess, justSupplyForBankSarafi, blockedByManual, blockedBySystem, ignorePosCalc, supplierCat, onFulfilled, onRejected) => httpCall.Get(`/api/merchant/GetMerchants?currentPage=${pageIndex}&pageSize=${pageSize}&nationalId=${nationalId}&fullName=${fullName}&hasAccess=${hasAccess}&justSupplyForBankSarafi=${justSupplyForBankSarafi}&blockedByManual=${blockedByManual}&blockedBySystem=${blockedBySystem}&ignorePositionCalc=${ignorePosCalc}&supplierCategory=${supplierCat}`, onFulfilled, onRejected),
  UpdateAccessBusinessmen: (nationalId, haveAccess, justSupplyForBankSarafi, blockedByManual, ignorePosCalc, description, onFulfilled, onRejected) => httpCall.Get(`/api/merchant/UpdateAccessMerchantmen?nationalId=${nationalId}&haveAccess=${haveAccess}&justSupplyForBankSarafi=${justSupplyForBankSarafi}&blockedByManual=${blockedByManual}&ignorePositionCalc=${ignorePosCalc}&description=${description}`, onFulfilled, onRejected),
  UpdateMerchantInfo: (nationalId, supplierCat, onFulfilled, onRejected) => httpCall.Get(`/api/merchant/UpdateMerchantInfo?nationalId=${nationalId}&supplierCategory=${supplierCat}`, onFulfilled, onRejected),

}

const newsinformation = {

  GetAllTablo: async (data, onFulfilled, onRejected, isSOCLog) => {

    const data1 = [
      {
        key: '1',
        name: "نحوه اعمال محدودیت‌ها و نظارت‌های سیستمی در سامانه سمات و نحوه عمل در خصوص تسهیلات امهالی",
        age: "4 بهمن 1401"

      },
      {
        key: '2',
        name: "قعطی سامانه های سیاح، سمات، سماچک و محچک در روز جمعه مورخ 1401/10/30",
        age: "28 دی 1401"

      },
      {
        key: '3',
        name: "اطلاعیه شماره 5 نسخه 2.2 سامانه سمات",
        age: "4 بهمن 1401"

      }
    ];
    const result = {
      pageIndex: data.pageIndex,
      pageSize: data.pageSize,
      totalCount: 30,
      items: data1
    }
    return result;
    // httpCall.Post(`/api/Sana/SearchExceptionalCurUseBySarafi`, data, onFulfilled, onRejected, {IsSOCLog : isSOCLog})
  },

  GetAllNerkhArz: async (data, onFulfilled, onRejected, isSOCLog) => {

    const data1 = [{
      key: '1',
      name: "USD",
      age: "دلار آمريکا",
      address: 42000,
    }, {
      key: '2',
      name: "GBP",
      age: "پوند انگليس	",
      address: 53000,
    },];
    const result = {
      pageIndex: data.pageIndex,
      pageSize: data.pageSize,
      totalCount: 30,
      items: data1
    }
    return result;
    // httpCall.Post(`/api/Sana/SearchExceptionalCurUseBySarafi`, data, onFulfilled, onRejected, {IsSOCLog : isSOCLog})
  },

  GetAllbongah: async (data, onFulfilled, onRejected, isSOCLog) => {

    const data1 = [{
      key: '1',
      name: "	لیست مصوبات شورای تامین استان ها (110)",
      age: "1402/02/19",
      address: "دریافت فایل",
    },];

    const result = {
      pageIndex: data.pageIndex,
      pageSize: data.pageSize,
      totalCount: 30,
      items: data1
    }
    return result;
    // httpCall.Post(`/api/Sana/SearchExceptionalCurUseBySarafi`, data, onFulfilled, onRejected, {IsSOCLog : isSOCLog})
  },
  GetAllFormsInstructions: async (data, onFulfilled, onRejected, isSOCLog) => {

    const data1 = [{
      key: '1',
      name: "مستندات فنی سرویس سمات (نسخه 2.2 - بروزرسانی 1401/09/24) (3592)",
      age: "1402/02/19",
      address: "دریافت فایل",
    }, {
      key: '2',
      name: "مستندات فنی سیاح نسخه 1.4 بروز رسانی 26_05_1401 (4937)",
      age: "1402/02/19",
      address: "دریافت فایل",
    },
    ];

    const result = {
      pageIndex: data.pageIndex,
      pageSize: data.pageSize,
      totalCount: 30,
      items: data1
    }
    return result;
    // httpCall.Post(`/api/Sana/SearchExceptionalCurUseBySarafi`, data, onFulfilled, onRejected, {IsSOCLog : isSOCLog})
  },
  GetAllsuperuser: async (data, onFulfilled, onRejected, isSOCLog) => {

    const data1 = [
      {
        key: '1',
        name: " صنعت و معدن	",
        age: " مریم پريسا عرفاتی	",
        address: 27871108,
      },
      {
        key: '2',
        name: "بانک ملت	",
        age: " امیر قوامی پور	",
        address: 82962963,
      },
      {
        key: '3',
        name: " رفاه کارگران	",
        age: " اکرم قاسم زاده	",
        address: 82188737,
      },
    ];
    const result = {
      pageIndex: data.pageIndex,
      pageSize: data.pageSize,
      totalCount: 30,
      items: data1
    }
    return result;
    // httpCall.Post(`/api/Sana/SearchExceptionalCurUseBySarafi`, data, onFulfilled, onRejected, {IsSOCLog : isSOCLog})
  },
  GetAllTechnicalAssistant: async (data, onFulfilled, onRejected, isSOCLog) => {

    const data1 = [
      {
        key: '1',
        name: "بانک صنعت و معدن  ",
        age: "11 ",
        address: "سید محمدرضا - محمد خاتمی  ",
        tell: "27871053"
      },
      {
        key: '2',
        name: "بانک ملت  ",
        age: "12",
        address: "کیانوش - نیک نامی",
        tell: "82963332"
      },
      {
        key: '3',
        name: "بانک رفاه کارگران",
        age: "13",
        address: "حسین - ربانی",
        tell: "88314288"
      },
      {
        key: '4',
        name: "بانک مسکن",
        age: "14",
        address: "علی - منصوری",
        tell: "64573066"
      },
    ];
    const result = {
      pageIndex: data.pageIndex,
      pageSize: data.pageSize,
      totalCount: 30,
      items: data1
    }
    return result;
    // httpCall.Post(`/api/Sana/SearchExceptionalCurUseBySarafi`, data, onFulfilled, onRejected, {IsSOCLog : isSOCLog})
  },
  GetAllQuickAccess: async (data, onFulfilled, onRejected, isSOCLog) => {

    const data1 = [
      {
        address: "واحدهای بانکی مجاز موسسه اعتباری غیربانکی کوثر سابق",
      },
      {
        address: "واحدهای بانکی مجاز بانک مهر اقتصاد سابق",
      },
      {
        address: "راهنمای کاربران ارشد بانکها و موسسات",
      },
      {
        address: "مشخصات کاربران ارشد بانکها و مؤسسات",
      },
      {
        address: "مسئولان فنی بانکها و مؤسسات",
      },
    ];
    const result = {
      pageIndex: data.pageIndex,
      pageSize: data.pageSize,
      totalCount: 30,
      items: data1
    }
    return result;
    // httpCall.Post(`/api/Sana/SearchExceptionalCurUseBySarafi`, data, onFulfilled, onRejected, {IsSOCLog : isSOCLog})
  },


}

const EcarSales = {
  GetDropDown: async (data, onFulfilled, onRejected) => httpCall.Post(`/CRM_Region/GetDropDown`, data, onFulfilled, onRejected),
  GetCRM_Region: async (data, onFulfilled, onRejected) => httpCall.Post(`/CRM_Region/GetCRM_Region`, data, onFulfilled, onRejected),
  // GetById: async (data, onFulfilled, onRejected) => httpCall.Post(`/EcarSales/GetById`, data, onFulfilled, onRejected),
}
// const CrmCompany = {
//   GetById: async (data, onFulfilled, onRejected) => httpCall.Post(`/CrmCompany/GetById`, data, onFulfilled, onRejected),
// }

const Group = {
  GetDropDown: async (onFulfilled, onRejected) => httpCall.Get(`/Group/GetDropDown`, onFulfilled, onRejected),
}

const Industry = {
  GetDropDown: async (onFulfilled, onRejected) => httpCall.Get(`/Industry/GetDropDown`, onFulfilled, onRejected),
}


const CRUDGrid = {

  GetAll: async (apiname, data, onFulfilled, onRejected) => {
    switch (apiname) {
      case "EcarSales":
        httpCall.Post(`/EcarSales/GetAll`, data, onFulfilled, onRejected);
        break;
      case "CrmCompany":
        httpCall.Post(`/CrmCompany/GetAll`, data, onFulfilled, onRejected);
        break;
    }

  },
  GetById: async (apiname, data, onFulfilled, onRejected) => {
    switch (apiname) {
      case "EcarSales":
        httpCall.Post(`/EcarSales/GetById`, data, onFulfilled, onRejected);
        break;
      case "CrmCompany":
        httpCall.Post(`/CrmCompany/GetById`, data, onFulfilled, onRejected);
        break;
    }

  },
  Upsert: async (apiname, data, onFulfilled, onRejected) => {
    switch (apiname) {
      case "EcarSales":
        httpCall.Post(`/EcarSales/Upsert`, data, onFulfilled, onRejected);
        break;
      case "CrmCompany":
        httpCall.Post(`/CrmCompany/Upsert`, data, onFulfilled, onRejected);
        break;
    }
  },
  Delete: async (apiname, data, onFulfilled, onRejected) => {
    switch (apiname) {
      case "EcarSales":
        httpCall.Post(`/EcarSales/Delete`, data, onFulfilled, onRejected);
        break;
      case "CrmCompany":
        httpCall.Post(`/CrmCompany/Delete`, data, onFulfilled, onRejected);
        break;
    }
  },

}



export default {
  Sarafi: Sarafi,
  User: User,
  Auth,
  AppUser: AppUser,
  NimaImport,
  NimaExport,
  BlackList,
  System,
  Dashboard,
  HesabTasvieh,
  Sana,
  CoinDealing,
  Setting,
  Reports,
  Merchant,
  newsinformation,
  EcarSales,
  // CrmCompany,
  Group,
  Industry,
  CRUDGrid
};
