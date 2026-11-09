import Sidebar from "../../components/Sidebar/Sidebar";
import ChatWindow from "../../components/ChatWindow/ChatWindow";

const Chat: React.FC = () => {
  return (
    <div className="min-h-screen flex bg-gray-200">
      <div className="w-full sm:w-1/3 max-w-114 min-h-screen">
        <Sidebar />
      </div>
      <div className="hidden sm:flex flex-1 min-h-screen">
        <ChatWindow />
      </div>
    </div>
  );
};

export default Chat;
