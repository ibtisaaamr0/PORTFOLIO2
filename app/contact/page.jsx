'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { addDoc, collection } from 'firebase/firestore';
import { useState } from 'react';
import { db } from '@/firebase';


export default  function Contact() {

  const [Name, setName] = useState("")
  const [Email, setEmail] = useState("")
  const [Message, setMessage] = useState("")
  const [Submit, setSubmit] = useState(false)

 const Send = async (e) => {
  e.preventDefault();
  setSubmit(true);

  if (Name !== "" && Email !== "" && Message !== "") {
    try {
      await addDoc(collection(db, "contact"), {
        Name,
        Email,
        Message,
      });
      alert("Sent!");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      console.error("Error sending message:", err);
      alert("Error");
    }
  } else {
    alert("Please fill all fields.");
  }
};


  return (
    <motion.div
      initial={{ opacity: 1, y: 30 }}
      animate={{ opacity: 10, y: 0 }}
      transition={{ duration: 0.78, ease: 'easeIn' }}
      className="min-h-screen flex  justify-center m-20"
    >
      <div className='flex flex-col gap-20 justify-center items-center md:flex md:flex-row md:text-3xl'>
      <div className="flex flex-row items-center justify-between gap-10 max-w-5xl w-full ">

        <div className="w-1/2 flex justify-center">
          <Image
            src="/work-4.png"
            alt="Profile"
            width={300}
            height={300}
            className="rounded-full shadow-lg object-cover"
          />
        </div>

        <div className="w-1/2 text-left ">
          <h1 className="text-4xl font-bold text-gray-900"> Contact Me</h1>
          <p className="mt-4 text-lg text-gray-600  italic ">
            Here is my email to contact me : <strong>ibtisamr00@gmail.com </strong><br />
            Here are my socials : <br />
            <br />
          </p>

          <div className='flex flex-row gap-x-3'>
            <button>
              <a href={"http://www.instagram.com"} target='_blank' rel='noopener noreferrer'>
                <Image
                  src={"/insta.png"}
                  alt=''
                  width={30}
                  height={30} />
              </a>
            </button>

            <button>
              <a href={"http://www.linkedin.com"} target='_blank' rel='noopener noreferrer'>
                <Image
                  src={"/linkedin.png"}
                  alt=''
                  width={30}
                  height={30} />
              </a>
            </button>

            <button>
              <a href={"http://www.github.com"} target='_blank' rel='noopener noreferrer'>
                <Image
                  src={"/github.png"}
                  alt=''
                  width={30}
                  height={30} />
              </a>
            </button>

          </div>
        </div>
      </div>

      <div >
        <form className='flex flex-col gap-5'>
          <label >Name</label>
          <input type="name" placeholder='Enter you name' value={Name} onChange={(e) => { setName(e.target.value) }} className='bg-gray-200 text-black border-2 p-2 rounded-full' />
          <label >Email</label>
          <input type="email" placeholder='Enter you email' value={Email} onChange={(e) => { setEmail(e.target.value) }}className='bg-gray-200 text-black p-2 border-2 rounded-full' />
          <label >Your Message</label>         
          <input type="text" placeholder='Enter you message' value={Message} onChange={(e) => { setMessage(e.target.value) }} className='bg-gray-200 text-black border-2 rounded-full p-2'/>
          <button onClick={Send} className='cursor-pointer bg-black  text-white rounded-full w-30 p-2'> Submit</button>
        </form>
      </div>

      </div>

    </motion.div>
  );
}
