import { Inter } from "@next/font/google";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const inter = Inter({ subsets: ["latin"] });

const variants = {
  rest: {
    rotate: 0,
  },
  hover: {
    rotate: 180,
  },
};

export default function Index() {
  const [value, setValue] = useState("");
  const [feedback, setFeedback] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <>
      <main
        className={
          "min-w-screen flex min-h-screen flex-col items-center justify-center bg-white px-6 py-16"
        }
      >
        <form className={"w-full max-w-xl"}>
          {feedback ? (
            <>
              <div className={"prose"}>
                <h1 className={"text-4xl font-bold"}>Feedback</h1>
                <div dangerouslySetInnerHTML={{ __html: feedback }} />
              </div>
            </>
          ) : (
            <>
              <div className={"space-y-1"}>
                <label className={"font-medium text-neutral-600"}>
                  Job description
                </label>
                <textarea
                  placeholder={"Paste your job description here..."}
                  className={
                    "w-full w-full max-w-xl rounded-xl border border-neutral-200 p-4 transition ease-in-out focus:outline-none focus:ring focus:ring-indigo-600 focus:ring-offset-1"
                  }
                  rows={15}
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                />
              </div>
            </>
          )}
        </form>
        <div className={"mt-6 flex w-full max-w-xl gap-3"}>
          {feedback ? (
            <>
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                layout
                onClick={() => {
                  setFeedback("");
                  setValue("");
                }}
                whileHover="hover"
                className={
                  "flex flex-1 items-center justify-center rounded-lg bg-indigo-600 py-3 px-12 font-medium text-white transition ease-in-out hover:bg-indigo-700"
                }
              >
                <motion.svg
                  variants={variants}
                  xmlns="http://www.w3.org/2000/svg"
                  className={"mr-2 h-5 w-5"}
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M19.933 13.041a8 8 0 1 1 -9.925 -8.788c3.899 -1 7.935 1.007 9.425 4.747"></path>
                  <path d="M20 4v5h-5"></path>
                </motion.svg>
                Reset
              </motion.button>
            </>
          ) : (
            <>
              <AnimatePresence>
                <motion.button
                  key={"sample-button"}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  layout
                  onClick={() => {
                    setValue(
                      "Do you want to kickstart your career in Data & AI? Then you’ll definitely be interested about our Rootsacademy for young graduates!\n" +
                        "\n" +
                        "Please note that the next RootsAcademy will start on Monday, the 6th of March 2023. Unfortunately, for people needing a work permit, because of the current delays it is no longer possible for this position to finalize the process in time.\n" +
                        "\n" +
                        "\n" +
                        "🤖 The Job\n" +
                        "\n" +
                        "Have a passion for data? A career in AI sounds like your dream? Then we have the job for you! This position is open for young graduates, but also for experienced developers who wish to take the leap to a career in AI! What’s crucial to us is your passion for data as well as personal and professional development. We'll take care of the rest! During a 2-month training period (Start date: March 2023) we will form you into a data engineer with a strong foundation in the field. You will excel in building digital data-driven solutions and infrastructure and become an architectural genius that effortlessly designs, develops and deploys infrastructure and data pipelines.\n" +
                        "\n" +
                        "\n" +
                        "We are a scale-up from Leuven and Ghent that researches, designs and codes robust AI-solutions & platforms for various sectors. Our dedicated in-house team of data-specialists uses a pragmatic best-tool-for-the-job approach to optimise our clients' processes and decision making. With a strong focus on DataOps and MLOps we firmly believe in robust and production-ready solutions being an essential part to our work. The result? Our team provides clients a reliable foundation to make data-driven decisions.\n" +
                        "\n" +
                        "\n" +
                        "More information about our Rootsacademy? 👉 https://dataroots.io/careers/rootsacademy\n" +
                        "\n" +
                        "\n" +
                        "🎉 What you can expect at dataroots?\n" +
                        "\n" +
                        "Ready to roll into your next adventure? Let’s meet! At dataroots, we have prepared a 2-month training program that gives you a strong foundation to start your career as a Data Engineer (Start date: March 2023). During these months you will be introduced to the world of AI, cloud, data, infraops and robust software design. After this period, you will continue to develop towards becoming an expert data engineer.\n" +
                        "\n" +
                        "Our offices are the ideal workplace for people with a knack for innovation. Our languages? Python, Scala and HCL. What we speak when we're not coding? English, because, with colleagues from Mexico or France, you'll enter an inspiring and internationally focused team.\n" +
                        "\n" +
                        "\n" +
                        "Job requirements\n" +
                        "\n" +
                        "💪 The Skills\n" +
                        "\n" +
                        "You are strongly motivated to become an excellent Data Engineer.\n" +
                        "You have a background in IT development and are at least fluent in one programming language, preferably Python.\n" +
                        "You have a strong passion for data-driven technologies and interesting design challenges.\n" +
                        "You have a knack for picking up on new technologies and frameworks.\n" +
                        "You ideally have knowledge of English and Dutch, knowledge of French is a plus\n" +
                        "😄 Nice to haves\n" +
                        "\n" +
                        "You know that Kubernetes, Terraform and CI/CD aren't Star Wars characters.\n" +
                        "You have heard of tools like Apache Spark, Beam and/or Kafka.\n" +
                        "You have a first experience with cloud platforms like AWS, GCP or Azure.\n" +
                        "Don't worry, we don't expect you to tick every box from the beginning. Most of all: we are looking for colleagues with the same passion for data as well as personal and professional development.\n" +
                        "\n" +
                        "\n" +
                        "💰 The Offer\n" +
                        "\n" +
                        "An attractive salary package with extralegal benefits such as a company car & fuel card or a mobility budget, hospitalisation insurance, group insurance, a high-end laptop and smartphone.\n" +
                        "Guidance by our experienced Data Engineers and other experts.\n" +
                        "A training trajectory & budget focused on advancing your professional career.\n" +
                        "Training and seminars with your team and external experts to further sharpen your technical skill set.\n" +
                        "We let off steam during our fries & beers and monthly day@dataroots events #workhardplayhard.\n" +
                        "Your own innovation budget to work on cool, educational, challenging and/or opensource projects with others within your guild.\n" +
                        "\n" +
                        "🇧🇪 Our offices are located in Leuven & Ghent. These locations are always available for brainstorm sessions or team events. As a dataroots consultant, you will occasionally be doing on-site visits at our clients. However, most of our work is done remotely. At dataroots, we are actively adapting to this new way of working. ✌️"
                    );
                  }}
                  className={
                    "flex flex-1 items-center justify-center rounded-lg border-2 border-indigo-600 bg-transparent py-3 px-12 font-semibold text-indigo-600 transition ease-in-out hover:bg-indigo-600 hover:text-white"
                  }
                >
                  Use a sample
                </motion.button>

                <motion.button
                  key={"feedback-button"}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  layout
                  className={
                    "flex flex-1 items-center justify-center rounded-lg bg-indigo-600 py-3 px-12 font-medium text-neutral-50 transition ease-in-out hover:bg-indigo-700"
                  }
                  disabled={loading}
                  onClick={async () => {
                    setLoading(true);
                    setFeedback("");
                    const feedback = await fetch("/api/feedback", {
                      method: "POST",
                      body: JSON.stringify({ value }),
                      headers: {
                        "Content-Type": "application/json",
                      },
                    }).then((res) => res.json());
                    setFeedback(feedback.feedback);
                    console.log(feedback);
                    setLoading(false);
                  }}
                >
                  {loading ? (
                    <>
                      <svg
                        className="h-5 w-5 animate-spin"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                    </>
                  ) : (
                    <>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={"mr-2 h-5 w-5"}
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path
                          stroke="none"
                          d="M0 0h24v24H0z"
                          fill="none"
                        ></path>
                        <path d="M14 6l7 7l-4 4"></path>
                        <path d="M5.828 18.172a2.828 2.828 0 0 0 4 0l10.586 -10.586a2 2 0 0 0 0 -2.829l-1.171 -1.171a2 2 0 0 0 -2.829 0l-10.586 10.586a2.828 2.828 0 0 0 0 4z"></path>
                        <path d="M4 20l1.768 -1.768"></path>
                      </svg>
                      Give me feedback
                    </>
                  )}
                </motion.button>
              </AnimatePresence>
            </>
          )}
        </div>
      </main>
    </>
  );
}
