import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'smtp.zoho.com',
  port: 465,
  secure: true,
  auth: {
    user: 'sales@ebikessale.online',
    pass: 'Innareallife'
  },
  tls: { rejectUnauthorized: true },
  connectionTimeout: 5000,
  greetingTimeout: 5000,
  socketTimeout: 5000
});

try {
  console.log('Testing 465 with Innareallife...');
  await transporter.verify();
  console.log('SUCCESS! ZOHO ACCEPTED THE PASSWORD!');
} catch (e) { console.log('465 failed:', e.message); }

