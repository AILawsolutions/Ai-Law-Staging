async function sendToVeritas() {
  const userInput = document.getElementById("userInput").value;
  const tool = document.getElementById("toolSelector").value;

  const response = await fetch("/proxy", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ input: userInput, tool })
  });

  const data = await response.json();
  document.getElementById("veritasOutput").innerText = data.reply || "No response.";
}