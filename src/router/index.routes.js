import { Router } from "express";
import jsonfile from "jsonfile";
import path from "path";

const router = Router();
const file = path.join(process.cwd(), "src/data/countries.json");

let datas = jsonfile.readFileSync(file);

router.get("/", (req, res) => {
	res.render("home", { datas });
});

router.get("/country/:id", (req, res) => {
    const datas = jsonfile.readFileSync(file);
    const id = parseInt(req.params.id);

    const country = datas.find(country => country.id === id);

    if(!country) return res.status(404).send("Country not found");

    res.render("country", { data: country });
});

export default router;
