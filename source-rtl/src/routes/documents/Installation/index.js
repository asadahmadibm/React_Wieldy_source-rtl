import React from "react";

import Widget from "components/Widget";
import IntlMessages from "util/IntlMessages";

const Installation = () => {
  return (
    <Widget title={<IntlMessages id="sidebar.documents.installation"/>}>
      <div>

        <h1>محیط توسعه راه اندازی</h1>
        <div className="adocs-section-content ng-binding">
          <p>برای شروع برنامه وب خود با Jumbo React ، اولین کاری که باید انجام دهید اینست که یک محیط توسعه واکنشی را تنظیم کنید.</p>
          <p>برای تنظیم محیط توسعه واکنشی به ابزارهای زیر نیاز است:</p>

          <ul>
            <li>
              <strong>نود جی اس</strong><br/>
              <p>NodeJS به عنوان مدیر بسته گره در پشت صحنه کار می کند. توصیه می شود آخرین نسخه Node JS را از سایت رسمی آن بارگیری و نصب کنید
                <a href="http://nodejs.org/">http://nodejs.org/</a></p>
            </li>
            <li>
              <strong>یارن</strong><br/>
              <p>آخرین نسخه محبوب ترین ابزار مدیریت وابستگی را برای برنامه های واکنش در سایت رسمی آن بارگیری کنید
                <a href="https://yarnpkg.com">https://yarnpkg.com</a> و آن را بر روی دستگاه خود نصب کنید.
              </p>
            </li>
          </ul>

          <br/>
          <br/>
          <h3>اجرای برنامه ری اکت</h3>

          <ol type="i">
            <li><p>استفاده از ماژول های گره را نصب کنید <span className="gx-bg-grey gx-py-1 gx-px-2 gx-rounded-base">$ yarn</span>
            فرمان</p>
            </li>
            <li>
              <p>اجرای برنامه <span className="gx-bg-grey gx-py-1 gx-px-2 gx-rounded-base">$ yarn شروع</span> (اگر برنامه کامپایلان کند است فقط برخی از مسیرها را در فایل route.js اظهار نظر کند)</p>
            </li>
            <li>
              <p>برای ساختن پرونده های تولید ، اجرا شود<span className="gx-bg-grey gx-py-1 gx-px-2 gx-rounded-base">$ yarn ساختن</span>
              (ایجاد / ساخت / پوشه)</p>
            </li>
          </ol>
        </div>
        <br/>
        <br/>
        <h4>
          <a rel="noopener noreferrer" target="_blank" href="http://docs.g-axon.com/wieldy/">برای مستندات کامل کامل اینجا را کلیک کنید</a>
        </h4>
      </div>

    </Widget>
  );
};

export default Installation;
