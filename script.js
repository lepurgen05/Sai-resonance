/* =========================================================
   SAI RESONANCE
   Main JavaScript
========================================================= */


/* =========================================================
   108 DAILY CHITS
========================================================= */

const CARDS = [

  {
    title: "I am with you.",
    text: "Whatever the day brings, remember that you do not have to carry every burden alone.",
    category: "Daily Chit"
  },

  {
    title: "I am watching you.",
    text: "Let this be a reminder to live with awareness, honesty and love.",
    category: "Daily Chit"
  },

  {
    title: "You are Mine.",
    text: "A reminder of belonging, love and the feeling that you are never forgotten.",
    category: "Daily Chit"
  },

  {
    title: "I am always with you.",
    text: "When the mind becomes restless, return to faith and calmness.",
    category: "Daily Chit"
  },

  {
    title: "Do not be afraid.",
    text: "Face the moment before you with courage, patience and faith.",
    category: "Daily Chit"
  },

  {
    title: "Why fear when I am here?",
    text: "Let fear become an invitation to remember courage and trust.",
    category: "Reflection"
  },

  {
    title: "Be peaceful.",
    text: "Peace begins when we stop fighting every thought that passes through the mind.",
    category: "Reflection"
  },

  {
    title: "Be patient.",
    text: "Not everything has to happen today. Give life the time it needs.",
    category: "Reflection"
  },

  {
    title: "Love all.",
    text: "Let your words and actions make someone's day a little lighter.",
    category: "Teaching"
  },

  {
    title: "Serve all.",
    text: "Service becomes meaningful when it is offered without expecting recognition.",
    category: "Teaching"
  },

  {
    title: "Help ever.",
    text: "Whenever you can genuinely help, do so with humility.",
    category: "Teaching"
  },

  {
    title: "Hurt never.",
    text: "Before speaking, ask whether your words will heal or hurt.",
    category: "Teaching"
  },

  {
    title: "Speak softly.",
    text: "Gentleness is not weakness. Sometimes the softest words carry the greatest strength.",
    category: "Reflection"
  },

  {
    title: "Listen first.",
    text: "Understanding another person begins with listening without immediately judging.",
    category: "Reflection"
  },

  {
    title: "Be truthful.",
    text: "Truth gives the mind a place to stand when everything else becomes uncertain.",
    category: "Teaching"
  },

  {
    title: "Be kind.",
    text: "A small act of kindness may remain in someone's heart much longer than you expect.",
    category: "Reflection"
  },

  {
    title: "Forgive.",
    text: "Forgiveness can release the heart from carrying yesterday into today.",
    category: "Reflection"
  },

  {
    title: "Remember love.",
    text: "When there is confusion, return to the simplest question: what would love do?",
    category: "Reflection"
  },

  {
    title: "Do your duty.",
    text: "Give sincere attention to the responsibility that is in front of you.",
    category: "Teaching"
  },

  {
    title: "Work with love.",
    text: "Even ordinary work can become meaningful when done with sincerity.",
    category: "Reflection"
  },

  {
    title: "Do not compare.",
    text: "Your journey does not need to look like someone else's journey.",
    category: "Reflection"
  },

  {
    title: "Be grateful.",
    text: "Notice what is already present before worrying about what is still missing.",
    category: "Reflection"
  },

  {
    title: "Keep faith.",
    text: "Faith does not remove every difficulty, but it can change the way we walk through it.",
    category: "Reflection"
  },

  {
    title: "Stay humble.",
    text: "Let achievement make you grateful rather than distant from others.",
    category: "Reflection"
  },

  {
    title: "Control the tongue.",
    text: "A moment of silence can prevent a sentence that takes much longer to repair.",
    category: "Reflection"
  },

  {
    title: "Control the mind.",
    text: "Do not believe every thought simply because it appears in your mind.",
    category: "Reflection"
  },

  {
    title: "Choose peace.",
    text: "Not every argument deserves your energy.",
    category: "Reflection"
  },

  {
    title: "Be cheerful.",
    text: "A cheerful heart can make difficult work feel lighter.",
    category: "Reflection"
  },

  {
    title: "Think before you speak.",
    text: "Words leave traces. Choose them carefully.",
    category: "Reflection"
  },

  {
    title: "Give without pride.",
    text: "The value of giving grows when the giver does not demand applause.",
    category: "Reflection"
  },

  {
    title: "Serve quietly.",
    text: "Goodness does not always need an audience.",
    category: "Reflection"
  },

  {
    title: "See the good.",
    text: "Train yourself to notice goodness even in ordinary moments.",
    category: "Reflection"
  },

  {
    title: "Do not lose hope.",
    text: "A difficult chapter is not necessarily the end of the story.",
    category: "Reflection"
  },

  {
    title: "Trust the journey.",
    text: "Some answers become clear only after we have travelled farther.",
    category: "Reflection"
  },

  {
    title: "Pray with sincerity.",
    text: "Let prayer become a quiet conversation of the heart.",
    category: "Reflection"
  },

  {
    title: "Make your heart pure.",
    text: "Watch your intentions as carefully as you watch your actions.",
    category: "Reflection"
  },

  {
    title: "Let go of anger.",
    text: "Anger may feel powerful for a moment, but peace has a longer memory.",
    category: "Reflection"
  },

  {
    title: "Choose understanding.",
    text: "Before deciding what someone meant, try to understand what they experienced.",
    category: "Reflection"
  },

  {
    title: "Do not seek praise.",
    text: "Let the goodness of an action be enough reason to do it.",
    category: "Reflection"
  },

  {
    title: "Be useful.",
    text: "Ask how your presence can make a situation better.",
    category: "Reflection"
  },

  {
    title: "Respect everyone.",
    text: "Every person carries a story you may know nothing about.",
    category: "Reflection"
  },

  {
    title: "Keep learning.",
    text: "Wisdom grows when knowledge is combined with experience and reflection.",
    category: "Reflection"
  },

  {
    title: "Practise what you learn.",
    text: "Knowledge becomes meaningful when it changes the way we live.",
    category: "Teaching"
  },

  {
    title: "Be disciplined.",
    text: "Small acts of discipline repeated every day can shape an entire life.",
    category: "Reflection"
  },

  {
    title: "Begin again.",
    text: "A mistake does not prevent you from making a better choice now.",
    category: "Reflection"
  },

  {
    title: "Do not give up.",
    text: "Continue taking the next right step, even when the destination feels distant.",
    category: "Reflection"
  },

  {
    title: "Keep your heart open.",
    text: "Do not allow one painful experience to close the door to every good experience.",
    category: "Reflection"
  },

  {
    title: "Be sincere.",
    text: "Let your inner intention and outer action move in the same direction.",
    category: "Reflection"
  },

  {
    title: "Be responsible.",
    text: "Freedom becomes meaningful when it is accompanied by responsibility.",
    category: "Reflection"
  },

  {
    title: "Respect your parents.",
    text: "Gratitude begins by remembering the people who helped us become who we are.",
    category: "Reflection"
  },

  {
    title: "Respect your teachers.",
    text: "Learning becomes deeper when we remain humble before those who guide us.",
    category: "Reflection"
  },

  {
    title: "Use your time well.",
    text: "Time spent with purpose quietly becomes a meaningful life.",
    category: "Reflection"
  },

  {
    title: "Do one good thing.",
    text: "You do not need a grand opportunity to practise goodness.",
    category: "Reflection"
  },

  {
    title: "Smile.",
    text: "Sometimes a simple smile can tell another person that they are welcome.",
    category: "Reflection"
  },

  {
    title: "Be compassionate.",
    text: "Compassion begins when another person's difficulty matters to us.",
    category: "Reflection"
  },

  {
    title: "Do not judge quickly.",
    text: "A person may be fighting a battle that you cannot see.",
    category: "Reflection"
  },

  {
    title: "Give another chance.",
    text: "People can learn, change and begin again.",
    category: "Reflection"
  },

  {
    title: "Keep your promises.",
    text: "Trust is built slowly through small acts of reliability.",
    category: "Reflection"
  },

  {
    title: "Be courageous.",
    text: "Courage is sometimes simply doing what is right despite fear.",
    category: "Reflection"
  },

  {
    title: "Choose truth over convenience.",
    text: "The easier choice is not always the honest one.",
    category: "Reflection"
  },

  {
    title: "Stay calm.",
    text: "A calm mind sees possibilities that panic can hide.",
    category: "Reflection"
  },

  {
    title: "Take a breath.",
    text: "Pause before reacting. A few seconds can change the direction of a conversation.",
    category: "Reflection"
  },

  {
    title: "Do not carry yesterday.",
    text: "Learn from yesterday, but allow today to be new.",
    category: "Reflection"
  },

  {
    title: "Look within.",
    text: "Before trying to change everything outside you, examine what is happening within.",
    category: "Reflection"
  },

  {
    title: "Simplify.",
    text: "A simpler life can leave more room for what truly matters.",
    category: "Reflection"
  },

  {
    title: "Be content.",
    text: "Contentment is not the absence of ambition; it is freedom from endless dissatisfaction.",
    category: "Reflection"
  },

  {
    title: "Give thanks.",
    text: "Gratitude changes attention from what is missing to what is meaningful.",
    category: "Reflection"
  },

  {
    title: "Choose love over ego.",
    text: "When ego demands to win, love asks what will actually heal the situation.",
    category: "Reflection"
  },

  {
    title: "Do not respond in anger.",
    text: "Delay the response until your mind becomes quieter.",
    category: "Reflection"
  },

  {
    title: "Be a good example.",
    text: "People often learn more from what we practise than from what we preach.",
    category: "Reflection"
  },

  {
    title: "Respect differences.",
    text: "Different paths and perspectives do not require disrespect.",
    category: "Reflection"
  },

  {
    title: "Serve where you are.",
    text: "You do not need to wait for a perfect opportunity to be helpful.",
    category: "Reflection"
  },

  {
    title: "Care for the weak.",
    text: "A compassionate society is measured by how it treats those who need support.",
    category: "Reflection"
  },

  {
    title: "Share what you know.",
    text: "Knowledge becomes more valuable when it helps another person grow.",
    category: "Reflection"
  },

  {
    title: "Do not waste food.",
    text: "Respecting food is one simple way of respecting the effort and resources behind it.",
    category: "Reflection"
  },

  {
    title: "Respect nature.",
    text: "The world around us is not merely something to consume.",
    category: "Reflection"
  },

  {
    title: "Keep your surroundings clean.",
    text: "Outer cleanliness can support inner discipline and respect for others.",
    category: "Reflection"
  },

  {
    title: "Be honest with yourself.",
    text: "Self-awareness begins when we stop making excuses for everything we do.",
    category: "Reflection"
  },

  {
    title: "Accept correction.",
    text: "A sincere correction can become a gift when received without unnecessary pride.",
    category: "Reflection"
  },

  {
    title: "Learn from mistakes.",
    text: "A mistake becomes useful when it teaches us how to choose differently next time.",
    category: "Reflection"
  },

  {
    title: "Do not chase recognition.",
    text: "Let your work have value even when nobody notices it.",
    category: "Reflection"
  },

  {
    title: "Keep your word.",
    text: "Integrity is built through the promises we quietly keep.",
    category: "Reflection"
  },

  {
    title: "Be generous in spirit.",
    text: "Generosity is not only about money; it can be time, attention, patience or kindness.",
    category: "Reflection"
  },

  {
    title: "Listen to the lonely.",
    text: "Sometimes what another person needs most is simply someone willing to listen.",
    category: "Reflection"
  },

  {
    title: "Do not make fun of another's weakness.",
    text: "Kindness protects dignity.",
    category: "Reflection"
  },

  {
    title: "Speak words that heal.",
    text: "Use your voice to build bridges rather than deepen wounds.",
    category: "Reflection"
  },

  {
    title: "Be patient with yourself.",
    text: "Growth rarely happens in a straight line.",
    category: "Reflection"
  },

  {
    title: "Do not be jealous.",
    text: "Another person's success does not reduce the possibility of your own growth.",
    category: "Reflection"
  },

  {
    title: "Celebrate another's success.",
    text: "A generous heart can be happy when another person flourishes.",
    category: "Reflection"
  },

  {
    title: "Be steady.",
    text: "Do not let every compliment lift you or every criticism destroy you.",
    category: "Reflection"
  },

  {
    title: "Remember your purpose.",
    text: "When distractions multiply, return to the reason you began.",
    category: "Reflection"
  },

  {
    title: "Keep going quietly.",
    text: "Progress does not always make noise.",
    category: "Reflection"
  },

  {
    title: "Choose gratitude before complaint.",
    text: "A grateful mind notices possibilities that constant complaint can hide.",
    category: "Reflection"
  },

  {
    title: "Be present.",
    text: "The moment in front of you deserves some of your attention.",
    category: "Reflection"
  },

  {
    title: "Do not overthink everything.",
    text: "Some things become clearer after a little silence and rest.",
    category: "Reflection"
  },

  {
    title: "Rest when needed.",
    text: "Rest is not failure. Even the mind needs space to recover.",
    category: "Reflection"
  },

  {
    title: "Choose simplicity.",
    text: "You may discover that you need less than you once believed.",
    category: "Reflection"
  },

  {
    title: "Be faithful to good values.",
    text: "Values matter most when keeping them becomes inconvenient.",
    category: "Teaching"
  },

  {
    title: "Let actions speak.",
    text: "Character is revealed through what we repeatedly do.",
    category: "Reflection"
  },

  {
    title: "Love without calculation.",
    text: "Love becomes freer when it is not constantly measuring what it receives back.",
    category: "Reflection"
  },

  {
    title: "Serve without expectation.",
    text: "Offer help because it is right, not merely because you expect something in return.",
    category: "Teaching"
  },

  {
    title: "Remember the Divine.",
    text: "Create a small moment of remembrance in the middle of your ordinary day.",
    category: "Reflection"
  },

  {
    title: "You are not alone.",
    text: "When life feels heavy, pause, breathe and remember that support can come through people, faith and love.",
    category: "Reflection"
  },

  {
    title: "I am near.",
    text: "Let the thought of divine nearness bring quietness rather than fear.",
    category: "Reflection"
  },

  {
    title: "I know your heart.",
    text: "Let your inner life become honest, peaceful and sincere.",
    category: "Reflection"
  },

  {
    title: "I have not forgotten you.",
    text: "When an answer seems delayed, allow patience to remain beside faith.",
    category: "Reflection"
  },

  {
    title: "Walk with faith.",
    text: "You may not see the entire road, but you can still take the next step.",
    category: "Reflection"
  },

  {
    title: "Keep your heart peaceful.",
    text: "Protect your inner peace from unnecessary anger, comparison and fear.",
    category: "Reflection"
  },

  {
    title: "Love is the answer.",
    text: "When choices become complicated, return to compassion, truth and selfless action.",
    category: "Reflection"
  },

  {
    title: "Begin today.",
    text: "You do not have to wait for tomorrow to practise a better way of living.",
    category: "Reflection"
  },

  {
    title: "Let goodness grow.",
    text: "A small good habit repeated every day can become part of your character.",
    category: "Reflection"
  },

  {
    title: "Be the light for someone.",
    text: "Your patience, kindness or encouragement may be exactly what someone needs today.",
    category: "Reflection"
  },

  {
    title: "Return to love.",
    text: "Whenever the mind wanders into anger or fear, gently return to love.",
    category: "Reflection"
  }

];


