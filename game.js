// 🔥 サウナde政策！限界耐久ゲーム — ゲームロジック

// ===== 定数 =====
const TOTAL_TIME = 60;          // ゲーム時間（秒）
const INIT_TEMP = 60;           // 初期温度
const MAX_TEMP = 100;           // 限界温度
const TEMP_RISE_PER_SEC = 1.2;  // 1秒あたりの温度上昇
const TEMP_PENALTY = 6;         // 不正解ペナルティ（°C）
const CARD_DISPLAY_TIME = 5000; // カード表示時間（ms）
const FEEDBACK_DURATION = 900;  // フィードバック表示時間（ms）

// ===== ゲーム状態 =====
let state = {
  screen: 'title',
  score: 0,
  temperature: INIT_TEMP,
  timeLeft: TOTAL_TIME,
  combo: 0,
  correctCount: 0,
  totalAnswered: 0,
  questions: [],
  currentQ: null,
  qIndex: 0,
  gameActive: false,
  cardTimer: null,
  gameInterval: null,
  cardTimerStart: null,
};

// ===== DOM要素 =====
const screens = {
  title: document.getElementById('screen-title'),
  game: document.getElementById('screen-game'),
  result: document.getElementById('screen-result'),
};

const els = {
  tempGauge: document.getElementById('temp-gauge-fill'),
  tempValue: document.getElementById('temp-value'),
  timerValue: document.getElementById('timer-value'),
  scoreValue: document.getElementById('score-value'),
  comboDisplay: document.getElementById('combo-display'),
  mainCharacter: document.getElementById('main-character'),
  rabbitImg: document.getElementById('rabbit-img'),
  policyCardText: document.getElementById('policy-card-text'),
  policyCardCategory: document.getElementById('policy-card-category'),
  cardTimerFill: document.getElementById('card-timer-fill'),
  policyCard: document.getElementById('policy-card'),
  feedbackOverlay: document.getElementById('feedback-overlay'),
  feedbackPopup: document.getElementById('feedback-popup'),
  feedbackIcon: document.getElementById('feedback-icon'),
  feedbackText: document.getElementById('feedback-text'),
  flashOverlay: document.getElementById('flash-overlay'),
  escapeOverlay: document.getElementById('escape-overlay'),
  resultRankIcon: document.getElementById('result-rank-icon'),
  resultRankName: document.getElementById('result-rank-name'),
  resultCatchcopy: document.getElementById('result-catchcopy'),
  resultCharacter: document.getElementById('result-character'),
  resultScore: document.getElementById('result-score'),
  resultCorrect: document.getElementById('result-correct'),
  resultTotal: document.getElementById('result-total'),
  resultMaxTemp: document.getElementById('result-max-temp'),
  resultShareText: document.getElementById('result-share-text'),
  gameContainer: document.getElementById('game-container'),
};

// ===== 画像パス =====
const IMAGES = {
  fukuiyuta: 'PHOTO/fukuiyuta.png',
  fukuiyuta2: 'PHOTO/fukuiyuta2.jpg',
  deru: 'PHOTO/deru.png',
  fukuiyuta3: 'PHOTO/fukuiyuta3.png',
  fukuiyuta4: 'PHOTO/fukuiyuta4.png',
  fukuiyuta5: 'PHOTO/fukuiyuta5.png',
  rabbit_guts: 'PHOTO/こくみんうさぎ_ガッツポーズ.png',
  rabbit_shobon: 'PHOTO/こくみんうさぎ_しょぼん.png',
  rabbit_bikkuri: 'PHOTO/こくみんうさぎ_びっくり.png',
  rabbit_hurre: 'PHOTO/こくみんうさぎ_フレッフレッ.png',
  rabbit_banzai: 'PHOTO/こくみんうさぎ_万歳.png',
  rabbit_run: 'PHOTO/こくみんうさぎ_走る.png',
};

