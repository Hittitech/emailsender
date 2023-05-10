const nodemailer=require("nodemailer")

const sendMail=async(req,res)=>{
    let testAccount=await nodemailer.createTestAccount()

    
    let transporter =await  nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        // secure: false, // true for 465, false for other ports
        auth: {
            user :"lacey.grady@ethereal.email",
            pass :	"aBNR89BUrfpyMzjwuH"
        },
      });

      let info = await transporter.sendMail({
        from: '"Adnan Sami 👻" <mdadnansami9381@gmail.com>', // sender address
        to: "mdadnansami1947@gmail.com", // list of receivers
        subject: "Hello  Brother✔", // Subject line
        text: "Hello world? how are u doing", // plain text body
        html: "<b>Hello world?</b>", // html body
      });
    
    // res.send("I am the one sending mail")
    console.log("Message sent: %s", info.messageId);
    res.json(info)
    res.end()
    
}

module.exports=sendMail