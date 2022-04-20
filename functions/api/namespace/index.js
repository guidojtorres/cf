export async function onRequest(context) {
    const res = await context.env.Testing.get('OTRA_LLAVE')
    return new Response(res)
}