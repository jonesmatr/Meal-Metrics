// Create a controller with the following specifications:

// 1. import the Configuration class and the OpenAIApi class from the openai npm module
// 2. create a new configuration object that includes the api key and uses the Configuration class from the openai module
// 3. create a new instance of the OpenAIApi class and pass in the configuration object
// 4. create an async function called generateInfo that accepts a request and response object as parameters
// 5. use try to make a request to the OpenAI completetion api and return the response
// 6. use catch to catch any errors and return the error include a message to the user
// 7. export the generateInfo function as a module

const { Configuration, OpenAIApi } = require('openai');

const config = new Configuration({
    apiKey: process.env.OPENAI_API_KEY
});

const openai = new OpenAIApi(config);   

const generateInfo = async (req, res) => {
    try {
        const response = await openai.createCompletion({
            engine: 'davinci',
            prompt: req.body.prompt,
            max_tokens: 64,
            temperature: 0.9,
            topP: 1,
            frequencyPenalty: 0,
            presencePenalty: 0,
            bestOf: 1,
            n: 1,
            stream: false,
            stop: ['\n'],
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};