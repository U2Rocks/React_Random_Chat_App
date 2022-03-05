import React, { useEffect, useState } from 'react'
import { db } from '../../firebase'
// import firebase from 'firebase/compat/app';
import 'firebase/firestore'
import { collection, getDocs } from 'firebase/firestore'

export const ChatMessage = () => {
    const [userPosts, setUserPosts] = useState([]);
    const postsCollectionRef = collection(db, "RandomPosts");


    useEffect(() => {
        // get document data from collection
        console.log("ChatMessage Loaded...")
        const getPosts = async () => {
            const data = await getDocs(postsCollectionRef)
            setUserPosts(data.docs.map((doc) => ({...doc.data(), id: doc.id })))
        }
        getPosts()
    }, [])


  return (
    <div className="overflow-scroll max-h-[28em] grid justify-items-center">
        {userPosts.map((user) => {
            return( 
            <div key={user.id} className="bg-green-400 text-lg m-1 p-2 rounded-lg shadow-2xl text-center max-w-[30em] min-w-[15em]">
                <div><strong>({user.name}):</strong> {user.message}</div>
            </div>
            )
    })}
    </div>
  )
}
