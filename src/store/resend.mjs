import { Resend } from 'resend';
const resend = new Resend('re_F8qNcxRT_EeyGk9Bi3DrMRaD8dXj5dYoW');

(async function () {
  try {
    const data = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['rubejuca@gmail.com'],
      subject: 'Hello World',
      html: '<a href="http://localhost:8081/#/seguimiento/123">link para seguimiento<a>',
    });

    console.log(data);
  } catch (error) {
    console.error(error);
  }
})();