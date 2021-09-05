import React, { useEffect, useState } from "react";
import Routes from "./components/Routes";
import { UidContext } from "./components/Contexts/AppContext";
import axios from "axios";
import ThemeContextProvider from "./components/Contexts/ThemeContext";
import Logout from "./components/Log/Logout";
import Footer from "./components/Footer/Footer";

const App = () => {
  const [uid, setUid] = useState(null);

  const fetchToken = async () => {
    await axios({
      method: "get",
      url: `${process.env.REACT_APP_API_URL}jwtid`,
      withCredentials: true,
    })
      .then((res) => {
        setUid(res.data);
      })
      .catch((err) => console.log("No token"));
  };

  useEffect(() => {
    fetchToken();
  }, [uid]);

  return (
    <ThemeContextProvider>
      <UidContext.Provider value={uid}>
        {uid ? (
          <Logout />
        ) : (
          <>
          </>
        )}
        <Routes />
        <Footer />
      </UidContext.Provider>
    </ThemeContextProvider>
  );
};

export default App;
