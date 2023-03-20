import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import { API_METHODS } from "@/utils/constant";

const prisma = new PrismaClient();

const createNewPost = async (req: NextApiRequest, res: NextApiResponse) => {
  await prisma.post.create({
    data: { ...req.body },
  });

  res.status(200).send("Post created!");
};

export default async function postHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case API_METHODS.POST:
      createNewPost(req, res);
      break;

    default:
      break;
  }
}
