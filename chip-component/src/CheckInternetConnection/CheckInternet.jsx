import React, { useEffect, useState } from "react";
import { useLottie } from "lottie-react";
import { toast, ToastContainer, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import wifiAnimation from "./wifiAnimation.json";
import noWifiAnimation from "./noWifiAnimation.json";

const AppConnected = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  const options = {
    animationData: isOnline ? wifiAnimation : noWifiAnimation,
    loop: true,
  };

  const { View } = useLottie(options);

  const updateOnlineStatus = () => {
    setIsOnline(navigator.onLine);
    const message = navigator.onLine
      ? "Yay! The Internet is like a cup of coffee - essential for a good day!"
      : "Oops! Looks like the Wi-Fi is taking a break. Time to make friends with the offline world!";

    const toastType = navigator.onLine ? "success" : "error";

    // Show Toastify notification
    toast(message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
  };

  useEffect(() => {
    // Initial check and setup event listener for online/offline events
    updateOnlineStatus();

    window.addEventListener("online", updateOnlineStatus);
    window.addEventListener("offline", updateOnlineStatus);

    // Cleanup event listeners on component unmount
    return () => {
      window.removeEventListener("online", updateOnlineStatus);
      window.removeEventListener("offline", updateOnlineStatus);
    };
  }, []);

  return (
    <div className={`App ${isOnline ? "online" : "offline"}`}>
      <div className="content">
        {isOnline ? (
          <>
            {View}
            <h1 id="status" style={{ color: "green", fontWeight: "bold" }}>
              Online
            </h1>
          </>
        ) : (
          <>
            {View}
            <h1 id="status" style={{ color: "red", fontWeight: "bold" }}>
              Offline
            </h1>
          </>
        )}
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
    </div>
  );
};

export default AppConnected;
