/* =========================================================
   SAI RESONANCE
   Main JavaScript
========================================================= */


/* =========================================================
   108 DAILY CARDS
========================================================= */

const CARDS = [

    {
        title: "I am with you",
        text: "Let the thought of divine companionship become a reminder to walk through the day with courage and love.",
        category: "Presence"
    },

    {
        title: "I am watching you",
        text: "Let your actions be worthy even when nobody else is watching.",
        category: "Awareness"
    },

    {
        title: "You are Mine",
        text: "Remember that belonging can be expressed through love, responsibility and trust.",
        category: "Love"
    },

    {
        title: "Be peaceful",
        text: "Before answering, pause. A peaceful mind often sees what an agitated mind misses.",
        category: "Peace"
    },

    {
        title: "Speak truth",
        text: "Let your words become a reflection of sincerity rather than a weapon against another.",
        category: "Truth"
    },

    {
        title: "Serve quietly",
        text: "Do good without waiting for applause. Service becomes beautiful when the ego becomes smaller.",
        category: "Service"
    },

    {
        title: "Love everyone",
        text: "Try to see the human being before seeing the difference.",
        category: "Love"
    },

    {
        title: "Help ever",
        text: "Look for one small opportunity today to make another person's burden lighter.",
        category: "Service"
    },

    {
        title: "Hurt never",
        text: "Before speaking or acting, ask whether your action will unnecessarily cause pain.",
        category: "Compassion"
    },

    {
        title: "Remember the Divine",
        text: "A few moments of sincere remembrance can change the direction of an entire day.",
        category: "Devotion"
    },

    {
        title: "Do your duty",
        text: "Give honest attention to the responsibility in front of you.",
        category: "Dharma"
    },

    {
        title: "Let go of anger",
        text: "Anger may arrive quickly, but you can choose not to give it the final word.",
        category: "Wisdom"
    },

    {
        title: "Choose patience",
        text: "Not every answer has to be immediate. Sometimes wisdom needs silence first.",
        category: "Peace"
    },

    {
        title: "See the good",
        text: "Train the mind to notice goodness even when circumstances are difficult.",
        category: "Wisdom"
    },

    {
        title: "Be grateful",
        text: "Gratitude turns ordinary things into reminders of how much has already been given.",
        category: "Reflection"
    },

    {
        title: "Forgive",
        text: "Forgiveness does not erase what happened; it can prevent the past from controlling the present.",
        category: "Compassion"
    },

    {
        title: "Walk the right path",
        text: "When choices are confusing, ask which action preserves truth, dignity and compassion.",
        category: "Dharma"
    },

    {
        title: "Keep the mind clean",
        text: "What you repeatedly think about eventually shapes how you speak and act.",
        category: "Awareness"
    },

    {
        title: "Be humble",
        text: "Knowledge becomes more beautiful when it produces humility rather than pride.",
        category: "Wisdom"
    },

    {
        title: "Give without fear",
        text: "Generosity begins when we stop calculating every act of kindness.",
        category: "Service"
    },

    {
        title: "Love is strength",
        text: "Compassion does not make a person weak. It can give courage a human face.",
        category: "Love"
    },

    {
        title: "Do not compare",
        text: "Another person's journey cannot be used as the ruler for your own.",
        category: "Peace"
    },

    {
        title: "Be honest with yourself",
        text: "Self-understanding begins when we stop hiding from our own motives.",
        category: "Truth"
    },

    {
        title: "Listen",
        text: "Sometimes the most loving response is not an answer but attentive listening.",
        category: "Love"
    },

    {
        title: "Make your work worship",
        text: "Bring sincerity and care into ordinary work instead of waiting for extraordinary moments.",
        category: "Dharma"
    },

    {
        title: "Control the tongue",
        text: "Words cannot be taken back easily. Let speech pass through kindness before it reaches another person.",
        category: "Awareness"
    },

    {
        title: "Choose kindness",
        text: "A small act of kindness can remain in another person's memory long after the moment has passed.",
        category: "Compassion"
    },

    {
        title: "Faith needs practice",
        text: "Let what you believe gradually become visible in how you live.",
        category: "Devotion"
    },

    {
        title: "Be useful",
        text: "Ask not only what you can receive from a situation, but what good you can contribute.",
        category: "Service"
    },

    {
        title: "Keep going",
        text: "Difficult days do not define the whole journey.",
        category: "Courage"
    },

    {
        title: "Silence can teach",
        text: "When the mind becomes quiet, small truths that were hidden by noise can become visible.",
        category: "Wisdom"
    },

    {
        title: "Do not repay hurt with hurt",
        text: "Breaking a cycle of anger may begin with one person choosing not to continue it.",
        category: "Compassion"
    },

    {
        title: "Truth needs courage",
        text: "Speaking truth responsibly sometimes requires more courage than speaking loudly.",
        category: "Truth"
    },

    {
        title: "Respect every person",
        text: "Respect need not depend on agreement.",
        category: "Love"
    },

    {
        title: "Remember your purpose",
        text: "When distractions multiply, return to the reason behind your work and your life.",
        category: "Reflection"
    },

    {
        title: "Be content",
        text: "Contentment is not the end of ambition; it is freedom from endless dissatisfaction.",
        category: "Peace"
    },

    {
        title: "Serve where you stand",
        text: "You do not always need a grand opportunity to be useful.",
        category: "Service"
    },

    {
        title: "See unity",
        text: "Differences can exist without destroying the deeper human bond between people.",
        category: "Love"
    },

    {
        title: "Study deeply",
        text: "Reading becomes meaningful when knowledge changes the way we understand and live.",
        category: "Wisdom"
    },

    {
        title: "Keep faith during uncertainty",
        text: "When you cannot see the whole path, take the next honest step.",
        category: "Devotion"
    },

    {
        title: "Do not be ruled by fear",
        text: "Fear may warn you, but it does not have to make every decision for you.",
        category: "Courage"
    },

    {
        title: "Be disciplined",
        text: "Small acts repeated consistently can become stronger than occasional bursts of effort.",
        category: "Dharma"
    },

    {
        title: "Think before reacting",
        text: "A pause between emotion and action can protect relationships and preserve dignity.",
        category: "Awareness"
    },

    {
        title: "Give respect to elders",
        text: "Wisdom often travels through generations. Listen before deciding that an old lesson has no value.",
        category: "Respect"
    },

    {
        title: "Do not waste food",
        text: "Respect for food can become a simple daily practice of gratitude and responsibility.",
        category: "Awareness"
    },

    {
        title: "Avoid waste",
        text: "Use resources carefully and remember those who have less.",
        category: "Service"
    },

    {
        title: "Keep promises",
        text: "Trust grows when words and actions meet.",
        category: "Truth"
    },

    {
        title: "Learn from mistakes",
        text: "A mistake can become a teacher when we are willing to examine it honestly.",
        category: "Wisdom"
    },

    {
        title: "Do not carry yesterday everywhere",
        text: "Learn from the past without making it the permanent address of the mind.",
        category: "Peace"
    },

    {
        title: "Let love guide speech",
        text: "The same truth can be delivered with cruelty or compassion. Choose compassion.",
        category: "Love"
    },

    {
        title: "Be responsible",
        text: "Spiritual growth is not separate from the way we handle ordinary responsibilities.",
        category: "Dharma"
    },

    {
        title: "Keep your heart soft",
        text: "Do not let disappointment turn into permanent hardness.",
        category: "Compassion"
    },

    {
        title: "Respect nature",
        text: "The world around us is not merely a resource. Treat it with care.",
        category: "Service"
    },

    {
        title: "Do not seek praise",
        text: "Good work remains good even when nobody applauds.",
        category: "Humility"
    },

    {
        title: "Practice what you learn",
        text: "Knowledge becomes wisdom when it moves from the page into life.",
        category: "Wisdom"
    },

    {
        title: "Be truthful in small things",
        text: "Integrity is built through ordinary choices, not only dramatic moments.",
        category: "Truth"
    },

    {
        title: "Protect another's dignity",
        text: "Even when correcting someone, avoid humiliating them.",
        category: "Compassion"
    },

    {
        title: "Do not judge quickly",
        text: "A person's visible action rarely reveals the whole story behind it.",
        category: "Wisdom"
    },

    {
        title: "Make time for reflection",
        text: "A few quiet minutes can reveal what a busy day hides.",
        category: "Reflection"
    },

    {
        title: "Be cheerful",
        text: "A gentle smile can become a small form of service.",
        category: "Love"
    },

    {
        title: "Do not give up on people",
        text: "Change can take time. Leave room for growth.",
        category: "Compassion"
    },

    {
        title: "Respect all faiths",
        text: "Spiritual understanding grows when we learn to respect sincere paths of faith.",
        category: "Unity"
    },

    {
        title: "See service as responsibility",
        text: "Helping others need not wait for a special occasion.",
        category: "Service"
    },

    {
        title: "Keep learning",
        text: "A sincere seeker remains willing to learn, unlearn and learn again.",
        category: "Wisdom"
    },

    {
        title: "Use wealth wisely",
        text: "Material resources can become instruments of good when used responsibly.",
        category: "Dharma"
    },

    {
        title: "Avoid unnecessary desire",
        text: "Ask whether every desire truly deserves your time, money and attention.",
        category: "Contentment"
    },

    {
        title: "Be gentle with children",
        text: "The way adults treat children becomes part of the world children learn to create.",
        category: "Love"
    },

    {
        title: "Respect teachers",
        text: "A teacher offers more than information; good teaching can shape character.",
        category: "Education"
    },

    {
        title: "Education should transform",
        text: "Learning has deeper value when it develops character as well as knowledge.",
        category: "Education"
    },

    {
        title: "Let action follow values",
        text: "Values become real only when they influence decisions.",
        category: "Dharma"
    },

    {
        title: "Pray with sincerity",
        text: "Prayer need not be complicated. Sincerity is more important than display.",
        category: "Devotion"
    },

    {
        title: "Remember the inner self",
        text: "Spend some time looking inward rather than constantly measuring the outside world.",
        category: "Reflection"
    },

    {
        title: "Be careful with criticism",
        text: "Correction can help; humiliation rarely does.",
        category: "Compassion"
    },

    {
        title: "Choose cooperation",
        text: "Many problems become smaller when people stop competing over ego.",
        category: "Unity"
    },

    {
        title: "Do not let success inflate you",
        text: "Success is an opportunity to become more responsible, not less humble.",
        category: "Humility"
    },

    {
        title: "Do not let failure define you",
        text: "Failure can be an event without becoming an identity.",
        category: "Courage"
    },

    {
        title: "Be patient with yourself",
        text: "Growth is rarely a straight line.",
        category: "Peace"
    },

    {
        title: "Give your best",
        text: "Your responsibility is the sincerity of your effort, not control over every outcome.",
        category: "Dharma"
    },

    {
        title: "Be mindful of intention",
        text: "Two actions can look similar while coming from very different intentions.",
        category: "Awareness"
    },

    {
        title: "Choose peace over ego",
        text: "Not every disagreement deserves to become a battle.",
        category: "Peace"
    },

    {
        title: "Remember gratitude",
        text: "Before asking for more, notice what is already present.",
        category: "Gratitude"
    },

    {
        title: "Give people another chance",
        text: "When appropriate, allow room for sincere correction and growth.",
        category: "Compassion"
    },

    {
        title: "Keep company with goodness",
        text: "The people and ideas around us influence the direction of the mind.",
        category: "Wisdom"
    },

    {
        title: "Use technology wisely",
        text: "Tools should serve human purpose rather than consume every moment of attention.",
        category: "Awareness"
    },

    {
        title: "Protect your attention",
        text: "What receives your attention repeatedly becomes part of your inner world.",
        category: "Awareness"
    },

    {
        title: "Do not confuse information with wisdom",
        text: "Knowing many facts is different from knowing how to live well.",
        category: "Wisdom"
    },

    {
        title: "Remember the value of simplicity",
        text: "A simple life can create space for deeper thought and genuine relationships.",
        category: "Contentment"
    },

    {
        title: "Be compassionate to the lonely",
        text: "Sometimes presence itself is a form of service.",
        category: "Love"
    },

    {
        title: "Help without humiliating",
        text: "True assistance preserves the dignity of the person receiving it.",
        category: "Service"
    },

    {
        title: "Use your words carefully",
        text: "Words can build a bridge or create a wound.",
        category: "Truth"
    },

    {
        title: "Do not be arrogant about knowledge",
        text: "The more we learn, the more we can recognize how much remains unknown.",
        category: "Humility"
    },

    {
        title: "Remember that character matters",
        text: "What you repeatedly do becomes part of who you become.",
        category: "Dharma"
    },

    {
        title: "Keep the home peaceful",
        text: "The spiritual atmosphere of a home is built through ordinary words and actions.",
        category: "Peace"
    },

    {
        title: "Respect differences",
        text: "Unity does not require everyone to look, think or worship in exactly the same way.",
        category: "Unity"
    },

    {
        title: "Do not spread gossip",
        text: "If a story does not help, heal or inform responsibly, consider leaving it unspoken.",
        category: "Awareness"
    },

    {
        title: "Be trustworthy",
        text: "Let people feel safe with your words, commitments and actions.",
        category: "Truth"
    },

    {
        title: "Remember that service begins nearby",
        text: "Look around you. The first opportunity to help may already be present.",
        category: "Service"
    },

    {
        title: "Let devotion become conduct",
        text: "The value of devotion is reflected in how it changes daily behaviour.",
        category: "Devotion"
    },

    {
        title: "Choose understanding",
        text: "Before deciding what someone meant, make an effort to understand their perspective.",
        category: "Wisdom"
    },

    {
        title: "Do not lose hope",
        text: "Even a long night eventually gives way to another morning.",
        category: "Courage"
    },

    {
        title: "Keep the mind steady",
        text: "Circumstances change. Practice returning the mind to steadiness.",
        category: "Peace"
    },

    {
        title: "Let kindness become habit",
        text: "A single good act is wonderful; a life shaped by goodness is deeper.",
        category: "Love"
    },

    {
        title: "Be a source of peace",
        text: "Wherever you go, try to reduce unnecessary conflict rather than increase it.",
        category: "Peace"
    },

    {
        title: "Remember the lesson",
        text: "A story is not complete when it ends. Its real test begins when we apply its lesson.",
        category: "Wisdom"
    },

    {
        title: "Serve with humility",
        text: "Service becomes purer when the desire for recognition becomes smaller.",
        category: "Service"
    },

    {
        title: "Keep truth and love together",
        text: "Truth without compassion can wound; compassion without truth can mislead. Seek both.",
        category: "Truth"
    },

    {
        title: "Return to the heart",
        text: "When the mind becomes crowded, return to the simple question: what is the loving thing to do?",
        category: "Love"
    }

];


