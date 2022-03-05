import React, { useState } from 'react'
import { ChatBox } from './ChatBox'
import { ChatInput } from './ChatInput'

export const ChatArea = () => {

  const [resetPage, setResetPage] = useState(true)

  const loadNewData = () => {
    setResetPage(!resetPage)
  }



  return (
    <div className="bg-gray-400 text-center border-4 rounded-lg border-black grid justify-items-center max-w-[45em]">
        <div className="text-5xl">Main Chatroom</div>
        <ChatBox />
        <ChatInput rerenderFunction={loadNewData}/>
    </div>

  )
}
