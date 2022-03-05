import { ChatArea } from "./components/chat_components/ChatArea";
import { Header } from "./components/Header";
import './index.css';
import "tailwindcss/tailwind.css";


function App() {
  return (
    <div className="bg-gray-200 grid justify-items-center">
      <Header />
      <ChatArea />
    </div>
  );
}

export default App;
