window.onscroll = function () { scrollFunction() };

    function scrollFunction() {
      var navbar = document.getElementById("navbar");
      var logoImage = document.getElementById("logo-image");
      if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        navbar.style.backgroundColor = "rgba(255,255,255,0.9)";
        setLinkColor(navbar, "#222222");
        navbar.style.boxShadow = "0px 2px 5px rgba(0, 0, 0, 0.1)";
        navbar.style.height = "90px";
        logoImage.style.filter = "brightness(100%)";
        logoImage.src = "/assets/images/logo.png";



      } else {
        navbar.style.backgroundColor = "transparent";
        setLinkColor(navbar, "white");
        navbar.style.boxShadow = "none";
        navbar.style.height = "120px";
        logoImage.src = "/assets/images/wtitelogo.png";




      }
    }

    function setLinkColor(element, color) {
      var links = element.getElementsByTagName("a", "i");
      for (var i = 0; i < links.length; i++) {
        links[i].style.color = color;
        links[i].style.transition = "color 0.3s"; // Geçiş efekti eklemek
          links[i].addEventListener("mouseenter", function() {
            this.style.color = "#d61c22"; // Linkin hover rengini ayarlama
          });

          links[i].addEventListener("mouseleave", function() {
            this.style.color = color; // Linkin orijinal rengine dönme
          });
      }
    }


