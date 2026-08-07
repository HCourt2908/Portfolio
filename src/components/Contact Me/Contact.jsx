import "./Contact.css";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

function Contact({ onBack }) {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const [status, setStatus] = useState("");
    const [sending, setSending] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();

        setSending(true);
        setStatus("");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "Failed to send message.");
            }

            setStatus("Message sent successfully!");
            
            setFormData({
                name: "",
                email: "",
                message: ""
            });

        } catch (error) {
            setStatus(error.message);
        } finally {
            setSending(false);
        }
    };


    return (
        <section className="contact">

            <h1>Get In Touch</h1>

            <div className="contact-content">


                <div className="contact-links">

                    <a href="mailto:wr23643@bristol.ac.uk" className="contact-button">
                        Email
                    </a>

                    <a 
                        href="https://www.linkedin.com/in/henry-c2908/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-button"
                    >
                        LinkedIn
                    </a>

                    <a
                        href="https://github.com/HCourt2908/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-button"
                    >
                        GitHub
                    </a>

                </div>

                <form 
                    className="contact-form"
                    onSubmit={handleSubmit}
                >

                    <label htmlFor="name">
                        Name
                    </label>

                    <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                name: e.target.value
                            })
                        }
                        required
                    />

                    <label htmlFor="email">
                    Email
                    </label>

                    <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                email: e.target.value
                            })
                        }
                        required
                    />

                    <label htmlFor="message">
                        Message
                    </label>

                    <textarea
                        id="message"
                        placeholder="Message..."
                        rows="6"
                        name="message"
                        value={formData.message}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                message: e.target.value
                            })
                        }
                        required
                    />

                    <button type="submit" disabled={sending}>
                        {sending ? "Sending..." : "Send"}
                    </button>

                    {status && (
                        <p className="contact-status">
                            {status}
                        </p>
                    )}

                </form>
            </div>



            <motion.button
                className="scroll-button"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, scale: 1, y: [-10, 0] }}
                transition={{ delay: 1.8 }}
                onClick={onBack}
            >
                ↑
            </motion.button>

            <motion.h3 className="scroll-text" 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, scale: 1, y: [-10, 0] }}
                transition={{ delay: 1.8 }}
            >
                About Me
            </motion.h3>

        </section>
    );
}

export default Contact;