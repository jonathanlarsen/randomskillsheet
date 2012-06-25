var classes = [
	'Barbarian',
	'Demon Hunter',
	'Monk',
	'Witch Doctor',
	'Wizard'
];

var barbarianSkills = {
	Passive : [ 'Animosity', 'Berserker Rage', 'Bloodthirst', 'Boon of Bul-Kathos', 'Brawler', 'Inspiring Presence', 'Juggernaut', 'Nerves of Steel', 'No Escape', 'Pound of Flesh', 'Relentless', 'Ruthless', 'Superstition', 'Tough as Nails', 'Unforgiving', 'Weapons Master' ],
	Active: [ 'Ancient Spear', 'Bash', 'Battle Rage', 'Call of the Ancients', 'Cleave', 'Earthquake', 'Frenzy', 'Furious Charge', 'Ground Stomp', 'Hammer of the Ancients', 'Ignore Pain', 'Leap', 'Overpower', 'Rend', 'Revenge', 'Seismic Slam', 'Sprint', 'Threatening Shout', 'War Cry', 'Weapon Throw', 'Whirlwind', 'Wrath of the Berserker' ]
};

var demonHunterSkills = {
	Passive : [ 'Archery', 'Ballistics', 'Brooding', 'Cull the Weak', 'Custom Engineering', 'Grenadier', 'Hot Pursuit', 'Night Stalker', 'Numbing Traps', 'Perfectionist', 'Sharpshooter', 'Steady Aim', 'Tactical Advantage', 'Thrill of the Hunt', 'Vengeance' ],
	Active : [ 'Bola Shot', 'Caltrops', 'Chakram', 'Cluster Arrow', 'Companion', 'Elemental Arrow', 'Entangling Shot', 'Evasive Fire', 'Fan of Knives', 'Grenades', 'Hungering Arrow', 'Impale', 'Marked for Death', 'Multishot', 'Preparation', 'Rain of Vengeance', 'Rapid Fire', 'Sentry', 'Shadow Power', 'Smoke Screen', 'Spike Trap', 'Strafe', 'Vault' ]
};

var monkSkills = {
	Passive : [ 'Beacon of Ytar', 'Chant of Resonance', 'Combination Strike', 'Exalted Soul', 'Fleet Footed', 'Guiding Light', 'Near Death Experience', 'One With Everything', 'Pacifism', 'Resolve', 'Seize the Initiative', 'Sixth Sense', 'The Guardian\'s Path', 'Transcendence' ],
	Active : [ 'Blinding Flash', 'Breath of Heaven', 'Crippling Wave', 'Cyclone Strike', 'Dashing Strike', 'Deatly Reach', 'Exploding Palm', 'Fists of Thunder', 'Inner Sanctuary', 'Lashing Tail Kick', 'Mantra of Conviction', 'Mantra of Evasion', 'Mantra of Healing', 'Mantra of Retribution', 'Mystic Ally', 'Serenity', 'Seven-Sided Strike', 'Sweeping Wind', 'Tempest Rush', 'Wave of Light', 'Way of the Hundred Fists' ]
};

var witchDoctorSkills = {
	Passive : [ 'Bad Medicine', 'Blood Ritual', 'Circle of Life', 'Fetish Sycophants', 'Fierce Loyalty', 'Grave Injustice', 'Gruesome Feast', 'Jungle Fortitude', 'Pierce the Veil', 'Rush tof Essence', 'Spirit Vessel', 'Spiritual Attunement', 'Tribal Rites', 'Vision Quest', 'Zombie Handler' ],
	Active : [ 'Acid Cloud', 'Big Bad Voodoo', 'Corpse Spiders', 'Fetish ARmy', 'Firebats', 'Firebomb', 'Gargantuan', 'Grasp of the Dead', 'Haunt', 'Hex', 'Horrify', 'Locust Swarm', 'Mass Confusion', 'Plague of Toads', 'Poison Dar', 'Sacrifice', 'Soul Harvest', 'Spirit Barrage', 'Spirit Walk', 'Summon Zombie Dogs', 'Wall of Zombies', 'Zombie Charger' ]
};

var wizardSkills = {
	Passive : [ 'Arcane Dynamo', 'Astral Presence', 'Blue', 'Cold Blooded', 'Conflagration', 'Critical Mass', 'Evocation', 'Galvanizing Ward', 'Glass Cannon', 'Illusionist', 'Paralysis', 'Power Hungry', 'Prodigy', 'Temporal Flux', 'Unstable Anomaly' ],
	Active : [ 'Arcane Orb', 'Arcane Torrent', 'Archon', 'Blizzard', 'Diamond Skin', 'Disintegrate', 'Electrocute', 'Energy Armor', 'Energy Twister', 'Explosive Blast', 'Familiar', 'Frost Nova', 'Hydra', 'Ice Armor', 'Magic Missile', 'Magic Weapon', 'Meteor', 'Mirror Image', 'Ray of Frost', 'Shock Pulse', 'Slow Time', 'Spectral Blade', 'Storm Armor', 'Teleport', 'Wave of Force' ]
};

