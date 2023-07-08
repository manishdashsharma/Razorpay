import app from './src/app.js'
import config from "./src/config/index.js";

( async () => {
    try {
        app.on('error' , (error) => {
            console.log("ERROR: ", error);
            throw error
        })

        const onlistening = () => {
            console.log(`Listening on port ${config.PORT}`);
        }

        app.listen(config.PORT,onlistening)

    } catch (error) {
        console.error("ERROR: ",error)
        throw error
    }
})()