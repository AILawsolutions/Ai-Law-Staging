const apiKey = "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";

async function callVeritasTool(prompt) {
  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + apiKey
    },
    body: JSON.stringify({
      model: "gpt-4o",
      messages: [{ role: "user", content: prompt }]
    })
  });

  const data = await response.json();
  console.log(data.choices[0].message.content);
}