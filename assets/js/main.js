
  // Words to cycle through
  const words = ["Modern", "Lifestyle",];
  let index = 0;

  // Select the element
  const textElement = document.getElementById("changing-text");

  setInterval(() => {
    // Update the text
    textElement.textContent = "Tiya is " + words[index];

    // Move to the next word (loop back when reaching the end)
    index = (index + 1) % words.length;
  }, 2000); // 2000ms = 2 seconds
