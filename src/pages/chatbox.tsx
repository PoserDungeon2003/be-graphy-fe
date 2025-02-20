import EmojiPicker from 'emoji-picker-react';
import { useState } from 'react';
import { FaSmile } from 'react-icons/fa';
import { FiSend } from 'react-icons/fi';
import { IoChevronBackOutline } from 'react-icons/io5';
import { Link } from 'react-router';

const Chatbox = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello! How can I help you today?", sender: "bot" },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const handleSendMessage = (e: any) => {
    e.preventDefault();
    if (inputMessage.trim()) {
      const newMessage = {
        id: Date.now(),
        text: inputMessage,
        sender: "user"
      };
      setMessages([...messages, newMessage]);
      setInputMessage("");
      setShowEmojiPicker(false);
      
      // Simulate bot response
      setTimeout(() => {
        const botResponse = {
          id: Date.now() + 1,
          text: "This is a simulated response!",
          sender: "bot"
        };
        setMessages(prev => [...prev, botResponse]);
      }, 1000);
    }
  };

  const onEmojiClick = (emojiData: any) => {
    setInputMessage(prev => prev + emojiData.emoji);
  };

  return (
    <div className="fixed inset-0 flex flex-col bg-white">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-white p-4">
        <Link
          to={"/"}
          className="flex items-center gap-1 font-bold text-[#9681FA]"
        >
          <IoChevronBackOutline className="mt-1 size-5" />
          Back
        </Link>
      </div>

      {/* Chat Messages Area - Scrollable */}
      <div className="flex-1 overflow-y-auto px-4">
        <div className="space-y-4 py-2">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex gap-3 ${message.sender === 'user' ? 'justify-end' : ''}`}
            >
              {message.sender === 'bot' && (
                <div className="h-10 w-10 flex-shrink-0 rounded-full bg-gray-100"></div>
              )}
              <div className="max-w-[70%] rounded-3xl bg-gradient-to-r from-yellow-100 via-pink-100 to-purple-100 p-4">
                <p className="text-gray-800">{message.text}</p>
              </div>
              {message.sender === 'user' && (
                <div className="h-10 w-10 flex-shrink-0 rounded-full bg-gray-100"></div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Input Area - Fixed at bottom */}
      <div className="sticky bottom-0 border-t bg-white p-4">
        <form onSubmit={handleSendMessage} className="flex items-center gap-2">
          <div className="flex-1 relative">
            <div className="flex items-center rounded-full bg-gradient-to-r from-yellow-100 via-pink-100 to-purple-100 p-2">
              <input
                type="text"
                placeholder="Type"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                className="flex-1 bg-transparent px-4 text-gray-800 placeholder-gray-500 outline-none"
              />
              <button 
                type="button" 
                className="mx-2 text-gray-500 hover:text-gray-700"
                onClick={() => setShowEmojiPicker(!showEmojiPicker)}
              >
                <FaSmile size={20} />
              </button>
              <button 
                type="submit"
                disabled={!inputMessage.trim()}
                className="rounded-full bg-purple-100 p-2 text-purple-500 hover:bg-purple-200 disabled:opacity-50"
              >
                <FiSend size={20} />
              </button>
            </div>
            
            {/* Emoji Picker */}
            {showEmojiPicker && (
              <div className="absolute bottom-full right-0 mb-2">
                <EmojiPicker
                  onEmojiClick={onEmojiClick}
                  width={300}
                  height={400}
                />
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Chatbox;