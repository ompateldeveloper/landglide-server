import prisma from "../utils/prisma.js";

const pinsController = {
    async getPins(req, res) {
        const user = req.user;
        const body = req.body;
        await prisma.pins.findMany()
        .then((data)=>{
            res.apiSuccess({data})
        })
    },
    async createPin(req, res) {},
    async deletePin(req, res) {},
};
export { pinsController };