/* =========================================================
   CHECK THAT COLLECTION IS 108
========================================================= */

console.log(
  "Sai Resonance Chits:",
  CARDS.length
);


/* =========================================================
   CHINNA KATHA LIBRARY
========================================================= */

const STORIES = [

  {
    type: "source",
    title: "Sathya as a Young Student",
    description:
      "An account concerning Sathya during his early student years, showing qualities remembered in later accounts of his life.",
    lesson:
      "Early character, discipline and compassion can shape a person's entire journey.",
    source:
      "https://saispeaks.sathyasai.org/node/8764"
  },

  {
    type: "source",
    title: "The Student Who Blamed Every Deity",
    description:
      "A story used to illustrate how people can misunderstand the relationship between prayer, responsibility and the Divine.",
    lesson:
      "Faith should not become an excuse for avoiding responsibility.",
    source:
      "https://saispeaks.sathyasai.org/node/6850"
  },

  {
    type: "source",
    title: "Vidyasagar and His Mother's Wish",
    description:
      "A story associated with Vidyasagar and his mother's wish, highlighting the importance of love, respect and gratitude towards one's parents.",
    lesson:
      "Respect and gratitude toward parents are expressions of human values.",
    source:
      "https://legacy.sathyasai.org/discour/2000/esai/d001119.html"
  },

  {
    type: "source",
    title: "The Teacher Who Called Him Guruji",
    description:
      "A recollection connected with a teacher who addressed Sathya with respect, reflecting the affection and regard surrounding his student life.",
    lesson:
      "True learning is strengthened by humility, respect and affection.",
    source:
      "https://www.sathyasai.org/discour/2003/d031021.html"
  },

  {
    type: "reflection",
    title: "The Cup of Water",
    description:
      "A person complains that they have little to give. Then they notice that even a simple cup of water can relieve another person's thirst.",
    lesson:
      "Service does not begin when we have everything. It begins with what we already have."
  },

  {
    type: "reflection",
    title: "The Unsent Reply",
    description:
      "Someone writes an angry reply but waits before sending it. By the next morning, the words no longer feel necessary.",
    lesson:
      "Sometimes wisdom is simply giving anger enough time to become silence."
  },

  {
    type: "reflection",
    title: "The Extra Plate",
    description:
      "A family begins keeping one extra plate ready, not because they expect a visitor, but because they want to remain ready to share.",
    lesson:
      "Hospitality becomes a habit when generosity is prepared before it is requested."
  },

  {
    type: "reflection",
    title: "The Broken Pencil",
    description:
      "A child throws away a pencil after breaking its tip. An elder sharpens it and continues using it.",
    lesson:
      "A mistake or setback does not make a person useless."
  },

  {
    type: "reflection",
    title: "The Quiet Room",
    description:
      "A person searches everywhere for an answer and finally sits quietly. In the silence, the question becomes clearer.",
    lesson:
      "Sometimes we need less noise before we can understand what is happening within us."
  },

  {
    type: "reflection",
    title: "The Small Lamp",
    description:
      "One small lamp is lit in a dark room. It does not remove the darkness everywhere, but it changes the space around it.",
    lesson:
      "You do not need to solve everything to make one corner of the world brighter."
  },

  {
    type: "reflection",
    title: "The Kind Word",
    description:
      "Two people meet after a difficult day. One offers nothing material, only a sincere and kind word.",
    lesson:
      "Kindness can be a form of service."
  },

  {
    type: "reflection",
    title: "The Heavy Bag",
    description:
      "A traveller carries a bag filled with things that are no longer useful. When the traveller finally lets some things go, the journey becomes easier.",
    lesson:
      "Holding on to anger, resentment and unnecessary worry can make the journey heavier."
  }

];


