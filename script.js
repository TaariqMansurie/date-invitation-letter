const envelope = document.getElementById('envelope');
    const seal = document.getElementById('seal');
    const letter = document.getElementById('letter');
    const dateBtn = document.getElementById('dateBtn');
    const closeBtn = document.getElementById('closeBtn');

    closeBtn.addEventListener('click', () => {
        envelope.classList.remove('open');
        envelope.appendChild(seal); // Re-add the seal back inside envelope
    });

    seal.addEventListener('click', () => {
      envelope.classList.add('open');
      seal.remove(); // Remove the seal button when clicked
    });

    function createHeart() {
      const heart = document.createElement('div');
      heart.classList.add('heart');
      heart.style.left = Math.random() * 100 + 'vw';
      heart.style.animationDuration = (Math.random() * 2 + 3) + 's';
      document.body.appendChild(heart);
      setTimeout(() => heart.remove(), 5000);
    }

    dateBtn.addEventListener('click', () => {
      setInterval(createHeart, 200); // Start hearts only when "Go on a Date?" is clicked
    });