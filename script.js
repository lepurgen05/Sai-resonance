/* =========================================
   SAI RESONANCE
   Main JavaScript
========================================= */

document.addEventListener("DOMContentLoaded", () => {


    /* =====================================
       108 DAILY / REFLECTION CARDS
    ===================================== */

    const CARDS = [

        "I am with you.",
        "I am watching you.",
        "You are Mine.",
        "Be peaceful.",
        "Speak truth.",
        "Serve quietly.",
        "Let love guide you.",
        "Do not be afraid.",
        "Keep your heart pure.",
        "Help someone today.",
        "Be patient.",
        "Forgive and move forward.",
        "Think before you speak.",
        "Choose kindness.",
        "Let go of anger.",
        "Be grateful.",
        "Walk the path of truth.",
        "Do your duty sincerely.",
        "Be gentle with others.",
        "Keep faith.",
        "Do not lose hope.",
        "Listen before answering.",
        "Give without expecting.",
        "Serve with humility.",
        "Peace begins within.",
        "Speak only what is necessary.",
        "Be content with what you have.",
        "See goodness in others.",
        "Do not hurt another heart.",
        "Keep your thoughts clean.",
        "Let your actions speak.",
        "Be disciplined.",
        "Remember the Divine.",
        "Make your mind peaceful.",
        "Do not compare yourself.",
        "Accept what comes.",
        "Do what is right.",
        "Love without conditions.",
        "Be truthful even when difficult.",
        "Be responsible for your actions.",
        "A kind word can change a day.",
        "Give respect to everyone.",
        "Do not answer anger with anger.",
        "Keep working quietly.",
        "Be humble in success.",
        "Be courageous in difficulty.",
        "Learn from every experience.",
        "Let service become your prayer.",
        "Do not carry yesterday everywhere.",
        "Begin again.",
        "Keep your promises.",
        "Be sincere.",
        "Choose peace over argument.",
        "Give your best.",
        "Do not seek praise.",
        "Be useful to someone.",
        "Let gratitude become a habit.",
        "Stay calm.",
        "Control the tongue.",
        "Control the mind.",
        "Control the senses.",
        "Think good thoughts.",
        "Speak good words.",
        "Do good actions.",
        "Be an example.",
        "Do not give up.",
        "Keep faith in the journey.",
        "Be compassionate.",
        "Respect every form of life.",
        "Treat others as you wish to be treated.",
        "Make time for silence.",
        "Read something meaningful.",
        "Reflect before reacting.",
        "Be truthful to yourself.",
        "Do not let fear decide.",
        "Be steady in difficulty.",
        "Choose duty over convenience.",
        "Give more than you take.",
        "Do not keep score of kindness.",
        "Be generous in spirit.",
        "Let jealousy go.",
        "Let resentment go.",
        "Make peace where you can.",
        "Be thankful for small things.",
        "Keep learning.",
        "Keep serving.",
        "Keep loving.",
        "Keep your faith alive.",
        "Do not judge too quickly.",
        "Listen with compassion.",
        "Be present.",
        "Take one step at a time.",
        "Do today's duty today.",
        "Do not worry unnecessarily.",
        "Let your heart become lighter.",
        "Be truthful in thought.",
        "Be pure in intention.",
        "Be careful with words.",
        "Make someone smile.",
        "Share what you can.",
        "Give encouragement.",
        "Do not return hurt with hurt.",
        "Choose understanding.",
        "Keep your promises to yourself.",
        "Be calm in uncertainty.",
        "Trust the process.",
        "Remain humble.",
        "Remain grateful.",
        "Remain loving.",
        "Remain peaceful.",
        "Love All; Serve All.",
        "Help Ever; Hurt Never."

    ];


    console.log(
        "Sai Resonance cards:",
        CARDS.length
    );


    /* =====================================
       VAHINI LIBRARY
    ===================================== */

    const VAHINIS = [

        {
            title: "Bhagavatha Vahini",
            summary:
                "Reflections drawn from the stories and teachings associated with the Bhagavata tradition.",
            category: "Devotion"
        },

        {
            title: "Dharma Vahini",
            summary:
                "A study of dharma, right conduct, responsibility and the principles that guide human life.",
            category: "Dharma"
        },

        {
            title: "Dhyana Vahini",
            summary:
                "Reflections on meditation, concentration, inner discipline and the quieting of the mind.",
            category: "Meditation"
        },

        {
            title: "Geetha Vahini",
            summary:
                "An exploration of the Bhagavad Gita and its practical spiritual teachings.",
            category: "Gita"
        },

        {
            title: "Jnana Vahini",
            summary:
                "Reflections on knowledge, discrimination, self-awareness and the search for truth.",
            category: "Knowledge"
        },

        {
            title: "Leela Kaivalya Vahini",
            summary:
                "Spiritual reflections connected with divine play, devotion and the deeper meaning of life.",
            category: "Devotion"
        },

        {
            title: "Prasanthi Vahini",
            summary:
                "Reflections on peace, inner calm, spiritual practice and the journey toward Prasanthi.",
            category: "Peace"
        },

        {
            title: "Prasnothara Vahini",
            summary:
                "Questions and answers addressing spiritual practice, values and everyday life.",
            category: "Questions"
        },

        {
            title: "Prema Vahini",
            summary:
                "Reflections on divine love, compassion and the transformation that comes through love.",
            category: "Love"
        },

        {
            title: "Ramakatha Rasavahini — Part I",
            summary:
                "The first part of the Ramayana narrative presented through the Vahini tradition.",
            category: "Ramayana"
        },

        {
            title: "Ramakatha Rasavahini — Part II",
            summary:
                "The continuation of the Ramayana narrative with reflections on dharma and devotion.",
            category: "Ramayana"
        },

        {
            title: "Sandeha Nivarini",
            summary:
                "A question-and-answer style exploration of spiritual doubts and fundamental questions.",
            category: "Questions"
        },

        {
            title: "Sathya Sai Vahini",
            summary:
                "A broad exploration of spiritual principles, human values and the nature of truth.",
            category: "Truth"
        },

        {
            title: "Sutra Vahini",
            summary:
                "Reflections around spiritual aphorisms and principles that can guide contemplation.",
            category: "Wisdom"
        },

        {
            title: "Upanishad Vahini",
            summary:
                "An accessible introduction to ideas and teachings associated with the Upanishadic tradition.",
            category: "Upanishads"
        },

        {
            title: "Vidya Vahini",
            summary:
                "Reflections on education, character, knowledge and the purpose of learning.",
            category: "Education"
        }

    ];


    /* =====================================
       CHINNA KATHA / STORY LIBRARY
    ===================================== */

    const STORIES = [

        {
            title: "The Value of Truth",
            category: "truth",
            label: "Truth",
            summary:
                "A short reflection on how truthfulness gives strength to character.",
            body:
                "Truth is not merely a statement that happens to be correct. It is a discipline of thought, word and action. When a person learns to remain truthful even when it is inconvenient, character becomes stronger.",
            source:
                "Sai Resonance reflection — not presented as a verbatim quotation."
        },

        {
            title: "The Quiet Act of Service",
            category: "service",
            label: "Service",
            summary:
                "A reminder that service does not need an audience.",
            body:
                "A small act done sincerely can have great value even when nobody notices it. Service becomes meaningful when the intention is to help rather than to receive recognition.",
            source:
                "Sai Resonance reflection — not presented as a verbatim quotation."
        },

        {
            title: "The Angry Word",
            category: "wisdom",
            label: "Wisdom",
            summary:
                "A reflection on how one moment of anger can create a lasting wound.",
            body:
                "Words spoken in anger may take only seconds, but their effect can remain much longer. Pausing before speaking gives the mind an opportunity to choose understanding instead of reaction.",
            source:
                "Sai Resonance reflection — not presented as a verbatim quotation."
        },

        {
            title: "The Lamp and the Darkness",
            category: "wisdom",
            label: "Wisdom",
            summary:
                "A simple image of how even a small light changes darkness.",
            body:
                "Darkness does not need to be fought physically. A lamp is enough to change the room. In the same way, one good thought or one good action can begin changing an atmosphere.",
            source:
                "Sai Resonance reflection — not presented as a verbatim quotation."
        },

        {
            title: "The Gift of Patience",
            category: "love",
            label: "Love",
            summary:
                "Patience allows understanding to grow before judgment arrives.",
            body:
                "When we immediately judge another person, we see only one moment of their life. Patience gives space for listening, understanding and compassion.",
            source:
                "Sai Resonance reflection — not presented as a verbatim quotation."
        },

        {
            title: "Rama and Dharma",
            category: "dharma",
            label: "Dharma",
            summary:
                "A reflection inspired by the recurring theme of dharma in the Ramayana.",
            body:
                "The Ramayana repeatedly invites the reader to think about duty, responsibility, sacrifice and the relationship between personal desire and dharma.",
            source:
                "Inspired by the themes of Rama Katha Rasavahini; not a verbatim quotation."
        },

        {
            title: "The Two Seeds",
            category: "wisdom",
            label: "Wisdom",
            summary:
                "What we repeatedly cultivate eventually shapes our character.",
            body:
                "Imagine two seeds planted in the mind: one is kindness and the other is resentment. The one that receives repeated attention is the one that grows stronger.",
            source:
                "Sai Resonance reflection — not presented as a verbatim quotation."
        },

        {
            title: "The Empty Cup",
            category: "wisdom",
            label: "Wisdom",
            summary:
                "Learning requires the humility to admit that we do not know everything.",
            body:
                "A mind that believes it already knows everything leaves little room for learning. Humility creates space for new understanding.",
            source:
                "Sai Resonance reflection — not presented as a verbatim quotation."
        },

        {
            title: "A Small Act of Love",
            category: "love",
            label: "Love",
            summary:
                "Love can appear in ordinary actions.",
            body:
                "Love does not always arrive through dramatic gestures. Sometimes it is listening carefully, helping quietly, forgiving sincerely or simply being present when someone needs us.",
            source:
                "Sai Resonance reflection — not presented as a verbatim quotation."
        },

        {
            title: "The Honest Worker",
            category: "truth",
            label: "Truth",
            summary:
                "Sincerity matters even when no one is watching.",
            body:
                "The real test of integrity is often found in moments when there is no audience. Doing one's work honestly creates a form of inner strength that external praise cannot provide.",
            source:
                "Sai Resonance reflection — not presented as a verbatim quotation."
        },

        {
            title: "The Helping Hand",
            category: "service",
            label: "Service",
            summary:
                "Service begins when we notice another person's need.",
            body:
                "Sometimes helping does not require money or special ability. A little time, attention, encouragement or practical assistance can be enough.",
            source:
                "Sai Resonance reflection — not presented as a verbatim quotation."
        },

        {
            title: "The Mind That Became Quiet",
            category: "wisdom",
            label: "Wisdom",
            summary:
                "Silence can reveal what constant activity hides.",
            body:
                "When the mind is constantly occupied, it becomes difficult to hear our own deeper thoughts. Even a few quiet minutes can create space for reflection.",
            source:
                "Sai Resonance reflection — not presented as a verbatim quotation."
        }

    ];


    /* =====================================
       TEACHINGS
    ===================================== */

    const TEACHINGS = [

        {
            title: "Love",
            icon: "♡",
            text:
                "Love can be understood not merely as emotion, but as an attitude expressed through thought, word and action."
        },

        {
            title: "Truth",
            icon: "◇",
            text:
                "Truth invites consistency between what we think, what we say and what we do."
        },

        {
            title: "Right Conduct",
            icon: "✦",
            text:
                "Right conduct concerns responsible action and choosing what is right even when convenience suggests otherwise."
        },

        {
            title: "Peace",
            icon: "○",
            text:
                "Peace begins with learning to steady the mind instead of allowing every external event to control it."
        },

        {
            title: "Service",
            icon: "✋",
            text:
                "Service places attention on the needs of others and transforms good intention into useful action."
        },

        {
            title: "Education",
            icon: "▱",
            text:
                "Education can develop knowledge as well as character, responsibility and discernment."
        },

        {
            title: "Self-Knowledge",
            icon: "◎",
            text:
                "Self-knowledge begins with honest observation of our thoughts, habits, motives and actions."
        },

        {
            title: "Devotion",
            icon: "✧",
            text:
                "Devotion can provide a framework for remembrance, gratitude, discipline and inner transformation."
        },

        {
            title: "Contentment",
            icon: "◇",
            text:
                "Contentment does not mean giving up effort. It means learning to value what is present while continuing to do one's duty."
        },

        {
            title: "Compassion",
            icon: "♡",
            text:
                "Compassion begins by recognizing that other people also experience difficulty, uncertainty and hope."
        },

        {
            title: "Unity",
            icon: "∞",
            text:
                "Unity encourages us to look beyond superficial differences and recognize our shared human values."
        },

        {
            title: "Practice",
            icon: "✦",
            text:
                "A teaching becomes meaningful when it gradually enters everyday behaviour."
        }

    ];


    /* =====================================
       WISDOM SPOTLIGHT
    ===================================== */

    const WISDOM = [

        "Reflection becomes meaningful when it enters everyday action.",

        "A peaceful mind can see a problem more clearly.",

        "A small act of kindness can become someone else's strength.",

        "Truth becomes powerful when it is lived, not merely spoken.",

        "Service begins with noticing what another person needs.",

        "Silence can sometimes teach what noise cannot.",

        "Character is built through ordinary choices repeated every day.",

        "The value of a good thought is seen in the action that follows it."

    ];


    /* =====================================
       ELEMENTS
    ===================================== */

    const storySearch =
        document.getElementById("storySearch");

    const storyFilter =
        document.getElementById("storyFilter");

    const storyCount =
        document.getElementById("storyCount");

    const storyGrid =
        document.getElementById("storyGrid");


    const vahiniSearch =
        document.getElementById("vahiniSearch");

    const vahiniGrid =
        document.getElementById("vahiniGrid");


    const teachingSearch =
        document.getElementById("teachingSearch");

    const teachingGrid =
        document.getElementById("teachingGrid");


    const cardSearch =
        document.getElementById("cardSearch");

    const cardGrid =
        document.getElementById("cardGrid");


    const dailyTitle =
        document.getElementById("dailyTitle");

    const dailyText =
        document.getElementById("dailyText");

    const dailyCategory =
        document.getElementById("dailyCategory");

    const chitDate =
        document.getElementById("chitDate");

    const anotherChitButton =
        document.getElementById("anotherChitButton");

    const copyDailyButton =
        document.getElementById("copyDailyButton");

    const chitLimitMessage =
        document.getElementById("chitLimitMessage");

    const dailyNumber =
        document.getElementById("dailyNumber");


    const dashboardDailyTitle =
        document.getElementById("dashboardDailyTitle");

    const dashboardDailyText =
        document.getElementById("dashboardDailyText");


    const wisdomText =
        document.getElementById("wisdomText");


    /* =====================================
       MODAL
    ===================================== */

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


    function openModal(item) {

        modalEyebrow.textContent =
            item.label || "READ";

        modalTitle.textContent =
            item.title;

        modalBody.textContent =
            item.body || item.text || item.summary;

        modalSource.textContent =
            item.source || "";

        modal.classList.add("open");

        modal.setAttribute(
            "aria-hidden",
            "false"
        );

        document.body.style.overflow = "hidden";
    }


    function closeModal() {

        modal.classList.remove("open");

        modal.setAttribute(
            "aria-hidden",
            "true"
        );

        document.body.style.overflow = "";
    }


    modalClose.addEventListener(
        "click",
        closeModal
    );

    modalOverlay.addEventListener(
        "click",
        closeModal
    );


    document.addEventListener(
        "keydown",
        event => {

            if (
                event.key === "Escape" &&
                modal.classList.contains("open")
            ) {
                closeModal();
            }

        }
    );


    /* =====================================
       STORIES
    ===================================== */

    function renderStories() {

        const search =
            storySearch.value
                .trim()
                .toLowerCase();

        const filter =
            storyFilter.value;


        const filtered =
            STORIES.filter(story => {

                const matchesSearch =
                    !search ||
                    story.title
                        .toLowerCase()
                        .includes(search) ||
                    story.summary
                        .toLowerCase()
                        .includes(search) ||
                    story.category
                        .toLowerCase()
                        .includes(search);


                const matchesFilter =
                    filter === "all" ||
                    story.category === filter;


                return matchesSearch &&
                       matchesFilter;

            });


        storyCount.textContent =
            `${filtered.length} ${
                filtered.length === 1
                    ? "story"
                    : "stories"
            }`;


        if (!filtered.length) {

            storyGrid.innerHTML =
                `<div class="empty-state">
                    No stories found.
                 </div>`;

            return;
        }


        storyGrid.innerHTML =
            filtered.map(
                (story, index) => `

                <article
                    class="story-card"
                    data-story="${STORIES.indexOf(story)}">

                    <span class="story-card-category">
                        ${escapeHTML(story.label)}
                    </span>

                    <h3>
                        ${escapeHTML(story.title)}
                    </h3>

                    <p>
                        ${escapeHTML(story.summary)}
                    </p>

                    <span class="read-more">
                        Read reflection →
                    </span>

                </article>

            `
            ).join("");


        document
            .querySelectorAll(".story-card")
            .forEach(card => {

                card.addEventListener(
                    "click",
                    () => {

                        const story =
                            STORIES[
                                Number(
                                    card.dataset.story
                                )
                            ];

                        openModal(story);

                    }
                );

            });

    }


    storySearch.addEventListener(
        "input",
        renderStories
    );

    storyFilter.addEventListener(
        "change",
        renderStories
    );


    /* =====================================
       VAHINI
    ===================================== */

    function renderVahinis() {

        const search =
            vahiniSearch.value
                .trim()
                .toLowerCase();


        const filtered =
            VAHINIS.filter(vahini => {

                return !search ||
                    vahini.title
                        .toLowerCase()
                        .includes(search) ||
                    vahini.summary
                        .toLowerCase()
                        .includes(search) ||
                    vahini.category
                        .toLowerCase()
                        .includes(search);

            });


        if (!filtered.length) {

            vahiniGrid.innerHTML =
                `<div class="empty-state">
                    No Vahini found.
                 </div>`;

            return;
        }


        vahiniGrid.innerHTML =
            filtered.map(
                (vahini, index) => `

                <article class="vahini-card">

                    <span class="vahini-number">
                        VAHINI ${String(
                            VAHINIS.indexOf(vahini) + 1
                        ).padStart(2, "0")}
                    </span>

                    <h3>
                        ${escapeHTML(vahini.title)}
                    </h3>

                    <p>
                        ${escapeHTML(vahini.summary)}
                    </p>

                    <a
                        href="https://sathyasai.org/"
                        target="_blank"
                        rel="noopener"
                        class="vahini-link">

                        Explore resource ↗

                    </a>

                </article>

            `
            ).join("");

    }


    vahiniSearch.addEventListener(
        "input",
        renderVahinis
    );


    /* =====================================
       TEACHINGS
    ===================================== */

    function renderTeachings() {

        const search =
            teachingSearch.value
                .trim()
                .toLowerCase();


        const filtered =
            TEACHINGS.filter(item => {

                return !search ||
                    item.title
                        .toLowerCase()
                        .includes(search) ||
                    item.text
                        .toLowerCase()
                        .includes(search);

            });


        if (!filtered.length) {

            teachingGrid.innerHTML =
                `<div class="empty-state">
                    No teachings found.
                 </div>`;

            return;
        }


        teachingGrid.innerHTML =
            filtered.map(
                item => `

                <article class="teaching-card">

                    <div class="teaching-icon">
                        ${item.icon}
                    </div>

                    <h3>
                        ${escapeHTML(item.title)}
                    </h3>

                    <p>
                        ${escapeHTML(item.text)}
                    </p>

                </article>

            `
            ).join("");

    }


    teachingSearch.addEventListener(
        "input",
        renderTeachings
    );


    /* =====================================
       108 CARDS
    ===================================== */

    function renderCards() {

        const search =
            cardSearch.value
                .trim()
                .toLowerCase();


        const filtered =
            CARDS
                .map(
                    (text, index) => ({
                        text,
                        index
                    })
                )
                .filter(card =>
                    !search ||
                    card.text
                        .toLowerCase()
                        .includes(search)
                );


        if (!filtered.length) {

            cardGrid.innerHTML =
                `<div class="empty-state">
                    No cards found.
                 </div>`;

            return;
        }


        cardGrid.innerHTML =
            filtered.map(
                card => `

                <article class="resonance-card">

                    <span class="resonance-number">
                        ${String(
                            card.index + 1
                        ).padStart(3, "0")}
                    </span>

                    <p>
                        ${escapeHTML(card.text)}
                    </p>

                </article>

            `
            ).join("");

    }


    cardSearch.addEventListener(
        "input",
        renderCards
    );


    /* =====================================
       DAILY CHIT
    ===================================== */

    const PICK_STORAGE_KEY =
        "sai_resonance_daily_chit_picks";

    const DAILY_PICK_LIMIT = 3;


    function getDateKey() {

        const now = new Date();

        return [
            now.getFullYear(),
            String(
                now.getMonth() + 1
            ).padStart(2, "0"),
            String(
                now.getDate()
            ).padStart(2, "0")
        ].join("-");

    }


    function getDayOfYear() {

        const now = new Date();

        const start =
            new Date(
                now.getFullYear(),
                0,
                0
            );

        const difference =
            now - start;

        return Math.floor(
            difference /
            (1000 * 60 * 60 * 24)
        );

    }


    function getAutomaticDailyIndex() {

        return (
            getDayOfYear() %
            CARDS.length
        );

    }


    function getPickData() {

        try {

            const saved =
                JSON.parse(
                    localStorage.getItem(
                        PICK_STORAGE_KEY
                    )
                );


            if (
                !saved ||
                saved.date !== getDateKey()
            ) {

                return {
                    date: getDateKey(),
                    count: 0
                };

            }


            return saved;

        } catch {

            return {
                date: getDateKey(),
                count: 0
            };

        }

    }


    function savePickData(data) {

        localStorage.setItem(
            PICK_STORAGE_KEY,
            JSON.stringify(data)
        );

    }


    function formatDate() {

        const now = new Date();

        return now.toLocaleDateString(
            undefined,
            {
                weekday: "long",
                day: "numeric",
                month: "long",
                year: "numeric"
            }
        );

    }


    function displayChit(
        text,
        number,
        automatic = false
    ) {

        dailyTitle.textContent =
            text;

        dailyText.textContent =
            automatic
                ? "Your reflection for today."
                : "A moment chosen for reflection.";

        dailyCategory.textContent =
            automatic
                ? "TODAY'S REFLECTION"
                : "YOUR CHIT";

        chitDate.textContent =
            formatDate();

        dailyNumber.textContent =
            number;


        dashboardDailyTitle.textContent =
            text;

        dashboardDailyText.textContent =
            automatic
                ? "Your reflection for today."
                : "A moment chosen for reflection.";

    }


    function updatePickButton() {

        const data =
            getPickData();


        if (
            data.count >=
            DAILY_PICK_LIMIT
        ) {

            anotherChitButton.disabled =
                true;

            anotherChitButton.textContent =
                "Come back tomorrow 🌸";

            chitLimitMessage.innerHTML =
                "You have used all <strong>3 extra picks</strong> for today. Your automatic daily chit will refresh tomorrow.";

        } else {

            anotherChitButton.disabled =
                false;

            anotherChitButton.textContent =
                "Pick Another Chit";

            const remaining =
                DAILY_PICK_LIMIT -
                data.count;

            chitLimitMessage.innerHTML =
                `You have <strong>${remaining}</strong> extra ${
                    remaining === 1
                        ? "pick"
                        : "picks"
                } left today.`;

        }

    }


    function showAutomaticChit() {

        const index =
            getAutomaticDailyIndex();

        displayChit(
            CARDS[index],
            index + 1,
            true
        );

        updatePickButton();

    }


    anotherChitButton.addEventListener(
        "click",
        () => {

            const data =
                getPickData();


            if (
                data.count >=
                DAILY_PICK_LIMIT
            ) {

                updatePickButton();

                return;
            }


            let index =
                Math.floor(
                    Math.random() *
                    CARDS.length
                );


            const current =
                dailyTitle.textContent;


            if (
                CARDS.length > 1
            ) {

                while (
                    CARDS[index] ===
                    current
                ) {

                    index =
                        Math.floor(
                            Math.random() *
                            CARDS.length
                        );

                }

            }


            data.count++;

            savePickData(data);


            displayChit(
                CARDS[index],
                index + 1,
                false
            );


            updatePickButton();

        }
    );


    copyDailyButton.addEventListener(
        "click",
        async () => {

            const text =
                `${dailyTitle.textContent}\n\n${dailyText.textContent}\n\nSai Resonance`;


            try {

                await navigator.clipboard.writeText(
                    text
                );


                const oldText =
                    copyDailyButton.textContent;


                copyDailyButton.textContent =
                    "Copied ✓";


                setTimeout(
                    () => {

                        copyDailyButton.textContent =
                            oldText;

                    },
                    1600
                );

            } catch {

                alert(
                    "Copy is not available in this browser."
                );

            }

        }
    );


    /* =====================================
       WISDOM SPOTLIGHT
    ===================================== */

    function displayWisdom() {

        const index =
            getDayOfYear() %
            WISDOM.length;

        wisdomText.textContent =
            WISDOM[index];

    }


    /* =====================================
       MOBILE MENU
    ===================================== */

    const mobileMenuButton =
        document.getElementById(
            "mobileMenuButton"
        );

    const mainNav =
        document.getElementById(
            "mainNav"
        );


    mobileMenuButton.addEventListener(
        "click",
        () => {

            mainNav.classList.toggle(
                "open"
            );

        }
    );


    mainNav
        .querySelectorAll("a")
        .forEach(link => {

            link.addEventListener(
                "click",
                () => {

                    mainNav.classList.remove(
                        "open"
                    );

                }
            );

        });


    /* =====================================
       SECURITY / HTML ESCAPE
    ===================================== */

    function escapeHTML(value) {

        return String(value)
            .replace(
                /&/g,
                "&amp;"
            )
            .replace(
                /</g,
                "&lt;"
            )
            .replace(
                />/g,
                "&gt;"
            )
            .replace(
                /"/g,
                "&quot;"
            )
            .replace(
                /'/g,
                "&#039;"
            );

    }


    /* =====================================
       START
    ===================================== */

    renderStories();

    renderVahinis();

    renderTeachings();

    renderCards();

    showAutomaticChit();

    displayWisdom();


    console.log(
        "Sai Resonance loaded successfully."
    );

});
