import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {

    if (req.method !== "POST") {
        return res.status(405).json({
            error: "Method not allowed"
        });
    }

    try {
        const { name, email, message } = req.body;

        if (!name || !email || !message) {
            return res.status(400).json({
                error: "Please fill in all fields."
            });
        }

        const { data, error } = await resend.emails.send({
            from: "Portfolio <onboarding@resend.dev>",
            to: ["wr23643@bristol.ac.uk"],
            subject: `Portfolio message from ${name}`,
            replyTo: email,
            text: `
Name: ${name}
Email: ${email}

Message:
${message}
            `
        });

        if (error) {
            console.error(error);

            return res.status(500).json({
                error: "Failed to send message."
            });
        }

        return res.status(200).json({
            success: true,
            data
        });

    } catch (error) {
        console.error(error);

        return res.status(500).json({
            error: "Something went wrong."
        });
    }
}