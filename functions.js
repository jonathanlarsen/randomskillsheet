function toSlug(str) {
  str = str.replace(/^\s+|\s+$/g, ''); // trim
  str = str.replace(/-/g, '');
  str = str.toLowerCase();
  
  // remove accents, swap ס for n, etc
  var from = "אבהגטיכךלםןמעףצפשתüûסח·/_,:;";
  var to   = "aaaaeeeeiiiioooouuuunc------";
  for (var i=0, l=from.length ; i<l ; i++) {
    str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
  }

  str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
    .replace(/\s+/g, '-') // collapse whitespace and replace by -
    .replace(/-+/g, '-'); // collapse dashes

  return str;
}

var Passive = function(name, url) {
	this.Name = name;
	this.UrlName = url;
};

var Active = function(name, rune, category, url) {
	this.Name = name;
	this.Rune = rune;
	this.Category = category;
	this.UrlName = url;
};

var passives = [];

var actives = [];

var generateBuild = function(c,l,elective){
	var _class = c;
	var _level = l;
	
	actives = [];
	passives = [];
	
	var availableCategories = _.filter(classDetail[c].Categories, function(x){ return _level >= x.Level; });
	console.log(availableCategories);
	$.each(availableCategories, function(i,x){
		var mouse1 = false;
		if (i == 0) {
			mouse1 = true;
		}
		var skill = generateRandomActive(_class, _level, elective, x.Name, mouse1);
		var rune = generateRandomRune(skill, _level);
		
		actives.push(new Active(skill.Name, rune.Name, skill.Category, skill.UrlName));
	});
	
	var availablePassivesSkillSlots  = _.filter(classDetail[c].PassiveSkillSlots, function(x){ return _level >= x.Level; });
	$.each(availablePassivesSkillSlots, function(i,x){
		var passive = generateRandomPassive(_class, _level);
		
		passives.push(new Passive(passive.Name, passive.UrlName));
	});
};

var generateRandomActive = function(c,l, elective, category, mouse1) {
	var skills = _.filter(classDetail[c].Active, function(x) { return l >= x.Level; });
	if (!elective) {
		skills = _.filter(skills, function(x) { return category == x.Category; });
	}
	else if (mouse1) {
		skills = _.filter(skills, function(x) { return x.CanMouse1 == true; });
	}	
	
	var random = skills[Math.floor(Math.random() * skills.length)];
	
	if (random == undefined) {
		generateRandomActive(c,l);
	}
	
	var find = _.any(actives, function(x){ return x.Name == random.Name; });
	
	if (find) {
		generateRandomActive(c,l);
	}
	
	return random;
};

var generateRandomPassive = function (c,l) {
	var availableSkills = _.filter(classDetail[c].Passive, function(x) { return l >= x.Level; });
	var random = availableSkills[Math.floor(Math.random() * availableSkills.length)];
	
	if (random == undefined || random.Level > l) generateRandomPassive(c,l);
	
	var find = _.any(passives, function(x) { return x.Name == random.Name;	});
	
	if (find) {
		generateRandomPassive(c,l);
	}
	
	return random;
};

var generateRandomRune = function(s,l) {
	var availableRunes = _.filter(s.Runes, function(x) { return l >= x.Level; });
	
	if (availableRunes.length == 0) return {Name: ''};
	
	var random = availableRunes[Math.floor(Math.random() * availableRunes.length)];
	
	return random;
};