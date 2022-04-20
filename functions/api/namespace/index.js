export async function onRequest(context) {
    const myValue = await context.env.Testing.get('LLAVE')
    return new Response(myValue)
}