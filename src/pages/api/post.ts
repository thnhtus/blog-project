import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import { API_METHODS } from "@/utils/constant";

const prisma = new PrismaClient();

const createNewPost = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const result = await prisma.post.create({
      data: { ...req.body },
    });

    res.status(200).send({ result: result });
  } catch (error) {
    res.status(502).send({ error: error });
  }
};

const getPosts = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const result = await prisma.post.findMany();

    res.status(200).send({ result: result });
  } catch (error) {
    res.status(502).send({ error: error });
  }
};

export default async function postHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case API_METHODS.POST:
      createNewPost(req, res);
      break;
    case API_METHODS.GET:
      getPosts(req, res);
      break;
    default:
      break;
  }
}
