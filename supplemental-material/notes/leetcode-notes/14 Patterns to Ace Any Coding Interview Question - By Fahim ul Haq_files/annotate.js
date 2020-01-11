;(function annotate(){ // contact Mark Nadal if you need help with anything in this file! :)
	if(!window.GUN){
		load('https://cdn.jsdelivr.net/npm/gun/gun.js');
		return setTimeout(annotate, 99);
	}
	if(!window.GUN.SEA){
		load('https://cdn.jsdelivr.net/npm/gun/sea.js');
		return setTimeout(annotate, 99);
	}
	if(!window.$){
		load('https://cdn.jsdelivr.net/npm/gun/lib/doll.js'); // lite jQuery shim
		return setTimeout(annotate, 99);
	}
	function load(src, tag){ // load dependency
		(tag = tag || document.createElement('script')).src = src;
		document.body.appendChild(tag);
	}

	function note(){};
	note.all = {};
	// let you override configuration settings.
	// here are the defaults:
	note.config = window.CONFIG || {peers: [
		'https://gunjs.herokuapp.com/gun'
		//'http://localhost:8765/gun'
	], retry: 3, localStorage: false};
	// start GUN up:
	var gun = note.gun = Gun(note.config);

	note.stats = {};
	
	;(function(){
		// THIS IS AUSTIN'S PUBLIC KEY: https://api.hackernoon.com/profiles/austin
		// Poor David & Dane ;) left out in the cold, if you want, let us know!
		var S = +new Date;
		note.gun.user("8EGEHqzFEm1ribD57T5j359uvLuUR2EPlmDAgTHI440.PD-mGcGDRxMglIU6B9c6oYw80d9dWkOrWAb1M60IhMk").get('hackernoon!annotations').on(function(on){
			note.enabled = on;
			note.stats.e = +new Date - S;
			note.health();
		});
	}());

	// fetch profile by author class/id then load annotations & verify against pubkey in profile.
	var handle = ($('.name').find('a').attr('href')||'').split('@')[1];
	;(async function(){
		var S = +new Date;
		var profile = await (await fetch('https://api.hackernoon.com/profiles/'+handle)).json();
		note.stats.p = +new Date - S;
		if(!profile){ return }
		var pub = profile.pub;
		if(!pub){ return }

		var saw = 'saw';
		if(note.gun.DEBUG){ saw = '__DEV__' + saw }

		var approvedNotes = note.gun.user(pub).get(saw).get('note'+location.pathname+'/approved');
		// iterate over all annotations on the story
		var S = +new Date;
		approvedNotes.map().on(function(data, id){
			note.stats.a = note.stats.a || (+new Date - S);
			if(!note.gun.DEBUG && !note.enabled){ return }
			if(!data){ return }
			if(!data.text){
				note.undo(id);
				return;
			}
			if(!data.highlight){ return }
			var tag = note.find(data.highlight);
			if(!tag){ return }
			// only allow annotation submissions on children of .content & .story:
			if(!$(tag).closest('.content').closest('.story').length){ return }
			note.replace(tag, data.highlight, id);
			note.all[data.highlight] = data.text;
		});
	}());

	$(document).on('click', function(eve){
		var tag = eve.target;
		if('annotate-hover' === tag.id){
			note.write();
			return;
		}
		if(!(tag = $(tag)).is('.annotate')){ return }
		var text = note.all[tag.text()];
		note.show(text, eve.pageX, eve.pageY);
	}).on('mousedown', function(eve){
		$('#annotate-hover').css({opacity: 0});
	}).on('mouseup', function(eve){
		note.able(eve.pageX, eve.pageY);
	});
	note.able = function(x,y){
		if(!note.gun.DEBUG && !note.enabled){ return }
		//var currentUser = firebase.auth().currentUser;
		//if(!currentUser){ return } // IF NO USER THEN DO NOT SHOW 'SUBMIT'!
		// commented ^ above out, as seems David & Dane now OK and want anonymous submissions.
		var text = note.range().trim();
		if(!text){ return }
		var tag = note.find(text);
		// only allow annotation submissions on children of .content & .story:
		if(!$(tag).closest('.content').closest('.story').length){ return }
		if(!note.find.test(text, tag)){ return }
		note.select = text;
		note.show('submit a note', x, y);
	}
	note.write = function(){
		var hover = $('#annotate-hover');
		if(hover.find('input').get().length){ return }
		note.on = note.select;
		hover.css({opacity: 1}).text('').append('<input>').find('input').css({
			fontSize: '90%', background: 'transparent', color: '#0f0', border: 'none'
		}).on('keyup', function(eve){
			if(13 !== eve.keyCode){ return }
			note.add(this.value, note.on, function(err){
				if(err){ return console.log(err) }
				hover.text("Submitted to Author for review!")
				setTimeout(function(){ hover.css({opacity: 0}) }, 2000);
			});
		}).get(0).focus();
	}
	note.add = async function(put, where, cb){
		if(!put || !where){ return cb("Missing note data!") }
    var save = {
    	text: put,
    	highlight: where,
    	slug: location.pathname,
    	title: $('.story .title').text(),
    	status: 'pending'
    };
    try{ await note.profile(save); }catch(e){}
		var handle = ($('.name').find('a').attr('href')||'').split('@')[1];
		if(!handle){ return cb("no author handle to submit note to.") }

		var env = note.gun.DEBUG? '__DEV__' : '';

		var ref, user = gun.user();
		if(user.is){
			ref = user.get(env+'all').set(save);
		} else {
			ref = gun.get(env+'note'+save.slug).set(save);
		}

		note.gun.get(env+'@'+handle).set(ref); // create an @handle notification index
		note.gun.get(env+'@hackernoon/note/all').set(ref); // create index for all submitted notes.
		if(cb){ cb() } // this should be handled better
	}
	note.profile = async function(save){ try{
		var currentUser = firebase.auth().currentUser;
		if(!currentUser){ return }

		var S = +new Date;
    var profile = await firebase.firestore().collection('profiles').doc(currentUser.uid).get();
    var fbprofile = profile.data();
		note.stats.f = +new Date - S;

    await enableAnnotations(currentUser, profile);

    var user = gun.user();
    if(!user.is){
    	return; // not logged in
    }
    fbprofile.uid = currentUser.uid;
    var who = user.get('who');
    who.put(fbprofile); // cache Firebase data into GUN. TODO: Do this everytime or only if not done before?

    var node = await who.then();
    if(!node){ return }
    var link = Gun.val.link.ify(Gun.node.soul(node)); // manually create GUN link until GUN supports nested GUN refs.
    
		save.user = link;
		return;
		var data = {
		  uid: currentUser.uid,
		  handle: profileData.handle,
		  avatar: `https://hackernoon.com/avatars/${currentUser.uid}.png`
		};
	} catch(e){} }
	note.show = function(text, x,y){
		if(!text || !text || !x || !y){ return }
		var w = window.innerWidth;
		$('#annotate-hover').text(text).css({opacity: 1, left: (w/3>450?x:w/2)+'px', top: (y+25)+'px', transform: 'translateX(-50%)'});
	}
	note.find = function(phrase, tags){
		function find(tag){
			if(0 <= $(tag).text().indexOf(phrase)){
				return tag;
			}
		}
		return map(tags || $(note.config.query || 'p, .paragraph').get(), find) || // find by class or tag
			map($('div').get(), find); // try to find anywhere, fallback.
	}
	note.find.test = function(phrase, tag){
		if(!tag){ return }
		if(0 <= $(tag).html().indexOf(phrase)){
			return true;
		}
	}
	note.replace = function(tag, phrase, id){
		var old = (tag = $(tag)).html();
		// This innerHTML operation should be SAFE! No user content is passed.
		tag.html(tag.html().replace(phrase, "<span id='note-tmp' class='annotate'></span>"));
		var span = $('#note-tmp').get(0);
		if(!span){
			tag.html(old); // restore if failure.
			return;
		}
		$(span).text(phrase).get(0).removeAttribute('id');
		if(id){ $(span).get(0).id = 'annotate-'+id.replace(/[^A-Za-z0-9]/ig, '') } // in case we need to find it later.
		return tag;
	}
	note.undo = function(id){
		if(!id){ return }
		var tag = $('#annotate-'+id.replace(/[^A-Za-z0-9]/ig, '')).get(0);
		if(!tag){ return }
		var up = tag.parentNode; // via https://stackoverflow.com/questions/9848465/js-remove-a-tag-without-deleting-content
		while(tag.firstChild){ up.insertBefore(tag.firstChild, tag) }
		up.removeChild(tag);
		return true;
	}
	note.range = function(tmp){
		return ((tmp = window.getSelection) && tmp().toString()) ||
			((tmp = document.selection) && tmp.createRange().text) || '';
	}
	var map = Gun.obj.map;
	window.annotate = note;

	note.health = async function(){ setTimeout(async function(){ // only do this "later"
		// make it so health stats can only be read by HackerNoon:
		var b = await SEA.pair(); // create a throwaway keypair.
		// epub of an account keypair that is emailed to HackerNoon:
		var sec = await SEA.secret("DzGukQ_acP1DN6GE6-GWMmvQsLtNLb_WkEfb8RFIg04.aM8GnwS5JD771ckLS4ygFCdiutsw4bXMMQ2ZnSRDuuU", b);
		var enc = await SEA.encrypt(note.stats, sec, null, {raw: true});
		enc.epub = b.epub;
		enc = JSON.stringify(enc);
		var hour = (new Date().toISOString().split(':')||[])[0]||'';
		gun.get('hackernoon!stats'+hour).set(enc);
	},3000) }

	// THIS IS AN UPDATED VERSION from app.hn's user.js:
  const enableAnnotations = async (user, profile) => {
    // enable annotations by creating a pubkey, if one doesn't already exist
    const profileData = profile.data();
    const alias = `${user.uid}@hackernoon`;
    const privateDataDoc = await firebase.firestore().collection('private-data').doc(user.uid).get();
    const privateData = privateDataDoc.data();
    console.log("profile", privateData, profileData);

    if (profileData.pub && privateData.seed) {
      return await connect(alias, privateData.seed);
    }

    // check for login seed or create a new one
    let seed;
    try {
      seed = privateData.seed;
      if (!seed) {
        throw "No seed!";
      }
    } catch (err) {
      seed = (SEA.random || Gun.text.random)(24).toString('base64');
      await privateDataDoc.ref.set({ seed }, { merge: true });
    }

    // connect firebase to gun; use a proxy for the user's annotation account
    try {
      await connect(alias, seed);
    } catch (err) {
      console.error(err);
      return Promise.reject(err);
    }

    // connect gun to firebase, save pubkey
    const pub = gun.user().is.pub;
    if(profileData.pub){
    	gun.user().put({pub_old: profileData.pub}); // in case an account is double created, have some way to link it.
    }
    console.log("PUB", pub);
    try {
      await profile.ref.update({ pub });
    } catch (err) {
      console.error(err);
      return Promise.reject(err);
    }
  };
	// THIS IS AN UPDATED VERSION from app.hn's user.js:
  const connect = async (name, key) => {
    // try to login to gun...
    return new Promise((resolve, reject) => {
      const user = gun.user();
      user.auth(name, key, (ack) => {
        if (!ack.err) {
          console.log("authed", ack);
          resolve(ack);
          return;
        }

        // it failed? try to create the account
        user.create(name, key, (ack) => {
          if (ack.err) {
            reject("Account already exists.");
            return;
          }

          // then try to login again
          user.auth(name, key, (ack) => {
            if (!ack.err) {
              console.log("created & authed", ack);
              resolve(ack);
              return;
            }

            reject('Created account but cannot auth.');
          });
        });
      });
    });
  };

	(function(){ // this piece is optional!
		function css(css){
			var tmp = '';
			map(css, function(r,c){
			tmp += c + ' {\n';
			map(r, function(v,k){
			tmp += '\t'+ k +': '+ v +';\n';
			});
			tmp += '}\n';
			});
			var tag = document.createElement('style');
			tag.innerHTML = tmp;
			document.body.appendChild(tag);
		}
		css({
			'.annotate': {background: 'lime', cursor: 'pointer'},
			'#annotate-hover': {'z-index':9999999, 'font-size': '90%', opacity: 0, transition: 'opacity 0.4s', /*padding: '0.3em', border: 'solid 0.1em #222', 'border-radius': '0.2em',*/ position: 'absolute', left: '0px', top: '-50px;', background: '#212428', /*'background-image': 'linear-gradient(to bottom,#222,#111)', 'background-repeat': 'repeat-x',*/ 'cursor':'pointer', 'font-family': "'IBM Plex Mono', monospace", 'border-image': "url(https://hackernoon.com/Devimg/hn-ad-green.png) 16", 'border-image-outset': '8px', color: '#0f0', 'border-style': 'solid', 'border-width': '8px', 'max-width': '640px'}
		});
		var tag = $($('#annotate-hover').get(0) || $().add('<div>').appendTo('body')).html('submit a note').get(0);
		tag.id = 'annotate-hover';
	}());
}());
