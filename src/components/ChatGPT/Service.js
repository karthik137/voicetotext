const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.REACT_APP_GPT_KEY,
});

export async function getResponseFromGPT(comment) {
    // TODO: Implement code generation using ChatGPT

    const prompt = `Generate me a  mock response for the input. \n\n"${comment}"\n\n. Return only response.`;
    const openai = new OpenAIApi(configuration);


    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: prompt,
        max_tokens: 2000,
        temperature: 0,
      });

    //console.log("Printing response ",response.data.choices[0].text.trim());
    return response.data.choices[0].text.trim();
  
  }