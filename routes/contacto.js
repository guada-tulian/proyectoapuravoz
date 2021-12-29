var express = require('express');
var nodemailer = require('nodemailer');
const res = require('express/lib/response');
const async = require('hbs/lib/async');

var router = express.Router();

router.get('./', function (req, res, next) {
        res.render('contacto', {
            isContacto: true
        })
    });
router.post('./', async function (req,res,next){
console.log(req.body);
var nombre = req.body.nombre;
var apellido = req.body.apellido;
var correo = req.body.correo;
var comentario = req.body.comentario;

var obj={
    to: 'flavia@gmail.com',
    subject:'Contacto desde la web',
html:nombre + 'se contacto desde la web y quiere saber mas info a este correo' + email + '.<br> su comentario es:' + mensaje +' .'
}
 
var transport = nodemailer.createTransport({
    host: process.env.SMT_HOST,
    port: process.env.SMT_PORT,
    auth: {
      user: process.env.SMT_USER,
      pass: process.env.SMT_PASS
    }
  });

var info = await transport.sendMail(obj); 

res.render('contacto',{
    texto:'Mensaje enviado correctamente'
})

});


module.exports = router;