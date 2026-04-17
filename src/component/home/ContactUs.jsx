
export default function ContactUs() {
    return (
        <div id="contact" className="flex flex-col items-center">
            <section className="w-full flex flex-col md:flex-row items-center justify-between gap-12 py-5 px-6 md:px-16 lg:px-24 xl:px-32">
                
                <div className='text-center md:text-left mt-12'>
                    <div className="flex items-center  p-1.5 rounded-full border border-green-900 text-xs w-fit mx-auto md:mx-0">
                        <div className="flex items-center">
                            <img className="size-7 rounded-full border border-green-900" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=50" alt="userImage1" />
                            <img className="size-7 rounded-full border border-green-900 -translate-x-2" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=50" alt="userImage2" />
                            <img className="size-7 rounded-full border border-green-900 -translate-x-4" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=50&h=50&auto=format&fit=crop" alt="userImage3" />
                        </div>
                        <p className="-translate-x-2 text-xs text-slate-200">Join our community of changemakers</p>
                    </div>
                    <h1 className='font-medium text-3xl md:text-5xl/15 bg-linear-to-r max-md:mx-auto from-white to-green-300 bg-clip-text text-transparent max-w-117.5 mt-4'>Together We Create Change</h1>
                    <p className='text-sm/6 text-white max-w-86.25 mt-4 mx-auto md:mx-0'>Reach out to Vinay Wings Navjeevan Foundation to learn about our initiatives in education, healthcare, and women empowerment. Let's work together to bring positive change to rural India.</p> 
                </div>
                        
                <div className='w-full max-w-lg max-md:mx-auto bg-[#00A63E]/0 backdrop-blur-sm border border-white/10 rounded-xl p-8'>
                    <form className='space-y-6'>
                        <div>
                            <label className='block text-white text-sm mb-2'>Full Name</label>
                            <input 
                                type="text" 
                                required
                                placeholder="Your Name" 
                                className='w-full bg-[#00A63E]/5 border border-white/20 rounded-lg px-4 py-3 text-white/40 placeholder:text-white/40 placeholder:text-sm focus:outline-none focus:border-green-600 transition'
                            />
                        </div>
            
                        <div>
                            <label className='block text-white text-sm mb-2'>Email Address</label>
                            <input 
                                type="email" 
                                required
                                placeholder="your.email@example.com" 
                                className='w-full bg-[#00A63E]/5 border border-white/20 rounded-lg px-4 py-3 text-white/40 placeholder:text-white/40 placeholder:text-sm focus:outline-none focus:border-green-600 transition'
                            />
                        </div>

                        <div>
                            <label className='block text-white text-sm mb-2'>Phone Number</label>
                            <input 
                                type="tel" 
                                placeholder="+91 XXXXXXXXXX" 
                                className='w-full bg-[#00A63E]/5 border border-white/20 rounded-lg px-4 py-3 text-white/40 placeholder:text-white/40 placeholder:text-sm focus:outline-none focus:border-green-600 transition'
                            />
                        </div>
            
                        <div>
                            <label className='block text-white text-sm mb-2'>Inquiry Type</label>
                            <select 
                                required
                                className='w-full bg-[#00A63E]/5 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-green-600 transition'
                            >
                                <option value="" className='bg-gray-800 text-white'>Select an option</option>
                                <option value="volunteer" className='bg-gray-800 text-white'>I want to Volunteer</option>
                                <option value="donate" className='bg-gray-800 text-white'>I want to Donate</option>
                                <option value="partner" className='bg-gray-800 text-white'>I want to Partner</option>
                                <option value="inquiry" className='bg-gray-800 text-white'>General Inquiry</option>
                                <option value="other" className='bg-gray-800 text-white'>Other</option>
                            </select>
                        </div>

                        <div>
                            <label className='block text-white text-sm mb-2'>Your Message</label>
                            <textarea 
                                placeholder="Tell us more about your inquiry, volunteer interest, or partnership proposal..." 
                                rows="4"
                                required
                                className='w-full bg-[#00A63E]/5 border border-white/20 rounded-lg px-4 py-3 text-white/40 placeholder:text-white/40 placeholder:text-sm focus:outline-none focus:border-green-600 transition resize-none'
                            ></textarea>
                        </div>
            
                        <div className='flex items-center justify-between'>
                            <p className='text-xs md:text-sm text-white/60 max-w-3xs'>
                                We'll get back to you soon to discuss how we can work together.
                            </p>
                            <button type="submit" className='bg-linear-to-r from-green-950 to-green-600 hover:from-green-600 hover:to-green-950 text-white text-sm px-8 md:px-16 py-3 rounded-full transition duration-300 cursor-pointer'>
                                Get in Touch
                            </button>
                        </div>
                    </form>
                </div>
            </section>

            <section className="w-full py-20 px-6 md:px-16 lg:px-24 xl:px-32">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">Visit Us</h2>
                    <p className="text-white/60 text-center mb-12">RN-41, Sector 62, Noida, Uttar Pradesh 201301</p>
                    
                    <div className="w-full rounded-xl overflow-hidden border border-white/10 shadow-lg">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.516!2d77.3835!3d28.5724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef3e0000001d%3A0x5c30b7f0dbd5cb7e!2sSector%2062%2C%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1713356400000"
                            width="100%" 
                            height="450" 
                            style={{ border: 0 }} 
                            allowFullScreen="" 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade"
                            className="w-full"
                        ></iframe>
                    </div>

                    <div className="mt-6 flex justify-center">
                        <a 
                            href="https://maps.app.goo.gl/98vu2SccmbsruMeX7" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition duration-300"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                            Open in Google Maps
                        </a>
                    </div>

                    <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                        <a 
                            href="https://maps.app.goo.gl/98vu2SccmbsruMeX7" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="bg-white/5 border border-white/10 rounded-lg p-6 text-center hover:bg-white/10 hover:border-green-500/50 transition-all duration-300 cursor-pointer">
                            <h3 className="text-white font-semibold mb-2">📍 Address</h3>
                            <p className="text-white/60 text-sm">RN-41, Sector 62, Noida, Uttar Pradesh 201301</p>
                        </a>
                        <a 
                            href="tel:+918368880648"
                            className="bg-white/5 border border-white/10 rounded-lg p-6 text-center hover:bg-white/10 hover:border-green-500/50 transition-all duration-300 cursor-pointer">
                            <h3 className="text-white font-semibold mb-2">📞 Phone</h3>
                            <p className="text-white/60 text-sm">+91 8368880648</p>
                        </a>
                        <a 
                            href="mailto:vwnjfoundation@gmail.com"
                            className="bg-white/5 border border-white/10 rounded-lg p-6 text-center hover:bg-white/10 hover:border-green-500/50 transition-all duration-300 cursor-pointer">
                            <h3 className="text-white font-semibold mb-2">✉️ Email</h3>
                            <p className="text-white/60 text-sm">vwnjfoundation@gmail.com</p>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}