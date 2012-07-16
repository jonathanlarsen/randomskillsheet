var Passive = function(name) {
	this.Name = name;
	this.Url = 'http://us.battle.net/d3/en/class/'+toSlug(viewModel.Class())+'/passive/' + toSlug(name);
};

var Active = function(name, rune, category) {
	this.Name = name;
	this.Rune = rune;
	this.Category = category;
	this.Url = 'http://us.battle.net/d3/en/class/'+toSlug(viewModel.Class())+'/active/' + toSlug(name);
	this.IconUrl = "http://us.media.blizzard.com/d3/icons/skills/42/" + toSlugNoDash(viewModel.Class()) + "_" + toSlugNoDash(name) + ".png";
};

function ViewModel() {
	var _self = this;
	_self.AvailableClasses = ko.observable(classes);
	_self.Class = ko.observable();
	_self.Level = ko.observable('60');
	_self.Elective = ko.observable(false);
	_self.Passives = ko.observableArray();
	_self.Actives = ko.observableArray();
	_self.AvailablePassives = ko.observableArray();
	_self.AvailableActives = ko.observableArray();
	
	_self.fn = {
		GenerateBuild : function () {
			this.fn.generateBuild(this.Class(), this.Level(), this.Elective());
		},
		
		generateRandomRune : function(s,l) {
			var availableRunes = _.filter(s.Runes, function(x) { return l >= x.Level; });
			
			if (availableRunes.length == 0) return {Name: ''};
			
			var random = availableRunes[Math.floor(Math.random() * availableRunes.length)];
			
			return random;
		},
		
		generateRandomPassive : function (c,l) {
			_self.AvailablePassives([]);
			var availableSkills = _.filter(classDetail[c].Passive, function(x) { return l >= x.Level; });
			$.each(availableSkills, function(i,x){
				_self.AvailablePassives.push(new Passive(x.Name));
			});
						
			var random = availableSkills[Math.floor(Math.random() * availableSkills.length)];
			
			var find = _.any(_self.Passives(), function(x) { return x.Name == random.Name;	});
			while(find) {
				random = availableSkills[Math.floor(Math.random() * availableSkills.length)];
				find = _.any(_self.Passives(), function(x) { return x.Name == random.Name;	});
			}
			
			return random;
		}, 
		
		generateRandomActive : function(c,l, elective, category, mouse1) {
			_self.AvailableActives([]);
			var availableSkills = _.filter(classDetail[c].Active, function(x) { return l >= x.Level; });
			$.each(availableSkills, function(i,x){
				_self.AvailableActives.push(new Active(x.Name));
			});
			if (mouse1) {
				availableSkills = _.filter(availableSkills, function(x) { return x.CanMouse1 == true; });
			}
			if (!elective) {
				availableSkills = _.filter(availableSkills, function(x) { return category == x.Category; });
			}
			
			var random = availableSkills[Math.floor(Math.random() * availableSkills.length)];
			
			var find = _.any(_self.Actives(), function(x){ return x.Name == random.Name; });
			while(find) {
				random = availableSkills[Math.floor(Math.random() * availableSkills.length)];
				find = _.any(_self.Actives(), function(x){ return x.Name == random.Name; });
			}
			
			return random;
		},
		
		generateBuild : function(c,l,elective){
			var _class = c;
			var _level = l;
			
			_self.Actives([]);
			_self.Passives([]);
			
			var availableCategories = _.filter(classDetail[c].Categories, function(x){ return _level >= x.Level; });
			$.each(availableCategories, function(i,x){
				var mouse1 = false;
				if (i == 0) {
					mouse1 = true;
				}
				var skill = _self.fn.generateRandomActive(_class, _level, elective, x.Name, mouse1);
				var rune = _self.fn.generateRandomRune(skill, _level);
				
				_self.Actives.push(new Active(skill.Name, rune.Name, skill.Category));
			});
			
			var availablePassivesSkillSlots  = _.filter(classDetail[c].PassiveSkillSlots, function(x){ return _level >= x.Level; });
			$.each(availablePassivesSkillSlots, function(i,x){
				var passive = _self.fn.generateRandomPassive(_class, _level);
				
				_self.Passives.push(new Passive(passive.Name, passive.UrlName));
			});
		}
	}
};