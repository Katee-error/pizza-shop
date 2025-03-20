"use client";

import React from "react";

export default function CookiePolicy () {
  return (
    <div className="p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">
          Notice on the Use of Cookies and Similar Technologies
        </h1>
        <p className="mb-4 text-gray-700">
          We use cookies to analyze traffic, personalize content and ads, and enable you to share information on social networks. 
          We share anonymized data about your activities on the website with our partners, including social networks and companies 
          engaged in advertising and web analytics. Our partners may combine this data with information you have provided to them 
          or with data they have collected while using their services. By continuing to use this website, you confirm your consent 
          to the use of cookies in accordance with this notice.
        </p>

        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">What are cookies?</h2>
            <p className="text-gray-700">
              A cookie is a small piece of text transferred by a website you visit to your browser. It helps the website store 
              information about you, such as your preferred language, making your next visit more convenient. Thanks to cookies, 
              browsing the internet becomes much more comfortable. Cookies serve many purposes, such as saving SafeSearch settings, 
              displaying relevant ads, counting page views, registering users for services, and protecting user data.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">
              Types of cookies used on our website:
            </h2>
            <ul className="space-y-6">
              <li>
                <h3 className="text-xl font-medium">Strictly Necessary Cookies</h3>
                <p className="text-gray-700">
                  These cookies are essential for the proper functioning of the website. They allow navigation and use of website features. 
                  These cookies do not identify you personally. If you disable this type of cookie, it may affect the performance of the website 
                  or its individual components.
                </p>
              </li>
              <li>
                <h3 className="text-xl font-medium">Performance, Efficiency, and Analytics Cookies</h3>
                <p className="text-gray-700">
                  These cookies help us understand how visitors interact with the website by providing information about visited areas 
                  and time spent on the website. They also indicate problems such as error messages, helping to improve the site's performance. 
                  Analytics cookies also help measure the effectiveness of advertising campaigns and optimize website content for those interested 
                  in our ads. These cookies cannot be used to identify you; all collected and analyzed data is anonymous.
                </p>
              </li>
              <li>
                <h3 className="text-xl font-medium">Functional Cookies</h3>
                <p className="text-gray-700">
                  These cookies are used to recognize users returning to our website. They allow us to personalize content for you and save 
                  your preferences. Disabling these cookies may impact website performance and functionality, restricting access to certain content.
                </p>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">
              How long are cookies stored on your device?
            </h2>
            <p className="text-gray-700">
              Some cookies are active only during your website visit and are automatically deleted when you close your browser. 
              These are called "session cookies." Other cookies remain stored on your device between browser sessions and are not 
              deleted when you close the browser. These are called "persistent cookies." The storage duration of these cookies varies depending on their type.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">
              Who stores cookies on your device?
            </h2>
            <p className="text-gray-700">
              Cookies may be stored on your device by the website administration. These are known as "first-party cookies." 
              Some cookies may be stored by third parties, referred to as "third-party cookies."
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">
              How can you manage cookies?
            </h2>
            <p className="text-gray-700">
              Most web browsers are set to accept cookies automatically by default. However, you can change your settings 
              to block cookies or receive a notification when cookies are transferred to your device. There are various ways to manage cookies; 
              refer to your browser's instructions to learn how to adjust settings. Disabling cookies may impact your internet experience.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">
              Cookies and Personal Data
            </h2>
            <p className="text-gray-700">
              Cookies do not contain any personal data that can be used to identify you. They do not store names, email addresses, 
              home addresses, phone numbers, or any similar data.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};


