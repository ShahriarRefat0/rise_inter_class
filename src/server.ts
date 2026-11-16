import { app } from "./app.js"
import { env } from "./config/env.config.js"

const boostrap = () => {
    const server = app.listen(env.port, () => {
        console.log(process.cwd())
        console.log(`Server is running on port ${env.port}...`)
    })

    const handelSignal = () => {


        server.close(() => {
            process.exit(1);
        })
    }


    //sinterm
    process.on('SIGTERM', handelSignal);
    //sigint
    process.on('SIGINT', handelSignal);

    const handelError = ((err: unknown) => {
        console.log(err);
        server.close(() => {
            process.exit(0);
        })
    })
    //unhandel rejection
    process.on('unhandledRejection', handelError);
    //uncaught exception
    process.on('uncaughtException', handelError);

}

boostrap()