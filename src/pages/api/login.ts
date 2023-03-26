import { API_METHODS } from "@/utils/constant";
import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next/types";
import { UserLogin } from "@/models/user";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export default async function loginHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === API_METHODS.POST) {
    try {
      const loginArgs = req.body as UserLogin;

      const result = await prisma.user.findFirst({
        where: {
          email: loginArgs.email,
        },
      });

      if (!result) {
        return res.status(404).send({ error: "Not found!" });
      }

      const comparePassword = bcrypt.compareSync(
        loginArgs.password,
        result.password ?? ""
      );

      if (!comparePassword) {
        return res.status(404).send({ error: "Password do not match!" });
      }

      return res.status(200).send({ result: result });
    } catch (error) {
      return res.status(502).send({ error: error });
    }
  }
}