/* =========================================================
   TEACHINGS
========================================================= */

const TEACHINGS = [

  {
    title: "Love All; Serve All",
    text:
      "Love should not be limited by personal preference or social boundaries."
  },

  {
    title: "Help Ever; Hurt Never",
    text:
      "Use your actions and words to reduce suffering rather than create it."
  },

  {
    title: "Service is Love in Action",
    text:
      "Selfless service gives practical expression to compassion."
  },

  {
    title: "Duty is God; Work is Worship",
    text:
      "Ordinary responsibilities can become meaningful when performed sincerely."
  },

  {
    title: "The Five Human Values",
    text:
      "Truth, Right Conduct, Peace, Love and Nonviolence provide a framework for human development."
  },

  {
    title: "Practice What You Learn",
    text:
      "Knowledge becomes valuable when it influences conduct."
  },

  {
    title: "Speak Obligingly",
    text:
      "Words should be truthful while also being considerate and constructive."
  },

  {
    title: "Unity in Diversity",
    text:
      "Differences need not prevent people from recognising shared human values."
  },

  {
    title: "Selfless Service",
    text:
      "Service is most meaningful when it is offered without selfish expectation."
  },

  {
    title: "Inner Peace",
    text:
      "Peace is not simply the absence of external noise; it also involves discipline of thought and emotion."
  }

];


