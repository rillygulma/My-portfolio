import React, {useState} from 'react'

function ContactRight() {
    const [username, setUsername] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [email, setEmail] = useState("")
    const [subject, setSubject] = useState("")
    const [message, setMessage] = useState("")
    const [errMsg, setErrMsg] = useState("")
    const [successMsg, setSuccessMsg] = useState("")

    // Email Validation Start here
    function emailValidation () {
        return String(email)
        .toLocaleLowerCase()
        .match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
    };
    // Email Validation End here 

    function handleSend(e) {
        e.preventDefault()
        if (username === "") {
            setErrMsg ("Username is required!")
        } else if (phoneNumber === "") {
            setErrMsg ("Phone Number is required!")
        } else if (email === "") {
            setErrMsg ("Please give your Email!")
        } else if (!emailValidation(email)) {
            setErrMsg ("Give a valid Email!")
        } else if (subject === "") {
            setErrMsg ("Please give your Subject!")
        } else if (message === "") {
            setErrMsg ("Message is required!")
        } else {
            setSuccessMsg(`Thanks you dear ${username}, Your message has ben sent Successfully!`)
            setErrMsg("")
            setUsername("")
            setPhoneNumber("")
            setEmail("")
            setSubject("")
            setMessage("")
        }

    }
  return (
    <div className='w-[60%] h-full py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b]
         flex flex-col gap-8 p-8 rounded-lgshadow-shadowOne'>
            <form className='w-full flex flex-col gap-6 px-5'>
                {
                    errMsg && ( 
                    <p className='py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b]
                    shadow-shadowOne text-center text-orange-500 text-base tracking-wide
                    animate-bounce'>
                        {errMsg}
                    </p> 
                )}
                {
                    successMsg && (
                    <p className='py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b]
                    shadow-shadowOne text-center text-green-500 text-base tracking-wide
                    animate-bounce'>
                        {successMsg}
                    </p>
                )}
                <div className='w-full flex gap-10'>
                    <div className='w-1/2 flex flex-col gap-4'>
                    <p className='text-sm text-gray-400 uppercase tracking-wide'>
                        Your name:
                    </p>
                    <input 
                         onChange={(e)=>setUsername(e.target.value)}
                         value={username}
                         className={`${
                         errMsg === "Username is required!" && 
                         "outline-designColor"} contactInput`} 
                         type='text' 
                    />
                    </div>
                    <div className='w-1/2 flex flex-col gap-4'>
                    <p className='text-sm text-gray-400 uppercase tracking-wide'>
                        Phone Number:
                        </p>
                    <input 
                        onChange={(e)=>setPhoneNumber(e.target.value)}
                        value={phoneNumber}
                        className={`${
                        errMsg === "Phone Number is required!" && 
                        "outline-designColor"} contactInput`} 
                        type='text' 
                    />
                    </div>
                </div>
                <div className='flex flex-col gap-4'>
                <p className='text-sm text-gray-400 uppercase tracking-wide'>
                        Email:
                        </p>
                    <input 
                        onChange={(e)=>setEmail(e.target.value)}
                        value={email} 
                        className={`${
                        (errMsg === "Please give your Email!" || errMsg === "Give a valid Email!") && 
                        "outline-designColor"} contactInput`}
                        type='email' 
                    />
                </div>
                <div className='flex flex-col gap-4'>
                <p className='text-sm text-gray-400 uppercase tracking-wide'>
                        Subject:
                        </p>
                    <input 
                        onChange={(e)=>setSubject(e.target.value)}
                        value={subject} 
                        className={`${
                        errMsg === "Please give your Subject!" && 
                        "outline-designColor"} contactInput`}
                        type='text' 
                    />
                </div>
                <div className='flex flex-col gap-4'>
                <p className='text-sm text-gray-400 uppercase tracking-wide'>
                        Message:
                        </p>
                    <textarea
                      onChange={(e)=>setMessage(e.target.value)}
                      value={message}
                      className={`${
                      errMsg === "Message is required!" && 
                      "outline-designColor"} contactTextArea`} 
                      cols='30' 
                      rows='8'>
                    </textarea>

                </div>
                <div className='w-full'>
                    <button onClick={handleSend} className='w-full h-12 bg-[#141518] rounded-lg text-base
                    text-gray-400 tracking-wider uppercase hover:text-white duration-300
                    hover:border-[1px] hover:border-designColor border-transparent'>
                        Send Message
                    </button>
                </div>
            </form>
                
                {
                    errMsg && (
                    <p className='py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b]
                    shadow-shadowOne text-center text-orange-500 text-base tracking-wide
                    animate-bounce'>
                        {errMsg}
                    </p> 
                )}

                {
                    successMsg && (
                    <p className='py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b]
                    shadow-shadowOne text-center text-green-500 text-base tracking-wide
                    animate-bounce'>
                        {successMsg}
                    </p>
                )}
        </div>
  )
}

export default ContactRight
