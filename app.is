body{
    margin: 0;
    padding: 0;
    font-family: "Yu Gothic", sans-serif;
    background: linear-gradient(135deg, #87CEFA, #FFE082);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

/* アプリ全体 */
.container{
    width: 380px;
    background: #ffffff;
    padding: 30px;
    border-radius: 20px;
    text-align: center;
    box-shadow: 0 10px 20px rgba(0,0,0,0.2);
}

/* タイトル */
h1{
    color: #ff9800;
    margin-bottom: 10px;
}

/* 説明文 */
p{
    color: #555;
    font-size: 16px;
}

/* プルダウン */
select{
    width: 250px;
    padding: 10px;
    font-size: 17px;
    border: 2px solid #ff9800;
    border-radius: 10px;
    margin: 20px 0;
    cursor: pointer;
}

/* ボタン */
button{
    width: 250px;
    padding: 12px;
    background: #ff9800;
    color: white;
    border: none;
    border-radius: 10px;
    font-size: 18px;
    cursor: pointer;
    transition: 0.3s;
}

button:hover{
    background: #fb8c00;
    transform: scale(1.05);
}

/* 結果表示 */
#result{
    margin-top: 30px;
    background: #f8f8f8;
    border-radius: 15px;
    padding: 20px;
    min-height: 130px;
    font-size: 20px;
    box-shadow: inset 0 0 5px rgba(0,0,0,0.1);
}

#result h2{
    color: #ff9800;
    margin-top: 0;
}

#result p{
    font-size: 22px;
    font-weight: bold;
    color: #333;
}

/* 診断中アニメーション */
.loading{
    font-size: 28px;
    font-weight: bold;
    color: #ff9800;
    animation: shake 0.6s infinite;
}

@keyframes shake{
    0%{
        transform: rotate(-5deg);
    }
    50%{
        transform: rotate(5deg);
    }
    100%{
        transform: rotate(-5deg);
    }
}

/* スマホ対応 */
@media (max-width: 480px){

    .container{
        width: 90%;
        padding: 20px;
    }

    select,
    button{
        width: 100%;
    }

}
}/* 背景 */
body{
    margin: 0;
    padding: 0;
    font-family: "Yu Gothic", sans-serif;
    background: linear-gradient(to bottom, #87CEEB, #E0F7FA);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    overflow: hidden;
    position: relative;
}

/* 雲1 */
body::before{
    content: "☁️";
    font-size: 70px;
    position: absolute;
    top: 80px;
    left: -150px;
    animation: cloud1 12s linear infinite;
}

/* 雲2 */
body::after{
    content: "☁️ ☁️";
    font-size: 50px;
    position: absolute;
    top: 180px;
    left: -300px;
    animation: cloud2 10s linear infinite;
}

/* 雲の動き */
@keyframes cloud1{
    from{
        left: -150px;
    }
    to{
        left: 110%;
    }
}

@keyframes cloud2{
    from{
        left: -300px;
    }
    to{
        left: 110%;
    }
}

/* アプリを前面に表示 */
.container{
    position: relative;
    z-index: 10;
}

