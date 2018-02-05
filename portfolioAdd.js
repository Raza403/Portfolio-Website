/* This code is added in main.min.js taken out for reference perpose */
function addPortfolio() {
  const jsPortfolio = document.querySelector('.portfolio-add');
  const imgSrc = ['./img/portfolio/ajax-typeAhead.png', './img/portfolio/CodePlayer.png', './img/portfolio/jsBSClock.png', './img/portfolio/CSSVariables.png', './img/portfolio/weather-app.png', './img/portfolio/JSdrumKit.png', './img/portfolio/konamiCode.png', './img/portfolio/holdShiftCheckboxes.png', './img/portfolio/randomQouteGenerator.png', './img/portfolio/flexJSImageGalerry.png', './img/portfolio/html5Canvas.png', './img/portfolio/Wikipedia-viewer.png', './img/portfolio/html5Video.png', './img/portfolio/twitchAPI.png', 'img/portfolio/gapi.png', './img/portfolio/reactionTimeGame.png', './img/portfolio/FCCportfolio.png', './img/portfolio/AttributePage.png'];
  const imgAlt = ['Image of type ahead project made by JS mainly', 'Image of live code player', 'Image of JavaScript and Bootstrap clock', 'Pic of CSS variable', 'Pic of local weather app', 'Image of JS drum kit', 'Pic of Konami code', 'Pic of hold shift checkBoxes', 'Pic of random quote generator', 'Image of JS flex image gallery', 'Pic of using HTML5 canvas', 'Pic of wikipedei viewer', 'Pic of custom HTML5 video player', 'Usage of twitch API', 'This image contains image of my website which uses…lopment, an example of full stack web development', 'Pic of reaction time game', 'Pic of portfolio site made for FCC project', 'Pic of attribute page to Abdul Sattar Edhi'];
  const captionP = ['Fetch and show data in real time, Type ahead using JS', 'Live output of HTML,CSS and JS. Made using jQuery', 'Clock made by using JavaScript and Bootstrap', 'CSS variables varried using JavaScript', 'Local weather data fetched from API using jQuery', 'Drum kit plays sounds and CSS animation when keys pressed', 'Always looking for certain keys to be pressed in certain order, Like a cheat in a game', 'Selecting all checkboxes between two points, using JavaScript', 'Random quotes are fetched from API and can be tweeted. Implemented in jQuery', 'JavaScript is used to handle click events and response accordingly', 'Used JavaScript to draw, change color & font-size in HTML5 Canvas', 'Search wikipedia articles from Wikipedia API using jQuery', 'Customize HTML5 Video player using JavaScript', 'Data Fetched from twitch API using twitch API, Bootstrap used for styling', 'Made using Google Maps API, implemented using Python,flask and SQLite etc', 'Reaction time game made using jQuery', 'Made this portfolio as beginner project  FCC front end certification', "Free Code Camp's first project, an attribute page to Abdul Sattar Edhi"];
  const captionH4 = ['AJAX Type Ahead', 'Live Code Player', 'Bootstrap & JS Clock', 'JS & CSS Variables', 'Local Weather App', 'JavaScript & Bootstrap DrumKit', 'JavaScript Implementation of Konami Code', 'CheckBox selection by pressing shift key', 'Random Quote Generator and tweeting', 'JavaScript and Flex box image gallery', 'JavaScript & HTML5 Canvas', 'Search Wikipedia articles', 'Custom HTML5 Video player', 'Fetching Date from Twitch.tv API', 'Loation Based News Web', 'Reaction Time Game', 'FCC portfolio', 'FCC Attribute Page Project'];
  const html = [];
  for (let i = 0; i < captionH4.length; i++) {
    html.push(`<div class="col-md-4 portfolio-item">
                  <a id="${i}" class=portfolio-link data-toggle=modal>
                      <div class=portfolio-hover>
                          <div class=portfolio-hover-content>
                              <i class="fa fa-3x fa-plus"></i>
                          </div>
                      </div>
                      <img alt="${imgAlt[i]}" class=img-responsive src="${imgSrc[i]}">
                  </a>
                  <div class=portfolio-caption>
                      <h4>${captionH4[i]}</h4>
                      <p class=text-muted>${captionP[i]}</div>
              </div>`);
  }
  jsPortfolio.innerHTML = html.join('');
}
window.addEventListener('load', addPortfolio);