// ===== ランク定義 =====
const RANKS = [
  {
    min: 4000, icon: '🥇', name: 'サウナの神',
    catchcopy: 'あなたはととのった！大田区の救世主！',
    character: IMAGES.fukuiyuta5,
    rabbit: IMAGES.rabbit_banzai,
  },
  {
    min: 2000, icon: '🥈', name: 'ととのい人',
    catchcopy: '素晴らしい！政策もサウナもバッチリ！',
    character: IMAGES.fukuiyuta,
    rabbit: IMAGES.rabbit_guts,
  },
  {
    min: 500, icon: '🥉', name: 'サウナ初心者',
    catchcopy: 'いい汗かいた！もっと大田区を知ろう！',
    character: IMAGES.fukuiyuta3,
    rabbit: IMAGES.rabbit_hurre,
  },
  {
    min: 0, icon: '💦', name: 'サウナ見習い',
    catchcopy: 'まずはここから！次こそととのおう！',
    character: IMAGES.fukuiyuta2,
    rabbit: IMAGES.rabbit_shobon,
  },
];

// ===== 画面切り替え =====
function showScreen(name) {
  Object.values(screens).forEach(s => s.classList.remove('active'));
  screens[name].classList.add('active');
  state.screen = name;
}

// ===== タイトル画面 =====
function initTitle() {
  showScreen('title');
}


// ===== ゲーム開始 =====
function startGame() {
  // 状態リセット
  state.score = 0;
  state.temperature = INIT_TEMP;
  state.timeLeft = TOTAL_TIME;
  state.combo = 0;
  state.correctCount = 0;
  state.totalAnswered = 0;
  state.qIndex = 0;
  state.gameActive = true;
  state.questions = shuffleArray(QUESTIONS);

  // UI初期化
  updateHUD();
  setRabbit(IMAGES.rabbit_hurre);
  els.mainCharacter.src = IMAGES.fukuiyuta;
  els.mainCharacter.className = '';

  showScreen('game');

  // ゲームループ開始
  const startTime = Date.now();
  let lastTime = startTime;

  state.gameInterval = setInterval(() => {
    const now = Date.now();
    const delta = (now - lastTime) / 1000;
    lastTime = now;

    state.timeLeft -= delta;
    state.temperature += TEMP_RISE_PER_SEC * delta;

    // 温度キャップ
    if (state.temperature >= MAX_TEMP) {
      state.temperature = MAX_TEMP;
      triggerEscape('temperature');
      return;
    }
    if (state.timeLeft <= 0) {
      state.timeLeft = 0;
      endGame('timeout');
      return;
    }

    updateHUD();
  }, 100);

  // 最初の問題
  showNextCard();
}

// ===== HUD更新 =====
function updateHUD() {
  const tempPercent = ((state.temperature - INIT_TEMP) / (MAX_TEMP - INIT_TEMP)) * 100;
  els.tempGauge.style.width = Math.max(0, Math.min(100, tempPercent)) + '%';
  els.tempValue.textContent = Math.round(state.temperature) + '°C';
  els.timerValue.textContent = Math.ceil(state.timeLeft);
  els.scoreValue.textContent = state.score.toLocaleString();

  // 温度による色変化
  const char = els.mainCharacter;
  const tempV = els.tempValue;

  if (state.temperature >= 90) {
    char.className = 'danger';
    tempV.className = 'temp-value danger';
    setRabbit(IMAGES.rabbit_bikkuri);
  } else if (state.temperature >= 80) {
    char.className = 'hot';
    tempV.className = 'temp-value hot';
    setRabbit(IMAGES.rabbit_hurre);
  } else {
    char.className = '';
    tempV.className = 'temp-value';
  }

  // タイマー警告
  if (state.timeLeft <= 10) {
    els.timerValue.className = 'stat-value warning';
  } else {
    els.timerValue.className = 'stat-value';
  }

  // キャラクターの大きさと震えを温度に応じて動的変更
  const dynamicScale = 1 + (tempPercent / 100) * 0.5; // 初期400pxを基準に、最大1.5倍まで拡大
  let dynamicShake = 0;
  if (state.temperature >= 75) {
    dynamicShake = ((state.temperature - 75) / 25) * 15; // 75度以上で最大15pxの激しい震え
  }
  char.style.setProperty('--temp-scale', dynamicScale);
  char.style.setProperty('--shake-intensity', dynamicShake + 'px');
}