/* =========================================================
   VERIFY 108
========================================================= */

console.log("Sai Resonance cards:", CARDS.length);


/* =========================================================
   VAHINI LIBRARY
========================================================= */

const VAHINIS = [

    {
        number: 1,
        title: "Bhagavatha Vahini",
        subtitle: "The story of the glory of the Lord",
        summary:
            "Sri Sathya Sai Baba's retelling of the Srimad Bhagavatam, with special attention to the story of Krishna and the spiritual journey of King Parikshith.",
        url:
            "https://www.sathyasai.org/teachings/vahini"
    },

    {
        number: 2,
        title: "Dharma Vahini",
        subtitle: "The path of right action",
        summary:
            "A study of dharma and right conduct, including family life, education, social responsibilities and the inner basis of righteous action.",
        url:
            "https://www.sathyasai.org/teachings/vahini/dharma-vahini"
    },

    {
        number: 3,
        title: "Dhyana Vahini",
        subtitle: "The stream of meditation",
        summary:
            "Guidance concerning meditation, concentration and the inward discipline through which the seeker turns attention toward the inner Self.",
        url:
            "https://www.sathyasai.org/resources/ebooks/vahinis"
    },

    {
        number: 4,
        title: "Geetha Vahini",
        subtitle: "The divine gospel",
        summary:
            "Reflections on the Bhagavad Gita and its teachings concerning duty, devotion, knowledge, action and the spiritual purpose of human life.",
        url:
            "https://www.sathyasai.org/resources/ebooks/vahinis"
    },

    {
        number: 5,
        title: "Jnana Vahini",
        subtitle: "The stream of spiritual wisdom",
        summary:
            "A collection of teachings on spiritual knowledge, the Self, devotion, wisdom and the movement from intellectual understanding toward direct insight.",
        url:
            "https://www.sathyasai.org/teachings/vahini/jnana-vahini"
    },

    {
        number: 6,
        title: "Leela Kaivalya Vahini",
        subtitle: "The cosmic play of the Divine",
        summary:
            "A series of questions and answers addressing spiritual concepts and difficulties faced by the seeker, drawing on the Vedas and Upanishads.",
        url:
            "https://www.sathyasai.org/resources/ebooks/vahinis"
    },

    {
        number: 7,
        title: "Prasanthi Vahini",
        subtitle: "The stream of supreme peace",
        summary:
            "Reflections on Prasanthi, or supreme peace, and the inner transformation required to move beyond restlessness toward spiritual calm.",
        url:
            "https://www.sathyasai.org/resources/ebooks/vahinis"
    },

    {
        number: 8,
        title: "Prasnothara Vahini",
        subtitle: "Questions and answers",
        summary:
            "A handbook-style collection addressing questions related to spiritual life, offering guidance for the seeker's journey toward God.",
        url:
            "https://www.sathyasai.org/resources/ebooks/vahinis"
    },

    {
        number: 9,
        title: "Prema Vahini",
        subtitle: "The stream of divine love",
        summary:
            "An exploration of divine love and its place in spiritual life. The work presents love as a central principle of transformation.",
        url:
            "https://www.sathyasai.org/resources/ebooks/vahinis"
    },

    {
        number: 10,
        title: "Ramakatha Rasavahini — Part I",
        subtitle: "The stream of sacred sweetness",
        summary:
            "The first part of Sri Sathya Sai Baba's retelling of the Rama story, presenting Rama's life and actions with a spiritual interpretation of dharma, truth and devotion.",
        url:
            "https://www.sathyasai.org/teachings/vahini/ramakatha-rasavahini-part-1"
    },

    {
        number: 11,
        title: "Ramakatha Rasavahini — Part II",
        subtitle: "The Rama story continued",
        summary:
            "The continuation of the Rama narrative, exploring the characters, events and spiritual lessons surrounding Rama, Sita, Lakshmana, Hanuman and Ravana.",
        url:
            "https://www.sathyasai.org/resources/ebooks/vahinis"
    },

    {
        number: 12,
        title: "Sandeha Nivarini",
        subtitle: "Removal of spiritual doubts",
        summary:
            "A question-and-answer style work intended to address doubts concerning spiritual life, with explanations, stories and examples used to clarify deeper principles.",
        url:
            "https://www.sathyasai.org/resources/ebooks/vahinis"
    },

    {
        number: 13,
        title: "Sathya Sai Vahini",
        subtitle: "The stream of Divine Grace",
        summary:
            "A broad presentation of spiritual truths concerning the Self, Indian spiritual values, knowledge, the Divine and the search for meaning.",
        url:
            "https://www.sathyasai.org/teachings/vahini/sathya-sai-vahini"
    },

    {
        number: 14,
        title: "Sutra Vahini",
        subtitle: "The wisdom of the Brahma Sutras",
        summary:
            "An explanation of the essence of Vedanta through the Brahma Sutras, focusing on Brahma Vidya and the nature of ultimate spiritual reality.",
        url:
            "https://www.sathyasai.org/resources/ebooks/vahinis"
    },

    {
        number: 15,
        title: "Upanishad Vahini",
        subtitle: "The essence of Upanishadic wisdom",
        summary:
            "A presentation of important Upanishadic teachings, drawing out their spiritual significance for study, understanding and inner transformation.",
        url:
            "https://www.sathyasai.org/resources/ebooks/vahinis"
    },

    {
        number: 16,
        title: "Vidya Vahini",
        subtitle: "The stream of spiritual education",
        summary:
            "Essays concerning education, its deeper purpose and the development of truth, goodness, beauty and character alongside intellectual learning.",
        url:
            "https://www.sathyasai.org/resources/ebooks/vahinis"
    }

];


