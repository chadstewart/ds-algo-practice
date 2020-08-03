document.addEventListener('DOMContentLoaded', async function () {
  const startTimeMs = Date.now();
  const currentUser = firebase.auth().currentUser;

  let token;
  firebase.auth().onAuthStateChanged(async (user) => {
    if (user) {
      token = await user.getIdToken(true);
    }
  });

  // set a 5 second timeout to give firebase time to load, in case user is signed in
  setTimeout(() => {
    fetch('https://api.hackernoon.com/analytics/pageviews', {
      method: 'POST',
      mode: 'cors',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: token,
        story: window.location.pathname.split('/').pop()
      })
    });
  }, 5000);

  window.addEventListener('beforeunload', function (ev) {
    const timeMs = Date.now() - startTimeMs;
    // get minutes from ms
    const time = timeMs / 1000 / 60;
    const story = window.location.pathname.split('/').pop();

    let data = { time, story };
    if (token) {
      data.user = token;
    }

    navigator.sendBeacon('https://api.hackernoon.com/analytics/time', JSON.stringify(data));
  });
});