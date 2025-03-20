"use client";

import { useEffect, useState } from "react";
import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";

export const CustomCookieBanner: React.FC = () => {
  const [isAccepted, setIsAccepted] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const consent = getCookieConsentValue("cookieConsent");
      setIsAccepted(consent === "true");
    }
  }, []);

  const handleAccept = () => {
    setIsAccepted(true);
  };

  const handleDecline = () => {
    setIsAccepted(true);
  };

  return (
    !isAccepted && (
      <CookieConsent
        location="bottom"
        cookieName="cookieConsent"
        expires={150}
        onAccept={handleAccept}
        onDecline={handleDecline}
        disableStyles
        containerClasses="fixed bottom-5 left-1/2 transform -translate-x-1/2 w-full max-w-2xl bg-white shadow-lg rounded-lg border border-gray-200 px-6 py-3 flex items-center justify-between z-50"
        contentClasses="text-sm text-gray-800"
        buttonClasses="hidden"
      >
        <div className="flex items-center">
          <p className="text-sm text-gray-800">
          We use cookies for the fast and convenient operation of the website. By continuing to use the site, you accept {" "}
            <a
              href="/cookie-policy"
              className="text-orange-500 hover:text-orange-600"
            >
              the terms of personal data processing.
            </a>
          </p>
        </div>
        <div className="flex justify-end items-center gap-3">
          <button
            className="px-4 py-2 text-sm bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400"
            onClick={handleDecline}
          >
            Decline
          </button>
          <button
            className="px-4 py-2 text-sm bg-orange-500 text-white rounded-md hover:bg-orange-600"
            onClick={handleAccept}
          >
            Accept
          </button>
        </div>
      </CookieConsent>
    )
  );
};
