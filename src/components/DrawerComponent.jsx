import { useState } from 'react';
import emailjs from "@emailjs/browser"
import { AnimatePresence, motion } from "framer-motion"
import { IoMdClose } from 'react-icons/io';
import { BiRightArrowAlt } from 'react-icons/bi';
import { FlipLink } from './LinkFlip';

const Drawer = ({ isOpen, onClose }) => {
    const [success, setSuccess] = useState(false);
    const [formData, setFormData] = useState({
        nameCompany: '',
        email: '',
        message: '',
        service: ''
    });

    const [errors, setErrors] = useState({
        nameCompany: '',
        email: '',
        message: '',
        service: ''
    });

    const [loading, setLoading] = useState(false);

    const validateEmail = (email) => {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleServiceSelect = (service) => {
        setFormData({
            ...formData,
            service
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const { nameCompany, email, message, service } = formData;
        let valid = true;
        let newErrors = { nameCompany: '', email: '', message: '', service: '' };

        if (nameCompany === '') {
            newErrors.nameCompany = 'Name / Company is a required field.';
            valid = false;
        }

        if (email === '') {
            newErrors.email = 'Email is a required field.';
            valid = false;
        } else if (!validateEmail(email)) {
            newErrors.email = 'Please enter a valid email address!';
            valid = false;
        }

        if (message === '') {
            newErrors.message = 'Message is a required field.';
            valid = false;
        }

        if (service === '') {
            newErrors.service = 'Please select a service.';
            valid = false;
        }

        setErrors(newErrors);

        if (!valid) {
            return;
        }

        setLoading(true);
        setSuccess(false);

        const serviceID = '';
        const templateID = '';

        emailjs.send(serviceID, templateID, formData, {
            publicKey: '' // Pulblic Key Here
        })
            .then(res => {
                setFormData({
                    nameCompany: '',
                    email: '',
                    message: '',
                    service: ''
                });
                setLoading(false);
                setSuccess(true);
            })
            .catch(err => {
                console.log(err);
                setLoading(false);
            });
    };


    const menuVariants = {
        open: { x: 0 },
        closed: { x: "100%" }
    };

    const overlayVariant = {
        open: { opacity: 0.5 },
        closed: { opacity: 0 }
    }

    return (
        <AnimatePresence>
            {isOpen && (
                <div className='text-[#EFEFEB]'>
                    <motion.div
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={overlayVariant}
                        transition={{ type: 'tween', duration: 0.2 }}
                        className="fixed inset-0 bg-black opacity-50 z-50" onClick={onClose}></motion.div>
                    <motion.div
                        className="fixed top-0 right-0 h-full w-full lg:w-175 overflow-hidden bg-[#111111] z-50 flex flex-col px-6 lg:px-10 pb-4 shadow-lg"
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={menuVariants}
                        transition={{ type: 'tween', duration: 0.5 }}>
                        <div className='flex justify-between items-center pt-5'>
                            <p className="text-[60px] lg:text-[100px] leading-none coolvetica uppercase text-[#9EFF50]">Get Quotation</p>
                            <button
                                onClick={onClose}
                                className='cursor-pointer border p-3 rounded-full hover:bg-[#9EFF50] hover:text-black border-white'>
                                <IoMdClose className='text-[20px] lg:text-[32px]' />
                            </button>
                        </div>

                        <form className='py-8' onSubmit={handleSubmit}>
                            <div className='lg:flex w-full gap-4'>
                                <div className="mb-10 w-full">
                                    <p className="block uppercase helvetica-light ">Full Name / Company Name</p>
                                    <input
                                        id="nameCompany"
                                        value={formData.nameCompany}
                                        onChange={handleChange}
                                        required
                                        name='nameCompany'
                                        type="text"
                                        placeholder='James Kamau / Company X'
                                        className="mt-1 block w-full helvetica-light p-2 lg:p-4 placeholder:text-[#526513] rounded border border-[#626262] focus:outline-none focus:ring-2 focus:ring-[#9EFF50] focus:border-[#9EFF50]"
                                    />
                                    {errors.nameCompany && <div className="error-message text-red-500">{errors.nameCompany}</div>}
                                </div>
                                <div className="mb-4 w-full">
                                    <p className="block uppercase helvetica-light">Email</p>
                                    <input
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        id='email'
                                        name='email'
                                        type="email"
                                        placeholder='email@email.com'
                                        className="mt-1 block w-full p-2 lg:p-4 helvetica-light placeholder:text-[#526513] rounded border border-[#626262] focus:outline-none focus:ring-2 focus:ring-[#9EFF50] focus:border-[#9EFF50]"
                                    />
                                    {errors.email && <div className="error-message text-red-500">{errors.email}</div>}
                                </div>
                            </div>
                            <div className='mb-10'>
                                <p className="block uppercase helvetica-light">What service do you need? ( Select One )</p>
                                <div className='flex gap-2 mt-2 flex-wrap'>
                                    {["Creative Campaign", "Video Production", "Filmmaking", "Audio Production", "Education & Mentoring", "I'm not Sure"].map(service => (
                                        <p
                                            key={service}
                                            onClick={() => handleServiceSelect(service)}
                                            className={`py-1.5 text-[#a1a1a1] px-4 border border-[#626262] helvetica-regular uppercase rounded text-xs lg:text-base hover:text-black hover:bg-[#9EFF50] cursor-pointer duration-300 
                                                ${formData.service === service ? 'bg-[#9EFF50] transform duration-300 text-black' : ''}`}>
                                            {service}
                                        </p>
                                    ))}
                                </div>
                                {errors.service && <div className="error-message text-red-500 helvetica-light pt-2">{errors.service}</div>}
                            </div>
                            <div className="mb-4">
                                <p className="block uppercase helvetica-light">Message</p>
                                <textarea
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    id='message'
                                    name='message'
                                    placeholder='Write something about your project...'
                                    className="mt-1 block w-full helvetica-light p-2 lg:p-4 placeholder:text-[#526513] rounded border border-[#626262] focus:outline-none focus:ring-2 focus:ring-[#9EFF50] focus:border-[#9EFF50]"
                                    rows="4"
                                ></textarea>
                                {errors.message && <div className="error-message text-red-500">{errors.message}</div>}
                            </div>
                            {/* <button
                                type="submit"
                                id="loaderButton"
                                whileTap={{ scale: 0.95 }}
                                className='bg-[#9EFF50] pl-1 pr-1 pt-1 pb-3 rounded-xl hover:pb-6 hover:pl-3 duration-300 w-full mt-10'>
                                <div
                                    className='px-10.75 py-6.5 bg-[#A93207] rounded-xl relative w-full'>
                                    {loading ? "" :
                                        <p className="awsome-serif-italic text-[32px] leading-none lg:text-[50px]">Submit</p>
                                    }
                                    {loading && (
                                        <div id="loader" className="absolute inset-0 items-center justify-center flex">
                                            <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-white"></div>
                                        </div>
                                    )}
                                </div>
                            </button> */}
                            <button className="group cursor-pointer w-full ">
                                <div className="uppercase pl-5 pr-3 py-1.5 text-[50px] leading-10 lg:text-[100px] w-full lg:leading-13.5 duration-300
                                 text-black group-hover:text-[#9EFF50] bg-[#9EFF50] group-hover:bg-black flex items-center gap-2 justify-center 
                                 border group-hover:border-[#9EFF50]">
                                    <FlipLink>Get&nbsp;Quotation</FlipLink>
                                </div>
                            </button>
                            {success && (
                                <div className="mt-4 text-green-600">
                                    Form submitted successfully! Thanks for reaching out 🥳🥳!!
                                </div>
                            )}
                        </form>

                        <div className='flex-1'></div>
                        <div className='flex items-center'>
                            <p className='helvetica-light'>Prefer email? &nbsp;</p>
                            <a href="mailto:aderodaniel4776@gmail.com" className='text-[#9EFF50] helvetica-light'> abhstudio@gmail.com</a>
                        </div>
                    </motion.div>
                </div >

            )
            }
        </AnimatePresence >
    );
};

export default Drawer;
