import { useState } from 'react';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { getContactUsData } from './firebase';
import './App.scss';

function App() {

  const defaultInfo = {
    name: '',
    email: '',
    subject: '',
    message:''
  }
  const [contactUsInfo, setContactUsInfo] = useState(defaultInfo)

  const {name, email, subject, message} = contactUsInfo

  // console.log(contactUsInfo)


  const handleInputChange = (e) => {
    const {name, value} = e.target
    setContactUsInfo({...contactUsInfo, [name]: value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if(!name || !email || !subject || !message){
      toast.error('kindly provide a value in each input field')
    } else {
      getContactUsData(name,email,subject,message)
      setContactUsInfo(defaultInfo)
      toast.success('form submitted successfully')
    }
    
  }
  return (
    <>
      <section className='contact-section'>
        <div className='container'>
          <ToastContainer position='top-center'/>
          <div className="row justify-content-center">
            <div className="col-md-10">
              <div className="wrapper">
                <div className="row no-gutters">
                  <div className="col-md-6">
                    <div className="contact-wrap w-100 p-lg-5 p-4">
                      <h3 className= "mb-4">Send us a message</h3>
                      <form id='contactForm' className='contactForm' onSubmit={handleSubmit}>
                        <div className="row">
                          <div className="col-md-12">
                            <div className="form-group">
                              <input 
                              className='form-control'
                              type="text" 
                              value={name}
                              name="name" 
                              placeholder='Name'
                              onChange={handleInputChange} 
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <input 
                              className='form-control'
                              type="email" 
                              value={email}
                              name="email" 
                              placeholder='Email'
                              onChange={handleInputChange} 
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <input 
                              className='form-control'
                              type="text" 
                              value={subject}
                              name="subject" 
                              placeholder='Subject'
                              onChange={handleInputChange} 
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <textarea 
                              className='form-control'
                              cols="30"
                              rows="6"
                              type="text" 
                              value={message}
                              name="message" 
                              placeholder='Message'
                              onChange={handleInputChange} 
                              ></textarea>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <input type="submit" value='Send Message' className='btn btn-primary'/>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>

                  <div className="col-md-6 d-flex align-items-stretch">
                    <div className="info-wrap w-100 p-lg-5 p-4 img">
                      <h3>Contact Us</h3>
                      <p className="mb-4">We're open for suggestions and a chat</p>
                      <div className="dbox w-100 d-flex align-items-center">
                        <div className="icon d-flex align-items-center justify-content-center">
                          <span><i className="fa fa-map-marker"></i></span>
                        </div>
                        <div className="text pl-3">
                          <p>
                            <span>Address:</span> Admiralty Road, Lekki, Lagos.
                          </p>
                        </div>
                      </div>

                      <div className="dbox w-100 d-flex align-items-center">
                        <div className="icon d-flex align-items-center justify-content-center">
                          <span><i className="fa fa-phone"></i></span>
                        </div>
                        <div className="text pl-3">
                          <p>
                            <span>Phone:</span> 
                            <a href="tel://123456">+2349090194146</a>
                          </p>
                        </div>
                      </div>

                      <div className="dbox w-100 d-flex align-items-center">
                        <div className="icon d-flex align-items-center justify-content-center">
                          <span><i className="fa fa-paper-plane"></i></span>
                        </div>
                        <div className="text pl-3">
                          <p>
                            <span>Email:</span>
                            <a href="mailto:info@mail.com">ourmail@gmail.com</a>
                          </p>
                        </div>
                      </div>
                      <div className="dbox w-100 d-flex align-items-center">
                        <div className="icon d-flex align-items-center justify-content-center">
                          <span><i className="fa fa-globe"></i></span>
                        </div>
                        <div className="text pl-3">
                          <p>
                            <span>Website:</span>
                            <a href="webto:info.com">ourweb.com</a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
