import { API_METHODS } from "@/utils/constant";
import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next/types";
import bcrypt from "bcrypt";
import { UserRegister } from "@/models/user";

const prisma = new PrismaClient();

export default async function registerHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === API_METHODS.POST) {
    try {
      const salt = bcrypt.genSaltSync();
      const hashPassword = bcrypt.hashSync(
        (req.body as Omit<UserRegister, "confirmPassword">).password,
        salt
      );

      const result = await prisma.user.create({
        data: {
          ...req.body,
          password: hashPassword,
        },
      });

      res.status(200).send({ id: result.id });
    } catch (error) {
      res.status(502).send({ error: error });
    }
  }
}
