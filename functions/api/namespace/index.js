export async function onRequest(context) {
    const res = await context.env
    const nose = JSON.stringify(res)
    return new Response(nose)
}