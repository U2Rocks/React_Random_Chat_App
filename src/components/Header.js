import React from 'react'
import { BsFillChatSquareTextFill } from "react-icons/bs"

export const Header = () => {
  return (
    <div className="flex">
        <div className="bg-white rounded-xl bg-green-400 m-1 p-1"><BsFillChatSquareTextFill size={80} /></div>
        <div className="text-8xl text-gray-700 ml-1">Random Chat</div>
    </div>
  )
}
