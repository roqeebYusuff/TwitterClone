import { CalendarIcon, ChartBarIcon, EmojiHappyIcon, PhotographIcon, XIcon } from "@heroicons/react/outline"
import { useState, useRef } from "react"
import dynamic from 'next/dynamic';
const Picker = dynamic(() => import('emoji-picker-react'), { ssr: false });

import { db, storage } from '../firebase'
import { addDoc, collection, doc, serverTimestamp, updateDoc } from 'firebase/firestore'
import { getDownloadURL, ref, uploadString } from 'firebase/storage'

function Input() {
    const [input, setInput] = useState("")
    const [selectedFile, setSelectedFile] = useState(null)
    const [showEmojis, setShowEmojis] = useState(false)
    const [loading, setLoading] = useState(false)

    const filePickerRef = useRef(null)

    const onEmojiClick = (event, emojiObject) => {
        setInput(input + emojiObject.emoji)
    }

    const sendPost = async() => {
        if(loading) return
        setLoading(true)

        const docRef = await addDoc(collection(db, 'posts'), {
            id: session.user.uid,
            username: session.user.name,
            userImg: session.user.image,
            tag: session.user.tag,
            text: input,
            timestamp: serverTimestamp()
        })
    }

    const addImageToPost = () => {

    }
    
  return (
    <div className={`border-b border-gray-700 p-3 flex space-x-3 overflow-scroll `}>
        <span className='text-white bg-indigo-600 h-8 w-8 rounded-full flex justify-center items-center cursor-pointer'>R</span>
        {/* <img src="" alt="" /> */}
        <div className="w-full divide-y divide-gray-700">
            <div className={`${selectedFile && "pb-7"} ${input && "space-y-2.5"}`}>
                <textarea 
                    value={input} 
                    onChange={ (e) => setInput(e.target.value)}
                    rows="2"
                    placeholder="What's happening?"
                    className="bg-transparent outline-none text-[#d9d9d9] text-lg placeholder-gray-500 tracking-wide w-full min-h-[50px]"
                />

                {selectedFile && (                    
                    <div className="relative">
                        <div 
                            className="absolute w-8 h-8 bg-[#15181c] hover:bg-[#272c26] bg-opacity-75 rounded-full flex items-center justify-center top-1 left-1 cursor-pointer"
                            onClick={ () => setSelectedFile(null)}
                        >
                            <XIcon className="text-white height-5" />
                        </div>
                        <img src={selectedFile} alt="" className="rounded-2xl max-h-80 object-contain" />
                    </div>
                )}
            </div>
            <div className="flex items-center justify-between pt-2.5">
                    <div className="flex items-center">
                        <div className="icon" onClick={() => filePickerRef.current.click()}>
                            <PhotographIcon className="h-[22px] text-[#1b9bf0]" />
                            <input 
                                type="file" 
                                hidden 
                                onChange={addImageToPost} 
                                ref={filePickerRef} 
                            />
                        </div>

                        <div className="icon rotate-90">
                            <ChartBarIcon className="text-[#1d9bf0] h-[22px]" />
                        </div>

                        <div className="icon" onClick={() => setShowEmojis(!showEmojis)}>
                            <EmojiHappyIcon className="text-[#1d9bf0] h-[22px]" />
                        </div>

                        <div className="icon">
                            <CalendarIcon className="text-[#1d9bf0] h-[22px]" />
                        </div>

                        {showEmojis && (
                                <Picker 
                                    onEmojiClick={onEmojiClick} 
                                    pickerStyle={{
                                        position: "absolute",
                                        marginTop: '465px',
                                        marginLeft: -40,
                                        maxWidth: '320px',
                                        borderRadius: '20px'
                                    }}
                                    theme='dark'
                                />
                        )}
                    </div>
                    <button 
                        className="bg-[#1d9bf0] text-white rounded-full px-4 py-1.5 font-bold shadow-md hover:bg-[#1a8cd8] disabled:hover:bg-[#1d9bf0] disabled:opacity-50 disabled:cursor-pointer"
                        disabled={!input.trim() && !selectedFile}
                        >
                            Tweet
                        </button>
            </div>
        </div>
    </div>
  )
}

export default Input