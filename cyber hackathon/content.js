// List of keywords to block
const keywords = [
  "gore", "violence", "explicit", "graphic", "disturbing", "offensive",
  "nudity", "sexual", "pornographic", "adult content", "nsfw",
  "blood", "death", "murder", "killer", "decapitation", "suicide", 
  "rape", "abuse", "torture", "mutilation", "horror", "brutal", 
  "grotesque", "obscene", "erotic", "indecent", "lewd", "vulgar", 
  "obscenity", "prostitution", "incest", "bestiality", "pedophile", 
  "sodomy", "orgy", "fetish", "bondage", "striptease", "lap dance", 
  "groin", "genitalia", "nipple", "breast", "penis", "vagina", 
  "anal", "anus", "rectum", "pubic", "clitoris"
];

// Function to check for keywords
function containsKeywords() {
  const bodyText = document.body.innerText.toLowerCase();
  return keywords.some(keyword => bodyText.includes(keyword));
}

// Function to replace page content
function blockPage() {
  document.body.innerHTML = `
    <div class="blocker">
      <img src="${chrome.runtime.getURL('Icon.png')}" alt="Blocked" style="width: 300px; height: auto;">
      <p style="font-size: 24px; color: red; font-weight: bold; animation: blink 1s infinite;">"This page has been blocked due to inappropriate content."</p>
    </div>
  `;
  const style = document.createElement('style');
  style.innerHTML = `
    .blocker {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      flex-direction: column;
      background-color: #fff;
      color: #000;
      text-align: center;
    }
    @keyframes blink {
      0% { opacity: 1; }
      50% { opacity: 0; }
      100% { opacity: 1; }
    }
  `;
  document.head.appendChild(style);
}

// Check for keywords and block the page if any are found
if (containsKeywords()) {
  blockPage();
}
