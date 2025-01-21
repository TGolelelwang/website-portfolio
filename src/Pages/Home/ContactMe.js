import { useState } from 'react';
import Swal from 'sweetalert2'

function ContactMe() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    // Adding the access key to the form data
    formData.append("access_key", "a5380202-8683-48e2-808c-bd3a705ffa5e");

    // Sending the form data to the Web3Forms API
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    // Handling the response
    const data = await response.json();

    if (data.success) {
        Swal.fire({
            title: "Message Status",
            text: "Message sent successfully!",
            icon: "success"
          }); 
      event.target.reset();  // Reset the form after successful submission
    } else {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
          });
      setResult(data.message);
    }
  };

  return (
    <section id="ContactMe" className="contact-section">
      <div>
        <h2>Contact Me</h2>
        <p className="text-lg">
          If you have any inquiries, feel free to fill in the form and I will get back to you as soon as possible.
        </p>
      </div>
      <form onSubmit={onSubmit} className="contact-form-container">
        <div className="container">
          <label htmlFor="first-name" className="contact-label">
            <span className="text-md">First Name</span>
            <input
              type="text"
              className="contact-input text-md"
              name="first-name"
              id="first-name"
              required
            />
          </label>
          <label htmlFor="last-name" className="contact-label">
            <span className="text-md">Last Name</span>
            <input
              type="text"
              className="contact-input text-md"
              name="last-name"
              id="last-name"
              required
            />
          </label>
          <label htmlFor="email" className="contact-label">
            <span className="text-md">Email</span>
            <input
              type="email"
              className="contact-input text-md"
              name="email"
              id="email"
              required
            />
          </label>
        </div>
        <label htmlFor="subject" className="contact-label">
          <span className="text-md">Subject Message</span>
          <input
            type="text"
            className="contact-input text-md"
            name="subject"
            id="subject"
            required
          />
        </label>
        <label htmlFor="message" className="contact-label">
          <span className="text-md">Message</span>
          <textarea
            className="contact-input text-md"
            id="message"
            name="message"  // Add name here to include the message in the form data
            rows="8"
            placeholder="Type your message..."
          />
        </label>
        <button type="submit" className="btn btn-primary contact-form-btn">
          Submit
        </button>
      </form>
      {result && <div>{result}</div>}
    </section>
  );
}

export default ContactMe;
