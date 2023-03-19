import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import { API_METHODS } from "@/utils/constant";

const prisma = new PrismaClient();

const addUser = async (req: NextApiRequest, res: NextApiResponse) => {
  //   const data = ;
  await prisma.user.create({
    data: { ...req.body },
  });

  res.status(200).send(req.body);
};

const getUsers = async (req: NextApiRequest, res: NextApiResponse) => {
  const users = await prisma.user.findMany();

  res.status(200).json(users);
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case API_METHODS.POST:
      addUser(req, res);
    case API_METHODS.GET:
      getUsers(req, res);
    default:
      break;
  }
}