/* =========================================================
   DAILY WISDOM
========================================================= */

const WISDOM = [

  {
    text:
      "A quiet mind can hear what a noisy mind misses.",
    category:
      "Sai Resonance Reflection"
  },

  {
    text:
      "The smallest act of kindness can become someone's reason to smile.",
    category:
      "Sai Resonance Reflection"
  },

  {
    text:
      "What we practise every day slowly becomes who we are.",
    category:
      "Sai Resonance Reflection"
  },

  {
    text:
      "Peace grows when we stop demanding that every moment go exactly our way.",
    category:
      "Sai Resonance Reflection"
  },

  {
    text:
      "Service begins wherever compassion meets opportunity.",
    category:
      "Sai Resonance Reflection"
  },

  {
    text:
      "A good thought becomes powerful when it becomes a good action.",
    category:
      "Sai Resonance Reflection"
  },

  {
    text:
      "Do not wait for a perfect day to do something good.",
    category:
      "Sai Resonance Reflection"
  }

];


/* =========================================================
   DOM ELEMENTS
========================================================= */

const heroCardTitle =
  document.getElementById("heroCardTitle");

const heroCardText =
  document.getElementById("heroCardText");

const heroCardCategory =
  document.getElementById("heroCardCategory");

const heroCardNumber =
  document.getElementById("heroCardNumber");


