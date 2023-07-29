import React, { useContext, useState } from 'react';
import { AuthContext } from '../Provider/AuthPorvider';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../Firebase/firebase.config';

const SendMessage = () => {
    const [value, setValue] = useState("")
    const { user } = useContext(AuthContext)
    const handleSendMessage = async (e) => {
        e.preventDefault();
        if (value.trim() === "") {
            alert("Enter valid message");
            return;
        }
        try {
            const { uid, displayName, photoURL } = user
            await addDoc(collection(db, 'messages'), {
                text: value,
                name: displayName,
                avatar: photoURL,
                createdAt: serverTimestamp(),
                uid
                
            })
        }
        catch (error) {
            console.log(error);
        }
        console.log(value);
        setValue('');
    }
    return (
        <div className='max-w-7xl mx-auto fixed bottom-0 w-full'>
            <div className='bg-slate-900 p-5'>
                <form onSubmit={handleSendMessage} className='w-3/4 mx-auto flex '>
                    <input value={value} onChange={e => setValue(e.target.value)} className='w-full focus:outline-none p-3 rounded-s-xl' type="text" name="" id="" />
                    <button type='submit' className='text-white bg-gray-600 py-3 px-5 rounded-e-xl'>Send</button>
                </form>
            </div>
        </div>
    );
};

export default SendMessage;