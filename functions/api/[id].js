export  async function onRequestGet(context) {
    const {
        request, // same as existing Worker API
        env, // same as existing Worker API
        params, // if filename includes [id] or [[path]]
        waitUntil, // same as ctx.waitUntil in existing Worker API
        next, // used for middleware or to fetch assets
    } = context;


    const res = await fetch(`https://rickandmortyapi.com/api/character/${params.id}`)
    const data = await res.json()
    const info = JSON.stringify(data)
    return new Response(info, null, 2);

}