const dailyTitle =
  document.getElementById("dailyTitle");

const dailyText =
  document.getElementById("dailyText");

const dailyCategory =
  document.getElementById("dailyCategory");

const dailyNumber =
  document.getElementById("dailyNumber");

const chitDate =
  document.getElementById("chitDate");


const storyGrid =
  document.getElementById("storyGrid");

const storySearch =
  document.getElementById("storySearch");

const storyFilter =
  document.getElementById("storyFilter");

const storyCount =
  document.getElementById("storyCount");


const teachingGrid =
  document.getElementById("teachingGrid");

const teachingSearch =
  document.getElementById("teachingSearch");


const cardGrid =
  document.getElementById("cardGrid");

const cardSearch =
  document.getElementById("cardSearch");


const wisdomText =
  document.getElementById("wisdomText");

const wisdomCategory =
  document.getElementById("wisdomCategory");


const modal =
  document.getElementById("contentModal");

const modalOverlay =
  document.getElementById("modalOverlay");

const modalClose =
  document.getElementById("modalClose");

const modalEyebrow =
  document.getElementById("modalEyebrow");

const modalTitle =
  document.getElementById("modalTitle");

const modalBody =
  document.getElementById("modalBody");

const modalSource =
  document.getElementById("modalSource");


/* =========================================================
   DATE HELPERS
========================================================= */