/* =========================================================
   CHINNA KATHA
========================================================= */

const STORIES = [

    {
        title: "The Value of Truth",
        category: "truth",
        summary:
            "A short reflection on why truthfulness must become part of ordinary conduct, not merely an ideal spoken about.",
        body:
            "Stories used in spiritual teaching often turn a simple situation into a question of character. The deeper lesson is that truth has to be protected even when telling it is inconvenient.",
        source:
            "Sai Resonance reflection. For documented stories and discourses, consult the official Sri Sathya Sai literature collections."
    },

    {
        title: "The Two Seeds",
        category: "wisdom",
        summary:
            "A reflection on how the thoughts we repeatedly cultivate can influence the direction of our lives.",
        body:
            "The seed becomes a useful metaphor for the mind. What is repeatedly encouraged can grow stronger. The story invites the reader to examine which qualities are being watered every day.",
        source:
            "Sai Resonance original reflection — not presented as a quotation from Sri Sathya Sai Baba."
    },

    {
        title: "The Quiet Act of Service",
        category: "service",
        summary:
            "A reminder that service does not need an audience.",
        body:
            "A helpful action performed quietly can be more meaningful than an action performed mainly for recognition. The lesson is to look for opportunities to help without making the self the centre of the service.",
        source:
            "Sai Resonance original reflection — not presented as a quotation from Sri Sathya Sai Baba."
    },

    {
        title: "Rama and Dharma",
        category: "dharma",
        summary:
            "Rama's story can be read not only as an epic narrative but also as a study of duty, truth and righteous conduct.",
        body:
            "In Ramakatha Rasavahini, Sri Sathya Sai Baba presents the Rama story from a spiritual perspective, drawing attention to Rama's role as an example of dharma and the deeper significance of the characters and events.",
        source:
            "Related official source: Sri Sathya Sai Baba, Ramakatha Rasavahini."
    },

    {
        title: "The Power of Love",
        category: "love",
        summary:
            "A reflection on how genuine love changes the way we see another person.",
        body:
            "Love can change the question from 'What can I get?' to 'What can I give?' The lesson is to allow compassion to influence ordinary relationships.",
        source:
            "Sai Resonance original reflection — not presented as a quotation from Sri Sathya Sai Baba."
    },

    {
        title: "The Student and the Teacher",
        category: "wisdom",
        summary:
            "A reflection on humility in learning.",
        body:
            "Learning requires more than collecting information. A student must also develop the humility to listen, question, practise and correct mistakes.",
        source:
            "Sai Resonance reflection."
    },

    {
        title: "The Lamp",
        category: "devotion",
        summary:
            "A simple image of a lamp becomes a reflection on sharing light without losing one's own.",
        body:
            "A lamp can light another lamp without becoming empty. The image invites reflection on how knowledge, love and service can be shared.",
        source:
            "Sai Resonance original reflection — not presented as a quotation."
    },

    {
        title: "The Forgotten Gift",
        category: "gratitude",
        summary:
            "A reflection on how easily ordinary blessings become invisible when attention is focused only on what is missing.",
        body:
            "Gratitude changes attention. Instead of constantly counting what is absent, the mind learns to notice what is already present.",
        source:
            "Sai Resonance original reflection."
    },

    {
        title: "The Angry Word",
        category: "love",
        summary:
            "A reminder that words spoken in anger can leave a mark long after the anger disappears.",
        body:
            "Before speaking in anger, pause. A few seconds of silence may protect a relationship from a wound that would otherwise take much longer to heal.",
        source:
            "Sai Resonance original reflection."
    },

    {
        title: "The Journey Within",
        category: "devotion",
        summary:
            "A reflection on the inward journey of self-understanding.",
        body:
            "Spiritual literature repeatedly invites the seeker to look beyond external achievement and examine the mind, motives and sense of self.",
        source:
            "Sai Resonance reflection based on themes found across the Vahini literature."
    },

    {
        title: "The Smallest Service",
        category: "service",
        summary:
            "A reminder that service can begin with the person standing immediately in front of us.",
        body:
            "Service does not always require a large institution or dramatic event. Listening, helping, teaching and sharing can all become forms of service when performed with sincerity.",
        source:
            "Sai Resonance reflection."
    },

    {
        title: "The Question Before the Answer",
        category: "wisdom",
        summary:
            "Sometimes the most important spiritual step is asking the right question.",
        body:
            "Many Vahini works use questions as a doorway into spiritual inquiry. The reader is encouraged not merely to collect answers but to examine the assumptions behind the question.",
        source:
            "Sai Resonance reflection."
    }

];


