export async function onRequestGet(context) {
    const {
        request,
        env,
        params,
        waitUntil,
        next,
        data,
    } = context

    return new Response('Hola mundo!')
}