// ===== 次のカード表示 =====
function showNextCard() {
  if (!state.gameActive) return;

  if (state.qIndex >= state.questions.length) {
    state.questions = shuffleArray(QUESTIONS);
    state.qIndex = 0;
  }

  state.currentQ = state.questions[state.qIndex++];

  // カード更新
  els.policyCardText.textContent = state.currentQ.text;
  els.policyCardCategory.textContent = state.currentQ.category;
  els.policyCard.className = 'policy-card';
  if (state.temperature >= 90) {
    els.policyCard.classList.add('danger-card');
  }

  // カードタイマーアニメーション
  els.cardTimerFill.style.transition = 'none';
  els.cardTimerFill.style.transform = 'scaleX(1)';
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      els.cardTimerFill.style.transition = `transform ${CARD_DISPLAY_TIME}ms linear`;
      els.cardTimerFill.style.transform = 'scaleX(0)';
    });
  });

  // カード時間切れ処理
  clearTimeout(state.cardTimer);
  state.cardTimer = setTimeout(() => {
    if (!state.gameActive) return;
    // 時間切れ = ペナルティなし（スキップ）
    showNextCard();
  }, CARD_DISPLAY_TIME);
}

// ===== 判定処理 =====
function handleAnswer(playerAnswer) {
  if (!state.gameActive || !state.currentQ) return;

  clearTimeout(state.cardTimer);
  state.totalAnswered++;

  const isCorrect = (playerAnswer === state.currentQ.correct);

  if (isCorrect) {
    state.correctCount++;
    state.combo++;

    // スコア計算
    const baseScore = 100;
    const comboBonus = state.combo >= 3 ? (state.combo - 2) * 50 : 0;
    const gained = baseScore + comboBonus;
    state.score += gained;

    showFeedback(true, state.currentQ.explanation, gained);
    showScorePopup('+' + gained);
    setRabbit(IMAGES.rabbit_guts);

    // コンボ演出
    if (state.combo >= 3) {
      showComboPopup(state.combo);
    }
  } else {
    state.combo = 0;
    state.temperature += TEMP_PENALTY;
    if (state.temperature > MAX_TEMP) state.temperature = MAX_TEMP;

    showFeedback(false, state.currentQ.explanation, 0);
    flashScreen();
    setRabbit(IMAGES.rabbit_shobon);
  }

  // コンボ表示更新
  updateComboDisplay();

  // 次のカードへ
  setTimeout(() => {
    if (!state.gameActive) return;
    showNextCard();
  }, FEEDBACK_DURATION);
}

// ===== フィードバック表示 =====
function showFeedback(correct, explanation, points) {
  const popup = els.feedbackPopup;
  popup.className = 'feedback-popup ' + (correct ? 'correct' : 'incorrect');
  els.feedbackIcon.textContent = correct ? '⭕️' : '❌';
  els.feedbackText.textContent = explanation;

  els.feedbackOverlay.classList.add('show');
  setTimeout(() => {
    els.feedbackOverlay.classList.remove('show');
  }, FEEDBACK_DURATION - 100);
}

// ===== 画面フラッシュ =====
function flashScreen() {
  els.flashOverlay.style.opacity = '1';
  setTimeout(() => { els.flashOverlay.style.opacity = '0'; }, 200);
}

// ===== スコアポップアップ =====
function showScorePopup(text) {
  const el = document.createElement('div');
  el.className = 'score-popup positive';
  el.textContent = text;
  el.style.left = (30 + Math.random() * 40) + '%';
  el.style.top = '40%';
  els.gameContainer.appendChild(el);
  setTimeout(() => el.remove(), 1000);
}

// ===== コンボポップアップ =====
function showComboPopup(count) {
  const el = document.createElement('div');
  el.className = 'combo-popup';
  el.textContent = `🔥 ${count}コンボ！`;
  els.gameContainer.appendChild(el);
  setTimeout(() => el.remove(), 800);
}

// ===== コンボ表示更新 =====
function updateComboDisplay() {
  if (state.combo >= 3) {
    els.comboDisplay.textContent = `🔥 ${state.combo}COMBO`;
    els.comboDisplay.classList.add('visible');
  } else {
    els.comboDisplay.classList.remove('visible');
  }
}

// ===== うさぎ切り替え =====
function setRabbit(src) {
  els.rabbitImg.src = src;
}

