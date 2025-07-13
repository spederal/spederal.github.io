document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('tech-btn').addEventListener('click', function () {
    document.getElementById('tech-output').textContent = 'Learn it like you never knew it!';
  });

  // Song links and titles
  const musicLinks = [
    { title: 'Album 1', url: 'https://youtu.be/J3wS8XK5JWk?si=C_pjP794k4zNVgLv' },
    { title: 'Album 2', url: 'https://youtu.be/G4CKmzBf5Cs?si=gDfoNqbHm3coaJKi' },
    { title: 'Album 3', url: 'https://youtu.be/Ke8D3sM6-3M?si=nya_u3oGwEWz75WD' },
    { title: 'Album 4', url: 'https://youtu.be/TX3Acs8zQ0c?si=AYz7lNfwQKEL1Pk2' }
  ];

  document.getElementById('music-btn').addEventListener('click', function () {
    const song = musicLinks[Math.floor(Math.random() * musicLinks.length)];
    document.getElementById('music-output').innerHTML = `<a href="${song.url}" target="_blank" rel="noopener" class="btn">${song.title}</a>`;
  });

  const bodyMessages = [
    'Keep pushing! 💪',
    'One more rep!',
    'Strength comes from consistency.',
    'You are stronger than you think!',
    'Crush your goals!',
    'Stay dedicated!',
    'Lift heavy, live healthy!',
    'Progress, not perfection.',
    'Every day is a new PR!',
    'Fuel your ambition!'
  ];

  document.getElementById('body-btn').addEventListener('click', function () {
    const msg = bodyMessages[Math.floor(Math.random() * bodyMessages.length)];
    document.getElementById('body-output').textContent = msg;
  });

  // YouTube Iframe API logic
  let ytPlayer = null;
  let isMuted = false;
  let isStarted = false;
  const audioToggle = document.getElementById('audio-toggle');
  const ytContainer = document.getElementById('yt-ambient-container');

  // This function will be called by the YouTube Iframe API
  window.onYouTubeIframeAPIReady = function () {
    // nothing here, player is created on demand
  };

  function createPlayerAndPlay() {
    ytContainer.style.display = 'block';
    ytPlayer = new YT.Player('yt-ambient-container', {
      height: '0',
      width: '0',
      videoId: 'J3wS8XK5JWk',
      playerVars: {
        autoplay: 1,
        controls: 0,
        showinfo: 0,
        rel: 0,
        loop: 1,
        playlist: 'J3wS8XK5JWk',
        mute: 0
      },
      events: {
        'onReady': function (event) {
          event.target.playVideo();
          event.target.unMute();
          isMuted = false;
          audioToggle.textContent = '🔊';
        }
      }
    });
  }

  audioToggle.addEventListener('click', function () {
    if (!isStarted) {
      createPlayerAndPlay();
      isStarted = true;
      audioToggle.textContent = '🔊';
      return;
    }
    if (!ytPlayer) return;
    if (isMuted) {
      ytPlayer.unMute();
      audioToggle.textContent = '🔊';
      isMuted = false;
    } else {
      ytPlayer.mute();
      audioToggle.textContent = '🔇';
      isMuted = true;
    }
  });
}); 