function getDayOfYear(date = new Date()) {

  const start =
    new Date(date.getFullYear(), 0, 0);

  const diff =
    date - start;

  const oneDay =
    1000 * 60 * 60 * 24;

  return Math.floor(diff / oneDay);
}


/* =========================================================
   DAILY CHIT
========================================================= */

function getDailyChit() {

  const day =
    getDayOfYear();

  const index =
    (day - 1) % CARDS.length;

  return {
    card: CARDS[index],
    index
  };

}


function displayDailyChit() {

  const daily =
    getDailyChit();

  const card =
    daily.card;

  const number =
    daily.index + 1;


  dailyTitle.textContent =
    card.title;

  dailyText.textContent =
    card.text;

  dailyCategory.textContent =
    card.category.toUpperCase();

  dailyNumber.textContent =
    `Chit ${String(number).padStart(2, "0")} / 108`;


  heroCardTitle.textContent =
    card.title;

  heroCardText.textContent =
    card.text;

  heroCardCategory.textContent =
    card.category;

  heroCardNumber.textContent =
    `${String(number).padStart(2, "0")} / 108`;


  const today =
    new Date();

  const dateText =
    today.toLocaleDateString(
      undefined,
      {
        day: "numeric",
        month: "long",
        year: "numeric"
      }
    );

  chitDate.textContent =
    dateText.toUpperCase();

}


/* =========================================================
   PICK ANOTHER CHIT
========================================================= */

function pickAnotherChit() {

  const index =
    Math.floor(
      Math.random() * CARDS.length
    );

  const card =
    CARDS[index];


  dailyTitle.textContent =
    card.title;

  dailyText.textContent =
    card.text;

  dailyCategory.textContent =
    card.category.toUpperCase();

  dailyNumber.textContent =
    `Chit ${String(index + 1).padStart(2, "0")} / 108`;


  heroCardTitle.textContent =
    card.title;

  heroCardText.textContent =
    card.text;

  heroCardCategory.textContent =
    card.category;

  heroCardNumber.textContent =
    `${String(index + 1).padStart(2, "0")} / 108`;

}


/* =========================================================
   COPY DAILY CHIT
========================================================= */

function copyDailyChit() {

  const title =
    dailyTitle.textContent;

  const text =
    dailyText.textContent;

  const category =
    dailyCategory.textContent;


  const content =
`${title}

${text}

— Sai Resonance
${category}`;


  if (
    navigator.clipboard &&
    navigator.clipboard.writeText
  ) {

    navigator.clipboard
      .writeText(content)
      .then(() => {

        showTemporaryButtonMessage(
          "copyDailyButton",
          "✓ Copied"
        );

      })
      .catch(() => {

        fallbackCopy(content);

      });

  } else {

    fallbackCopy(content);

  }

}


/* =========================================================
   FALLBACK COPY
========================================================= */

function fallbackCopy(text) {

  const textarea =
    document.createElement("textarea");

  textarea.value =
    text;

  document.body.appendChild(
    textarea
  );

  textarea.select();

  try {

    document.execCommand("copy");

    showTemporaryButtonMessage(
      "copyDailyButton",
      "✓ Copied"
    );

  } catch (error) {

    alert("Please copy the Chit manually.");

  }

  textarea.remove();

}


/* =========================================================
   TEMPORARY BUTTON MESSAGE
========================================================= */

