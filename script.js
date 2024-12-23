document.addEventListener("DOMContentLoaded", function() {
    const container = document.querySelector('.container');
    const textsContainer = document.getElementById('texts');
    const phrases = [
      "the universe is an ultimately perfectly balanced and just place, if given enough time",
      "everything happens for a reason",
      "good karma",
      "aliens?",
      "karma!",
      "love!",
      "souls - I don't know why exactly, I can explain some other time...",
      "astrology",
      "the universe",
      "manifestation",
      "the arts",
      "spirits",
      "past lives",
      "anti-jinx",
      "things eventually find their place, no matter how long it takes",
      "souls and garbage!",
      "i definitely believe in love but i feel it so strongly i don’t know if feel is the right word",
      "i feel love and souls the same way i imagine roots of a tree",
      "and i don’t really mind not understanding or being able to explain",
      "mother nature",
      "i genuinely believe in fate. everything is destined. I feel grateful for my failure 2 years ago",
      "crystal oracle"
    ];
  
    const colors = ['blue', 'pink', 'purple', 'yellow']; // Available glow colors
  
    // Create text elements and set their initial positions
    phrases.forEach((phrase, index) => {
      const textElement = document.createElement('div');
      textElement.classList.add('text');
      textElement.textContent = phrase;
      textElement.style.left = `${Math.random() * 100}vw`; // Random x position
      textElement.style.top = `${Math.random() * 100}vh`; // Random y position
      textElement.style.animationDelay = `${index * 2}s`; // Delay for each text element
  
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      textElement.style.textShadow = `0 0 10px ${randomColor}, 0 0 20px ${randomColor}, 0 0 30px ${randomColor}`;
  
      textsContainer.appendChild(textElement);
    });
  
    document.addEventListener('click', function() {
      const title = document.querySelector('.title');
      const subtitle = document.querySelector('.subtitle');
      title.style.opacity = 0;
      subtitle.style.opacity = 0;
  
      setTimeout(() => {
        document.querySelectorAll('.text').forEach(text => {
          text.style.opacity = 1;
        });
      }, 500);
    });
  
    document.addEventListener('mousemove', function(e) {
      const spotlight = document.createElement('div');
      spotlight.classList.add('spotlight');
      const size = 60;
      spotlight.style.width = `${size}px`;
      spotlight.style.height = `${size}px`;
      spotlight.style.left = `${e.pageX - size / 2}px`;
      spotlight.style.top = `${e.pageY - size / 2}px`;
      container.appendChild(spotlight);
  
      document.querySelectorAll('.text').forEach(text => {
        const spotlightRect = spotlight.getBoundingClientRect();
        const textRect = text.getBoundingClientRect();
  
        if (
          spotlightRect.right > textRect.left &&
          spotlightRect.left < textRect.right &&
          spotlightRect.bottom > textRect.top &&
          spotlightRect.top < textRect.bottom
        ) {
          text.style.opacity = 1;
        } else {
          text.style.opacity = 0;
        }
      });
  
      setTimeout(() => {
        spotlight.remove();
      }, 5000);
    });
  
    document.addEventListener('mouseleave', function() {
      document.querySelectorAll('.text').forEach(text => {
        text.style.opacity = 0;
      });
    });
  });