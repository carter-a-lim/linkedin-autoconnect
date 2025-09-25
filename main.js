const keywords = ['Cal Poly', 'Computer Science'];
let i = 0;

document.querySelectorAll('button[aria-label*="Invite"]').forEach(btn => {
  const card = btn.closest('div[role="listitem"]'); // full card container
  if (!card) return;

  const cardText = card.innerText;
  if (keywords.every(keyword => cardText.includes(keyword))) {
    setTimeout(() => {
      console.log(cardText);
      console.log('Connecting with:', btn.getAttribute('aria-label')); // log who you're connecting with
      const innerSpan = btn.querySelector('span');
       if (innerSpan) {
          innerSpan.style.backgroundColor = 'green';
          innerSpan.style.borderRadius = '8px'; // optional: keep rounded corners
          innerSpan.style.color = 'white'; // optional: make text readable
        }

      console.log(card.innerText); // send connection request
    }, i++ * 1000); // stagger each action by 1 second
  }
});
