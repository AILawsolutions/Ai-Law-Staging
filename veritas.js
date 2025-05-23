async function runVeritas() {
  const input = document.getElementById('input').value;
  const output = document.getElementById('output');
  output.innerText = "Thinking...";

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer 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"
      },
      body: JSON.stringify({
        model: "gpt-4o",
        messages: [{ role: "user", content: input }]
      })
    });
    const data = await response.json();
    output.innerText = data.choices[0].message.content;
  } catch (error) {
    output.innerText = "Error: " + error.message;
  }
}