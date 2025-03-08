export async function POST(request) {
    const webhook = process.env.WEBHOOK_URL;

    if (!webhook) {
        return new Response("Webhook URL not defined", {status: 500});
    }

    const body = await request.json();
    const {email, username, object, message} = body;
    const data = {
        email,
        username,
        object,
        message
    };

    fetch(webhook, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }).then(r => {
        if (r.ok) {
            return new Response("Message sent", {status: 200});
        } else {
            return new Response("An error occurred", {status: 500});
        }
    });
}