/* =========================================================
   TEACHINGS
========================================================= */

const TEACHINGS = [

    {
        title: "Love",
        text:
            "Love is a recurring central theme in Sri Sathya Sai Baba's teachings. It can be studied not merely as an emotion but as a way of relating to others."
    },

    {
        title: "Truth",
        text:
            "Truthfulness concerns both what we say and the integrity with which we live."
    },

    {
        title: "Right Conduct",
        text:
            "Dharma concerns right action and responsible conduct in the circumstances of life."
    },

    {
        title: "Peace",
        text:
            "Peace is presented as an inner condition that requires discipline rather than something dependent entirely on external circumstances."
    },

    {
        title: "Service",
        text:
            "Service directs attention beyond the individual self toward the welfare of others."
    },

    {
        title: "Education",
        text:
            "The deeper purpose of education includes character and the development of truth, goodness and responsibility."
    },

    {
        title: "Self-knowledge",
        text:
            "The Vahini writings repeatedly encourage the seeker to inquire into the nature of the Self."
    },

    {
        title: "Devotion",
        text:
            "Devotion can become a path of inner transformation when it is joined with sincere practice."
    },

    {
        title: "Contentment",
        text:
            "Contentment can help the mind become less dependent on endless acquisition and comparison."
    },

    {
        title: "Compassion",
        text:
            "Compassion changes the way we respond to another person's difficulty."
    },

    {
        title: "Unity",
        text:
            "Spiritual inquiry can lead the seeker toward an understanding of the deeper unity of humanity."
    },

    {
        title: "Practice",
        text:
            "Reading and hearing spiritual teachings becomes meaningful when they influence everyday conduct."
    }

];


