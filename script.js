const CLIENT_ID = 'ULEFc6b6MxmGhypc';
const ownerlist=["Bothacker1115","D"];
const adminlist=["Blake"];
const coadminlist=["Wyatt"];
//PUT BANNED NAMES IN BEGIN.HTML AND ADMIN NAMES IN CHANGEUSERNAME.HTML TOO
function get_cookie(cookie_name) { const value = "; " + document.cookie; const parts = value.split("; " + cookie_name + "="); if (parts.length === 2) return parts.pop().split(";").shift(); }
const drone = new ScaleDrone(CLIENT_ID, {
  data: { // Will be sent out as clientData via events
    name: getRandomName(),
    color: getRandomColor(),
  },
});

let members = [];

drone.on('open', error => {
  if (error) {
    return console.error(error);
  }
  console.log('Successfully connected to Scaledrone');

  const room = drone.subscribe('observable-room');
  room.on('open', error => {
    if (error) {
      return console.error(error);
    }
    console.log('Successfully joined room');
  });

  room.on('members', m => {
    members = m;
    updateMembersDOM();
  });

  room.on('member_join', member => {
    members.push(member);
    updateMembersDOM();
  });

  room.on('member_leave', ({id}) => {
    const index = members.findIndex(member => member.id === id);
    members.splice(index, 1);
    updateMembersDOM();
  });

  room.on('data', (text, member) => {
    if (member) {
      addMessageToListDOM(text, member);
    } else {
      // Message is from server
    }
  });
});

drone.on('close', event => {
  console.log('Connection was closed', event);
});

drone.on('error', error => {
  console.error(error);
});

function getRandomName() {
    var name=get_cookie("name");
    var currenttitle=get_cookie("currenttitle");
    return (currenttitle+": "+name);
}

