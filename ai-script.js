<script type="module">
  import OpenAI from 'https://cdn.jsdelivr.net/npm/openai@4.20.1/+esm';

  const openai = new OpenAI({ apiKey: 'YOUR_OPENAI_API_KEY', dangerouslyAllowBrowser: true });

  async function runTool() {
    const input = document.getElementById('input').value;
    const output = document.getElementById('output');
    output.innerText = "Thinking...";

    try {
      const chatCompletion = await openai.chat.completions.create({
        messages: [{ role: "user", content: input }],
        model: "gpt-4",
      });

      output.innerText = chatCompletion.choices[0].message.content;
    } catch (error) {
      output.innerText = "An error occurred: " + error.message;
    }
  }

  window.runTool = runTool;
</script>