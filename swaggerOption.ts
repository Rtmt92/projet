import path from "path";

export const swaggerOptions = {
    swaggerDefinition: {
        openapi : '3.0.0',
        info: {
            title: 'Country API',
            version: '1.0.0',
            description : 'A simple api to get information of your country'
        },
        servers: [
            {
                url: "http://localhost:3001/",
                description: "serveur local"
            }
        ]
    },
    apis: [path.resolve(__dirname, './controller/*.ts')],
}