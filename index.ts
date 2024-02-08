import express, {Request,Response} from "express";
import { CountryController } from "./controller/countryController";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUI from 'swagger-ui-express';
import { swaggerOptions } from "./swaggerOption";

const app= express();
const countryController= new CountryController();

app.get("/test", (req: Request, res: Response)=>{
    res.send("voici l'api");
})

app.get("/name/:name", async (req: Request, res: Response)=>{
    await countryController.getCountryByName(req, res);
})

app.get("/alpha/:code", async (req: Request, res: Response)=>{
    await countryController.getCountryByCode(req, res);
})

app.get("/capital/:capital", async (req: Request, res: Response)=>{
    await countryController.getCountryByCapital(req, res);
})

const specs = swaggerJSDoc(swaggerOptions);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(specs));

const PORT: number= process.env.PORT ? parseInt(process.env.PORT): 3001
app.listen(PORT, () =>{
    console.log(`Le serveur est lancé sur le port: ${PORT}`);
})