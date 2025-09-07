// netlify/functions/posts.js
const fetch = require("node-fetch");

exports.handler = async function(event, context) {
  const baseId = "YOUR_BASE_ID";   // انسخه من Airtable
  const tableName = "Posts";       // اسم الجدول في Airtable
  const apiKey = process.env.AIRTABLE_KEY; // المفتاح يبقى في Netlify

  try {
    const response = await fetch(`https://api.airtable.com/v0/${baseId}/${tableName}`, {
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    });

    const data = await response.json();
    return {
      statusCode: 200,
      body: JSON.stringify(data)
    };
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
};