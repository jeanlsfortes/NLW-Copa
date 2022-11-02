import Fastify from "fastify";

async function bootstrap() {
    const fastify = Fastify({
        logger: true,
    })

    fastify.get("/pools/count", () =>{
        return { count: "12/34" }
    })

    await fastify.listen({port: 3333})

}

bootstrap();