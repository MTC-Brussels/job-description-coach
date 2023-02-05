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
I want you to assess the job title, the responsibilities, Accuracy of human skills, Inclusiveness (degree), the accuracy of technical skills, Inclusiveness (language), transparency, and attractiveness of a job description. Could you help me to rate the following 8 points?

1. Job title: Compare the job title with a list of 3 job titles that you would give for the tasks and responsibilities mentioned. (100% means it is the best job title possible, 0% the worst).
2. Responsibilities: Compare the list of responsibilities for the given job title with the list of responsibilities for 50 job descriptions. (100% means the list of responsibilities is accurate and covers the scope of the job) 
3. Accuracy of human skills: Create a list of the 5 most important human skills for a job with the mentioned tasks and responsibilities and compare them with the human skills mentioned in the job description. Rate it out of 100. 100% means that all the recommended human skills are mentioned.
4. Inclusiveness (degree): How important is it to meet the degree requirements for the mentioned tasks and responsibilities? 100% means that it is impossible for someone who did not attend an educational curriculum to perform the tasks regardless of their degree level. If someone with an alternative education can perform the tasks, the score should be below 70%. The score is only based on the tasks mentioned, if no explicit task requires a degree, do not set a score higher than 70%. We only focus on the tasks, not the degree requirements.
5. Accuracy of technical skills: Compare the technical skills mentioned with the tasks that would be required for the 1st job title mentioned in point number 1. If the skills and tasks are generic, transversal, or not related to this specific company, the score must be below 50%.
Your job is to calculate the average of "Relevance" please.
6. Inclusiveness (language): on a scale of 0-100, how neutral is the language used? If it is perfectly neutral, it must be close to 100%.
7. Transparency: rate the transparency according to the following aspects: Salary package, Technical skills, Team size, Career evolution, Tasks and responsibilities, and Company’s mission. If everything is clear, it must be close to 100%.
8. Attractiveness: rate on a scale of 0-100 the attractiveness of the job description focusing on 3 aspects, Employee Benefits, Company Culture, and Social impact.

Can I give you one job description to rate with the above criteria?
Finish with 2 or 3 recommendations with bullet points for each of the following categories: the job title, Accuracy of human skills, Inclusiveness (degree), accuracy of technical skills, Inclusiveness (language), transparency, and attractiveness of the job description.
For each category, give

1. the rating,
2. the remarks,
3. the recommendations.
Then continue with the next category.
Present it in a professional way.
Please give an overall score that is the average of all ratings.
Nothing is perfect, do not give any 100%.

Format the result as HTML. Use h2 for the category name and p for the remarks and recommendations.
      
      Job description:
        ${value}
      `,
    max_tokens: 2000,
  });

  res.status(200).json({ feedback: response.data.choices[0].text ?? "" });
}
