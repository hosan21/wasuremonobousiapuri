// 学校の持ち物
const school = [
    "📚 教科書は持った？",
    "✏️ 筆箱はある？",
    "🎓 学生証を忘れてない？",
    "💰 財布はOK？",
    "📱 スマホはある？"
];

// バイトの持ち物
const baito = [
    "👕 制服はある？",
    "🪪 名札は持った？",
    "👛 財布はある？",
    "📱 スマホはOK？",
    "🔑 家の鍵は持った？"
];

// 部活の持ち物
const club = [
    "⚽ シューズはある？",
    "🥤 水筒は持った？",
    "🧺 タオルはある？",
    "👕 ユニフォームはOK？",
    "📱 スマホはある？"
];

// 診断ボタンを押したとき
function draw() {

    const place = document.getElementById("place").value;
    const result = document.getElementById("result");

    // 診断中の表示
    result.innerHTML = '<div class="loading">🎲 診断中...</div>';

    // 2秒後に結果を表示
    setTimeout(function () {

        let list;

        if (place === "school") {
            list = school;
        } else if (place === "baito") {
            list = baito;
        } else {
            list = club;
        }

        // ランダムに持ち物を選ぶ
        const random = Math.floor(Math.random() * list.length);

        result.innerHTML = `
            <h2>🎯 診断結果</h2>
            <p>${list[random]}</p>
            <h3>✨ 忘れ物がないかもう一度確認しよう！</h3>
        `;

    }, 2000);
}
