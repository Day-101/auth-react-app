import React, { useEffect, useState } from "react";
import Routes from "./components/Routes";
import { UidContext } from "./components/Contexts/AppContext";
import axios from "axios";
import ThemeContextProvider from "./components/Contexts/ThemeContext";
import BtnToggle from "./components/Buttons/BtnToggle";

const App = () => {
  const [uid, setUid] = useState(null);

  useEffect(() => {
    const fetchToken = async () => {
      await axios({
        method: "get",
        url: `${process.env.REACT_APP_API_URL}jwtid`,
        withCredentials: true,
      })
        .then((res) => setUid(res.data))
        .catch((err) => console.log("No token"));
    };
    fetchToken();
  }, [uid]);

  return (
    <ThemeContextProvider>
      <UidContext.Provider value={uid}>
        <BtnToggle />
        <Routes />
      </UidContext.Provider>
    </ThemeContextProvider>
  );
};

export default App;
