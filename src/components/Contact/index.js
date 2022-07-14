import { useEffect, useRef, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import emailjs from '@emailjs/browser'
import './index.scss'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

const Contact = () => {

  const [letterClass, setLetterClass] = useState('text-animate')
  const refForm = useRef()

   useEffect(() => {
     let timeoutld = setTimeout(() => {
       setLetterClass('text-animate-hover')
     }, 4000)

     return () => {
       clearTimeout(timeoutld)
     }
   }, [])

   const sendEmail = (e) => {
      e.preventDefault()

      emailjs
        .sendForm(
          'service_g2g0zoi',
          'template_f51qm6v',
          refForm.current,
          '3qMkTFeM3i6f-xHJsrIyq'
        )
        .then(
          () => {
            alert('Message seccessfully sent!')
            window.location.reload(false)
          },
          () => {
            alert('Failed to send the message, please try again!')
          }
        )
   }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I am interested in freelance oportunities - especially ambitions or
            large projects. However, if you have other request or question,
            dont't hesitate to contact me using below form either.
          </p>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Name" required />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Emerson Quijada Rafael
          <br />
          Huancavelica,
          <br />
          Calle Lima S/N 
          <br />
          <span>emersontec147@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[-12.729583, -74.666593]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[-12.729583, -74.666593]}>
              <Popup>Emerson lives here, come over for a cup of coffee :)</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}



export default Contact