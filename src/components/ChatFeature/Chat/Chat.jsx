//where messages are sent back and forth


// testing
import React, { useState } from "react";
// import Messages from "./components/ChatFeature/Messages/Messages"
import Messages from "../Messages/Messages"
import Input from "../Input/Input"
import "./Chat.scss"
import { useNavigate } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import User from "../SidebarHeader/User.svg";
import ChatData from "../../../data/chatData"


const Chat = () => {
    const {users, messages} = ChatData

    const [allMessages, setAllMessages] = useState(messages);

    const navigate = useNavigate()

    const handleBackArrowChat = () => {
        navigate('/inbox')
    }

    const addMessage = (newMessage) => {
        setAllMessages([...allMessages, newMessage])
    }

    return (
        <div className="chat">
            <div className="chatHeader">
                <div className="colOne">
                    <FaArrowLeftLong size={30} className="backIcon" onClick={handleBackArrowChat} />
                </div>
                <div className="colTwo">
                    <img className="userTwoImg" src={users[1].avatar} alt="profile pic" />
                    <span className="userName">{users[1].name}</span>
                    <span className="userOccupation">{users[1].occupation}</span>
                </div>
            </div>
            <Messages allMessages={allMessages} /> {/*passing the messages prop to messages component*/}
            <Input allMessages={allMessages} addMessage={addMessage} avatar={users[0].avatar}/>
        </div>
    )
}

export default Chat