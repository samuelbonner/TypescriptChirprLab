import * as React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Post from "./pages/Post";
import Admin from "./pages/Admin";

/* HOOK REACT EXAMPLE */
const App: React.FC<AppProps> = (props: AppProps) => {
  //   const [greeting, setGreeting] = useState<string>("");

  //   useEffect(() => {
  //     async function getGreeting() {
  //       try {
  //         const res = await fetch("/api/hello");
  //         const greeting = await res.json();
  //         setGreeting(greeting);
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     }
  //     getGreeting();
  //   }, []);

  return (
    <BrowserRouter>
      {/* Add in some bootstrap container/row/col? */}
      {/* Add a Nav bar component & call? */}
      <Switch>
        <Route exact path="/" component={Home} />
        {/* for the main page that displays the list of chirps and a form */}
        <Route exact path="/add" component={Post} />
        {/* for the page to add a new chirp */}
        <Route exact path="/:id/admin" component={Admin} />{" "}
        {/* for the page that displays a chirp edit form */}
      </Switch>
    </BrowserRouter>
  );
};

interface AppProps {}

export default App;
