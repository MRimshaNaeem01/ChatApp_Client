import './App.css';
import ChatRoom from './component/ChatRoom';
import MainForm from './component/MainForm';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Redirect,
} from "react-router-dom";

function App() {
  return (
    <div className="cont container-fluid  text-light d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
      <Router>
        <Routes>
          <Route index element={<MainForm />}></Route>
          <Route path="/chat/:roomName" element={<ChatRoom />}></Route>
          <Route path="*" element={<h1>404 not found</h1>}></Route>
        </Routes>
      </Router>
    </div>
  );
}
export default App;