function showTemporaryButtonMessage(
  buttonId,
  message
) {

  const button =
    document.getElementById(buttonId);

  if (!button) return;


  const original =
    button.textContent;

  button.textContent =
    message;

  setTimeout(() => {

    button.textContent =
      original;

  }, 1500);

}


/* =========================================================
   RENDER STORIES
========================================================= */

function renderStories() {

  const query =
    storySearch.value
      .trim()
      .toLowerCase();

  const filter =
    storyFilter.value;


  const filtered =
    STORIES.filter(story => {

      const matchesFilter =
        filter === "all" ||
        story.type === filter;


      const searchable =
        (
          story.title +
          " " +
          story.description +
          " " +
          story.lesson
        ).toLowerCase();


      const matchesSearch =
        !query ||
        searchable.includes(query);


      return (
        matchesFilter &&
        matchesSearch
      );

    });


  storyGrid.innerHTML = "";


  if (!filtered.length) {

    storyGrid.innerHTML =
      `
      <div class="empty-message">
        No Chinna Katha found.
      </div>
      `;

    storyCount.textContent =
      "0 Stories";

    return;

  }


  storyCount.textContent =
    `${filtered.length} Stories`;


  filtered.forEach(story => {

    const article =
      document.createElement("article");

    article.className =
      "story-card";


    const typeLabel =
      story.type === "source"
        ? "Source Based"
        : "Sai Resonance Reflection";


    article.innerHTML =
      `
      <span class="story-type">
        ${typeLabel}
      </span>

      <h3>
        ${escapeHTML(story.title)}
      </h3>

      <p>
        ${escapeHTML(story.description)}
      </p>

      <div class="story-lesson">
        Lesson: ${escapeHTML(story.lesson)}
      </div>
      `;


    article.addEventListener(
      "click",
      () => openStory(story)
    );


    storyGrid.appendChild(article);

  });

}


/* =========================================================
   OPEN STORY
========================================================= */

function openStory(story) {

  modalEyebrow.textContent =
    story.type === "source"
      ? "SOURCE BASED"
      : "SAI RESONANCE REFLECTION";


  modalTitle.textContent =
    story.title;


  modalBody.innerHTML =
    `
    <p>
      ${escapeHTML(story.description)}
    </p>

    <p>
      <strong>Lesson:</strong>
      ${escapeHTML(story.lesson)}
    </p>
    `;


  if (story.source) {

    modalSource.innerHTML =
      `
      Source:
      <a
        href="${story.source}"
        target="_blank"
        rel="noopener noreferrer"
      >
        Read source
      </a>
      `;

  } else {

    modalSource.textContent =
      "Original reflection written for Sai Resonance. It is not a quotation from Sri Sathya Sai Baba.";

  }


  openModal();

}


/* =========================================================
   RENDER TEACHINGS
========================================================= */

function renderTeachings() {

  const query =
    teachingSearch.value
      .trim()
      .toLowerCase();


  const filtered =
    TEACHINGS.filter(teaching => {

      const searchable =
        (
          teaching.title +
          " " +
          teaching.text
        ).toLowerCase();


      return (
        !query ||
        searchable.includes(query)
      );

    });


  teachingGrid.innerHTML = "";


  if (!filtered.length) {

    teachingGrid.innerHTML =
      `
      <div class="empty-message">
        No teaching found.
      </div>
      `;

    return;

  }


  filtered.forEach(
    (teaching, index) => {

      const article =
        document.createElement("article");

      article.className =
        "teaching-card";


      article.innerHTML =
        `
        <span class="teaching-number">
          ${String(index + 1).padStart(2, "0")}
        </span>

        <h3>
          ${escapeHTML(teaching.title)}
        </h3>

        <p>
          ${escapeHTML(teaching.text)}
        </p>
        `;


      teachingGrid.appendChild(
        article
      );

    }
  );

}


/* =========================================================
   RENDER 108 CARDS
========================================================= */

function renderCards() {

  const query =
    cardSearch.value
      .trim()
      .toLowerCase();


  const filtered =
    CARDS.map(
      (card, index) => ({
        ...card,
        index
      })
    ).filter(card => {

      const searchable =
        (
          card.title +
          " " +
          card.text +
          " " +
          card.category
        ).toLowerCase();


      return (
        !query ||
        searchable.includes(query)
      );

    });


  cardGrid.innerHTML = "";


  if (!filtered.length) {

    cardGrid.innerHTML =
      `
      <div class="empty-message">
        No Chit found.
      </div>
      `;

    return;

  }


  filtered.forEach(card => {

    const article =
      document.createElement("article");

    article.className =
      "daily-card";


    article.innerHTML =
      `
      <span class="daily-card-number">
        CHIT ${String(card.index + 1).padStart(3, "0")}
      </span>

      <h3>
        ${escapeHTML(card.title)}
      </h3>

      <p>
        ${escapeHTML(card.text)}
      </p>
      `;


    article.addEventListener(
      "click",
      () => openCard(card)
    );


    cardGrid.appendChild(article);

  });

}


