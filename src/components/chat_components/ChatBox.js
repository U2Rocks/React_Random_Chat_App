import React from 'react'
import { ChatMessage } from './ChatMessage'

export const ChatBox = () => {
  return (
    <div className="border-black bg-gray-600 border-4 rounded m-1 p-1 text-center max-w-[35em]">
        <ChatMessage />
    </div>
  )
}
