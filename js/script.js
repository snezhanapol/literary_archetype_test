document.addEventListener("DOMContentLoaded", () => {

    let currentLang = "jp";
  
    const langJpBtn = document.getElementById("lang-jp");
    const langEnBtn = document.getElementById("lang-en");
  
    langJpBtn.addEventListener("click", () => switchLanguage("jp"));
    langEnBtn.addEventListener("click", () => switchLanguage("en"));
  

    const testData = {
      jp: {
        ui: {
          title: "文学的な人格アーキタイプ",
          intro1: "文学の世界へのこの心理的な旅を通して、あなたの内面を映し出す文学キャラクターを見つけましょう。",
          image:"img/reading_book.jpg",
          intro2: "いくつかの質問に答えて、世界文学の中からあなたの文学的分身を見つけましょう。",
          startBtn: "旅を始めましょう",
          nextBtn: "次へ",
          resultTitle: "あなたの文学的な人格",
          restartBtn: "もう一度見つけましょう",
          footer: "文学的な人格アーキタイプ © 2025 | Nana-chan が作りました！",
        },

      
        questions: [
          {
            text: "親しい友人が深刻なトラブルに巻き込まれたとき、あなたの最初の反応は何ですか？",
            image: "img/helping_friends.jpg",
            answers: [
              { text: "すべてを放り出して、すぐに助けに駆けつける", type: "loyal" },
              { text: "状況を分析して、最も効果的な解決策を考え出す", type: "strategist" },
              { text: "注意深く耳を傾けて、感情的な支援を提供する", type: "empath" },
              { text: "問題の根本原因を探るのを手伝う", type: "thinker" },
            ],
          },
          {
            text: "重要な人生の決断にどのように取り組みますか？",
            image: "img/making_decisions.jpg",
            answers: [
              { text: "心と直感に従う", type: "loyal" },
              { text: "利点と欠点を含む詳細な計画を立てる", type: "strategist" },
              { text: "信頼できる友人や家族に相談する", type: "empath" },
              { text: "深く考え、調査に時間を費やす", type: "thinker" },
            ],
          },
          {
            text: "人間関係で最も大切にする資質は何ですか？",
            image: "img/characteristics.jpg",
            answers: [
              { text: "揺るぎない忠誠心と献身", type: "loyal" },
              { text: "知的な相性と刺激的な会話", type: "strategist" },
              { text: "感情の理解と弱さを見せること", type: "empath" },
              { text: "共通の価値観と哲学的な一致", type: "thinker" },
            ],
          },
          {
            text: "倫理的なジレンマに直面したとき、どのように正しい行動を決めますか？",
            image: "img/moral_dilemma.jpg",
            answers: [
              { text: "大切な人を最もよく守る方法を考える", type: "loyal" },
              { text: "どの選択肢が最良の結果をもたらすか分析する", type: "strategist" },
              { text: "最も思いやりがあると思えることについて自分の気持ちに耳を傾ける", type: "empath" },
              { text: "哲学的な原則や普遍的な真理について熟考する", type: "thinker" },
            ],
          },
          {
            text: "あなたにとっての完璧な幸せとは何ですか？",
            image: "img/happiness.webp",
            answers: [
              { text: "愛する人たちに囲まれて穏やかな環境にいること", type: "loyal" },
              { text: "複雑な問題を解決したり難しい目標を達成したりすること", type: "strategist" },
              { text: "他者との深く意義のあるつながり", type: "empath" },
              { text: "静かな瞑想と人生の謎を理解すること", type: "thinker" },
            ],
          },
        ],
        results: {
          loyal: {
            title: "忠実な仲間：サムワイズ・ギャムジー",
            description:
              "あなたは揺るぎない忠誠心と不動の誠実さを体現しています。サムのように、愛する人のためならどこまでもついて行くでしょう。",
            quote: "「この世界にはまだ善が残っていて、それのために戦う価値がある。」",
            image: "img/sam.png",
          },
          strategist: {
            title: "策略の達人：シャーロック・ホームズ",
            description:
              "あなたは冷静で論理的な思考を持つ天才です。分析力と直観力であらゆる謎を解き明かします。",
            quote: "「不可能を排除すれば、残るものがどんなにあり得なくても、それが真実だ。」",
            image: "img/sherlockholmes.png",
          },
          empath: {
            title: "深い共感者：ジェーン・エア",
            description:
              "あなたは人の心を深く理解します。静かな強さと優しさを併せ持ち、誠実に生きます。",
            quote: "「私は鳥ではない。誰にも縛られない自由な人間だ。」",
            image: "img/jane_eyre.png",
          },
          thinker: {
            title: "哲学的思考者：ピエール・ベズーホフ",
            description:
              "あなたは人生の意味を探求する知的な旅人です。思索と発見の中で真理を求め続けます。",
            quote: "「世界は二つに分かれている。彼女のいる場所と、彼女のいない場所に。」",
            image: "img/pierre_bezukhov.png",
          },
        },
      },
  
      en: {
        ui: {
          title: "Literary Personality Archetype",
          intro1: "Through this psychological journey into literature, discover the character that mirrors your inner self.",
          image:"img/reading_book.jpg",
          intro2: "Answer a few questions and find your literary counterpart from the world of fiction.",
          startBtn: "Begin the Journey",
          nextBtn: "Continue",
          resultTitle: "Your Literary Archetype",
          restartBtn: "Find Again",
          footer: "Literary Personality Archetype © 2025 | Made by Nana-chan!",
        },
        questions: [
          {
            text: "When a close friend faces serious trouble, what is your first reaction?",
            image: "img/helping_friends.jpg",
            answers: [
              { text: "Drop everything and rush to help", type: "loyal" },
              { text: "Analyze the situation for the best solution", type: "strategist" },
              { text: "Listen carefully and provide emotional support", type: "empath" },
              { text: "Help find the root cause of the issue", type: "thinker" },
            ],
          },
          {
            text: "How do you approach major life decisions?",
            image: "img/making_decisions.jpg",
            answers: [
              { text: "Follow your heart and intuition", type: "loyal" },
              { text: "Plan thoroughly, weighing pros and cons", type: "strategist" },
              { text: "Consult trusted friends or family", type: "empath" },
              { text: "Reflect deeply and research carefully", type: "thinker" },
            ],
          },
          {
            text: "What quality do you value most in relationships?",
            image: "img/characteristics.jpg",
            answers: [
              { text: "Unwavering loyalty and devotion", type: "loyal" },
              { text: "Intellectual compatibility and stimulating talk", type: "strategist" },
              { text: "Emotional understanding and vulnerability", type: "empath" },
              { text: "Shared values and philosophical harmony", type: "thinker" },
            ],
          },
          {
            text: "When facing an ethical dilemma, how do you choose the right path?",
            image: "img/moral_dilemma.jpg",
            answers: [
              { text: "Think about how to protect loved ones best", type: "loyal" },
              { text: "Analyze which choice brings the best outcome", type: "strategist" },
              { text: "Listen to your heart and act compassionately", type: "empath" },
              { text: "Reflect on philosophical and universal truths", type: "thinker" },
            ],
          },
          {
            text: "What does perfect happiness mean to you?",
            image: "img/happiness.webp",
            answers: [
              { text: "Being surrounded by loved ones in peace", type: "loyal" },
              { text: "Solving complex problems and achieving goals", type: "strategist" },
              { text: "Deep, meaningful human connections", type: "empath" },
              { text: "Quiet reflection and understanding life’s mysteries", type: "thinker" },
            ],
          },
        ],
        results: {
          loyal: {
            title: "The Loyal Companion: Samwise Gamgee",
            description:
              "You embody unwavering loyalty and steadfast honesty. Like Sam, you'd follow your loved ones through any hardship.",
            quote: "“There’s some good in this world, Mr. Frodo, and it’s worth fighting for.”",
            image: "img/sam.png",
          },
          strategist: {
            title: "The Mastermind: Sherlock Holmes",
            description:
              "Your mind is your greatest tool. You face the world with logic and precision, finding patterns where others see chaos.",
            quote:
              "“When you have eliminated the impossible, whatever remains, however improbable, must be the truth.”",
            image: "img/sherlockholmes.png",
          },
          empath: {
            title: "The Empath: Jane Eyre",
            description:
              "You deeply feel and understand the human soul. Like Jane, you hold onto your compassion and integrity no matter what.",
            quote:
              "“I am no bird; and no net ensnares me: I am a free human being with an independent will.”",
            image: "img/jane_eyre.png",
          },
          thinker: {
            title: "The Philosopher: Pierre Bezukhov",
            description:
              "You are a seeker of truth. Like Pierre, you pursue deep understanding and wisdom through life’s great mysteries.",
            quote:
              "“The whole world is divided for me into two parts: one is she, and all happiness; the other is where she is not, and all darkness.”",
            image: "img/pierre_bezukhov.png",
          },
        },
      },
    };
  

    const startBtn = document.getElementById("start-btn");
    const nextBtn = document.getElementById("next-btn");
    const restartBtn = document.getElementById("restart-btn");
    const startScreen = document.getElementById("start-screen");
    const quizScreen = document.getElementById("quiz-screen");
    const resultScreen = document.getElementById("result-screen");
    const questionElement = document.getElementById("question");
    const answersContainer = document.getElementById("answers");
    const resultContent = document.getElementById("result-content");
    const progressBar = document.querySelector(".progress-bar");
    const progressContainer = document.querySelector(".progress-container");
  

    let currentQuestion = 0;
    let userAnswers = [];
    let userScores = { loyal: 0, strategist: 0, empath: 0, thinker: 0 };
    let progressIndicator;
  

    startBtn.addEventListener("click", startTest);
    nextBtn.addEventListener("click", nextQuestion);
    restartBtn.addEventListener("click", restartTest);
  

    function startTest() {
      startScreen.classList.remove("active");
      quizScreen.classList.add("active");
      currentQuestion = 0;
      userAnswers = [];
      userScores = { loyal: 0, strategist: 0, empath: 0, thinker: 0 };
  

      if (!progressIndicator) {
        progressIndicator = document.createElement("img");
        progressIndicator.src = "img/moon3.png";
        progressIndicator.className = "progress-indicator";
        progressContainer.appendChild(progressIndicator);
      }
  
      showQuestion();
    }
  
    function showQuestion() {
      const q = testData[currentLang].questions[currentQuestion];
      questionElement.textContent = q.text;
      answersContainer.innerHTML = "";
  

      const oldImg = document.querySelector(".question-image");
      if (oldImg) oldImg.remove();
  
 
      if (q.image) {
        const img = document.createElement("img");
        img.src = q.image;
        img.alt = "Question Image";
        img.className = "question-image";
        answersContainer.parentNode.insertBefore(img, answersContainer);
      }
  
      q.answers.forEach((a, i) => {
        const div = document.createElement("div");
        div.className = "answer";
        div.textContent = a.text;
        div.addEventListener("click", () => selectAnswer(i));
        answersContainer.appendChild(div);
      });
  
      nextBtn.disabled = true;
  
      updateProgress();
    }
  
    function selectAnswer(index) {
      document.querySelectorAll(".answer").forEach((el) => el.classList.remove("selected"));
      const selected = document.querySelectorAll(".answer")[index];
      selected.classList.add("selected");
      nextBtn.disabled = false;
      userAnswers[currentQuestion] =
        testData[currentLang].questions[currentQuestion].answers[index].type;
    }
  
    function nextQuestion() {
      const type = userAnswers[currentQuestion];
      userScores[type]++;
      currentQuestion++;
      if (currentQuestion < testData[currentLang].questions.length) {
        showQuestion();
      } else {
        showResult();
      }
    }
  
    function showResult() {
      quizScreen.classList.remove("active");
      resultScreen.classList.add("active");
  
      let maxType = "loyal";
      let maxScore = 0;
      for (const t in userScores) {
        if (userScores[t] > maxScore) {
          maxType = t;
          maxScore = userScores[t];
        }
      }
  
      const result = testData[currentLang].results[maxType];
      resultContent.innerHTML = `
        <div class="result-card">
          <img src="${result.image}" alt="${result.title}" class="character-image"/>
          <div class="character-name">${result.title}</div>
          <div class="character-description">${result.description}</div>
          <div class="character-quote">${result.quote}</div>
        </div>
      `;
  
      updateProgress(100);
    }
  
    function restartTest() {
      resultScreen.classList.remove("active");
      startScreen.classList.add("active");
      progressBar.style.width = "0%";
      if (progressIndicator) progressIndicator.style.left = "0%";
    }
  
    function updateProgress(forcePercent = null) {
      const percent =
        forcePercent ??
        (currentQuestion / testData[currentLang].questions.length) * 100;
      progressBar.style.width = `${percent}%`;
      if (progressIndicator) {
        progressIndicator.style.left = `calc(${percent}% - 15px)`;
      }
    }
  

    function switchLanguage(lang) {
      currentLang = lang;
    
      langJpBtn.classList.toggle("active", lang === "jp");
      langEnBtn.classList.toggle("active", lang === "en");
    
      updateUI();
    
      if (quizScreen.classList.contains("active")) {
        showQuestion();
      } else if (resultScreen.classList.contains("active")) {
        showResult();
      }
    }
    function updateUI() {
      const ui = testData[currentLang].ui;
    
      document.querySelector("h1").textContent = ui.title;
      document.querySelector("#start-screen p:nth-of-type(1)").textContent = ui.intro1;
      document.querySelector("#start-screen p:nth-of-type(2)").textContent = ui.intro2;
      document.getElementById("start-btn").textContent = ui.startBtn;
      document.getElementById("next-btn").textContent = ui.nextBtn;
      document.querySelector("#result-screen h2").textContent = ui.resultTitle;
      document.getElementById("restart-btn").textContent = ui.restartBtn;
      document.querySelector("footer p").textContent = ui.footer;
    }
    updateUI();
    function switchLanguage(lang) {
      currentLang = lang;
    
      langJpBtn.classList.toggle("active", lang === "jp");
      langEnBtn.classList.toggle("active", lang === "en");
    
      updateUI();
    
      if (quizScreen.classList.contains("active")) {
        showQuestion();
      } else if (resultScreen.classList.contains("active")) {
        showResult();
      }
    }
    
    function updateUI() {
      const ui = testData[currentLang].ui;
    
      document.querySelector("h1").textContent = ui.title;
      document.querySelector("#start-screen p:nth-of-type(1)").textContent = ui.intro1;
      document.querySelector("#start-screen p:nth-of-type(2)").textContent = ui.intro2;
      document.getElementById("start-btn").textContent = ui.startBtn;
      document.getElementById("next-btn").textContent = ui.nextBtn;
      document.querySelector("#result-screen h2").textContent = ui.resultTitle;
      document.getElementById("restart-btn").textContent = ui.restartBtn;
      document.querySelector("footer p").textContent = ui.footer;
    
      const startScreen = document.getElementById("start-screen");
      let introImg = startScreen.querySelector(".intro-image");
      

      if (!introImg) {
        introImg = document.createElement("img");
        introImg.className = "intro-image";

        const firstParagraph = startScreen.querySelector("p");
        startScreen.insertBefore(introImg, firstParagraph);
      }
    

      if (ui.image) {
        introImg.src = ui.image;
        introImg.alt = "Intro Image";
        introImg.style.display = "block";
      } else {
        introImg.style.display = "none";
      }
    }
    function animatePageTransition(newScreen) {
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  newScreen.classList.add("active");
}
    updateUI();
  }
);