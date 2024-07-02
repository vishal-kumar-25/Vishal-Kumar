import { useState } from "react";

export default function Form() {
    let [fullName, setFullName] = useState("vishal");
    let [userName, setUsername] = useState("");
    let [email, setEmail] = useState("");

    let handleNameChange = (event) => {
        setFullName(event.target.value);
    };

    let handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    let handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    return (
        <form>
            <label htmlFor="fullName">Full Name</label>
            <input 
                placeholder="enter full name" 
                type="text" 
                value={fullName}
                onChange={handleNameChange}
                id="fullName" 
            />
            <br></br>
            <br></br>
            <label htmlFor="username">User Name</label>
            <input 
                placeholder="enter username" 
                type="text" 
                value={userName}
                onChange={handleUsernameChange} 
                id="username"
            />
            <br></br>
            <br></br>
            <label htmlFor="email">Email</label>
            <input 
                placeholder="enter email Id" 
                type="text" 
                value={email}
                onChange={handleEmailChange} 
                id="email"
            />
            <br></br>
            <br></br>
            <button>Submit</button>
        </form>
    );
}
