import React from 'react';

function ContactForm() {
    return (
        <div className=" min-h-screen flex items-center justify-center ">
            <div className="max-w-8xl w-full rounded-lg shadow-lg p-10 md:flex">

                <div className="md:w-1/3">
                    <h1 className="text-5xl font-bold text-white mb-6">Welcome to our support page!</h1>
                    <p className="text-gray-400 mb-8">
                        We're here to help you with any problems you may be having with our product.
                    </p>

                    <div
                        className="bg-gray-700 rounded-lg w-full h-60"
                        style={{
                            backgroundImage: `url('https://via.placeholder.com/300x300')`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    ></div>
                </div>


                <div className="md:w-2/3 mt-8 md:mt-0 md:ml-8">
                    <form className="bg-black1 rounded-lg p-6">
                        <div className="flex space-x-4">
                           
                            <div className="w-1/2">
                                <label className="block text-white mb-2" htmlFor="firstName">
                                    First Name
                                </label>
                                <input
                                    type="text"
                                    id="firstName"
                                    placeholder="Enter First Name"
                                    className="w-full px-4 py-2 rounded bg-black2 text-gray-200 focus:outline-none focus:ring focus:ring-red-500"
                                />
                            </div>
                            
                            <div className="w-1/2">
                                <label className="block text-white mb-2" htmlFor="lastName">
                                    Last Name
                                </label>
                                <input
                                    type="text"
                                    id="lastName"
                                    placeholder="Enter Last Name"
                                    className="w-full px-4 py-2 rounded bg-black2 text-gray-200 focus:outline-none focus:ring focus:ring-red-500"
                                />
                            </div>
                        </div>

                        
                        <div className="flex space-x-4 mt-4">
                           
                            <div className="w-1/2">
                                <label className="block text-white mb-2" htmlFor="email">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="Enter your Email"
                                    className="w-full px-4 py-2 rounded bg-black2 text-gray-200 focus:outline-none focus:ring focus:ring-red-500"
                                />
                            </div>
                            
                            <div className="w-1/2">
                                <label className="block text-white mb-2" htmlFor="phone">
                                    Phone Number
                                </label>
                                <div className="flex items-center space-x-2">
                                    <select
                                        className="px-4 py-2 rounded bg-black2 text-gray-200 focus:outline-none focus:ring focus:ring-red-500"
                                        defaultValue="IN"
                                    >
                                        <option value="IN">🇮🇳 +91</option>
                                        <option value="US">🇺🇸 +1</option>
                                        <option value="UK">🇬🇧 +44</option>
                                    </select>
                                    <input
                                        type="tel"
                                        id="phone"
                                        placeholder="Enter Phone Number"
                                        className="flex-1 px-4 py-2 rounded bg-black2 text-gray-200 focus:outline-none focus:ring focus:ring-red-500"
                                    />
                                </div>
                            </div>
                        </div>

                        
                        <div className="mt-4">
                            <label className="block text-white mb-2" htmlFor="message">
                                Message
                            </label>
                            <textarea
                                id="message"
                                rows="4"
                                placeholder="Enter your Message"
                                className="w-full px-4 py-2 rounded bg-black2 text-gray-200 focus:outline-none focus:ring focus:ring-red-500"
                            ></textarea>
                        </div>

                     
                        <div className="mt-4 flex items-center justify-between p-8">
                           
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    id="agree"
                                    className="w-4 h-4 text-red-500 bg-black2 rounded focus:ring-red-500"
                                />
                                <label htmlFor="agree" className="ml-2 text-gray-300">
                                    I agree with Terms of Use and Privacy Policy
                                </label>
                            </div>
                           
                            <button
                                type="submit"
                                className="bg-red1 hover:bg-red-700 text-white py-2 px-4 rounded focus:outline-none focus:ring focus:ring-red-500"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    );
}

export default ContactForm;
