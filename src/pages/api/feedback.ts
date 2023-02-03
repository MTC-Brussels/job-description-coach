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
    prompt: `
     Given is job description. Want to know how ethical, inclusive and transparent company is. Provide the following information and be very strict:
      - Discriminatory? Rate on a scale of 1-5 and list reasons.
      - Compensation transparent? Rate on a scale of 1-5 and list reasons.
      
      Return the result as HTML with h2 and p.
      
      Job description:
        ${value}
      `,
    max_tokens: 2000,
  });

  res.status(200).json({ feedback: response.data.choices[0].text ?? "" });
}
