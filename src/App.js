import React, { useState } from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Content from "./components/content/Content";
import { UserProvider } from "./components/context/UserContext";

export const userNameContext = React.createContext();
function App() {
  // const [userName, setUserName] = useState("Adam");

  return (
    // <userNameContext.Provider value="John">
    //   <main>
    //     {/* <Header userName={userName} /> */}
    //     <Header />
    //     {/* <Content userName={userName} onUpdateUserName={setUserName} />
    //   <Footer userName={userName} /> */}
    //     <Content />
    //     <Footer />
    //   </main>
    // </userNameContext.Provider>

    // Using the userProvider for cleaner code
    <UserProvider value="John">
      <main>
        <Header />
        <Content />
        <Footer />
      </main>
    </UserProvider>
  );
}

export default App;
