<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fan</title>
    <link rel="icon" href="https://raw.githubusercontent.com/nagesh0143/Coding/main/icon.png" type="icon/png/jpg">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            background: #25252d;
        }

        #container {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            height: 300px;
            width: 60%;
            /* background-color: white; */
            border-radius: 10px;
            background: linear-gradient(yellow, cyan);
        }

        #switch {
            position: absolute;
            top: 7%;
            left: 90%;
            transform: translate(-50%, -50%);
            height: 20px;
            width: 20px;
            background-color: red;
            border-radius: 100%;
            z-index: 1;
        }

        #fan {
            position: absolute;
            top: 36%;
            left: 50%;
            transform: translate(-50%, -50%);
            height: 200px;
            width: 200px;
            background-color: rgb(38, 38, 186);
            border-radius: 100%;
            /* animation: 400ms sp infinite linear; */
        }

        #fan #dot {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            height: 16px;
            width: 16px;
            background-color: red;
            border-radius: 100%;
        }

        #fan #pankh1 {
            position: absolute;
            top: 31%;
            left: 39%;
            transform: translate(-50%, -50%);
            background-color: white;
            /* background: linear-gradient(yellow, cyan, #ff2770); */
            height: 74px;
            width: 40px;
            border-radius: 10% 40% 10% 100%;
        }

        #fan #pankh2 {
            position: absolute;
            top: 69%;
            left: 59%;
            transform: translate(-50%, -50%);
            background-color: white;
            /* background: linear-gradient(#ff2770, cyan, yellow); */
            height: 74px;
            width: 40px;
            border-radius: 10% 100% 10% 40%;
        }

        #fan #pankh3 {
            position: absolute;
            top: 41%;
            left: 69%;
            transform: translate(-50%, -50%);
            background-color: white;
            /* background: linear-gradient(#ff2770, cyan, yellow); */
            height: 40px;
            width: 74px;
            border-radius: 100% 10% 40% 10%;
        }

        #fan #pankh4 {
            position: absolute;
            top: 59%;
            left: 30%;
            transform: translate(-50%, -50%);
            background-color: white;
            /* background: linear-gradient(yellow, cyan, #ff2770); */
            height: 40px;
            width: 74px;
            border-radius: 40% 10% 100% 10%;
        }

        #bt {
            position: absolute;
            top: 87%;
            left: 50%;
            transform: translate(-50%, -50%);
            height: 50px;
            width: 65%;
            background-color: rgb(53, 196, 180);
            border-radius: 10px;
            display: flex;
            flex-direction: row;
            gap: 65px;
        }

        #bt button {
            position: relative;
            height: 28px;
            width: 34px;
            background-color: red;
            top: 50%;
            left: 10%;
            border-radius: 100px;
            transform: translate(-50%, -50%);
            text-align: center;
            color: #fff;
            padding: 2px 2px 2px 2px;
            border: none;
        }

        .on1 {
            animation: 400ms sp infinite linear;
        }

        @keyframes sp {
            0% {
                transform: translate(-50%, -50%) rotate(0deg);
            }

            100% {
                transform: translate(-50%, -50%) rotate(360deg);

            }

        }

        @keyframes op {
            0% {
                transform: translate(-50%, -50%) rotate(0deg);
            }

            100% {
                transform: translate(-50%, -50%) rotate(360deg);

            }

        }

        @media screen and (max-width:700px) {
            #bt {
                position: absolute;
                top: 87%;
                left: 50%;
                transform: translate(-50%, -50%);
                height: 37px;
                width: 90%;
                background-color: rgb(53, 196, 180);
                border-radius: 10px;
                display: flex;
                flex-direction: row;
                gap: 6.8px;
            }

            #bt button {
                position: relative;
                height: 28px;
                width: 34px;
                background-color: red;
                top: 50%;
                left: 10%;
                border-radius: 100px;
                transform: translate(-50%, -50%);
                text-align: center;
                color: #fff;
                padding: 2px 2px 2px 2px;
                border: none;
            }
        }
    </style>
</head>

<body>
    <div id="container">
        <div id="switch"></div>
        <div id="fan">
            <div id="pankh1"></div>
            <div id="pankh2"></div>
            <div id="pankh3"></div>
            <div id="pankh4"></div>
            <div id="dot"></div>
        </div>
        <div id="bt">
            <button id="on">ON</button>
            <button id="off">OFF</button>
            <button id="s1">1</button>
            <button id="s2">2</button>
            <button id="s3">3</button>
        </div>
    </div>
    <script>
        var a = document.getElementById('on');
        var b = document.getElementById('off');
        var c1 = document.getElementById('s1');
        var c2 = document.getElementById('s2');
        var c3 = document.getElementById('s3');
        var fan = document.getElementById('fan');
        var sw = document.getElementById('switch');
        var c = 0;

        a.addEventListener('click', () => {
            sw.style.backgroundColor = "darkgreen";
            sw.style.boxShadow = "0 0 30px green";
            c = 1;
        });

        b.addEventListener('click', () => {
            fan.style.animation = "3s op ";
            sw.style.backgroundColor = "red";
            sw.style.boxShadow = "none";
            c = 0;
        });

        c1.addEventListener('click', () => {
            if (c == 1) {
                fan.style.animation = "600ms sp infinite linear";
            }
        });

        c2.addEventListener('click', () => {
            if (c == 1) {
                fan.style.animation = "400ms sp infinite linear";
            }
        });

        c3.addEventListener('click', () => {
            if (c == 1) {
                fan.style.animation = "200ms sp infinite linear";
            }
        });

    </script>
</body>

</html>