// ===== 脱出演出（温度限界） =====
function triggerEscape(reason) {
  state.gameActive = false;
  clearInterval(state.gameInterval);
  clearTimeout(state.cardTimer);

  const escapeEl = els.escapeOverlay;
  const escapeChar = document.getElementById('escape-character');
  escapeChar.src = IMAGES.deru;
  // CSSアニメーションのため、震え幅の変数をセット
  escapeChar.style.setProperty('--temp-scale', '1.5');
  escapeChar.style.setProperty('--shake-intensity', '5px');
  escapeEl.classList.add('show');

  setTimeout(() => {
    escapeEl.classList.remove('show');
    showResult();
  }, 1600);
}

// ===== 通常ゲーム終了 =====
function endGame(reason) {
  state.gameActive = false;
  clearInterval(state.gameInterval);
  clearTimeout(state.cardTimer);
  showResult();
}

// ===== リザルト表示 =====
function showResult() {
  const rank = getRank(state.score);

  els.resultRankIcon.textContent = rank.icon;
  els.resultRankName.textContent = rank.name;
  els.resultCatchcopy.textContent = rank.catchcopy;
  els.resultCharacter.src = rank.character;
  document.getElementById('result-rabbit').src = rank.rabbit;

  // スコアカウントアップ演出
  let displayScore = 0;
  const targetScore = state.score;
  els.resultScore.textContent = '0';
  setTimeout(() => {
    const step = Math.ceil(targetScore / 40);
    const counter = setInterval(() => {
      displayScore = Math.min(displayScore + step, targetScore);
      els.resultScore.textContent = displayScore.toLocaleString();
      if (displayScore >= targetScore) clearInterval(counter);
    }, 30);
  }, 400);

  els.resultCorrect.textContent = state.correctCount;
  els.resultTotal.textContent = state.totalAnswered;
  els.resultMaxTemp.textContent = Math.round(state.temperature) + '°C';

  // シェアテキスト
  // ※URLを含めることでTwitter側でOGP画像が自動的に表示されます。本番公開時は実際のゲームURLに変更してください。
  const shareUrl = "https://x.com/dpfp_fukui/status/2055632633292612012?s=20"; 
  const shareText = `🔥 サウナde政策！限界耐久ゲームで${state.score.toLocaleString()}点！\nランク：${rank.icon}「${rank.name}」\n${rank.catchcopy}\nあなたもサウナで政策を判定してみよう！\n#サウナde政策 #福井ゆうた #大田区\n${shareUrl}`;
  els.resultShareText.textContent = shareText;
  els.resultShareText.dataset.shareText = shareText;

  showScreen('result');
}

// ===== ランク取得 =====
function getRank(score) {
  for (const rank of RANKS) {
    if (score >= rank.min) return rank;
  }
  return RANKS[RANKS.length - 1];
}

// ===== シェアテキストコピー =====
function copyShareText() {
  const text = els.resultShareText.dataset.shareText;
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text).then(() => {
      showToast('シェアテキストをコピーしました！');
    }).catch(() => {
      showToast('コピーできませんでした');
    });
  } else {
    showToast('テキストをコピーしてシェアしてください！');
  }
}

// ===== Xシェア =====
function shareToX() {
  const text = els.resultShareText.dataset.shareText;
  const url = encodeURIComponent(text);
  window.open(`https://twitter.com/intent/tweet?text=${url}`, '_blank');
}

// ===== トースト通知 =====
function showToast(message) {
  const toast = document.createElement('div');
  toast.style.cssText = `
    position: fixed; bottom: 30px; left: 50%; transform: translateX(-50%);
    background: rgba(0,0,0,0.8); color: white; padding: 10px 20px;
    border-radius: 20px; font-size: 0.85rem; z-index: 9999;
    animation: fadeInUp 0.3s ease;
  `;
  toast.textContent = message;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 2500);
}

// ===== 蒸気エフェクト生成 =====
function createSteamEffects() {
  const containers = document.querySelectorAll('.steam-container');
  containers.forEach(container => {
    for (let i = 0; i < 6; i++) {
      const steam = document.createElement('div');
      steam.className = 'steam';
      steam.style.left = (10 + Math.random() * 80) + '%';
      steam.style.setProperty('--duration', (2.5 + Math.random() * 2) + 's');
      steam.style.setProperty('--delay', (Math.random() * 3) + 's');
      container.appendChild(steam);
    }
  });
}

// ===== 初期化 =====
window.addEventListener('DOMContentLoaded', () => {
  createSteamEffects();
  initTitle();
});
