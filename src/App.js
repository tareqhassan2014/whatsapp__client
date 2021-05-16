import Pusher from 'pusher-js';
import { useEffect, useState } from 'react';
import './App.css';
import axios from './components/Axios/Axios.js';
import ChatBox from './components/ChatBox/ChatBox';
import Sidebar from './components/Sidebar/Sidebar';

function App() {

  const [messages, setMessages] = useState([])

  useEffect(() => {
    axios.get('/messages/sync')
      .then(res => {
        setMessages(res.data)
      })
  }, [])



  useEffect(() => {

    const pusher = new Pusher('c25154802c53eef5fed4', {
      cluster: 'eu'
    });

    var channel = pusher.subscribe('messages');
    channel.bind('inserted', (newMessage) => {
      const newMessages = JSON.stringify(newMessage)

      setMessages([...messages, newMessages])
      console.log("newMessages", newMessages);
      console.log("messages", messages);
    });

    return () => {
      channel.unbind_all()
      channel.unsubscribe()
    }

  }, [messages])



  return (
    <div className="app">
      <div className="app__body">
        <Sidebar />
        <ChatBox messages={messages} />
      </div>
    </div>
  );
}

export default App;
