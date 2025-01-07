import { Route, Routes } from "react-router-dom";
import EventDetails from "./components/EventDetails";
import Home from "./components/Home";
import Layout from "./components/Layout";
import PageNotFound from "./components/PageNotFound";
import OurTeam from "./components/OurTeam";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />

      <Route
        path="/events"
        element={
          <Layout>
            <EventDetails />
          </Layout>
        }
      />

      <Route
        path="/our-team"
        element={
          <Layout>
            <OurTeam />
          </Layout>
        }
      />

      <Route
        path="*"
        element={
          <Layout>
            <PageNotFound />
          </Layout>
        }
      />
    </Routes>
  );
}

export default App;
