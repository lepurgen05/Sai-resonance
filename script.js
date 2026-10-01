/* =====================================================
   SAI RESONANCE
   Main Website Data & Functions
===================================================== */


/* =====================================================
   108 DAILY CARDS
===================================================== */

const CARDS = [

{
title:"Love All",
category:"Love",
text:"Let love be larger than preference. Today, offer the same basic dignity to someone you normally overlook.",
type:"reflection"
},

{
title:"Serve All",
category:"Service",
text:"Service does not begin with a grand project. It can begin with noticing a need and quietly responding.",
type:"reflection"
},

{
title:"Help Ever, Hurt Never",
category:"Nonviolence",
text:"Help Ever; Hurt Never.",
type:"quote",
source:"Sri Sathya Sai International Organization",
url:"https://www.sathyasai.org/node/671"
},

{
title:"Speak Softly",
category:"Right Speech",
text:"You cannot always oblige, but you can always speak obligingly.",
type:"quote",
source:"Sri Sathya Sai International Organization",
url:"https://www.sathyasai.org/study-aids/speak-obligingly"
},

{
title:"The Language of the Heart",
category:"Love",
text:"When words become difficult, let kindness speak. The heart often communicates through attention, patience and presence.",
type:"reflection"
},

{
title:"Truth in Thought",
category:"Truth",
text:"Be honest with yourself first. A clear inner intention makes truthful speech easier.",
type:"reflection"
},

{
title:"Truth in Word",
category:"Truth",
text:"Say what is true without using truth as a weapon. Truth joined with love becomes constructive.",
type:"reflection"
},

{
title:"Truth in Action",
category:"Truth",
text:"Let your conduct agree with what you claim to believe. Character is built in ordinary moments.",
type:"reflection"
},

{
title:"Right Conduct",
category:"Right Conduct",
text:"Ask not only 'Can I do this?' but 'Will this strengthen my character and help others?'",
type:"reflection"
},

{
title:"Peace Within",
category:"Peace",
text:"Peace is not the absence of problems. It is the discipline of meeting problems without becoming them.",
type:"reflection"
},

{
title:"Love Without Expectation",
category:"Love",
text:"Give affection, help or attention without keeping a mental account of what you will receive back.",
type:"reflection"
},

{
title:"Do Not Hurt",
category:"Nonviolence",
text:"Before acting, imagine the experience of the other person. That pause can prevent unnecessary pain.",
type:"reflection"
},

{
title:"See Unity",
category:"Unity",
text:"Differences are visible; shared humanity is deeper. Practise seeing the person before the label.",
type:"reflection"
},

{
title:"From I to We",
category:"Service",
text:"Whenever a decision affects others, move one step beyond 'What do I want?' and ask 'What helps us?'",
type:"reflection"
},

{
title:"Service Is Love in Action",
category:"Service",
text:"Service is love in action.",
type:"quote",
source:"Sri Sathya Sai International Organization",
url:"https://www.sathyasai.org/sathya-sai/teachings/study-guides/selfless-service"
},

{
title:"Make Someone Happy",
category:"Love",
text:"Choose one small act today whose only purpose is to make another person feel seen.",
type:"reflection"
},

{
title:"Control the Tongue",
category:"Right Speech",
text:"Not every thought needs to become speech. Silence can protect relationships when emotion is high.",
type:"reflection"
},

{
title:"Pause Before Anger",
category:"Peace",
text:"Give anger a little space. A delayed reply is often wiser than an immediate reaction.",
type:"reflection"
},

{
title:"Forgive Quickly",
category:"Peace",
text:"Forgiveness does not erase what happened. It loosens the hold that resentment has on the heart.",
type:"reflection"
},

{
title:"Forget the Hurt",
category:"Peace",
text:"Remember the lesson, not the poison. Carry wisdom forward without carrying bitterness.",
type:"reflection"
},

{
title:"Do Your Duty",
category:"Right Conduct",
text:"Duty is God; work is worship.",
type:"quote",
source:"Sri Sathya Sai Baba",
url:"https://www.sathyasai.org/publications/TeachingsOfBSSSB-Vol02.html"
},

{
title:"Work Is Worship",
category:"Right Conduct",
text:"Treat ordinary work as an opportunity to develop discipline, honesty and usefulness.",
type:"reflection"
},

{
title:"Be Kind in Silence",
category:"Love",
text:"Some of the best kindness leaves no announcement behind.",
type:"reflection"
},

{
title:"Give Without Display",
category:"Service",
text:"If the act is good, it does not need applause to become meaningful.",
type:"reflection"
},

{
title:"Listen Fully",
category:"Love",
text:"Sometimes service is simply giving another person enough attention to finish their sentence.",
type:"reflection"
},

{
title:"Respect Every Faith",
category:"Unity",
text:"Respect does not require abandoning your own conviction. It requires refusing to demean another person's sincere path.",
type:"reflection"
},

{
title:"Humanity First",
category:"Love",
text:"Before status, profession, wealth or identity, remember the dignity shared by every person.",
type:"reflection"
},

{
title:"A Quiet Mind",
category:"Peace",
text:"Reduce unnecessary noise for a few minutes. A quieter mind can notice what a busy mind misses.",
type:"reflection"
},

{
title:"Contentment",
category:"Peace",
text:"Contentment is not laziness. It is gratitude without abandoning responsible effort.",
type:"reflection"
},

{
title:"Ceiling on Desires",
category:"Self Discipline",
text:"Ask whether every new want truly improves your life. Simplicity creates room for service.",
type:"reflection"
},

{
title:"Compassion",
category:"Love",
text:"Try to understand the burden behind someone's behaviour before judging the person.",
type:"reflection"
},

{
title:"Patience",
category:"Peace",
text:"Patience is active strength: staying steady while time does its work.",
type:"reflection"
},

{
title:"Forbearance",
category:"Peace",
text:"When provoked, choose dignity over reaction. You do not have to return every emotional blow.",
type:"reflection"
},

{
title:"Purity of Thought",
category:"Truth",
text:"Watch the thought before it becomes a word and the word before it becomes an action.",
type:"reflection"
},

{
title:"Good Company",
category:"Character",
text:"The people and ideas you repeatedly consume quietly shape your habits. Choose company that lifts you.",
type:"reflection"
},

{
title:"Self Discipline",
category:"Character",
text:"Freedom grows when you can choose your response instead of being controlled by every impulse.",
type:"reflection"
},

{
title:"Gratitude",
category:"Love",
text:"Name three things you received today that money could not easily buy: time, trust, kindness, knowledge or love.",
type:"reflection"
},

{
title:"Humility",
category:"Character",
text:"You can be capable without needing to prove superiority.",
type:"reflection"
},

{
title:"Courage to Change",
category:"Truth",
text:"When you discover a weakness, honesty is not defeat. It is the first step toward transformation.",
type:"reflection"
},

{
title:"Faith",
category:"Faith",
text:"Faith becomes stronger when joined with sincere effort and a willingness to learn.",
type:"reflection"
},

{
title:"Discrimination",
category:"Wisdom",
text:"Not every attractive choice is a good choice. Use discernment before desire.",
type:"reflection"
},

{
title:"Detachment",
category:"Peace",
text:"Care deeply without becoming consumed by outcomes you cannot control.",
type:"reflection"
},

{
title:"Inner Peace",
category:"Peace",
text:"Protect a small part of each day from unnecessary arguments, comparison and noise.",
type:"reflection"
},

{
title:"Remember the Divine",
category:"Devotion",
text:"A brief remembrance can interrupt a hurried day and restore perspective.",
type:"reflection"
},

{
title:"See Good",
category:"Love",
text:"Train your attention to notice one good quality in the person you are tempted to criticise.",
type:"reflection"
},

{
title:"Do Good",
category:"Right Conduct",
text:"Good intention becomes meaningful when it enters behaviour.",
type:"reflection"
},

{
title:"Be Good",
category:"Character",
text:"Character is what remains when nobody is asking you to perform.",
type:"reflection"
},

{
title:"Think Good",
category:"Truth",
text:"The direction of your thoughts matters. Feed the mind with ideas that make you more humane.",
type:"reflection"
},

{
title:"One Family",
category:"Unity",
text:"Treat the people around you as fellow travellers rather than competitors for worth.",
type:"reflection"
},

{
title:"One Humanity",
category:"Unity",
text:"Compassion should not stop at borders, language or social status.",
type:"reflection"
},

{
title:"One Love",
category:"Love",
text:"Love can be expressed through service, patience, forgiveness and respect.",
type:"reflection"
},

{
title:"No Room for Hatred",
category:"Peace",
text:"Do not let another person's wrong action decide the kind of person you become.",
type:"reflection"
},

{
title:"Replace Anger",
category:"Peace",
text:"When anger rises, replace the first impulse with one question: 'What outcome do I actually want?'",
type:"reflection"
},

{
title:"Choose Patience",
category:"Peace",
text:"Waiting without bitterness is a quiet form of strength.",
type:"reflection"
},

{
title:"Choose Understanding",
category:"Love",
text:"Ask one more question before making a judgement.",
type:"reflection"
},

{
title:"Give Time",
category:"Service",
text:"Time is often more valuable than an expensive gift because it says, 'You matter to me.'",
type:"reflection"
},

{
title:"Give Attention",
category:"Love",
text:"Put the phone away for a few minutes and be completely present with someone.",
type:"reflection"
},

{
title:"Give Hope",
category:"Love",
text:"Hope can be as simple as telling a discouraged person, 'You do not have to face this alone.'",
type:"reflection"
},

{
title:"Give Respect",
category:"Right Conduct",
text:"Respect is shown in how you speak to people who cannot give you anything in return.",
type:"reflection"
},

{
title:"Serve the Needy",
category:"Service",
text:"Look around your own community. Service becomes real when it meets an actual need.",
type:"reflection"
},

{
title:"Small Service",
category:"Service",
text:"Never underestimate a small act done at the right moment.",
type:"reflection"
},

{
title:"Big Heart",
category:"Love",
text:"A big heart is not measured by possessions but by how much room it makes for others.",
type:"reflection"
},

{
title:"No Expectation",
category:"Service",
text:"Do good because it is good, not because it guarantees praise.",
type:"reflection"
},

{
title:"No Comparison",
category:"Peace",
text:"Your growth is not a race against another person.",
type:"reflection"
},

{
title:"No Jealousy",
category:"Character",
text:"Use another person's success as evidence that excellence is possible, not as a reason to diminish them.",
type:"reflection"
},

{
title:"No Pride",
category:"Humility",
text:"Remember how many people helped you become who you are.",
type:"reflection"
},

{
title:"No Fear",
category:"Courage",
text:"Courage is not the absence of fear. It is choosing the right action despite fear.",
type:"reflection"
},

{
title:"Walk the Talk",
category:"Character",
text:"A principle becomes yours when it appears in your conduct.",
type:"reflection"
},

{
title:"Practice What You Learn",
category:"Practice",
text:"Practice what I teach. That is enough. That is all I ask.",
type:"quote",
source:"Divine Teachings of Sri Sathya Sai Baba",
url:"https://www.sathyasai.org/study-guides/divine-teachings"
},

{
title:"Character Matters",
category:"Character",
text:"Knowledge can open doors; character determines what you do after entering.",
type:"reflection"
},

{
title:"Education for Life",
category:"Education",
text:"Learning should improve the way you live, not merely the information you can reproduce.",
type:"reflection"
},

{
title:"Education for Character",
category:"Education",
text:"The end of education is character.",
type:"quote",
source:"Sathya Sai Education",
url:"https://www.sathyasai.org/education"
},

{
title:"Use Your Hands for Service",
category:"Service",
text:"Ask what your hands can do today that would make another person's work lighter.",
type:"reflection"
},

{
title:"Use Your Words for Healing",
category:"Right Speech",
text:"Choose words that clarify, encourage or reconcile rather than humiliate.",
type:"reflection"
},

{
title:"Use Your Mind for Truth",
category:"Truth",
text:"Question your own assumptions as carefully as you question other people's claims.",
type:"reflection"
},

{
title:"Use Your Heart for Love",
category:"Love",
text:"Let understanding become kindness. Knowledge without compassion can remain incomplete.",
type:"reflection"
},

{
title:"Do Not Waste Food",
category:"Responsibility",
text:"Take only what you can use and remember those for whom food is uncertain.",
type:"reflection"
},

{
title:"Do Not Waste Water",
category:"Responsibility",
text:"Use a precious resource carefully. Gratitude can be expressed through conservation.",
type:"reflection"
},

{
title:"Do Not Waste Time",
category:"Responsibility",
text:"Give some part of today to learning, service, prayer, family or meaningful rest.",
type:"reflection"
},

{
title:"Do Not Waste Energy",
category:"Wisdom",
text:"Spend your attention on what you can actually improve.",
type:"reflection"
},

{
title:"Simple Living",
category:"Contentment",
text:"A simpler life can make the mind lighter and leave more resources for what matters.",
type:"reflection"
},

{
title:"Sacred Work",
category:"Work",
text:"Any honest work can become meaningful when done with care and integrity.",
type:"reflection"
},

{
title:"Sacred Speech",
category:"Right Speech",
text:"Before speaking, ask: Is it true? Is it necessary? Can I say it kindly?",
type:"reflection"
},

{
title:"Sacred Thought",
category:"Truth",
text:"Guard the mind from repeatedly feeding resentment, envy and contempt.",
type:"reflection"
},

{
title:"Sacred Company",
category:"Character",
text:"Seek people who encourage growth rather than constant cynicism.",
type:"reflection"
},

{
title:"A Smile Is Service",
category:"Service",
text:"A sincere smile can tell a tired person that they are not invisible.",
type:"reflection"
},

{
title:"A Kind Word",
category:"Love",
text:"One kind sentence can stay in someone's memory for years.",
type:"reflection"
},

{
title:"A Listening Ear",
category:"Love",
text:"You do not always need a solution. Sometimes someone needs to be heard.",
type:"reflection"
},

{
title:"Prayer and Action",
category:"Devotion",
text:"Pray for strength, then use the strength in service.",
type:"reflection"
},

{
title:"Faith and Effort",
category:"Faith",
text:"Faith is not a substitute for effort. Let belief steady your effort.",
type:"reflection"
},

{
title:"Grace and Effort",
category:"Faith",
text:"Receive life with gratitude and meet your responsibilities with sincerity.",
type:"reflection"
},

{
title:"Be Useful",
category:"Service",
text:"At the end of the day, ask: Whose burden did I make a little lighter?",
type:"reflection"
},

{
title:"Be Reliable",
category:"Character",
text:"Small promises matter. Keep the commitments that people build their trust around.",
type:"reflection"
},

{
title:"Be Honest",
category:"Truth",
text:"Honesty includes admitting when you do not know, when you made a mistake and when you need help.",
type:"reflection"
},

{
title:"Be Gentle",
category:"Love",
text:"Strength does not require harshness.",
type:"reflection"
},

{
title:"Be Fearless",
category:"Courage",
text:"Do the right thing even when it is inconvenient.",
type:"reflection"
},

{
title:"Be Patient",
category:"Peace",
text:"Give people time to learn, including yourself.",
type:"reflection"
},

{
title:"Be Thankful",
category:"Gratitude",
text:"Gratitude changes the question from 'What am I missing?' to 'What has been given?'",
type:"reflection"
},

{
title:"Be Responsible",
category:"Right Conduct",
text:"Freedom and responsibility grow together.",
type:"reflection"
},

{
title:"Be a Light",
category:"Love",
text:"Let your conduct make goodness easier for someone else to notice.",
type:"reflection"
},

{
title:"Share Joy",
category:"Love",
text:"Joy becomes larger when it is shared without making another person feel small.",
type:"reflection"
},

{
title:"Share Knowledge",
category:"Education",
text:"Teach without humiliating the learner. Knowledge grows through generosity.",
type:"reflection"
},

{
title:"Share Food",
category:"Service",
text:"Hospitality is a simple way of saying that another person belongs.",
type:"reflection"
},

{
title:"Share Time",
category:"Love",
text:"Presence is a gift. Give some of it deliberately.",
type:"reflection"
},

{
title:"Share Strength",
category:"Service",
text:"If you are stronger in one area, use that strength to support someone who is struggling there.",
type:"reflection"
},

{
title:"Remember Others",
category:"Love",
text:"Do not let your own busy schedule erase the needs of people around you.",
type:"reflection"
},

{
title:"Care for the Earth",
category:"Responsibility",
text:"Care for the environment as an expression of responsibility to other living beings.",
type:"reflection"
},

{
title:"See God in All",
category:"Unity",
text:"Practise reverence through the way you treat people, animals and the world around you.",
type:"reflection"
},

{
title:"Serve Without Fame",
category:"Service",
text:"The value of service does not depend on whether anyone knows your name.",
type:"reflection"
},

{
title:"Love Without Fear",
category:"Love",
text:"Love bravely enough to be kind without demanding control.",
type:"reflection"
},

{
title:"Peace Begins Within",
category:"Peace",
text:"Do not wait for the whole world to become peaceful before practising peace in your own speech and choices.",
type:"reflection"
},

{
title:"Truth Needs Courage",
category:"Truth",
text:"Sometimes truth asks you to admit what is uncomfortable about yourself.",
type:"reflection"
},

{
title:"Love Needs Action",
category:"Love",
text:"Affection becomes credible when it changes how you behave.",
type:"reflection"
},

{
title:"Wisdom Needs Practice",
category:"Wisdom",
text:"A teaching understood but never practised remains information. Give one idea a place in your life today.",
type:"reflection"
}

];


