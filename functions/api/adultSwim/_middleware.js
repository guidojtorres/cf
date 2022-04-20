const errorHandler = async ({next}) => {
    try {
        return await next();
    } catch (e) {
        return new Response(`${e.message} \n ${e.stack}`, {status:500})
    }
}

const hola = async ({next}) => {
    const res = await next()
    res.headers.set('X-Hello', 'Hola desde el middleware!');
    return res
};

// Para todos los metodos
export const onRequest = [errorHandler];

//Solo para GET
export const onRequestGet = [errorHandler, hola]