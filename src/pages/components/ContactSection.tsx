import React from 'react'
import styled from 'styled-components'
import BREAKPOINTS from '../api/breakpoints'
import ContactForm from './contactform'


const ContactSection = (props) => {
  return (
      <section id={props.id} style={{ display: 'flex', flexDirection: 'row', padding: '100px', backgroundColor: '#e2e2e2', gap: 50 }}>
          <ContactForm />
        </section>
  )
}

export default ContactSection