/* =========================================================
   OPEN CARD
========================================================= */

function openCard(card) {

  modalEyebrow.textContent =
    card.category.toUpperCase();


  modalTitle.textContent =
    card.title;


  modalBody.innerHTML =
    `
    <p>
      ${escapeHTML(card.text)}
    </p>
    `;


  modalSource.textContent =
    "Sai Resonance daily reflection collection.";


  openModal();

}


/* =========================================================
   MODAL
========================================================= */

function openModal() {

  modal.classList.add("active");

  modal.setAttribute(
    "aria-hidden",
    "false"
  );

  document.body.classList.add(
    "modal-open"
  );

}


function closeModal() {

  modal.classList.remove("active");

  modal.setAttribute(
    "aria-hidden",
    "true"
  );

  document.body.classList.remove(
    "modal-open"
  );

}


/* =========================================================
   DAILY WISDOM
========================================================= */

function displayDailyWisdom() {

  const day =
    getDayOfYear();

  const index =
    (day - 1) % WISDOM.length;

  const item =
    WISDOM[index];


  wisdomText.textContent =
    item.text;

  wisdomCategory.textContent =
    item.category;

}


/* =========================================================
   ESCAPE HTML
========================================================= */

function escapeHTML(value) {

  const div =
    document.createElement("div");

  div.textContent =
    value;

  return div.innerHTML;

}


/* =========================================================
   MOBILE MENU
========================================================= */

const mobileMenuButton =
  document.getElementById(
    "mobileMenuButton"
  );

const mobileNav =
  document.getElementById(
    "mobileNav"
  );


if (mobileMenuButton) {

  mobileMenuButton.addEventListener(
    "click",
    () => {

      mobileNav.classList.toggle(
        "active"
      );

      const isOpen =
        mobileNav.classList.contains(
          "active"
        );

      mobileMenuButton.textContent =
        isOpen ? "×" : "☰";

    }
  );

}


/* Close mobile menu after clicking */

if (mobileNav) {

  mobileNav
    .querySelectorAll("a")
    .forEach(link => {

      link.addEventListener(
        "click",
        () => {

          mobileNav.classList.remove(
            "active"
          );

          mobileMenuButton.textContent =
            "☰";

        }
      );

    });

}


/* =========================================================
   EVENT LISTENERS
========================================================= */


/* Daily Chit */

const anotherChitButton =
  document.getElementById(
    "anotherChitButton"
  );

if (anotherChitButton) {

  anotherChitButton.addEventListener(
    "click",
    pickAnotherChit
  );

}


/* Copy */

const copyDailyButton =
  document.getElementById(
    "copyDailyButton"
  );

if (copyDailyButton) {

  copyDailyButton.addEventListener(
    "click",
    copyDailyChit
  );

}


/* Story search */

if (storySearch) {

  storySearch.addEventListener(
    "input",
    renderStories
  );

}

if (storyFilter) {

  storyFilter.addEventListener(
    "change",
    renderStories
  );

}


/* Teaching search */

if (teachingSearch) {

  teachingSearch.addEventListener(
    "input",
    renderTeachings
  );

}


/* Card search */

if (cardSearch) {

  cardSearch.addEventListener(
    "input",
    renderCards
  );

}


/* Modal */

if (modalClose) {

  modalClose.addEventListener(
    "click",
    closeModal
  );

}

if (modalOverlay) {

  modalOverlay.addEventListener(
    "click",
    closeModal
  );

}


/* ESC key */

document.addEventListener(
  "keydown",
  event => {

    if (
      event.key === "Escape"
    ) {

      closeModal();

    }

  }
);


/* =========================================================
   START WEBSITE
========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  () => {

    displayDailyChit();

    renderStories();

    renderTeachings();

    renderCards();

    displayDailyWisdom();

  }
);


/* =========================================================
   DEVELOPMENT CHECK
========================================================= */

if (CARDS.length !== 108) {

  console.warn(
    `Sai Resonance currently has ${CARDS.length} Chits. The target is 108.`
  );

}