/* =====================================================
   CHINNA KATHA
===================================================== */

const STORIES = [

{
type:"source",

title:"The Student Who Blamed Every Deity",

tag:"Unity of Divinity",

summary:
"Sri Sathya Sai Baba tells a humorous examination story about a student who keeps changing the deity he worships after poor results. The story turns when the student tries to prevent incense smoke from reaching the discarded pictures.",

lesson:
"The story points toward unity rather than treating different forms of the Divine as competitors.",

source:
"Sri Sathya Sai Speaks",

url:
"https://saispeaks.sathyasai.org/node/6850"

},


{
type:"source",

title:"Sathya as a Young Student",

tag:"Character",

summary:
"Published accounts of Sri Sathya Sai Baba's early life describe his school years and the simplicity, discipline and good conduct remembered by people around him.",

lesson:
"Greatness need not begin with display. Discipline, simplicity and good conduct can be quietly formed in ordinary life.",

source:
"Sathyam Shivam Sundaram",

url:
"https://saispeaks.sathyasai.org/node/8764"

},


{
type:"source",

title:"Vidyasagar and His Mother's Wish",

tag:"Compassion",

summary:
"In a 2000 discourse, Sri Sathya Sai Baba narrated the story of Ishwarchandra Vidyasagar and his mother's concern for villagers who struggled to obtain drinking water.",

lesson:
"Love can be expressed through concern for people beyond oneself. A simple request can become a life of service when someone chooses to act.",

source:
"19 November 2000 Discourse",

url:
"https://legacy.sathyasai.org/discour/2000/esai/d001119.html"

},


{
type:"source",

title:"The Teacher Who Called Him Guruji",

tag:"Faith",

summary:
"In a 2003 discourse, Sri Sathya Sai Baba narrated an episode from his youth involving an elderly teacher named Ramana.",

lesson:
"Read this as a source-based account from Swami's discourse, while distinguishing the historical narrative from later interpretations.",

source:
"21 October 2003 Discourse",

url:
"https://www.sathyasai.org/discour/2003/d031021.html"

},


{
type:"source",

title:"Education and Service",

tag:"Service",

summary:
"Across his published teachings, Sri Sathya Sai Baba repeatedly connected education with responsibility, character and service to society.",

lesson:
"Education becomes meaningful when knowledge is used responsibly rather than remaining only information.",

source:
"Sathya Sai Education",

url:
"https://www.sathyasai.org/education"

},


/* ORIGINAL REFLECTIONS */

{
type:"reflection",

title:"The Cup of Water",

tag:"Sai-inspired reflection",

summary:
"A tired traveller reaches a village and asks for water. One person points toward a distant well. Another simply brings a cup.",

lesson:
"When a need is in front of you, information is useful—but personal service can be transformative.",

source:
"Original Sai Resonance reflection — not a quotation.",

url:""

},


{
type:"reflection",

title:"The Unsent Reply",

tag:"Sai-inspired reflection",

summary:
"A young man receives a message that makes him angry. He writes a sharp reply, reads it once, and saves it as a draft.",

lesson:
"Peace sometimes begins with a delay. Not every feeling deserves immediate expression.",

source:
"Original Sai Resonance reflection — not a quotation.",

url:""

},


{
type:"reflection",

title:"The Extra Plate",

tag:"Sai-inspired reflection",

summary:
"At a small gathering, everyone takes food quickly. One person notices a late arrival and quietly keeps a plate aside.",

lesson:
"Love often looks ordinary. Remembering another person's place at the table is a form of service.",

source:
"Original Sai Resonance reflection — not a quotation.",

url:""

},


{
type:"reflection",

title:"The Broken Pencil",

tag:"Sai-inspired reflection",

summary:
"A student laughs when a classmate breaks a pencil during an exam. Another student silently offers a spare.",

lesson:
"Small acts can become large memories. Character is often revealed in moments nobody considers important.",

source:
"Original Sai Resonance reflection — not a quotation.",

url:""

},


{
type:"reflection",

title:"The Quiet Room",

tag:"Sai-inspired reflection",

summary:
"A person complains that the world is too noisy. An elder suggests spending five quiet minutes each morning without a phone or argument.",

lesson:
"We cannot control every sound around us. We can cultivate a little quiet within ourselves.",

source:
"Original Sai Resonance reflection — not a quotation.",

url:""

}

];


