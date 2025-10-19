import React from "react"

const ContactUs = ()=>{
    return(
         <section id="contact"  className="p-8 bg-black border border-gray-800 rounded-xl shadow-2xl transition duration-500 ease-in-out h-screen w-full">
          <div className="max-w-6xl mx-auto px-6 mt-36 bg-white rounded-3xl sm:h-96">
              <h2 className="text-xl md:text-4xl font-bold text-charcoal-black mb-12 text-center">
                  Connect with SolidBuild Co.
              </h2>
              
              <div className="grid md:grid-cols-2 gap-12">
                  {/* Contact Info */}
                  <div>
                      <h3 className="text-3xl font-semibold mb-6 border-b pb-2 border-gold">Contact Information</h3>
                      <div className="space-y-4 text-lg">
                          <p><strong>Address:</strong> 123 Sterling Ave, Suite 500, Major City, State 10001, USA</p>
                          <p><strong>Phone:</strong> <a href="tel:+15555552845" className="text-blue-700 hover:text-gold transition duration-300">+1 (555) 555-2845 (BUILD)</a></p>
                          <p><strong>Email:</strong> <a href="mailto:contact@solidbuildco.com" className="text-blue-700 hover:text-gold transition duration-300">contact@solidbuildco.com</a></p>
                      </div>
                  </div>
              </div>
          </div>
      </section>
    )
}

export default ContactUs;