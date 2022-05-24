const userID="kaYQfPk37GCNxynBg";
const servideID="service_por0auu";
const templateID="template_k6ai5ha";

function sendEmail(){
    const navn=document.getElementById("navn").value
    const email=document.getElementById("email").value
    const besked=document.getElementById("besked").value
    const emaildata={
        name: navn,
        email: email,
        message: besked,
    }
    emailjs.send(servideID, templateID, emaildata, userID);
}