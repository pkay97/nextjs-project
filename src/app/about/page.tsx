"use client"

export default function About(){

    function saveLocal(){
        localStorage.setItem("name", "Amit")
    }
    
    return(
        <div>
            <button className="border border-indigo-400 ml-5" onClick={saveLocal}>Save</button>
        </div>
    )
}