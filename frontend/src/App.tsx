import { Routes, Route } from "react-router";
import Chat from "./Pages/Chat/Chat";
import Auth from "./Pages/Auth/Auth";
import { Toaster } from "sonner";
import { GuestRoute, PrivateRoute } from "./Pages/PageGuards";

const App: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Chat />} />
        </Route>

        <Route element={<GuestRoute />}>
          <Route path="/auth" element={<Auth />} />
        </Route>
      </Routes>
      <Toaster richColors position="top-right" />
    </div>
  );
};

export default App;
