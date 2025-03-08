export async function POST(request) {
    const webhook = process.env.WEBHOOK_URL;

    if (!webhook) {
        return new Response("Problem from my side: the contact URL is invalid.", {status: 500});
    }

    const body = await request.json();
    const {email, username, object, message} = body;
    const data = {
        email,
        username,
        object,
        message
    };

    try {
        const response = await fetch(webhook, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            return new Response("Message sent", {status: 200});
        } else {
            return new Response("The contact url did not like the data.", {status: 500});
        }
    } catch (error) {
        return new Response("An error occurred while sending the message.", {status: 500});
    }
}