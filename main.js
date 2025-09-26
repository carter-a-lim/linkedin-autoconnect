const schoolKeywords = ['Calpoly', 'Cal Poly', 'California Polytechnic'];
const majorKeywords = ['CS', 'Comp Sci', 'Computer Science'];

let i = 0;

document.querySelectorAll('button[aria-label*="Invite"]').forEach(btn => {
  const card = btn.closest('div[role="listitem"]');
  if (!card) return;

  const cardText = card.innerText;

  const schoolMatch = schoolKeywords.some(keyword => cardText.includes(keyword));
  const majorMatch = majorKeywords.some(keyword => cardText.includes(keyword));

  if (schoolMatch && majorMatch) {
    setTimeout(() => {
      console.log(cardText);
      console.log('Connecting with:', btn.getAttribute('aria-label'));

      const innerSpan = btn.querySelector('span');
      if (innerSpan) {
        innerSpan.style.backgroundColor = 'green';
        innerSpan.style.borderRadius = '8px';
        innerSpan.style.color = 'white';
      }

      console.log(card.innerText); //btn.click for auto
    }, i++ * 1000);
  }
});
