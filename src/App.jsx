import { useRoutes } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import Header from "./component/Header";
import Admin from "./pages/Admin";
import Productadd from "./pages/Productadd";
import Productedit from "./pages/Productedit";
import Detail from "./pages/Detail";
import Footer from "./component/Footer";
const routerConfig = [
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/admin",
    element: <Admin />,
  },
  {
    path: "/add",
    element: <Productadd />,
  },
  {
    path: "/detail/:id",
    element: <Detail />,
  },
  {
    path: "/edit/:id",
    element: <Productedit />,
  },
];
function App() {
  const router = useRoutes(routerConfig);
  return (
    <div>
      <Header />
      {router}
      <Footer />
    </div>
  );
}

export default App;
