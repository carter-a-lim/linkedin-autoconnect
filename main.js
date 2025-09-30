const schoolKeywords = []; // ex: 'Calpoly', 'Cal Poly', 'California Polytechnic'
const majorKeywords = []; // ex: 'CS', 'Comp Sci', 'Computer Science'

const connectedNames = new Set();

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
        connectedNames.add(name);

        setTimeout(() => {
          console.log(`✅ Connecting with: ${name}`);

          const innerSpan = btn.querySelector('span');
          if (innerSpan) {
            innerSpan.style.backgroundColor = 'green';
            innerSpan.style.borderRadius = '8px';
            innerSpan.style.color = 'white';
          }

          console.log(cardText); // use btn.click(); if you want to automatically connect
        }, i++ * 1000);
      }
    }
  });

  setTimeout(autoConnectLoop, 1000);
}

autoConnectLoop(); // 🚀 Start the loop
