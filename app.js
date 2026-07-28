/* 全体*/
body {
    font-family: "Yu Gothic", sans-serif;
    background: #eef5ff;
    margin: 0;
    padding: 30px;
    text-align: center;
}

/* タイトル */
h1 {
    color: #0077cc;
    margin-bottom: 25px;
}

/* 入力欄 */
input[type="text"] {
    width: 250px;
    padding: 10px;
    border: 2px solid #0077cc;
    border-radius: 8px;
    font-size: 16px;
    outline: none;
}

input[type="text"]:focus {
    border-color: #005fa3;
}

/* ボタン */
button {
    background-color: #0077cc;
    color: white;
    border: none;
    border-radius: 8px;
    padding: 10px 18px;
    margin: 5px;
    font-size: 15px;
    cursor: pointer;
    transition: 0.3s;
}

button:hover {
    background-color: #005fa3;
    transform: scale(1.05);
}

/* リスト */
ul {
    list-style: none;
    padding: 0;
    margin-top: 30px;
}

/* 持ち物カード */
li {
    width: 320px;
    margin: 10px auto;
    padding: 12px 15px;
    background: white;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.15);
}

/* チェック済み */
.checked {
    text-decoration: line-through;
    color: gray;
}

/* チェックボックス */
input[type="checkbox"] {
    transform: scale(1.2);
    margin-right: 10px;
}

/* 削除ボタン */
li button {
    background: #ff5a5a;
    padding: 6px 12px;
    font-size: 14px;
}

li button:hover {
    background: #d63c3c;
}

/* スマホ対応 */
@media (max-width: 600px) {
    body {
        padding: 15px;
    }

    input[type="text"] {
        width: 90%;
    }

    li {
        width: 95%;
    }

    button {
        width: 90%;
        margin-top: 10px;
    }


