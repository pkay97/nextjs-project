"use client"
import { useState } from "react"

export default function ProfilePage(){
    const [profile, setProfile] = useState("");
    const [createProflie, setCreateProfile] = useState<string[]>([]);

    function addProfile() {
        setCreateProfile(prevItems =>
            
             [...prevItems, profile]);
        
        setProfile("");  // Optional: Clear the input field after saving
    }

    return (
        <div className="flex justify-center mt-10">
            <div className="w-100 h-100 border border-indigo-600 text-center">
                <label className="mt-5">Add Name : </label>
                <input
                    className="mt-5 border border-indigo-600"
                    type="text"
                    value={profile}
                    onChange={(e) => setProfile(e.target.value)}
                />
                <button className="border border-indigo-400 ml-5" onClick={addProfile}>
                    Save
                </button>

                <div className="mt-3">
                <ul>
                    {
                        createProflie.map((e, index) => (
                            <li className="h-10 rounded-full bg-[#b4dbc8] mt-5 flex items-center justify-center" key={index}>{e}</li>
                        ))
                    }
                </ul>
            </div>
            </div>
            
        </div>
    )
}
