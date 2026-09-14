import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'smtp.zoho.com',
  port: 465,
  secure: true,
  auth: {
    user: 'sales@ebikessale.online',
    pass: 'Mafiamusic10'
  },
  tls: { rejectUnauthorized: true }
});

try {
  console.log('Verifying connection...');
  await transporter.verify();
  console.log('SUCCESS: Connected to Zoho!');
} catch (error) {
  console.error('FAILED to connect:');
  console.error(error.message);
}
