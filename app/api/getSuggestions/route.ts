import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export async function POST(req: any) {
  try {
    const body = await req.json();
    const key = body?.resultValue;
    //same job title
    if (body.JobTitle?.length > 5) {
      const dataWithSameJobTitle = await prisma.suggestions.findMany({
        where: {
          JobTitle: body.JobTitle,
        },
      });
      if (dataWithSameJobTitle?.length > 0) {
        const skillsList = dataWithSameJobTitle
          .map((data: any) => data[key])[0]
          .filter((item: any) => item !== "");
        return Response.json(skillsList);
      }
      //similar job title
      else {
        const dataWithSimilarJobTitle = await prisma.suggestions.findMany({
          where: {
            SimilarTitles: {
              has: body.JobTitle,
            },
          },
        });
        if (dataWithSimilarJobTitle?.length > 0) {
          const skillsList = dataWithSimilarJobTitle
            .map((data: any) => data[key])[0]
            .filter((item: any) => item !== "");
          return Response.json(skillsList);
        } else {
          //not found
          return Response.json({
            message: "No data found",
          });
        }
      }
    }
  } catch (error: any) {
    return Response.json({
      message: "No data found",
    });
  }
}
