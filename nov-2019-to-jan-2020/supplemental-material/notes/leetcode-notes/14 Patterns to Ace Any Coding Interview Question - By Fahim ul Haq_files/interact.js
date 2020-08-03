document.addEventListener('DOMContentLoaded', function () {
  const slugify = (text) => (
    text.toString().toLowerCase()
      .replace(/^-+/, '')             // Trim - from start of text
      .replace(/-+$/, '')             // Trim - from end of text
  )

  const vm = new Vue({
    el: '#header',
    data: () => {
      const ref = encodeURIComponent('https://app.hackernoon.com');
      const loginLink = `https://community.hackernoon.com/session/sso?return_path=${ref}`;
      const signupLink = `https://community.hackernoon.com/session/sso?return_path=${ref}`;

      return {
        menuOpen: false,
        expandBio: false,
        ads: null,
        loginLink,
        signupLink,
        search: '',
        searchFocus: false,
        navBounce: null,
        user: null,
        userLoaded: false,
        darkMode: false
      };
    },
    async mounted() {
      if (localStorage.darkMode) {
        if (localStorage.darkMode === 'true') {
          this.darkMode = true;
        }
      }

      if (!firebase.auth().currentUser) {
        const res = await fetch('https://auth.hackernoon.com/api/postauth', {
          method: 'POST',
          mode: 'cors',
          credentials: 'include'
        });

        if (res.ok) {
          const { token } = await res.json();
          const { user } = await firebase.auth().signInWithCustomToken(token);

          const profileUrl = `https://api.hackernoon.com/profiles/${user.uid}`;
          const profileRes = await fetch(profileUrl, {
            method: 'GET',
            mode: 'cors',
            credentials: 'include',
            headers: {
              'Content-Type': 'application/json'
            }
          });

          if (profileRes.ok) {
            const profile = await profileRes.json();
            this.user = Object.assign({}, user, profile);
          }
        }
      }

      this.userLoaded = true;

      const pathnameParts = window.location.pathname.split('/');
      const storySlug = pathnameParts[pathnameParts.length - 1];

      if (storySlug !== '') {
        const jsonUrl = `/${storySlug}.json`;

        fetch(jsonUrl)
          .then(response => {
            return response.json();
          })
          .then(json => {
            for (const prop of Object.keys(json)) {
              this[prop] = json[prop];
            }
          });
      }
    },
    computed: {
      profileLink() {
        return `https://app.hackernoon.com/profile`;
      },
      profileImage() {
        return `https://hackernoon.com/avatars/${this.user.uid}.png`;
      }
    },
    methods: {
      menuToggle() {
        this.menuOpen = !this.menuOpen;
      },
      bioToggle () {
        this.expandBio = !this.expandBio;
      },
      submitSearch () {
        if (this.searchFocus === false){
          this.searchFocus = true;
          this.$refs.search.focus();
        } else {
          if (this.search !== '') {
            window.location = `https://hackernoon.com/search?stories[query]=${slugify(this.search)}`;
          }
        }
      },

      async logout(ev) {
        await firebase.auth().logout();
      }
    },
    watch: {
      darkMode () {
        localStorage.darkMode = this.darkMode;
        const body = document.querySelector('body');
        if (this.darkMode) {
          body.classList.add('dark');
        } else {
          body.classList.remove('dark');
        }
      }
    }
  });
});
