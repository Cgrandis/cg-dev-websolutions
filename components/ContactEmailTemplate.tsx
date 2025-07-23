import * as React from 'react';

interface ContactEmailTemplateProps {
  name: string;
  email: string;
  phone: string;
  postcode: string;
  description: string;
}

const ContactEmailTemplate: React.FC<Readonly<ContactEmailTemplateProps>> = ({
  name,
  email,
  phone,
  postcode,
  description,
}) => (
  <div style={container}>
    <h1 style={heading}>New Contact Form Submission</h1>
    <div style={card}>
      <p style={paragraph}>You have received a new message from your website's contact form.</p>
      <hr style={hr} />
      <h2 style={subHeading}>Contact Details</h2>
      <p style={detailItem}><strong>Name:</strong> {name}</p>
      <p style={detailItem}><strong>Email:</strong> <a href={`mailto:${email}`} style={link}>{email}</a></p>
      <p style={detailItem}><strong>Phone:</strong> {phone || 'Not provided'}</p>
      <p style={detailItem}><strong>Postcode:</strong> {postcode || 'Not provided'}</p>
      <hr style={hr} />
      <h2 style={subHeading}>Message</h2>
      <p style={paragraph}>{description}</p>
    </div>
    <p style={footer}>This email was sent from your website contact form.</p>
  </div>
);

export default ContactEmailTemplate;

const container = {
  fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
  backgroundColor: '#f5f5f5',
  padding: '20px',
};
const card = {
  backgroundColor: '#ffffff',
  border: '1px solid #dddddd',
  borderRadius: '8px',
  padding: '20px',
  maxWidth: '600px',
  margin: '0 auto',
};
const heading = {
  fontSize: '24px',
  color: '#333333',
  textAlign: 'center' as const,
  marginBottom: '20px',
};
const subHeading = {
  fontSize: '18px',
  color: '#555555',
  borderBottom: '1px solid #eeeeee',
  paddingBottom: '5px',
  marginBottom: '10px',
};
const paragraph = {
  fontSize: '16px',
  lineHeight: '1.5',
  color: '#333333',
};
const detailItem = {
  fontSize: '16px',
  lineHeight: '1.5',
  color: '#333333',
  margin: '5px 0',
};
const link = {
  color: '#0726D9',
  textDecoration: 'none',
};
const hr = {
  borderColor: '#dddddd',
  margin: '20px 0',
};
const footer = {
  fontSize: '12px',
  color: '#999999',
  textAlign: 'center' as const,
  marginTop: '20px',
};
