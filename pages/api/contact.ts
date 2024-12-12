export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }
    const  text  = req.body;

    if (!text) {
        return res.status(400).json({ message: 'Text is required' });
    }

    const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
    const CHAT_ID ="-4646426816";

    try {
        const response = await fetch(
            `https://api.telegram.org/${TELEGRAM_BOT_TOKEN}/sendMessage`,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    chat_id: CHAT_ID,
                    text: text,
                } , null , 2 ),
            }
        );

        const data = await response.json();
        console.log(response , {data})
        if (!response.ok) {
            throw new Error(data.description || 'Failed to send message');
        }

        res.status(200).json({ message: 'Message sent successfully', data });
    } catch (error) {
        console.error('Error sending message:', error);
        res.status(500).json({ message: 'Failed to send message', error: error.message });
    }
}
