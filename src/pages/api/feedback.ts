import type { NextApiRequest, NextApiResponse } from "next";
import { openai } from "../../util/openai";

type Data = {
  feedback: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { value } = req.body;

  const response = await openai.createCompletion({
    model: "text-davinci-003",
    top_p: 1.0,
    frequency_penalty: 0.5,
    presence_penalty: 0.0,
    temperature: 0,
    prompt: `
     Given is a job description. Provide very strict feedback on how inclusive and fair the job description is. Give general feedback on the job description, and then provide feedback on the following aspects of the job description:
     - Inclusivity
     - Transparency
      
      Job description:
        ${value}
      `,
    max_tokens: 2000,
  });

  res.status(200).json({ feedback: response.data.choices[0].text ?? "" });
}