/* =========================================================
   WISDOM REFLECTIONS
========================================================= */

const WISDOM = [

    "Read slowly. A single sentence understood deeply can be more valuable than many pages read hurriedly.",

    "A story becomes wisdom when its lesson enters daily life.",

    "Before reacting, create a little space between what happened and what you choose to do.",

    "The quietest acts of service are sometimes the ones that change another person's day.",

    "Knowledge can fill the mind; practice gives knowledge a place in life.",

    "Ask yourself today: what quality do I want my actions to express?",

    "A peaceful mind does not mean that problems disappear. It means we meet them differently.",

    "Let today's reading become tomorrow's conduct."
];


/* =========================================================
   STORAGE
========================================================= */

const PICK_STORAGE_KEY =
    "sai_resonance_daily_chit_picks";

const DAILY_PICK_LIMIT = 3;


/* =========================================================
   DOM ELEMENTS
========================================================= */

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

const anotherChitButton =
    document.getElementById("anotherChitButton");

const copyDailyButton =
    document.getElementById("copyDailyButton");

const chitLimitMessage =
    document.getElementById("chitLimitMessage");

const dashboardDailyTitle =
    document.getElementById("dashboardDailyTitle");


/* =========================================================
   DATE HELPERS
========================================================= */

function getTodayString() {

    const now = new Date();

    const year =
        now.getFullYear();

    const month =
        String(now.getMonth() + 1).padStart(2, "0");

    const day =
        String(now.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
}


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
   DAILY CARD
========================================================= */

function getDailyChit() {

    const index =
        getDayOfYear() % CARDS.length;

    return {
        ...CARDS[index],
        index
    };
}


function displayDailyChit(card) {

    dailyTitle.textContent =
        card.title;

    dailyText.textContent =
        card.text;

    dailyCategory.textContent =
        card.category;

    dailyNumber.textContent =
        `${card.index + 1} / ${CARDS.length}`;

    chitDate.textContent =
        new Date().toLocaleDateString(
            undefined,
            {
                weekday: "long",
                month: "long",
                day: "numeric"
            }
        );

    if (dashboardDailyTitle) {

        dashboardDailyTitle.textContent =
            card.title;

    }
}


/* =========================================================
   PICK DATA
========================================================= */

function getPickData() {

    const today =
        getTodayString();

    let data = null;

    try {

        data =
            JSON.parse(
                localStorage.getItem(
                    PICK_STORAGE_KEY
                )
            );

    } catch (error) {

        data = null;

    }


    if (!data || data.date !== today) {

        data = {
            date: today,
            used: 0
        };

    }

    return data;
}


function savePickData(data) {

    localStorage.setItem(
        PICK_STORAGE_KEY,
        JSON.stringify(data)
    );

}


/* =========================================================
   PICK BUTTON
========================================================= */

function updatePickButton() {

    const data =
        getPickData();

    const remaining =
        DAILY_PICK_LIMIT - data.used;


    if (remaining <= 0) {

        anotherChitButton.disabled =
            true;

        anotherChitButton.textContent =
            "Come back tomorrow 🌸";

        chitLimitMessage.textContent =
            "You have used all 3 extra picks for today.";

        return;

    }


    anotherChitButton.disabled =
        false;

    anotherChitButton.textContent =
        `Pick Another Chit · ${remaining} left today`;

    chitLimitMessage.textContent =
        "The automatic daily card is separate from these 3 extra picks.";

}


/* =========================================================
   RANDOM EXTRA CARD
========================================================= */

function pickAnotherChit() {

    const data =
        getPickData();


    if (data.used >= DAILY_PICK_LIMIT) {

        updatePickButton();

        return;

    }


    const daily =
        getDailyChit();


    let randomIndex;


    do {

        randomIndex =
            Math.floor(
                Math.random() * CARDS.length
            );

    } while (
        randomIndex === daily.index
    );


    displayDailyChit({

        ...CARDS[randomIndex],

        index: randomIndex

    });


    data.used++;

    savePickData(data);

    updatePickButton();

}


/* =========================================================
   COPY
========================================================= */

function copyDailyChit() {

    const text =
        `${dailyTitle.textContent}\n\n${dailyText.textContent}\n\n— Sai Resonance`;

    navigator.clipboard
        .writeText(text)
        .then(() => {

            const oldText =
                copyDailyButton.textContent;

            copyDailyButton.textContent =
                "Copied ✓";

            setTimeout(() => {

                copyDailyButton.textContent =
                    oldText;

            }, 1500);

        })
        .catch(() => {

            const area =
                document.createElement("textarea");

            area.value = text;

            document.body.appendChild(area);

            area.select();

            document.execCommand("copy");

            area.remove();

            copyDailyButton.textContent =
                "Copied ✓";

            setTimeout(() => {

                copyDailyButton.textContent =
                    "Copy";

            }, 1500);

        });

}


/* =========================================================
   STORY RENDER
========================================================= */

function renderStories() {

    const grid =
        document.getElementById("storyGrid");

    const search =
        document
            .getElementById("storySearch")
            .value
            .toLowerCase()
            .trim();

    const filter =
        document
            .getElementById("storyFilter")
            .value;


    const filtered =
        STORIES.filter(story => {

            const matchesSearch =
                !search ||
                story.title.toLowerCase().includes(search) ||
                story.summary.toLowerCase().includes(search) ||
                story.body.toLowerCase().includes(search);

            const matchesFilter =
                filter === "all" ||
                story.category === filter;

            return (
                matchesSearch &&
                matchesFilter
            );

        });


    document.getElementById("storyCount")
        .textContent =
        `${filtered.length} stories`;


    if (!filtered.length) {

        grid.innerHTML =
            `<div class="empty-state">
                No stories found. Try another search.
            </div>`;

        return;

    }


    grid.innerHTML =
        filtered
            .map((story, index) => {

                return `
                    <article
                        class="story-card"
                        data-story-index="${STORIES.indexOf(story)}"
                    >

                        <div class="story-category">
                            ${story.category}
                        </div>

                        <h3>
                            ${story.title}
                        </h3>

                        <p>
                            ${story.summary}
                        </p>

                        <span class="read-more">
                            Read reflection →
                        </span>

                    </article>
                `;

            })
            .join("");


    grid
        .querySelectorAll(".story-card")
        .forEach(card => {

            card.addEventListener(
                "click",
                () => {

                    const index =
                        Number(
                            card.dataset.storyIndex
                        );

                    openModal(
                        STORIES[index].category,
                        STORIES[index].title,
                        STORIES[index].body,
                        STORIES[index].source
                    );

                }
            );

        });

}


/* =========================================================
   VAHINI RENDER
========================================================= */

function renderVahinis() {

    const grid =
        document.getElementById("vahiniGrid");

    const input =
        document.getElementById("vahiniSearch");

    const search =
        input.value.toLowerCase().trim();


    const filtered =
        VAHINIS.filter(vahini => {

            return (
                !search ||
                vahini.title
                    .toLowerCase()
                    .includes(search) ||

                vahini.subtitle
                    .toLowerCase()
                    .includes(search) ||

                vahini.summary
                    .toLowerCase()
                    .includes(search)
            );

        });


    if (!filtered.length) {

        grid.innerHTML =
            `<div class="empty-state">
                No Vahini found.
            </div>`;

        return;

    }


    grid.innerHTML =
        filtered
            .map(vahini => {

                return `
                    <article class="vahini-card">

                        <div class="vahini-number">
                            VAHINI ${String(vahini.number).padStart(2, "0")}
                        </div>

                        <h3>
                            ${vahini.title}
                        </h3>

                        <div class="vahini-subtitle">
                            ${vahini.subtitle}
                        </div>

                        <p>
                            ${vahini.summary}
                        </p>

                        <a
                            href="${vahini.url}"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="vahini-link"
                        >
                            Official source →
                        </a>

                    </article>
                `;

            })
            .join("");

}


/* =========================================================
   TEACHINGS
========================================================= */

function renderTeachings() {

    const grid =
        document.getElementById("teachingGrid");

    const search =
        document
            .getElementById("teachingSearch")
            .value
            .toLowerCase()
            .trim();


    const filtered =
        TEACHINGS.filter(item => {

            return (
                !search ||
                item.title
                    .toLowerCase()
                    .includes(search) ||

                item.text
                    .toLowerCase()
                    .includes(search)
            );

        });


    if (!filtered.length) {

        grid.innerHTML =
            `<div class="empty-state">
                No teaching found.
            </div>`;

        return;

    }


    grid.innerHTML =
        filtered
            .map(item => {

                return `
                    <article class="teaching-card">

                        <h3>
                            ${item.title}
                        </h3>

                        <p>
                            ${item.text}
                        </p>

                    </article>
                `;

            })
            .join("");

}


/* =========================================================
   108 CARD GRID
========================================================= */

function renderCards() {

    const grid =
        document.getElementById("cardGrid");

    const search =
        document
            .getElementById("cardSearch")
            .value
            .toLowerCase()
            .trim();


    const filtered =
        CARDS
            .map((card, index) => ({
                ...card,
                index
            }))
            .filter(card => {

                return (
                    !search ||
                    card.title
                        .toLowerCase()
                        .includes(search) ||

                    card.text
                        .toLowerCase()
                        .includes(search) ||

                    card.category
                        .toLowerCase()
                        .includes(search)
                );

            });


    if (!filtered.length) {

        grid.innerHTML =
            `<div class="empty-state">
                No card found.
            </div>`;

        return;

    }


    grid.innerHTML =
        filtered
            .map(card => {

                return `
                    <article
                        class="reflection-card"
                        data-card-index="${card.index}"
                    >

                        <div class="reflection-number">
                            CARD ${String(card.index + 1).padStart(3, "0")}
                        </div>

                        <h3>
                            ${card.title}
                        </h3>

                        <p>
                            ${card.text}
                        </p>

                    </article>
                `;

            })
            .join("");


    grid
        .querySelectorAll(".reflection-card")
        .forEach(card => {

            card.addEventListener(
                "click",
                () => {

                    const index =
                        Number(
                            card.dataset.cardIndex
                        );

                    const item =
                        CARDS[index];

                    openModal(
                        item.category,
                        item.title,
                        `<p>${item.text}</p>`,
                        "Sai Resonance Reflection — not presented as a direct quotation."
                    );

                }
            );

        });

}


/* =========================================================
   WISDOM
========================================================= */

function displayWisdom() {

    const element =
        document.getElementById("wisdomText");

    const index =
        getDayOfYear() % WISDOM.length;

    element.textContent =
        WISDOM[index];

}


/* =========================================================
   MODAL
========================================================= */

function openModal(
    eyebrow,
    title,
    body,
    source
) {

    const modal =
        document.getElementById("contentModal");

    document.getElementById("modalEyebrow")
        .textContent =
        eyebrow;

    document.getElementById("modalTitle")
        .textContent =
        title;

    document.getElementById("modalBody")
        .innerHTML =
        body
            .split("\n")
            .map(line => `<p>${line}</p>`)
            .join("");

    document.getElementById("modalSource")
        .textContent =
        source || "";

    modal.classList.add("active");

    modal.setAttribute(
        "aria-hidden",
        "false"
    );

    document.body.style.overflow =
        "hidden";

}


function closeModal() {

    const modal =
        document.getElementById("contentModal");

    modal.classList.remove("active");

    modal.setAttribute(
        "aria-hidden",
        "true"
    );

    document.body.style.overflow =
        "";

}


/* =========================================================
   MOBILE MENU
========================================================= */

function setupMobileMenu() {

    const button =
        document.getElementById(
            "mobileMenuButton"
        );

    const nav =
        document.getElementById(
            "mainNav"
        );


    button.addEventListener(
        "click",
        () => {

            nav.classList.toggle(
                "active"
            );

        }
    );


    nav
        .querySelectorAll("a")
        .forEach(link => {

            link.addEventListener(
                "click",
                () => {

                    nav.classList.remove(
                        "active"
                    );

                }
            );

        });

}


/* =========================================================
   EVENTS
========================================================= */

function setupEvents() {

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
        .getElementById("vahiniSearch")
        .addEventListener(
            "input",
            renderVahinis
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


    anotherChitButton.addEventListener(
        "click",
        pickAnotherChit
    );


    copyDailyButton.addEventListener(
        "click",
        copyDailyChit
    );


    document
        .getElementById("modalClose")
        .addEventListener(
            "click",
            closeModal
        );


    document
        .getElementById("modalOverlay")
        .addEventListener(
            "click",
            closeModal
        );


    document.addEventListener(
        "keydown",
        event => {

            if (event.key === "Escape") {

                closeModal();

            }

        }
    );

}


/* =========================================================
   START WEBSITE
========================================================= */

function startSaiResonance() {

    const daily =
        getDailyChit();

    displayDailyChit(
        daily
    );

    updatePickButton();

    renderStories();

    renderVahinis();

    renderTeachings();

    renderCards();

    displayWisdom();

    setupEvents();

    setupMobileMenu();


    if (CARDS.length !== 108) {

        console.warn(
            `Sai Resonance warning: expected 108 cards but found ${CARDS.length}.`
        );

    } else {

        console.log(
            "Sai Resonance: 108 cards loaded successfully."
        );

    }

}


/* =========================================================
   DOM READY
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    startSaiResonance
);
