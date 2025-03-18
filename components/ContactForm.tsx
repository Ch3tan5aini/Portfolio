import React, { useState } from 'react'
import axios from "axios";

const ContactForm = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    async function handleSubmit(e: any) {
        e.preventDefault();
        const formData = { fullName, email, message };
        await axios.post('http://localhost:3000/api/contact', formData);
        setFullName('');
        setEmail('');
        setMessage('');
    }
    return (
        <div>
            <form className="space-y-4" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="fullname"
                    placeholder="FullName"
                    onChange={(e) => setFullName(e.target.value)}
                    value={fullName}
                    className="w-full px-4 py-3 rounded-md bg-gray-100 text-gray-800"
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    className="w-full px-4 py-3 rounded-md bg-gray-100 text-gray-800"
                />
                <textarea
                    placeholder="Message"
                    name="message"
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                    rows={5}
                    className="w-full px-4 py-3 rounded-md bg-gray-100 text-gray-800"
                ></textarea>
                <button type='submit' className="w-full bg-[#3b82f6] text-white py-3 rounded-md font-medium">
                    Send
                </button>
            </form>
        </div>
    )
}

export default ContactForm
