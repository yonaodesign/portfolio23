export default function async (req:any, res:any) {
    const PARSEDDATA = req.body;
    
    let nodemailer = require('nodemailer')
    const transporter = nodemailer.createTransport({
      port: process.env.port,
      host: process.env.host,
      auth: {
        user: process.env.user,
        pass: process.env.pass
      },
      // secure: false,
      tls: {rejectUnauthorized: false},
    //   tls: {
    //     ciphers:'SSLv3'
    // }
    })
  
    const mailData = {
      from: PARSEDDATA.Email,
      to: 'jonas.volny+frommysite@gmail.com',
      subject: `A Message From ${PARSEDDATA.FullName}`,
      text: PARSEDDATA.Message + " | Sent from: " + PARSEDDATA.Email,
      html: `<div>${PARSEDDATA.Message}</div><p>Sent from:
      ${PARSEDDATA.Email}</p>`
    }
  
    transporter.sendMail(mailData, function (err:any, info:any) {
      if(err) {
        console.log(err)
        res.sendStatus(500)
      } else {
        console.log(info)
        res.json({msg: info.response})
        res.sendStatus(200)
      }
        return res.status(200).end
    })
  
  
  }