/* =====================================================
   TEACHINGS
===================================================== */

const TEACHINGS = [

{
title:"Love All; Serve All",

value:"Love",

quote:"Love All; Serve All.",

meaning:
"A concise expression of universal love joined with practical service.",

source:
"Sri Sathya Sai International Organization",

url:
"https://www.sathyasai.org/node/1126"
},


{
title:"Help Ever; Hurt Never",

value:"Nonviolence",

quote:"Help Ever; Hurt Never.",

meaning:
"Seek to help and avoid causing harm through thought, word or deed.",

source:
"Sri Sathya Sai International Organization",

url:
"https://www.sathyasai.org/node/671"
},


{
title:"Service is Love in Action",

value:"Service",

quote:"Service is love in action.",

meaning:
"Service is not only an activity; its quality depends on the love and sincerity brought to it.",

source:
"Selfless Service Study Guide",

url:
"https://www.sathyasai.org/sathya-sai/teachings/study-guides/selfless-service"
},


{
title:"Speak Obligingly",

value:"Right Speech",

quote:
"You cannot always oblige, but you can always speak obligingly.",

meaning:
"We cannot satisfy every request, but we can choose respectful speech even when we have to say no.",

source:
"Speak Obligingly — official study aid",

url:
"https://www.sathyasai.org/study-aids/speak-obligingly"
},


{
title:"Duty is God; Work is Worship",

value:"Right Conduct",

quote:
"Duty is God; work is worship.",

meaning:
"Ordinary responsibilities can become meaningful when performed sincerely and without neglect.",

source:
"Teachings of Bhagawan Sri Sathya Sai Baba",

url:
"https://www.sathyasai.org/publications/TeachingsOfBSSSB-Vol02.html"
},


{
title:"Five Human Values",

value:"Human Values",

quote:
"Truth · Right Conduct · Peace · Love · Nonviolence",

meaning:
"The Sathya Sai Education framework identifies these five as fundamental human values.",

source:
"Sathya Sai Education",

url:
"https://www.sathyasai.org/education"
},


{
title:"Practice What You Learn",

value:"Practice",

quote:
"Practice what I teach. That is enough. That is all I ask.",

meaning:
"The point of a teaching is transformation through practice, not simply collecting quotations.",

source:
"Divine Teachings of Sri Sathya Sai Baba",

url:
"https://www.sathyasai.org/study-guides/divine-teachings"
}

];


