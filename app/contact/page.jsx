'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function ContactForm() {
  const [Data, setData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [Msg, setMsg] = useState(false)


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(Data)
      });

      const data = await res.json();
      console.log("Response:", data);
      setMsg(true)

      setData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to send message.");
    }
  };




  return (
    <div className="min-h-screen flex justify-center m-20 animate-fade">
      <div className='flex flex-col gap-20 justify-center items-center lg:flex lg:flex-row lg:text-2xl md:text-xl'>
        <div className="flex flex-col lg:flex items-center justify-between gap-10  w-full  ">

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
            <h1 className="text-4xl 2xl:text-5xl font-bold text-gray-900"> Contact Me</h1>
            <p className="mt-4 xl:mt-7 text-lg lg:text-xl 2xl:text-2xl text-gray-600  italic ">
              Here is my email to contact me : <strong>ibtisamr00@gmail.com </strong><br />
              Here are my socials : <br />
              <br />
            </p>

            <div className='flex flex-row gap-x-3'>
              <button className='hover:animate-hover-on'>
                <a href={"http://www.instagram.com"} target='_blank' rel='noopener noreferrer'>
                  <Image
                    src={"/insta.png"}
                    alt=''
                    width={30}
                    height={30} />
                </a>
              </button>

              <button className='hover:animate-hover-on'>
                <a href={"http://www.linkedin.com"} target='_blank' rel='noopener noreferrer'>
                  <Image
                    src={"/linkedin.png"}
                    alt=''
                    width={30}
                    height={30} />
                </a>
              </button>

              <button className='hover:animate-hover-on'>
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
          <form className='flex flex-col gap-5 ' onSubmit={handleSubmit}>
            <label className='font-extrabold italic' >Name</label>
            <input type="text"
              name="name"
              value={Data.name}
              onChange={(e) => { setData({ name: e.target.value, email: Data.email, message: Data.message }) }}
              placeholder="Your Name"
              required className='bg-gray-200 text-black border-2  rounded-full p-1' />
            <label className='font-extrabold italic'>Email</label>
            <input type="email"
              name="email"
              value={Data.email}
              onChange={(e) => { setData({ name: Data.name, email: e.target.value, message: Data.message }) }}
              placeholder="Your Email"
              required className='bg-gray-200 text-black border-2 rounded-full p-1' />
            <label className='font-extrabold italic' >Your Message</label>
            <textarea name="message"
              value={Data.message}
              onChange={(e) => {
                setData({ name: Data.name, email: Data.email, message: e.target.value })
              }}
              onInput={(e) => {
                e.target.style.height = 'auto'; 
                e.target.style.height = `${e.target.scrollHeight}px`;
              }}
              placeholder="Your Message"
              required className='bg-gray-200 text-black border-2 rounded-md p-2 w-full overflow-hidden ' />
            <button type='submit' className='cursor-pointer bg-black  text-white rounded-full w-[50%] p-2'> Submit</button>
          </form>
          {Msg && (
            <div className="top-0 mt-8 bg-gray-300 text-gray-800 px-4 py-2 rounded-md border border-black w-full animate-fade">Your message has been sent </div>
          )}
        </div>

      </div>

    </div>
  );
}
