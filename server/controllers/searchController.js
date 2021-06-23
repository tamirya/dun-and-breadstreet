const axios = require("axios");

exports.run = async function (req, res) {
  if ("query" in req.query === false) {
    res.send("Missing Paramter query");
  }
  try {
    const response = await axios.get(
      `https://api.duckduckgo.com/?q=${req.query.query}&format=json&pretty=1`
    );
    const data = response.data;
    const queryData = [...data.RelatedTopics, ...data.Results];
    const returnedArr = [];
    for (let index = 0; index < queryData.length; index++) {
      const element = queryData[index];
      if ("Topics" in element) {
        for (let index = 0; index < element["Topics"].length; index++) {
          const el = element["Topics"][index];
          if ("Text" in el && "FirstURL" in el) {
            returnedArr.push({ text: el.Text, url: el.FirstURL });
          }
        }
      }
      if ("Text" in element && "FirstURL" in element) {
        returnedArr.push({ text: element.Text, url: element.FirstURL });
      }
    }
    res.json(returnedArr);
  } catch (error) {
    console.error(error);
    res.json(error);
  }
};