var classDetail = {
	'Barbarian' : {
		Categories : [
			{ Name : 'Primary', Level : 1 },
			{ Name : 'Secondary', Level : 2 },
			{ Name : 'Defensive', Level : 4 },
			{ Name : 'Might', Level : 9 },
			{ Name : 'Tactics', Level : 14 },
			{ Name : 'Rage', Level : 19 }
		],
		PassiveSkillSlots : [
			{ Level : 10 },
			{ Level : 20 }, 
			{ Level : 30 }
		],
		Passive : [
			{	
				Level : 10 ,
				Name : 'Pound of Flesh',
				UrlName : function(){ return toSlug(this.data.Name); }
			},
			{ 
				Level : 10,
				Name : 'Ruthless',
				UrlName : function(){ return toSlug(this.data.Name); }
			},
			{ 
				Level : 13 ,
				Name : 'Nerves of Steel',
				UrlName : function(){ return toSlug(this.data.Name); }
			},
			{ 
				Level : 16,
				Name : 'Weapons Master',
				UrlName : function(){ return toSlug(this.data.Name); }
			},
			{ 
				Level : 20,
				Name : 'Berserker Rage',
				UrlName : function(){ return toSlug(this.data.Name); }
			},
			{ 
				Level : 20,
				Name : 'Inspiring Presence',
				UrlName : function(){ return toSlug(this.data.Name); }
			},
			{ 
				Level : 24,
				Name : 'Bloodthirst',
				UrlName : function(){ return toSlug(this.data.Name); }
			},
			{ 
				Level : 27,
				Name : 'Animosity',
				UrlName : function(){ return toSlug(this.data.Name); }
			},
			{ 
				Level : 30,
				Name : 'Superstition',
				UrlName : function(){ return toSlug(this.data.Name); }
			},
			{	
				Level : 30,
				Name : 'Tough as Nails',
				UrlName : function(){ return toSlug(this.data.Name); }
			},
			{ 
				Level : 35,
				Name : 'No Escape',
				UrlName : function(){ return toSlug(this.data.Name); }
			},
			{ 
				Level : 40,
				Name : 'Relentless',
				UrlName : function(){ return toSlug(this.data.Name); }
			},
			{ 
				Level : 45,
				Name : 'Brawler',
				UrlName : function(){ return toSlug(this.data.Name); }
			},
			{ 
				Level : 50,
				Name : 'Juggernaut',
				UrlName : function(){ return toSlug(this.data.Name); }
			},
			{ 
				Level : 55,
				Name : 'Unforgiving',
				UrlName : function(){ return toSlug(this.data.Name); }
			},
			{ 
				Level : 60,
				Name : 'Boon of Bul-Kathos',
				UrlName : function(){ return toSlug(this.data.Name); }
			}
		],
		Active : [
			{
				Level : 1,
				Name : 'Bash', 
				UrlName : function(){ return toSlug(this.data.Name); },
				Category : 'Primary',
				CanMouse1 : true,
				Runes:  [
					{ Name : 'Clobber', Level : 6 },
					{ Name : 'Onslaught', Level : 13 },
					{ Name : 'Punish', Level : 26 },
					{ Name : 'Instigation', Level : 44 },
					{ Name : 'Pulverize', Level : 52 }
				]
			},
			{
				Level : 2,
				Name : 'Hammer of the Ancients',
				UrlName : function(){ return toSlug(this.data.Name); },
				Category : 'Secondary',
				CanMouse1 : true,
				Runes:  [
					{ Name : 'Rolling Thunder', Level : 7 },
					{ Name : 'Smash', Level : 15 },
					{ Name : 'The Devil\'s Anvil', Level : 27 },
					{ Name : 'Thunderstrike', Level : 39 },
					{ Name : 'Birthright', Level : 53 }
				]
			},
			{
				Level : 3,
				Name : 'Cleave',
				UrlName : function(){ return toSlug(this.data.Name); },
				Category : 'Primary',
				CanMouse1 : true,
				Runes:  [
					{ Name : 'Rupture', Level : 9 },
					{ Name : 'Reaping Swing', Level : 18 },
					{ Name : 'Scattering Blast', Level : 30 },
					{ Name : 'Broad Sweep', Level : 47 },
					{ Name : 'Gathering Storm', Level : 55 }
				]
			},
			{
				Level : 4,
				Name : 'Ground Stomp',
				UrlName : function(){ return toSlug(this.data.Name); },
				Category : 'Defensive',
				CanMouse1 : true,
				Runes:  [
					{ Name : 'Defeaning Crash', Level : 12 },
					{ Name : 'Wrenching Smash', Level : 18 },
					{ Name : 'Trembling Stomp', Level : 28 },
					{ Name : 'Foot of the Mountain', Level : 40 },
					{ Name : 'Avalanche', Level : 54 }
				]
			},
			{
				Level : 5,
				Name : 'Rend',
				UrlName : function(){ return toSlug(this.data.Name); },
				Category : 'Secondary',
				CanMouse1 : true,
				Runes:  [
					{ Name : 'Ravage', Level : 11 },
					{ Name : 'Blood Lust', Level : 19 },
					{ Name : 'Lacerate', Level : 33 },
					{ Name : 'Mutilate', Level : 45 },
					{ Name : 'Bloodbath', Level : 56 }
				]
			},
			{
				Level : 8,
				Name : 'Leap',
				UrlName : function(){ return toSlug(this.data.Name); },
				Category : 'Defensive',
				CanMouse1 : true,
				Runes:  [
					{ Name : 'Iron Impact', Level : 14 },
					{ Name : 'Launch', Level : 21 },
					{ Name : 'Toppling Impact', Level : 32 },
					{ Name : 'Call of Arreat', Level : 44 },
					{ Name : 'Death from Above', Level : 60 }
				]
			},
			{
				Level : 9,
				Name : 'Ancient Spear',
				UrlName : function(){ return toSlug(this.data.Name); },
				Category : 'Might',
				CanMouse1 : true,
				Runes:  [
					{ Name : 'Grappling Hooks', Level : 15 },
					{ Name : 'Skirmish', Level : 23 },
					{ Name : 'Dread Spear', Level : 32 },
					{ Name : 'Harpoon', Level : 39 },
					{ Name : 'Rage Flip', Level : 49 }
				]
			},
			{
				Level : 11,
				Name : 'Frenzy',
				UrlName : function(){ return toSlug(this.data.Name); },
				Category : 'Primary',
				CanMouse1 : true,
				Runes:  [
					{ Name : 'Sidearm', Level : 17 },
					{ Name : 'Triumph', Level : 22 },
					{ Name : 'Vanguard', Level : 34 },
					{ Name : 'Smite', Level : 51 },
					{ Name : 'Maniac', Level : 59 }
				]
			},
			{
				Level : 12,
				Name : 'Seismic Slam',
				UrlName : function(){ return toSlug(this.data.Name); },
				Category : 'Secondary',
				CanMouse1 : true,
				Runes:  [
					{ Name : 'Stagger', Level : 18 },
					{ Name : 'Shattered Ground', Level : 25 },
					{ Name : 'Rumble', Level : 35 },
					{ Name : 'Strength from Earth', Level : 48 },
					{ Name : 'Cracking Rift', Level : 57 }
				]
			},
			{
				Level : 13,
				Name : 'Revenge',
				UrlName : function(){ return toSlug(this.data.Name); },
				Category : 'Might',
				CanMouse1 : false,
				Runes:  [
					{ Name : 'Vengeance is Mine', Level : 19},
					{ Name : 'Best Served Cold', Level : 25 },
					{ Name : 'Retribution', Level : 36 },
					{ Name : 'Grudge', Level : 41 },
					{ Name : 'Provocation', Level : 52 }
				]
			},
			{
				Level : 14,
				Name : 'Weapon Throw',
				UrlName : function(){ return toSlug(this.data.Name); },
				Category : 'Tactics',
				CanMouse1 : true,
				Runes:  [
					{ Name : 'Mighty Throw', Level : 21 },
					{ Name : 'Ricochet', Level : 25 },
					{ Name : 'Throwing Hammer', Level : 33 },
					{ Name : 'Stupefy', Level : 42 },
					{ Name : 'Dread Bomb', Level : 54 }
				]
			},
			{
				Level : 16,
				Name : 'Sprint',
				UrlName : function(){ return toSlug(this.data.Name); },
				Category : 'Defensive',
				CanMouse1 : false,
				Runes:  [
					{ Name : 'Rush', Level : 23 },
					{ Name : 'Run Like the Wind', Level : 29 },
					{ Name : 'Marathon', Level : 38 },
					{ Name : 'Gangway', Level : 46 },
					{ Name : 'Forced March', Level : 53 }
				]
			},
			{
				Level : 17,
				Name : 'Threatening Shout',
				UrlName : function(){ return toSlug(this.data.Name); },
				Category : 'Tactics',
				CanMouse1 : false,
				Runes:  [
					{ Name : 'Intimidate', Level : 23 },
					{ Name : 'Falter', Level : 28 },
					{ Name : 'Grim Harvest', Level : 37 },
					{ Name : 'Demoralize', Level : 43 },
					{ Name : 'Terrify', Level : 57 }
				]
			},
			{
				Level : 19,
				Name : 'Earthquake',
				UrlName : function(){ return toSlug(this.data.Name); },
				Category : 'Rage',
				CanMouse1 : true,
				Runes:  [
					{ Name : 'Giant\'s Stride', Level : 24 },
					{ Name : 'Chilling Earth', Level : 29 },
					{ Name : 'The Mountain\'s Call', Level : 39 },
					{ Name : 'Aftershocks', Level : 50 },
					{ Name : 'Path of Fire', Level : 56 }
				]
			},
			{
				Level : 20,
				Name : 'Whirlwind',
				UrlName : function(){ return toSlug(this.data.Name); },
				Category : 'Secondary',
				CanMouse1 : true,
				Runes:  [
					{ Name : 'Dust Devils', Level : 24 },
					{ Name : 'Hurricane', Level : 29 },
					{ Name : 'Blood Funnel', Level : 37 },
					{ Name : 'Wind Shear', Level : 44 },
					{ Name : 'Volcanic Eruption', Level : 59 }
				]
			},
			{
				Level : 21,
				Name : 'Furious Charge',
				UrlName : function(){ return toSlug(this.data.Name); },
				Category : 'Might',
				CanMouse1 : true,
				Runes:  [
					{ Name : 'Battering Ram', Level : 27 },
					{ Name : 'Merciless Assault', Level : 33 },
					{ Name : 'Stamina', Level : 38 },
					{ Name : 'Bull Rush', Level : 47 },
					{ Name : 'Dreadnought', Level : 56 }
				]
			},
			{
				Level : 22,
				Name : 'Battle Rage',
				UrlName : function(){ return toSlug(this.data.Name); },
				Category : 'Tactics',
				CanMouse1 : false,
				Runes:  [
					{ Name : 'Marauder\'s Rage', Level : 26 },
					{ Name : 'Ferocity', Level : 31 },
					{ Name : 'Swords to Ploughshares', Level : 38 },
					{ Name : 'Into the Fray', Level : 46 },
					{ Name : 'Bloodshed', Level : 54 }
				]
			},
			{
				Level : 22,
				Name : 'Ignore Pain',
				UrlName : function(){ return toSlug(this.data.Name); },
				Category : 'Defensive',
				CanMouse1 : false,
				Runes:  [
					{ Name : 'Bravado', Level : 26 },
					{ Name : 'Iron Hide', Level : 31 },
					{ Name : 'Ignorance is Bliss', Level : 36 },
					{ Name : 'Mob Rule', Level : 43 },
					{ Name : 'Contempt', Level : 58 }
				]
			},
			{
				Level : 25,
				Name : 'Call of the Ancients',
				UrlName : function(){ return toSlug(this.data.Name); },
				Category : 'Rage',
				CanMouse1 : true,
				Runes:  [
					{ Name : 'The Council Rises', Level : 31 },
					{ Name : 'Duty to the Clan', Level : 37 },
					{ Name : 'Korlic\'s Might', Level : 45 },
					{ Name : 'Madawc\'s Madness', Level : 51 },
					{ Name : 'Talic\'s Anger', Level : 58 }
				]
			},
			{
				Level : 26,
				Name : 'Overpower',
				UrlName : function(){ return toSlug(this.data.Name); },
				Category : 'Might',
				CanMouse1 : false,
				Runes:  [
					{ Name : 'Storm of Steel', Level : 29 },
					{ Name : 'Killing Spree', Level : 34 },
					{ Name : 'Crushing Advance', Level : 42 },
					{ Name : 'Momentum', Level : 48 },
					{ Name : 'Revel', Level : 59 }
				]
			},
			{
				Level : 28,
				Name : 'War Cry',
				UrlName : function(){ return toSlug(this.data.Name); },
				Category : 'Tactics',
				CanMouse1 : false,
				Runes:  [
					{ Name : 'Hardened Wrath', Level : 32 },
					{ Name : 'Charge!', Level : 35 },
					{ Name : 'Invigorate', Level : 41 },
					{ Name : 'Veteran\'s Warning', Level : 49 },
					{ Name : 'Impunity', Level : 60 }
				]
			},
			{
				Level : 30,
				Name : 'Wrath of the Berserker',
				UrlName : function(){ return toSlug(this.data.Name); },
				Category : 'Rage',
				CanMouse1 : false,
				Runes:  [
					{ Name : 'Arreat\'s Wail', Level : 36 },
					{ Name : 'Insanity', Level : 40 },
					{ Name : 'Slaughter', Level : 46 },
					{ Name : 'Striding Giant', Level : 52 },
					{ Name : 'Thrive on Chaos', Level : 60 }
				]
			}
		]
	},
	'Demon Hunter'  : {
		Categories : { 
			Mouse1 : { Name : 'Primary', Level : 1 }, 
			Mouse2 : { Name : 'Secondary', Level : 2 },
			1 : { Name : 'Defensive', Level : 4 },
			2 : { Name : 'Hunting', Level : 9 },
			3 : { Name : 'Devices', Level : 14 },
			4 : { Name : 'Archery', Level : 19 }
		},
		PassiveSkillSlots :{
			1 : { Level : 10 },
			2 : { Level : 20 },
			3 : { Level : 30 }
		},
		PassiveSkills : {
			'' : {	
				Level : 10 
			},
		},		
		ActiveSkills : {
			'' : {
				Level : 1,
				Category : 'Primary',
				CanMouse1 : true,
				Runes:  [
					{ Name : '', Level : 1 },
					{ Name : '', Level : 1 },
					{ Name : '', Level : 1 },
					{ Name : '', Level : 1 },
					{ Name : '', Level : 1 }
				]
			},
		}
	},
	'Monk' : {
		Categories : { 
			Mouse1 : { Name : 'Primary', Level : 1 }, 
			Mouse2 : { Name : 'Secondary', Level : 2 },
			1 : { Name : 'Defensive', Level : 4 },
			2 : { Name : 'Techniques', Level : 9 },
			3 : { Name : 'Focus', Level : 14 },
			4 : { Name : 'Mantras', Level : 19 }
		},
		PassiveSkillSlots :{
			1 : { Level : 10 },
			2 : { Level : 20 },
			3 : { Level : 30 }
		},
		Passive : {
			'' : {	
				Level : 10 
			},
		},		
		Active : {
			'' : {
				Level : 1,
				Category : 'Primary',
				CanMouse1 : true,
				Runes:  [
					{ Name : '', Level : 1 },
					{ Name : '', Level : 1 },
					{ Name : '', Level : 1 },
					{ Name : '', Level : 1 },
					{ Name : '', Level : 1 }
				]
			},
		}
	},
	'Witch Doctor' : {
		Categories : { 
			Mouse1 : { Name : 'Primary', Level : 1 }, 
			Mouse2 : { Name : 'Secondary', Level : 2 },
			1 : { Name : 'Defensive', Level : 4 },
			2 : { Name : 'Terror', Level : 9 },
			3 : { Name : 'Decay', Level : 14 },
			4 : { Name : 'Voodoo', Level : 19 }
		},
		PassiveSkillSlots :{
			1 : { Level : 10 },
			2 : { Level : 20 },
			3 : { Level : 30 }
		},
		Passive : {
			'' : {	
				Level : 10 
			},
		},		
		Active : {
			'' : {
				Level : 1,
				Category : 'Primary',
				CanMouse1 : true,
				Runes:  [
					{ Name : '', Level : 1 },
					{ Name : '', Level : 1 },
					{ Name : '', Level : 1 },
					{ Name : '', Level : 1 },
					{ Name : '', Level : 1 }
				]
			},
		}
	},
	'Wizard' : {
		Categories : { 
			Mouse1 : { Name : 'Primary', Level : 1 }, 
			Mouse2 : { Name : 'Secondary', Level : 2 },
			1 : { Name : 'Defensive', Level : 4 },
			2 : { Name : 'Force', Level : 9 },
			3 : { Name : 'Conjuration', Level : 14 },
			4 : { Name : 'Mastery', Level : 19 }
		},
		PassiveSkillSlots :{
			1 : { Level : 10 },
			2 : { Level : 20 },
			3 : { Level : 30 }
		},
		Passive : {
			'' : {	
				Level : 10 
			},
		},		
		Active : {
			'' : {
				Level : 1,
				Category : 'Primary',
				CanMouse1 : true,
				Runes:  [
					{ Name : '', Level : 1 },
					{ Name : '', Level : 1 },
					{ Name : '', Level : 1 },
					{ Name : '', Level : 1 },
					{ Name : '', Level : 1 }
				]
			},
		}
	}
}