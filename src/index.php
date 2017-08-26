<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Jonco Lab - Web development</title>
    <link rel="stylesheet" href="styles/style.css">
    <script src="scripts/jquery-3.2.1.min.js" type="text/javascript"></script>
    <script src="scripts/script.js" type="text/javascript"></script>
</head>
<body>
<header>
    <img id="logo" alt="Jonco Lab Web Development" src="images/jonco-logo2.png">
    <nav id="menu">
        <a class="menu-item" id="start-button" href="#">Start</a>
        <a class="menu-item" id="services-button" href="#services">Services</a>
        <a class="menu-item" id="about-button" href="#about">About us</a>
        <a class="menu-item" id="portfolio-button" href="#portfolio">Portfolio</a>
        <a class="menu-item" id="contacts-button" href="#contacts">Contact us</a>
    </nav>
</header>
<main>
    <section id="start" class="content-section">
        <div class="content-block">
            <h1 id="tagline">Do let professionals to code.</h1>
            <div class="underline"></div>
        </div>
    </section>
    <section id="services" class="content-section">
        <div class="content-block" id="description">
            <h2 class="caption">
                <span class="name">Services</span>
                <span class="ico">☺</span>
            </h2>
            <article class="content">
                <div class="big-letter">
                    <span class="letter"></span>
                    <div class="line"></div>
                </div>
                <div class="text">
                    <p class="text-block">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec quam est, porta ut faucibus nec, aliquam at nisl.
                        Donec vitae lacinia ante. Etiam sollicitudin, nunc nec malesuada imperdiet, justo justo condimentum diam, eget gravida odio mi vitae tortor.
                    </p>
                    <p class="text-block">
                        Praesent eros purus, suscipit et nibh at, fermentum iaculis nibh.
                        Quisque fringilla, nulla sit amet convallis laoreet, massa mi posuere elit, quis laoreet orci enim at purus.
                        Quisque tempus ex ut erat ornare, sit amet ultricies erat suscipit.
                    </p>
                    <p class="text-block">
                        Suspendisse leo ligula, facilisis sed purus et, posuere dapibus turpis.
                    </p>
                </div>
            </article>
        </div>
        <div class="content-block" id="visualization">
            <figure>
                <figcaption>Development</figcaption>
                <div class="line"></div>
                <span class="ico"></span>
            </figure>
            <figure>
                <figcaption>Development</figcaption>
                <div class="line"></div>
                <span class="ico"></span>
            </figure>
            <figure>
                <figcaption>Development</figcaption>
                <div class="line"></div>
                <span class="ico"></span>
            </figure>
        </div>
    </section>
    <section id="about" class="content-section"></section>
    <section id="portfolio" class="content-section"></section>
    <section id="contacts" class="content-section"></section>
</main>
</body>
</html>