---
layout: default
---

<style>
h1 {
    color:red;
}
img.greeting {
            height: 8vw;
            max-width: 50vw;
            padding-bottom: 10px;
}
.welcome {
            border: 2px solid rgba(121, 210, 184, 1);
            background-image: url('concrete.jpg');
            padding: 20px;
            font-size: 1.5rem;
}
</style>
<div class="welcome">
    <img class="greeting" id="greetingText" src="goodday.png" alt="Good day">
</div>

<script>
        var today = new Date();
        var hour = today.getHours();
        console.log(hour);
        if (hour <= 5) {
            var greeting = "goodnight.png";
        } else if (hour <= 11) {
            var greeting = "goodmorning.png";
        } else if (hour <= 17) {
            var greeting = "goodafternoon.png";
        } else if (hour <= 22) {
            var greeting = "goodevening.png";
        } else {
            var greeting = "goodnight.png";
        }
        document.getElementById('greetingText').src = greeting;
</script>