/* =====================================================
   DAILY CARD
===================================================== */

let currentDailyIndex = 0;


function getDailyCard() {

  const now = new Date();

  const start =
    new Date(
      now.getFullYear(),
      0,
      0
    );

  const difference =
    now - start;

  const day =
    Math.floor(
      difference /
      86400000
    );

  return day % CARDS.length;

}


/* =====================================================
   HTML SAFETY
===================================================== */

function escapeHTML(text) {

  return text
    .replace(/&/g,"&amp;")
    .replace(/</g,"&lt;")
    .replace(/>/g,"&gt;")
    .replace(/"/g,"&quot;")
    .replace(/'/g,"&#039;");

}


/* =====================================================
   RENDER DAILY
===================================================== */

function renderDaily() {

  currentDailyIndex =
    getDailyCard();

  const card =
    CARDS[currentDailyIndex];

  document.getElementById(
    "todayDate"
  ).textContent =
    new Date().toLocaleDateString(
      undefined,
      {
        day:"numeric",
        month:"short",
        year:"numeric"
      }
    );


  document.getElementById(
    "heroCardTitle"
  ).textContent =
    card.title;


  document.getElementById(
    "heroCardText"
  ).textContent =
    card.text;


  document.getElementById(
    "heroCardCategory"
  ).textContent =
    card.category.toUpperCase();


  document.getElementById(
    "heroCardNumber"
  ).textContent =
    `${currentDailyIndex + 1}/108`;


  document.getElementById(
    "dailyTitle"
  ).textContent =
    card.title;


  document.getElementById(
    "dailyText"
  ).textContent =
    card.text;


  document.getElementById(
    "dailyCategory"
  ).textContent =
    card.category.toUpperCase();


  document.getElementById(
    "dailyNumber"
  ).textContent =
    `CARD ${currentDailyIndex + 1} / 108`;

}


/* =====================================================
   STORIES
===================================================== */

function renderStories() {

  const search =
    document
      .getElementById("storySearch")
      .value
      .toLowerCase();

  const filter =
    document
      .getElementById("storyFilter")
      .value;


  const results =
    STORIES.filter(story => {

      const text =
        `${story.title}
        ${story.tag}
        ${story.summary}
        ${story.lesson}`
        .toLowerCase();

      return (
        text.includes(search) &&
        (
          filter === "all" ||
          story.type === filter
        )
      );

    });


  document.getElementById(
    "storyGrid"
  ).innerHTML = results.map(
    story => {

      const index =
        STORIES.indexOf(story);

      return `

        <article class="story-card">

          <span class="badge">

            ${
              story.type === "source"
              ? "SOURCE-BASED"
              : "SAI-INSPIRED REFLECTION"
            }

          </span>

          <h3>
            ${escapeHTML(story.title)}
          </h3>

          <p>
            ${escapeHTML(story.summary)}
          </p>

          <button
            class="read-button"
            onclick="openStory(${index})">

            Read story & lesson →

          </button>

        </article>

      `;

    }
  ).join("");

}


/* =====================================================
   TEACHINGS
===================================================== */

function renderTeachings() {

  const search =
    document
      .getElementById("teachingSearch")
      .value
      .toLowerCase();


  const results =
    TEACHINGS.filter(
      teaching => {

        const text =
          `${teaching.title}
          ${teaching.value}
          ${teaching.quote}
          ${teaching.meaning}`
          .toLowerCase();

        return text.includes(search);

      }
    );


  document.getElementById(
    "teachingGrid"
  ).innerHTML = results.map(
    teaching => {

      const index =
        TEACHINGS.indexOf(
          teaching
        );

      return `

        <article class="teaching-card">

          <span class="badge">

            ${escapeHTML(
              teaching.value
            )}

          </span>

          <h3>
            ${escapeHTML(
              teaching.title
            )}
          </h3>

          <blockquote>

            “${escapeHTML(
              teaching.quote
            )}”

          </blockquote>

          <p>

            ${escapeHTML(
              teaching.meaning
            )}

          </p>

          <button
            class="read-button"
            onclick="openTeaching(${index})">

            View source & context →

          </button>

        </article>

      `;

    }
  ).join("");

}


/* =====================================================
   108 CARDS
===================================================== */

function renderCards() {

  const search =
    document
      .getElementById("cardSearch")
      .value
      .toLowerCase();


  const results =
    CARDS.filter(card => {

      const text =
        `${card.title}
        ${card.category}
        ${card.text}`
        .toLowerCase();

      return text.includes(search);

    });


  document.getElementById(
    "cardGrid"
  ).innerHTML = results.map(
    (card) => {

      const index =
        CARDS.indexOf(card);

      return `

        <article class="
          mini-card
          ${
            index === currentDailyIndex
            ? "today"
            : ""
          }
        ">

          <span class="number">

            CARD
            ${String(index + 1)
              .padStart(3,"0")}

            ${
              index === currentDailyIndex
              ? " · TODAY"
              : ""
            }

          </span>


          <h3>

            ${escapeHTML(
              card.title
            )}

          </h3>


          <p>

            ${escapeHTML(
              card.text
            )}

          </p>


          <button
            class="read-button"
            onclick="openCard(${index})">

            Open card →

          </button>

        </article>

      `;

    }
  ).join("");

}


/* =====================================================
   OPEN CARD
===================================================== */

function openCard(index) {

  const card =
    CARDS[index];


  document.getElementById(
    "modalEyebrow"
  ).textContent =
    `CARD ${index + 1} · ${card.category.toUpperCase()}`;


  document.getElementById(
    "modalTitle"
  ).textContent =
    card.title;


  document.getElementById(
    "modalBody"
  ).innerHTML = `

    <blockquote>

      “${escapeHTML(
        card.text
      )}”

    </blockquote>

    <p>

      <strong>
        Reflection
      </strong>

    </p>

    <p>

      ${
        card.type === "quote"

        ? "This is presented as a published quotation. Please open the source to read its original context."

        : card.text

      }

    </p>

  `;


  document.getElementById(
    "modalSource"
  ).innerHTML =

    card.url

    ?

    `
      Source:
      ${escapeHTML(card.source)}

      —
      <a
        href="${card.url}"
        target="_blank">

        Read official source ↗

      </a>
    `

    :

    `Sai Resonance original reflection.`;


  openModal();

}


/* =====================================================
   OPEN STORY
===================================================== */

function openStory(index) {

  const story =
    STORIES[index];


  document.getElementById(
    "modalEyebrow"
  ).textContent =

    story.type === "source"

    ? "SOURCE-BASED CHINNA KATHA"

    : "SAI-INSPIRED REFLECTION";


  document.getElementById(
    "modalTitle"
  ).textContent =
    story.title;


  document.getElementById(
    "modalBody"
  ).innerHTML = `

    <p>

      ${escapeHTML(
        story.summary
      )}

    </p>

    <p>

      <strong>
        Wisdom / Lesson
      </strong>

    </p>

    <p>

      ${escapeHTML(
        story.lesson
      )}

    </p>

  `;


  document.getElementById(
    "modalSource"
  ).innerHTML =

    story.url

    ?

    `
      Source:
      ${escapeHTML(
        story.source
      )}

      —

      <a
        href="${story.url}"
        target="_blank">

        Read published source ↗

      </a>
    `

    :

    escapeHTML(
      story.source
    );


  openModal();

}


/* =====================================================
   OPEN TEACHING
===================================================== */

function openTeaching(index) {

  const teaching =
    TEACHINGS[index];


  document.getElementById(
    "modalEyebrow"
  ).textContent =
    teaching.value;


  document.getElementById(
    "modalTitle"
  ).textContent =
    teaching.title;


  document.getElementById(
    "modalBody"
  ).innerHTML = `

    <blockquote>

      “${escapeHTML(
        teaching.quote
      )}”

    </blockquote>

    <p>

      <strong>
        Meaning
      </strong>

    </p>

    <p>

      ${escapeHTML(
        teaching.meaning
      )}

    </p>

  `;


  document.getElementById(
    "modalSource"
  ).innerHTML = `

    Source:
    ${escapeHTML(
      teaching.source
    )}

    —

    <a
      href="${teaching.url}"
      target="_blank">

      Open published source ↗

    </a>

  `;


  openModal();

}


/* =====================================================
   MODAL
===================================================== */

function openModal() {

  document
    .getElementById("modal")
    .classList.add("open");

  document.body.style.overflow =
    "hidden";

}


function closeModal() {

  document
    .getElementById("modal")
    .classList.remove("open");

  document.body.style.overflow =
    "";

}


/* =====================================================
   DAILY
===================================================== */

function openDailyCard() {

  openCard(
    currentDailyIndex
  );

}


function copyDaily() {

  const card =
    CARDS[currentDailyIndex];


  const text =

`Sai Resonance — Today's Wisdom

${card.title}

${card.text}

Card ${currentDailyIndex + 1}/108`;


  if (
    navigator.clipboard
  ) {

    navigator.clipboard
      .writeText(text)
      .then(() => {

        alert(
          "Today's wisdom copied."
        );

      });

  }

}


/* =====================================================
   MOBILE MENU
===================================================== */

function toggleMenu() {

  const nav =
    document.getElementById(
      "navigation"
    );


  if (
    nav.style.display ===
    "flex"
  ) {

    nav.style.display =
      "none";

  }

  else {

    nav.style.display =
      "flex";

  }

}


/* =====================================================
   EVENTS
===================================================== */

document.addEventListener(
  "DOMContentLoaded",
  function() {

    renderDaily();

    renderStories();

    renderTeachings();

    renderCards();


    document
      .getElementById("storySearch")
      .addEventListener(
        "input",
        renderStories
      );


    document
      .getElementById("storyFilter")
      .addEventListener(
        "change",
        renderStories
      );


    document
      .getElementById("teachingSearch")
      .addEventListener(
        "input",
        renderTeachings
      );


    document
      .getElementById("cardSearch")
      .addEventListener(
        "input",
        renderCards
      );


    document.addEventListener(
      "keydown",
      function(event) {

        if (
          event.key === "Escape"
        ) {

          closeModal();

        }

      }
    );

  }
);