function getRandomColor() {
  var name=get_cookie("name");
  var dkoldies=get_cookie("dkoldies");
  var owner=ownerlist.includes(name);
  var admin=adminlist.includes(name);
  var coadmin=coadminlist.includes(name);
  var sox=get_cookie("sox");
  var fortnite=get_cookie("fortnite");
  var lessthenmember=get_cookie("less than member")
  var owner=get_cookie("fake owner")
  var admin=get_cookie("fake admin")
  var coadmin=get_cookie("fake coadmin")
  var fan=get_cookie("fan")
  var davey=get_cookie("official davey
  var hacker=get_cookie("hacker");
  var titles=get_cookie("titles");
  if (owner==true){
	  return '#0000FF';
  }
  if (admin==true){
	  return '#0000FF';
  }
  if (coadmin==true){
	  return '#0000FF';
  }
  else{
      return '#808080';
  }
}

//------------- DOM STUFF

const DOM = {
  membersCount: document.querySelector('.members-count'),
  membersList: document.querySelector('.members-list'),
  messages: document.querySelector('.messages'),
  viewbutton: document.querySelector('.view-button'),
  input: document.querySelector('.message-form__input'),
  form: document.querySelector('.message-form'),
};

DOM.form.addEventListener('submit', sendMessage);

function sendMessage() {
  const swearlist=["sex","fuck","bitch","balls","cock","penis","porn","ass","dumbass","retard","cubs","pussy","segs","puusy","cub","dickhead","dick","shit","suck","retarded","https//:pornhub.com","https//:pornhub.com/","deez","nuef","nerf","daddy","mommy","https://pornhub.com","https://pornhub.com/","fuck u","meth","cocaine","nigger","niger","damn","damnit","🍑🥵🍆","f u c k u","fuc k u","b i t c h","🥵🍆🍑","FUCKING","fucking","nuts","simp","ligma","mother","smash","deek","shtt","virgina","🍆🍑"];
  const value = DOM.input.value;
  var value1=value;
  const hasWord = (str, word) => 
  	str.replace(/[ .,  \   /#!    $%     \^&\*@;:{}='"?><+\-_`~(|)]/g,"").split(/\s+/).includes(word);
  
	
  var x=0;
  var xmax=swearlist.length;
  while (x<xmax){
	var sweartest=value1.toLowerCase();
	value1=sweartest.replace(swearlist[x], "####");
	var sweartest2=value1.replace(" ","");
	sweartest2=value1.replace(":","");
	sweartest2 = sweartest2.replace(/[&\/  =^   \    \#     ,+      (-_)       $~%.'":*?<>{}]/g, '');
	if (sweartest2.includes(swearlist[x])){
		value1="########";
	}
	x=x+1;
  }
  const value2=value1;

	  if (value2 === '') {
	    return;
	  }
	  if (value2=='/white-sox' || value2=='/fortnite' || value2=='/dkoldies' || value2=='/lessthenmember' || value2=='/owner' || value2=='/admin' || value2=='/coadmin' || value2=='/fan' || value2=='/davey' || value2=='/hacker'){
		  var titles=get_cookie("titles");
		  if (value2=='/white-sox'){
			alert("you have been given a new role!");
			titles=titles+"white sox fan,";
			document.cookie="titles="+titles+"; expires=Thu, 18 Dec 9013 12:00:00 UTC"; 
			window.location.pathname="/titles.html";
		  }
		  if (value2=='/fortnite'){
			alert("you have been given a new role!");
			titles=titles+"fortnite sweat,";
			document.cookie="titles="+titles+"; expires=Thu, 18 Dec 9013 12:00:00 UTC"; 
			window.location.pathname="/titles.html";
		  }
		  if (value2=='/dkoldies'){
			alert("you have been given a new role!");
			titles=titles+"dkoldies,";
			document.cookie="titles="+titles+"; expires=Thu, 18 Dec 9013 12:00:00 UTC"; 
			window.location.pathname="/titles.html";
		  }
		  if (value2=='/lessthenmember'){
			alert("you have been given a new role!");
			titles=titles+"lessthenmember,";
			document.cookie="titles="+titles+"; expires=Thu, 18 Dec 9013 12:00:00 UTC"; 
			window.location.pathname="/titles.html";
		  }
		  if (value2=='/owner'){
			alert("you have been given a new role!");
			titles=titles+"fakeowner,";
			document.cookie="titles="+titles+"; expires=Thu, 18 Dec 9013 12:00:00 UTC"; 
			window.location.pathname="/titles.html";
		  }
		   if (value2=='/admin'){
			alert("you have been given a new role!");
			titles=titles+"fakeadmin,";
			document.cookie="titles="+titles+"; expires=Thu, 18 Dec 9013 12:00:00 UTC"; 
			window.location.pathname="/titles.html";
		  }
		   if (value2=='/coadmin'){
			alert("you have been given a new role!");
			titles=titles+"fakecoadmin,";
			document.cookie="titles="+titles+"; expires=Thu, 18 Dec 9013 12:00:00 UTC"; 
			window.location.pathname="/titles.html";
		  }
		  if (value2=='/fan'){
			alert("you have been given a new role!");
			titles=titles+"fan,";
			document.cookie="titles="+titles+"; expires=Thu, 18 Dec 9013 12:00:00 UTC"; 
			window.location.pathname="/titles.html";
		  }
		  if (value2=='/davey'){
			alert("you have been given a new role!");
			titles=titles+"official davey,";
			document.cookie="titles="+titles+"; expires=Thu, 18 Dec 9013 12:00:00 UTC"; 
			window.location.pathname="/titles.html";
		  }
		  if (value2=='/hacker'){
			alert("you have been given a new role!");
			titles=titles+"hacker,";
			document.cookie="titles="+titles+"; expires=Thu, 18 Dec 9013 12:00:00 UTC"; 
			window.location.pathname="/titles.html";
		  }
	  }
	  else{ 
		  DOM.input.value = '';
		  drone.publish({
		    room: 'observable-room',
		    message: value2,
		  });
	  }
  
}

function createMemberElement(member) {
  const { name, color } = member.clientData;
  const el = document.createElement('div');
  el.appendChild(document.createTextNode(name));
  el.className = 'member';
  el.style.color = color;
  return el;
}

function updateMembersDOM() {
  DOM.membersCount.innerText = `${members.length} users in room:`;
  DOM.viewbutton.innerText=`${members.length}`;
  DOM.membersList.innerHTML = '';
  members.forEach(member =>
    DOM.membersList.appendChild(createMemberElement(member))
  );
}

function createMessageElement(text, member) {
  const el = document.createElement('div');
  el.appendChild(createMemberElement(member));
  el.appendChild(document.createTextNode(text));
  el.className = 'message';
  return el;
}

function addMessageToListDOM(text, member) {
  const el = DOM.messages;
  const wasTop = el.scrollTop === el.scrollHeight - el.clientHeight;
  el.appendChild(createMessageElement(text, member));
  if (wasTop) {
    el.scrollTop =  el.scrollHeight - el.clientHeight;
  }
}
