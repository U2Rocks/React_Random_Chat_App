import React, { useRef, useState, useEffect } from 'react'
import { collection, addDoc } from 'firebase/firestore'
import { db } from '../../firebase'

export const ChatInput = ({ rerenderFunction }) => {
    const [messageName, setMessageName] = useState('N/A')
    const [messageText, setMessageText] = useState('N/A')
    const postsCollectionRef = collection(db, "RandomPosts");


    const nameRef = useRef()
    const messageRef = useRef()


    const addPost = async () => {
      await addDoc(postsCollectionRef, {name: messageName, message: messageText})
    }

    useEffect(() => {
        console.log("ChatInput Loaded...")
    }, [])


    function submitHere(e) {
        e.preventDefault() // prevent page reload

        // prevent submit if no data or default in either field
        if (messageName === '' || messageText === '' || messageText === 'N/A' || messageName === 'N/A') {return}
        
        // make date object for message
        let dateObject = new Date()
        let creationDate = `${dateObject.getMonth()+1}/${dateObject.getDate()}/${dateObject.getFullYear()}`

        // log data for testing purposes
        console.log(`name: ${messageName}; message: ${messageText}; date: ${creationDate}`)
        console.log("form submitted")

        addPost() // add post to database
        
        // reset input fields
        setMessageName('')
        setMessageText('')
        nameRef.current.value = ""
        messageRef.current.value = ""

        // force rerender of form(not requerying database...)
        rerenderFunction()
    }

  return (
    <>
        <form onSubmit={submitHere} className="p-1 mt-8 border-2 border-black rounded bg-gray-200">
        <label htmlFor="chatUsername" className="font-bold">Name:</label>
        <input ref={nameRef} type="text" placeholder="Name..." onChange={event => setMessageName(event.target.value)} id="chatUsername" className="mr-4 p-1 ml-2 "/>
        <label htmlFor="chatMessage" className="font-bold">Message:</label>
        <input ref={messageRef} type="text" placeholder="Message..." onChange={event => setMessageText(event.target.value)} id="chatMessage" className="mr-4 p-1 ml-2 "/>
        <button type="submit" className="border-2 border-black m-1 p-1 bg-red-500 hover:bg-red-300 rounded-lg">Add Post</button>
        </form>

    </>
  )
}
