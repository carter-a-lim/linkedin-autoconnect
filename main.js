const schoolKeywords = ['Calpoly', 'Cal Poly', 'California Polytechnic'];
const majorKeywords = ['CS', 'Comp Sci', 'Computer Science'];

const connectedNames = new Set(); // 🧠 Track who you've already connected with

function autoConnectLoop() {
  let i = 0;

  document.querySelectorAll('button[aria-label*="Invite"]').forEach(btn => {
    const card = btn.closest('div[role="listitem"]');
    if (!card) return;

    const cardText = card.innerText;
    const schoolMatch = schoolKeywords.some(k => cardText.includes(k));
    const majorMatch = majorKeywords.some(k => cardText.includes(k));

    if (schoolMatch && majorMatch) {
      const nameMatch = btn.getAttribute('aria-label')?.match(/Invite (.+?) to connect/);
      const name = nameMatch?.[1];

      if (name && !connectedNames.has(name)) {
        connectedNames.add(name); // ✅ Add to list so we don’t repeat

        setTimeout(() => {
          console.log(`✅ Connecting with: ${name}`);

          const innerSpan = btn.querySelector('span');
          if (innerSpan) {
            innerSpan.style.backgroundColor = 'green';
            innerSpan.style.borderRadius = '8px';
            innerSpan.style.color = 'white';
          }

          console.log(cardText);
        }, i++ * 1000);
      }
    }
  });

  setTimeout(autoConnectLoop, 5000); // 🔁 Repeat every 5 seconds
}

autoConnectLoop(); // 🚀 Start the loop
