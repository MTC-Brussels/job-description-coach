import type { NextApiRequest, NextApiResponse } from "next";
import { openai } from "../../util/openai";

type Data =
  | {
      feedback: string;
    }
  | { error: string };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { value } = req.body;

  try {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `I want you to assess the job title, the list of responsibilities, the accuracy of human skills, inclusiveness (degree), the accuracy of technical skills, inclusiveness (language), transparency, and attractiveness of a job description. Could you help me to rate (out of 100) the following 8 points?

1. Job title: Compare the job title with a list of 3 job titles that you would give for the tasks and responsibilities mentioned. (100% means it is the best job title possible, 0% the worst).
2. Responsibilities: The ideal amount of responsibilities is between 6 and 9 and they are all relevant to the job title. If there are fewer than 6 or more than 9 tasks and responsibilities, give a score under 70% and say that it needs more or fewer tasks and responsibilities. If any of the most demanded responsibilities are not found in job descriptions, mention and detail them. 
3. Accuracy of human skills: Create a list of the 5 most important human skills for a job with the mentioned tasks and responsibilities and compare them with the human skills mentioned in the job description. Rate it out of 100. 100% means that all the recommended human skills are mentioned. Be specific in recommendations if any human skill is missing.
4. Inclusiveness (degree): If a degree is mentioned but someone with an alternative education could perform the tasks, the score should be below 70%. The score is only based on the tasks mentioned, If a degree is mentioned but no explicit task requires a degree, do not set a score higher than 70%. We only focus on the tasks, not the degree requirements. If no specific degree is required, the score must be greater than 85% as it is inclusive.
5. Accuracy of technical skills: Compare the technical skills mentioned with the tasks that would be required for the 1st job title mentioned in point number 1. If the skills and tasks are generic, transversal, or not related to this specific company, the score must be below 50%.
Your job is to calculate the average of "Relevance" please.
6. Inclusiveness (language): on a scale of 0-100, how neutral is the language used? If it is perfectly neutral, it must be close to 100%. If the score is greater than 80%, do not give any recommendations.
7. Transparency: rate the transparency according to the following aspects: Salary package, Technical skills, Team size, Career evolution, and Company’s mission. If everything is clear, it must be close to 100%. If several aspects listed below are not written in job description, the score cannot be above 70%.
8. Attractiveness: rate on a scale of 0-100 the attractiveness of the job description focusing on 3 aspects: Employee Benefits, Company Culture, and Social impact.

Can I give you one job description to rate with the above criteria?
For each of the following 8 categories: the job title, Accuracy of human skills, Inclusiveness (degree), accuracy of technical skills, Inclusiveness (language), transparency, and attractiveness of the job description, give 3 pieces of information in this order (In bullet point format).

1. Give a rating out of 100%.

1. Give the remarks where you explain what is correct, and what could be removed, please be specific and provide examples.
2. Give 2 or 3 recommendations to improve the job description and explain the reasons.

Once the rating, the remarks, and the recommendations are shared, go to the next category.

Nothing is perfect, do not give any 100%.
Present it in a professional way, do not mention the rules listed above in remarks or recommendations.
Please give an overall score that is the average of all ratings.

Also, write a 300-word summary with new information and give more specific examples and details.

Job description:
${value}

Return the result as HTML. Use h2 for the category and p for everything else.
      
`,
      max_tokens: 2000,
    });

    return res
      .status(200)
      .json({ feedback: response.data.choices[0].text ?? "" });
  } catch (e) {
    // @ts-ignore
    return res.status(500).json({ error: e.response.data.error.message });
  }
}
