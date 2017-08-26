<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Jonco Lab - Web development</title>
    <link rel="stylesheet" href="styles/style.css">
    <script src="scripts/js/jquery-3.2.1.min.js" type="text/javascript"></script>
    <script src="scripts/js/script.js" type="text/javascript"></script>
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
            <h1 id="tagline">Do let professionals to code.
                <div class="underline"></div>
            </h1>
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
                    <span class="letter">s</span>
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
                        Praesent eros purus, suscipit et nibh at, fermentum iaculis nibh.
                        Quisque fringilla, nulla sit amet convallis laoreet, massa mi posuere elit, quis laoreet orci enim at purus.
                        Quisque tempus ex ut erat ornare, sit amet ultricies erat suscipit.
                    </p>
                </div>
            </article>
        </div>
        <div class="content-block" id="visualization">
            <figure id="development">
                <figcaption>Development</figcaption>
                <div class="line"></div>
                <span class="ico"></span>
            </figure>
            <figure id="support">
                <figcaption>Support</figcaption>
                <div class="line"></div>
                <span class="ico"></span>
            </figure>
            <figure id="expansion">
                <figcaption>Improvement & Expansion</figcaption>
                <div class="line"></div>
                <span class="ico"></span>
            </figure>
        </div>
    </section>
    <section id="about" class="content-section">
        <h2 class="caption">
            <span class="name">About us</span>
            <span class="ico">☺</span>
        </h2>
        <article class="content">
            <img id="about-visual" src="images/jonco-planet.png">
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
            </div>
            <div class="big-letter">
                <span class="letter">a</span>
                <div class="line"></div>
            </div>
        </article>
    </section>
    <section id="portfolio" class="content-section">
        <h2 class="caption">
            <span class="name">Our clients</span>
            <span class="ico">☺</span>
        </h2>
        <div class="gallery">
            <img id="ztsb" src="images/jonco-logo2.png" alt="Transkarpathian Universal Stock Exchange">
            <img id="th-upizol" src="images/jonco-logo2.png" alt="Ukrpromizoliatsia Trade House">
            <img id="ier" src="images/jonco-logo2.png" alt="International Relations Faculty of Uzhgorod National University">
        </div>
    </section>
    <section id="contacts" class="content-section">
        <h2 class="caption">
            <span class="name">Contact us</span>
            <span class="ico">☺</span>
        </h2>
        <div class="content">
            <form id="feedback-form">
                <label for="name">Send us an email:</label>
                <input id="name" name="name" placeholder="Your name" required>
                <input type="email" name="email" id="email" placeholder="Your Email" required>
                <input name="subject" id="subject" placeholder="Subject" required>
                <textarea name="message" id="message" style="resize: none;" placeholder="Your message"></textarea>
                <input type="submit">
                <label for="submit">Send</label>
            </form>
            <ul id="contacts-list">
                <li class="contacts-item" id="tel">
                    <span class="ico">☺</span>
                    <span class="contact">Tel</span>
                </li>
                <li class="contacts-item" id="mail">
                    <span class="ico">☺</span>
                    <span class="contact">Email</span>
                </li>
                <li class="contacts-item" id="vk">
                    <span class="ico">☺</span>
                    <span class="contact">VKontakte</span>
                </li>
                <li class="contacts-item" id="tw">
                    <span class="ico">☺</span>
                    <span class="contact">Twitter</span>
                </li>
            </ul>
            <div class="big-letter">
                <span class="letter">c</span>
                <div class="line"></div>
            </div>
        </div>
    </section>
</main>
</body>
</html>