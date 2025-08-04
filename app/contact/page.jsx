'use client'; // if using App Router

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });


      const data = await res.json();
      if (data.success) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('Something went wrong.');
      }
    } catch (error) {
      console.error(error);
      setStatus('Server error.');
    }
  };


  return (
    <motion.div
      initial={{ opacity: 1, y: 30 }}
      animate={{ opacity: 10, y: 0 }}
      transition={{ duration: 0.78, ease: 'easeIn' }}
      className="min-h-screen flex justify-center m-20"
    >
      <div className='flex flex-col gap-20 justify-center items-center md:flex md:flex-row md:text-3xl'>
        <div className="flex flex-col md:flex-row items-center justify-between gap-10  w-full  ">

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
          <form className='flex flex-col gap-5' onSubmit={handleSubmit}>
            <label >Name</label>
            <input type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required className='bg-gray-200 text-black border-2  rounded-full' />
            <label >Email</label>
            <input type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required className='bg-gray-200 text-black border-2 rounded-full' />
            <label >Your Message</label>
            <input name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              required className='bg-gray-200 text-black border-2 rounded-full ' />
            <button type='submit' className='cursor-pointer bg-black  text-white rounded-full w-full '> Submit</button>
          </form>
        </div>

      </div>

    </motion.div>
  );
}
