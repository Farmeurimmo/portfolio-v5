export async function POST(request) {
    const webhook = process.env.WEBHOOK_URL;

    if (!webhook) {
        return new Response("Problem from my side: the contact URL is invalid.", {status: 500});
    }

    const body = await request.json();
    const {email, username, object, message} = body;

    try {
        const response = await fetch(webhook, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                'content': `**Username:** ${username}\n**Email:** ${email}\n**Object:** ${object}\n**Message:** ${message}`,
                'username': 'Contact Form (v5)',
                'avatar_url': 'https://cdn.farmeurimmo.fr/img/logo.jpg'
            })
        });

        if (response.ok) {
            return new Response("Message sent", {status: 200});
        } else {
            return new Response("The contact url did not like the data. Code " + response.status, {status: 500});
        }
    } catch (error) {
        return new Response("An error occurred while sending the message.", {status: 500});
    }
}

export async function OPTIONS(request) {
    const origin = request.headers.get("Origin");
    const allowedOrigin = origin && (origin.endsWith(".farmeurimmo.fr") || origin === "https://farmeurimmo.fr") ? origin : "null";

    return new Response(null, {
        headers: {
            "Access-Control-Allow-Origin": allowedOrigin,
            "Access-Control-Allow-Methods": "POST, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type"
        },
        status: 200
    });
}