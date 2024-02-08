import { Request, Response } from "express";
import axios, {AxiosResponse} from "axios";
 
export class CountryController { 

    /**
   * @swagger
   * /name/{name}:
   *   get:
   *     summary: Obtient les informations d'un pays grâce à son nom.
   *     description: Récupère les informations d'un pays.
   *     tags: [Country]
   *     parameters:
   *       - in: path
   *         name: name
   *         required: true
   *         description: Nom du pays
   *         schema:
   *           type: string
   *     responses:
   *       200:
   *         description: Succès. Retourne les données du pays.
   *       400:
   *         description: Requête incorrecte. Vérifiez les paramètres.
   */

  public async getCountryByName(req: Request, res: Response): Promise<void>{
    const name: string = req.params.name;
    try{
      const response : AxiosResponse = await axios.get(
        `https://restcountries.com/v3.1/name/${name}`
      );
      const data= response.data;
      res.json(data);
    }catch(error){
      res.status(500)
          .json({ error: "Erreur lors de la recuperation des données"});
    }
  }

  /**
   * @swagger
   * /alpha/{code}:
   *   get:
   *     summary: Obtient les informations d'un pays grâce à son code alpha-2.
   *     description: Récupère les informations d'un pays.
   *     tags: [Country]
   *     parameters:
   *       - in: path
   *         name: code
   *         required: true
   *         description: Code du pays
   *         schema:
   *           type: string
   *     responses:
   *       200:
   *         description: Succès. Retourne les données du pays.
   *       400:
   *         description: Requête incorrecte. Vérifiez les paramètres.
   */

  public async getCountryByCode(req: Request, res: Response): Promise<void>{
    const code: string = req.params.code;
    try{
      const response : AxiosResponse = await axios.get(
        `https://restcountries.com/v3.1/alpha/${code}`
      );
      const data= response.data;
      res.json(data);
    }catch(error){
      res.status(500)
          .json({ error: "Erreur lors de la recuperation des données"});
    }
 
  }

  /**
   * @swagger
   * /capital/{capital}:
   *   get:
   *     summary: Obtient les informations d'un pays grâce à sa capitale.
   *     description: Récupère les informations d'un pays.
   *     tags: [Country]
   *     parameters:
   *       - in: path
   *         name: capital
   *         required: true
   *         description: capital du pays
   *         schema:
   *           type: string
   *     responses:
   *       200:
   *         description: Succès. Retourne les données du pays.
   *       400:
   *         description: Requête incorrecte. Vérifiez les paramètres.
   */

  public async getCountryByCapital(req: Request, res: Response): Promise<void>{
    const capital: string = req.params.capital;
    try{
      const response : AxiosResponse = await axios.get(
        `https://restcountries.com/v3.1/capital/${capital}`
      );
      const data= response.data;
      res.json(data);
    }catch(error){
      res.status(500)
          .json({ error: "Erreur lors de la recuperation des données"});
    }
 
  }


 
}