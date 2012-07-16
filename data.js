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
				Name : 'Pound of Flesh'
			},
			{ 
				Level : 10,
				Name : 'Ruthless'
			},
			{ 
				Level : 13 ,
				Name : 'Nerves of Steel'
			},
			{ 
				Level : 16,
				Name : 'Weapons Master'
			},
			{ 
				Level : 20,
				Name : 'Berserker Rage'
			},
			{ 
				Level : 20,
				Name : 'Inspiring Presence'
			},
			{ 
				Level : 24,
				Name : 'Bloodthirst'
			},
			{ 
				Level : 27,
				Name : 'Animosity'
			},
			{ 
				Level : 30,
				Name : 'Superstition'
			},
			{	
				Level : 30,
				Name : 'Tough as Nails'
			},
			{ 
				Level : 35,
				Name : 'No Escape'
			},
			{ 
				Level : 40,
				Name : 'Relentless'
			},
			{ 
				Level : 45,
				Name : 'Brawler'
			},
			{ 
				Level : 50,
				Name : 'Juggernaut'
			},
			{ 
				Level : 55,
				Name : 'Unforgiving'
			},
			{ 
				Level : 60,
				Name : 'Boon of Bul-Kathos'
			}
		],
		Active : [
			{
				Level : 1,
				Name : 'Bash', 
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
		Categories : [
			{ Name : 'Primary', Level : 1 }, 
			{ Name : 'Secondary', Level : 2 },
			{ Name : 'Defensive', Level : 4 },
			{ Name : 'Hunting', Level : 9 },
			{ Name : 'Devices', Level : 14 },
			{ Name : 'Archery', Level : 19 }
		],
		PassiveSkillSlots :[
			{ Level : 10 },
			{ Level : 20 },
			{ Level : 30 }
		],
		Passive : [
			{	
				Level : 10,
				Name : 'Tactical Advantage'
			},
			{	
				Level : 10,
				Name : 'Thrill of the Hunt'
			},
			{	
				Level : 13,
				Name : 'Vengeance'
			},
			{	
				Level : 16,
				Name : 'Steady Aim'
			},
			{	
				Level : 20,
				Name : 'Cull the Weak'
			},
			{	
				Level : 20,
				Name : 'Night Stalker'
			},
			{	
				Level : 25,
				Name : 'Brooding'
			},
			{	
				Level : 27,
				Name : 'Hot Pursuit'
			},
			{	
				Level : 30,
				Name : 'Archery'
			},
			{	
				Level : 30,
				Name : 'Numbing Traps'
			},
			{	
				Level : 35,
				Name : 'Perfectionist'
			},
			{	
				Level : 40,
				Name : 'Custom Engineering'
			},
			{	
				Level : 45,
				Name : 'Grenadier'
			},
			{	
				Level : 50,
				Name : 'Sharpshooter'
			},
			{	
				Level : 55,
				Name : 'Ballistics'
			}
		],		
		Active : [
			{
				Level : 1,
				Name : 'Hungering Arrow',
				Category : 'Primary',
				CanMouse1 : true,
				Runes:  [
					{ Name : 'Puncturing Arrow', Level : 6 },
					{ Name : 'Cinder Arrow', Level : 17 },
					{ Name : 'Shatter Shot', Level : 26 },
					{ Name : 'Devouring Arrow', Level : 42 },
					{ Name : 'Spray of Teeth', Level : 52 }
				]
			},
			{
				Level : 2,
				Name : 'Impale',
				Category : 'Secondary',
				CanMouse1 : true,
				Runes:  [
					{ Name : 'Impact', Level : 7 },
					{ Name : 'Chemical Burn', Level : 15 },
					{ Name : 'Overpenetration', Level : 28 },
					{ Name : 'Awareness', Level : 53 },
					{ Name : 'Grievous Wounds', Level : 58 }
				]
			},
			{
				Level : 3,
				Name : 'Entangling Shot',
				Category : 'Primary',
				CanMouse1 : true,
				Runes:  [
					{ Name : 'Chain Gang', Level : 9 },
					{ Name : 'Shock Collar', Level : 18 },
					{ Name : 'Heavy Burden', Level : 34 },
					{ Name : 'Justice is Served', Level : 47 },
					{ Name : 'Bounty Hunter', Level : 54 }
				]
			},
			{
				Level : 4,
				Name : 'Caltrops',
				Category : 'Defensive',
				CanMouse1 : false,
				Runes:  [
					{ Name : 'Hooked Spines', Level : 12 },
					{ Name : 'Torturous Ground', Level : 18 },
					{ Name : 'Jagged Spikes', Level : 28 },
					{ Name : 'Carved Stakes', Level : 41 },
					{ Name : 'Bait the Trap', Level : 54 }
				]
			},
			{
				Level : 5,
				Name : 'Rapid Fire',
				Category : 'Secondary',
				CanMouse1 : true,
				Runes:  [
					{ Name : 'Withering Fire', Level : 11 },
					{ Name : 'Web Shot', Level : 19 },
					{ Name : 'Fire Support', Level : 32 },
					{ Name : 'High Velocity', Level : 45 },
					{ Name : 'Bombardment', Level : 56 }
				]
			},
			{
				Level : 8,
				Name : 'Smoke Screen',
				Category : 'Defensive',
				CanMouse1 : false,
				Runes:  [
					{ Name : 'Displacement', Level : 14 },
					{ Name : 'Lingering Fog', Level : 23 },
					{ Name : 'Breathe Deep', Level : 33 },
					{ Name : 'Special Recipe', Level : 44 },
					{ Name : 'Choking Gas', Level : 59 }
				]
			},
			{
				Level : 9,
				Name : 'Vault',
				Category : 'Hunting',
				CanMouse1 : true,
				Runes:  [
					{ Name : 'Action Shot', Level : 16 },
					{ Name : 'Rattling Roll', Level : 23 },
					{ Name : 'Tumble', Level : 33 },
					{ Name : 'Acrobatics', Level : 38 },
					{ Name : 'Trail of Cinders', Level : 49 }
				]
			},
			{
				Level : 11,
				Name : 'Bola Shot',
				Category : 'Primary',
				CanMouse1 : true,
				Runes:  [
					{ Name : 'Volatile Explosives', Level : 14 },
					{ Name : 'Thunder Ball', Level : 24 },
					{ Name : 'Acid Strike', Level : 37 },
					{ Name : 'Bitter Pill', Level : 51 },
					{ Name : 'Imminent Doom', Level : 57 }
				]
			},
			{
				Level : 12,
				Name : 'Chakram',
				Category : 'Secondary',
				CanMouse1 : true,
				Runes:  [
					{ Name : 'Twin Chakrams', Level : 18 },
					{ Name : 'Serpentine', Level : 26 },
					{ Name : 'Razor Disk', Level : 34 },
					{ Name : 'Boomerang', Level : 48 },
					{ Name : 'Shuriken Cloud', Level : 57 }
				]
			},
			{
				Level : 13,
				Name : 'Preparation',
				Category : 'Hunting',
				CanMouse1 : false,
				Runes:  [
					{ Name : 'Invigoration', Level : 19 },
					{ Name : 'Punishment', Level : 25 },
					{ Name : 'Battle Scars', Level : 35 },
					{ Name : 'Focused Mind', Level : 44 },
					{ Name : 'Backup Plan', Level : 52 }
				]
			},
			{
				Level : 14,
				Name : 'Evasive Fire',
				Category : 'Devices',
				CanMouse1 : true,
				Runes:  [
					{ Name : 'Shrapnel', Level : 21 },
					{ Name : 'Parting Gift', Level : 26 },
					{ Name : 'Covering Fire', Level : 34 },
					{ Name : 'Displace', Level : 42 },
					{ Name : 'Surge', Level : 53 }
				]
			},
			{
				Level : 15,
				Name : 'Grenades',
				Category : 'Primary',
				CanMouse1 : true,
				Runes:  [
					{ Name : 'Tinkerer', Level : 22 },
					{ Name : 'Cluster Grenades', Level : 32 },
					{ Name : 'Razor Disk', Level : 40 },
					{ Name : 'Boomerang', Level : 48 },
					{ Name : 'Shuriken Cloud', Level : 60 }
				]
			},
			{
				Level : 16,
				Name : 'Shadow Power',
				Category : 'Defensive',
				CanMouse1 : false,
				Runes:  [
					{ Name : 'Night Bane', Level : 21 },
					{ Name : 'Blood Moon', Level : 29 },
					{ Name : 'Well of Darkness', Level : 37 },
					{ Name : 'Gloom', Level : 51 },
					{ Name : 'Shadow Glide', Level : 58 }
				]
			},
			{
				Level : 17,
				Name : 'Companion',
				Category : 'Hunting',
				CanMouse1 : false,
				Runes:  [
					{ Name : 'Spider Companion', Level : 22 },
					{ Name : 'Bat Companion', Level : 29 },
					{ Name : 'Boar Companion', Level : 41 },
					{ Name : 'Ferret Companion', Level : 46 },
					{ Name : 'Wolf Companion', Level : 59 }
				]
			},
			{
				Level : 17,
				Name : 'Fan of Knives',
				Category : 'Devices',
				CanMouse1 : true,
				Runes:  [
					{ Name : 'Crippling Razors', Level : 23 },
					{ Name : 'Retaliate', Level : 32 },
					{ Name : 'Hail of Knives', Level : 38 },
					{ Name : 'Fan of Daggers', Level : 44 },
					{ Name : 'Assassin\'s Knives', Level : 59 }
				]
			},
			{
				Level : 17,
				Name : 'Spike Trap',
				Category : 'Devices',
				CanMouse1 : true,
				Runes:  [
					{ Name : 'Bandolier', Level : 27 },
					{ Name : 'Sticky Trap', Level : 30 },
					{ Name : 'Long Fuse', Level : 39 },
					{ Name : 'Lightning Rod', Level : 46 },
					{ Name : 'Scatter', Level : 55 }
				]
			},
			{
				Level : 19,
				Name : 'Strafe',
				Category : 'Archery',
				CanMouse1 : true,
				Runes:  [
					{ Name : 'Equilibrium', Level : 24 },
					{ Name : 'Drifting Shadow', Level : 29 },
					{ Name : 'Stinging Steel', Level : 37 },
					{ Name : 'Rocket Storm', Level : 50 },
					{ Name : 'Demolition', Level : 56 }
				]
			},
			{
				Level : 20,
				Name : 'Elemental Arrow',
				Category : 'Secondary',
				CanMouse1 : true,
				Runes:  [
					{ Name : 'Ball Lightning', Level : 24 },
					{ Name : 'Frost Arrow', Level : 29 },
					{ Name : 'Screaming Skull', Level : 36 },
					{ Name : 'Lightning Bolts', Level : 43 },
					{ Name : 'Nether Tentacles', Level : 59 }
				]
			},
			{
				Level : 21,
				Name : 'Marked for Death',
				Category : 'Hunting',
				CanMouse1 : true,
				Runes:  [
					{ Name : 'Contagion', Level : 27 },
					{ Name : 'Valley of Death', Level : 31 },
					{ Name : 'Grim Reaper', Level : 39 },
					{ Name : 'Mortal Enemy', Level : 48 },
					{ Name : 'Death Toll', Level : 60 }
				]
			},
			{
				Level : 22,
				Name : 'Multishot',
				Category : 'Archery',
				CanMouse1 : true,
				Runes:  [
					{ Name : 'Fire at Will', Level : 26 },
					{ Name : 'Burst Fire', Level : 31 },
					{ Name : 'Suppression Fire', Level : 39 },
					{ Name : 'Full Broadside', Level : 46 },
					{ Name : 'Arsenal', Level : 55 }
				]
			},
			{
				Level : 25,
				Name : 'Sentry',
				Category : 'Devices',
				CanMouse1 : false,
				Runes:  [
					{ Name : 'Spitfire Turret', Level : 28 },
					{ Name : 'Vigilant Watcher', Level : 36 },
					{ Name : 'Chain of Tormet', Level : 45 },
					{ Name : 'Aid Station', Level : 52 },
					{ Name : 'Guardian Turret', Level : 60 }
				]
			},
			{
				Level : 27,
				Name : 'Cluster Arrow',
				Category : 'Archery',
				CanMouse1 : true,
				Runes:  [
					{ Name : 'Dazzling Arrow', Level : 33 },
					{ Name : 'Shooting Stars', Level : 36 },
					{ Name : 'Maelstrom', Level : 41 },
					{ Name : 'Cluster Bombs', Level : 49 },
					{ Name : 'Loaded for Bear', Level : 58 }
				]
			},
			{
				Level : 30,
				Name : 'Rain of Vengeance',
				Category : 'Archery',
				CanMouse1 : true,
				Runes:  [
					{ Name : 'Dark Cloud', Level : 35 },
					{ Name : 'Beastly Bombs', Level : 40 },
					{ Name : 'Stampede', Level : 47 },
					{ Name : 'Anathema', Level : 54 },
					{ Name : 'Flying Strike', Level : 60 }
				]
			}
		]
	},
	'Monk' : {
		Categories : [
			{ Name : 'Primary', Level : 1 }, 
			{ Name : 'Secondary', Level : 2 },
			{ Name : 'Defensive', Level : 4 },
			{ Name : 'Techniques', Level : 9 },
			{ Name : 'Focus', Level : 14 },
			{ Name : 'Mantras', Level : 19 }
		],
		PassiveSkillSlots :[
			{ Level : 10 },
			{ Level : 20 },
			{ Level : 30 }
		],
		Passive : [
			{	
				Level : 10,
				Name : 'Fleet Footed'
			},
			{	
				Level : 10,
				Name : 'Resolve'
			},
			{	
				Level : 13,
				Name : 'Exalted Soul'
			},
			{	
				Level : 16,
				Name : 'Transcendence'
			},
			{	
				Level : 20,
				Name : 'Chant of Resonance'
			},
			{	
				Level : 20,
				Name : 'Seize the Initiative'
			},
			{	
				Level : 24,
				Name : 'The Guardian\'s Path'
			},
			{	
				Level : 27,
				Name : 'Sixth Sense'
			},
			{	
				Level : 30,
				Name : 'Pacifism'
			},
			{	
				Level : 35,
				Name : 'Beacon of Ytar'
			},
			{	
				Level : 40,
				Name : 'Guiding Light'
			},
			{	
				Level : 45,
				Name : 'One With Everything'
			},
			{	
				Level : 50,
				Name : 'Combination Strike'
			},
			{	
				Level : 58,
				Name : 'Near Death Experience'
			}
		],
		Active : [
			{
				Level : 1,
				Name : 'Fists of Thunder',
				Category : 'Primary',
				CanMouse1 : true,
				Runes:  [
					{ Name : 'Thunderclap', Level : 6 },
					{ Name : 'Lightning Flash', Level : 14 },
					{ Name : 'Static Charge', Level : 30 },
					{ Name : 'Quickening', Level : 42 },
					{ Name : 'Bounding Light', Level : 52 }
				]
			},
			{
				Level : 2,
				Name : 'Lashing Tail Kick',
				Category : 'Secondary',
				CanMouse1 : true,
				Runes:  [
					{ Name : 'Vulture Claw Kick', Level : 7 },
					{ Name : 'Sweeping Armada', Level : 15 },
					{ Name : 'Spinning Flame Kick', Level : 28 },
					{ Name : 'Scorpion Sting', Level : 38 },
					{ Name : 'Hand of Ytar', Level : 52 }
				]
			},
			{
				Level : 3,
				Name : 'Deadly Reach',
				Category : 'Primary',
				CanMouse1 : true,
				Runes:  [
					{ Name : 'Piercing Trident', Level : 9 },
					{ Name : 'Keen Eye', Level : 18 },
					{ Name : 'Scattered Blows', Level : 34 },
					{ Name : 'Strike from Beyond', Level : 47 },
					{ Name : 'Foresight', Level : 54 }
				]
			},
			{
				Level : 4,
				Name : 'Blinding Flash',
				Category : 'Defensive',
				CanMouse1 : false,
				Runes:  [
					{ Name : 'Self Reflection', Level : 12 },
					{ Name : 'Blinded and Confused', Level : 19 },
					{ Name : 'Blinding Echo', Level : 28 },
					{ Name : 'Searing Light', Level : 41 },
					{ Name : 'Faith in the Light', Level : 55 }
				]
			},
			{
				Level : 5,
				Name : 'Tempest Rush',
				Category : 'Secondary',
				CanMouse1 : true,
				Runes:  [
					{ Name : 'Northern Breeze', Level : 11 },
					{ Name : 'Tailwind', Level : 20 },
					{ Name : 'Flurry', Level : 33 },
					{ Name : 'Slipstream', Level : 45 },
					{ Name : 'Bluster', Level : 56 }
				]
			},
			{
				Level : 8,
				Name : 'Breath of Heaven',
				Category : 'Defensive',
				CanMouse1 : false,
				Runes:  [
					{ Name : 'Circle of Scorn', Level : 14 },
					{ Name : 'Circle of Life', Level : 21 },
					{ Name : 'Blazing Wrath', Level : 32 },
					{ Name : 'Infused with Light', Level : 44 },
					{ Name : 'Penitent Flame', Level : 59 }
				]
			},
			{
				Level : 9,
				Name : 'Dashing Strike',
				Category : 'Techniques',
				CanMouse1 : true,
				Runes:  [
					{ Name : 'Way of the Falling Star', Level : 15 },
					{ Name : 'Flying Side Kick', Level : 23 },
					{ Name : 'Quicksilver', Level : 32 },
					{ Name : 'Soaring Skull', Level : 39 },
					{ Name : 'Binding Speed', Level : 49 }
				]
			},
			{
				Level : 11,
				Name : 'Crippling Wave',
				Category : 'Primary',
				CanMouse1 : true,
				Runes:  [
					{ Name : 'Mangle', Level : 17 },
					{ Name : 'Concussion', Level : 26 },
					{ Name : 'Rising Tide', Level : 36 },
					{ Name : 'Tsunami', Level : 51 },
					{ Name : 'Breaking Wave', Level : 57 }
				]
			},
			{
				Level : 12,
				Name : 'Wave of Light',
				Category : 'Secondary',
				CanMouse1 : true,
				Runes:  [
					{ Name : 'Wall of Light', Level : 18 },
					{ Name : 'Explosive Light', Level : 25 },
					{ Name : 'Empowered Wave', Level : 35 },
					{ Name : 'Binding Light', Level : 49 },
					{ Name : 'Pillar of the Ancients', Level : 57 }
				]
			},
			{
				Level : 13,
				Name : 'Exploding Palm',
				Category : 'Techniques',
				CanMouse1 : true,
				Runes:  [
					{ Name : 'The Flesh is Weak', Level : 18 },
					{ Name : 'Strong Spirit', Level : 25 },
					{ Name : 'Creeping Demise', Level : 36 },
					{ Name : 'Impending Doom', Level : 44 },
					{ Name : 'Essence Burn', Level : 51 }
				]
			},
			{
				Level : 14,
				Name : 'Cyclone Strike',
				Category : 'Focus',
				CanMouse1 : true,
				Runes:  [
					{ Name : 'Eye of the Storm', Level : 21 },
					{ Name : 'Implosion', Level : 25 },
					{ Name : 'Sunburst', Level : 34 },
					{ Name : 'Wall of Wind', Level : 41 },
					{ Name : 'Soothing Breeze', Level : 55 }
				]
			},
			{
				Level : 15,
				Name : 'Way of the Hundred Fists',
				Category : 'Primary',
				CanMouse1 : true,
				Runes:  [
					{ Name : 'Hands of Lightning', Level : 24 },
					{ Name : 'Blazing Fists', Level : 32 },
					{ Name : 'Fists of Fury', Level : 40 },
					{ Name : 'Spirited Salvo', Level : 48 },
					{ Name : 'Windforce Flurry', Level : 60 }
				]
			},
			{
				Level : 16,
				Name : 'Serenity',
				Category : 'Defensive',
				CanMouse1 : false,
				Runes:  [
					{ Name : 'Peaceful Repose', Level : 23 },
					{ Name : 'Reap What Is Sown', Level : 29 },
					{ Name : 'Tranquility', Level : 39 },
					{ Name : 'Ascension', Level : 47 },
					{ Name : 'Instant Karma', Level : 54 }
				]
			},
			{
				Level : 17,
				Name : 'Seven-Sided Strike',
				Category : 'Focus',
				CanMouse1 : true,
				Runes:  [
					{ Name : 'Sudden Assault', Level : 23 },
					{ Name : 'Several-Sided Strike', Level : 29 },
					{ Name : 'Pandemonium', Level : 37 },
					{ Name : 'Sustained Attack', Level : 43 },
					{ Name : 'Fulminating Onslaught', Level : 60 }
				]
			},
			{
				Level : 19,
				Name : 'Mantra of Evasion',
				Category : 'Mantras',
				CanMouse1 : false,
				Runes:  [
					{ Name : 'Hard Target', Level : 24 },
					{ Name : 'Divine Protection', Level : 33 },
					{ Name : 'Wind through the Reeds', Level : 40 },
					{ Name : 'Perseverance', Level : 50 },
					{ Name : 'Backlash', Level : 58 }
				]
			},
			{
				Level : 21,
				Name : 'Mantra of Retribution',
				Category : 'Mantras',
				CanMouse1 : false,
				Runes:  [
					{ Name : 'Retaliation', Level : 28 },
					{ Name : 'Transgression', Level : 36 },
					{ Name : 'Indignation', Level : 41 },
					{ Name : 'Against All Odds', Level : 56 },
					{ Name : 'Collateral Damage', Level : 59 }
				]
			},
			{
				Level : 21,
				Name : 'Sweeping Wind',
				Category : 'Techniques',
				CanMouse1 : false,
				Runes:  [
					{ Name : 'Master of Wind', Level : 27 },
					{ Name : 'Blade Storm', Level : 33 },
					{ Name : 'Fire Storm', Level : 38 },
					{ Name : 'Inner Storm', Level : 46 },
					{ Name : 'Cyclone', Level : 56 }
				]
			},
			{
				Level : 22,
				Name : 'Inner Sanctuary',
				Category : 'Defensive',
				CanMouse1 : false,
				Runes:  [
					{ Name : 'Safe Haven', Level : 26 },
					{ Name : 'Sanctified Ground', Level : 31 },
					{ Name : 'Consecration', Level : 37 },
					{ Name : 'Circle of Protection', Level : 43 },
					{ Name : 'Forbidden Palace', Level : 58 }
				]
			},
			{
				Level : 22,
				Name : 'Mystic Ally',
				Category : 'Focus',
				CanMouse1 : false,
				Runes:  [
					{ Name : 'Water Ally', Level : 27 },
					{ Name : 'Fire Ally', Level : 31 },
					{ Name : 'Air Ally', Level : 39 },
					{ Name : 'Elemental Ally', Level : 46 },
					{ Name : 'Earth Ally', Level : 53 }
				]
			},
			{
				Level : 26,
				Name : 'Mantra of Healing',
				Category : 'Mantras',
				CanMouse1 : false,
				Runes:  [
					{ Name : 'Sustenance', Level : 31 },
					{ Name : 'Circular Breathing', Level : 38 },
					{ Name : 'Boon of Protection', Level : 42 },
					{ Name : 'Heavenly Body', Level : 48 },
					{ Name : 'Time of Need', Level : 53 }
				]
			},
			{
				Level : 30,
				Name : 'Mantra of Conviction',
				Category : 'Mantras',
				CanMouse1 : false,
				Runes:  [
					{ Name : 'Overawe', Level : 35 },
					{ Name : 'Intimidation', Level : 44 },
					{ Name : 'Dishearten', Level : 47 },
					{ Name : 'Reclamation', Level : 55 },
					{ Name : 'Submission', Level : 60 }
				]
			}
		]
	},
	'Witch Doctor' : {
		Categories : [ 
			{ Name : 'Primary', Level : 1 }, 
			{ Name : 'Secondary', Level : 2 },
			{ Name : 'Defensive', Level : 4 },
			{ Name : 'Terror', Level : 9 },
			{ Name : 'Decay', Level : 14 },
			{ Name : 'Voodoo', Level : 19 }
		],
		PassiveSkillSlots :[
			{ Level : 10 },
			{ Level : 20 },
			{ Level : 30 }
		],
		Passive : [
			{
				Level : 10,
				Name : 'Circle of Life'
			},
			{
				Level : 10,
				Name : 'Jungle Fortitude'
			},
			{
				Level : 13,
				Name : 'Spiritual Attunement'
			},
			{
				Level : 16,
				Name : 'Gruesome Feast'
			},
			{
				Level : 20,
				Name : 'Bad Medicine'
			},
			{
				Level : 20,
				Name : 'Blood Ritual'
			},
			{
				Level : 24,
				Name : 'Zombie Handler'
			},
			{
				Level : 27,
				Name : 'Pierce the Veil'
			},
			{
				Level : 30,
				Name : 'Fetish Sycophants'
			},
			{
				Level : 30,
				Name : 'Spirit Vessel'
			},
			{
				Level : 36,
				Name : 'Rush of Essence'
			},
			{
				Level : 40,
				Name : 'Vision Quest'
			},
			{
				Level : 45,
				Name : 'Fierce Loyalty'
			},
			{
				Level : 50,
				Name : 'Grave Injustice'
			},
			{
				Level : 55,
				Name : 'Tribal Rites'
			},
		],		
		Active : [
			{
				Level : 1,
				Name : 'Poison Dart',
				Category : 'Primary',
				CanMouse1 : true,
				Runes:  [
					{ Name : 'Splinters', Level : 6 },
					{ Name : 'Numbing Dart', Level : 13 },
					{ Name : 'Spined Dart', Level : 25 },
					{ Name : 'Flaming Dart', Level : 43 },
					{ Name : 'Snake to the Face', Level : 52 }
				]
			},
			{
				Level : 2,
				Name : 'Grasp of the Dead',
				Category : 'Secondary',
				CanMouse1 : true,
				Runes:  [
					{ Name : 'Unbreakable Grasp', Level : 7 },
					{ Name : 'Groping Eels', Level : 15 },
					{ Name : 'Death Is Life', Level : 25 },
					{ Name : 'Deperate Grasp', Level : 28 },
					{ Name : 'Rain of Corpses', Level : 53 }
				]
			},
			{
				Level : 3,
				Name : 'Corpse Spiders',
				Category : 'Primary',
				CanMouse1 : true,
				Runes:  [
					{ Name : 'Leaping Spiders', Level : 9 },
					{ Name : 'Spider Queen', Level : 18 },
					{ Name : 'Widowmakers', Level : 33 },
					{ Name : 'Medusa Spiders', Level : 45 },
					{ Name : 'Blazing Spiders', Level : 55 }
				]
			},
			{
				Level : 4,
				Name : 'Summon Zombie Dogs',
				Category : 'Defensive',
				CanMouse1 : true,
				Runes:  [
					{ Name : 'Rabid Dogs', Level : 12 },
					{ Name : 'Final Gift', Level : 19 },
					{ Name : 'Life Link', Level : 28 },
					{ Name : 'Burning Dogs', Level : 40 },
					{ Name : 'Leeching Beasts', Level : 54 }
				]
			},
			{
				Level : 5,
				Name : 'Firebats',
				Category : 'Secondary',
				CanMouse1 : true,
				Runes:  [
					{ Name : 'Dire Bats', Level : 11 },
					{ Name : 'Vampire Bats', Level : 19 },
					{ Name : 'Plague Bats', Level : 29 },
					{ Name : 'Hungry Bats', Level : 45 },
					{ Name : 'Cloud of Bats', Level : 56 }
				]
			},
			{
				Level : 8,
				Name : 'Horrify',
				Category : 'Defensive',
				CanMouse1 : false,
				Runes:  [
					{ Name : 'Phobia', Level : 14 },
					{ Name : 'Stalker', Level : 21 },
					{ Name : 'Face of Death', Level : 34 },
					{ Name : 'Frightening Aspect', Level : 44 },
					{ Name : 'Ruthless Terror', Level : 56 }
				]
			},
			{
				Level : 9,
				Name : 'Soul Harvest',
				Category : 'Terror',
				CanMouse1 : false,
				Runes:  [
					{ Name : 'Swallow Your Soul', Level : 15 },
					{ Name : 'Siphon', Level : 21 },
					{ Name : 'Languish', Level : 32 },
					{ Name : 'Soul to Waste', Level : 39 },
					{ Name : 'Vengeful Spirit', Level : 49 }
				]
			},
			{
				Level : 11,
				Name : 'Plague of Toads',
				Category : 'Primary',
				CanMouse1 : true,
				Runes:  [
					{ Name : 'Explosive Toads', Level : 17 },
					{ Name : 'Toad of Hugeness', Level : 24 },
					{ Name : 'Rain of Toads', Level : 35 },
					{ Name : 'Adding Toads', Level : 51 },
					{ Name : 'Toad Affinity', Level : 54 }
				]
			},
			{
				Level : 12,
				Name : 'Haunt',
				Category : 'Secondary',
				CanMouse1 : true,
				Runes:  [
					{ Name : 'Consuming Spirit', Level : 18 },
					{ Name : 'Resentful Spirit', Level : 23 },
					{ Name : 'Lingering Spirit', Level : 35 },
					{ Name : 'Grasping Spirit', Level : 48 },
					{ Name : 'Draining Spirit', Level : 57 }
				]
			},
			{
				Level : 13,
				Name : 'Sacrifice',
				Category : 'Terror',
				CanMouse1 : true,
				Runes:  [
					{ Name : 'Black Blood', Level : 18 },
					{ Name : 'Next of Kin', Level : 24 },
					{ Name : 'Pride', Level : 36 },
					{ Name : 'For the Master', Level : 41 },
					{ Name : 'Provoke the Pack', Level : 51 }
				]
			},
			{
				Level : 14,
				Name : 'Zombie Charger',
				Category : 'Decay',
				CanMouse1 : true,
				Runes:  [
					{ Name : 'Leperous Zombie', Level : 21 },
					{ Name : 'Undeath', Level : 27 },
					{ Name : 'Wave of Zombies', Level : 33 },
					{ Name : 'Explosive Beast', Level : 42 },
					{ Name : 'Zombie Bears', Level : 54 }
				]
			},
			{
				Level : 16,
				Name : 'Spirit Walk',
				Category : 'Defensive',
				CanMouse1 : false,
				Runes:  [
					{ Name : 'Jaunt', Level : 23 },
					{ Name : 'Honored Guest', Level : 29 },
					{ Name : 'Umbral Shock', Level :38 },
					{ Name : 'Severance', Level : 47 },
					{ Name : 'Healing Journey', Level : 53 }
				]
			},
			{
				Level : 17,
				Name : 'Spirit Barrage',
				Category : 'Decay',
				CanMouse1 : true,
				Runes:  [
					{ Name : 'The Spirit Is Willing', Level : 23 },
					{ Name : 'Well of Souls', Level : 32 },
					{ Name : 'Phantasm', Level : 37 },
					{ Name : 'Phlebotomize', Level : 44 },
					{ Name : 'Manitou', Level : 59 }
				]
			},
			{
				Level : 19,
				Name : 'Gargantuan',
				Category : 'Voodoo',
				CanMouse1 : true,
				Runes:  [
					{ Name : 'Humongoid', Level : 22 },
					{ Name : 'Restless Giant', Level : 29 },
					{ Name : 'Wrathful Protector', Level : 39 },
					{ Name : 'Big Stinker', Level : 48 },
					{ Name : 'Bruiser', Level : 56 }
				]
			},
			{
				Level : 21,
				Name : 'Firebomb',
				Category : 'Primary',
				CanMouse1 : true,
				Runes:  [
					{ Name : 'Flash Fire', Level : 28 },
					{ Name : 'Roll the Bones', Level : 31 },
					{ Name : 'Fire Pit', Level : 38 },
					{ Name : 'Pyrogeist', Level : 47 },
					{ Name : 'Ghost Bomb', Level : 60 }
				]
			},
			{
				Level : 21,
				Name : 'Locust Swarm',
				Category : 'Secondary',
				CanMouse1 : true,
				Runes:  [
					{ Name : 'Pestilence', Level : 27 },
					{ Name : 'Devouring Swarm', Level : 33 },
					{ Name : 'Cloud of Insects', Level : 37 },
					{ Name : 'Diseased Swarm', Level : 42 },
					{ Name : 'Searing Locusts', Level : 59 }
				]
			},
			{
				Level : 22,
				Name : 'Acid Cloud',
				Category : 'Decay',
				CanMouse1 : true,
				Runes:  [
					{ Name : 'Acid Rain', Level : 26 },
					{ Name : 'Lob Blob Bomb', Level : 30 },
					{ Name : 'Slow Burn', Level : 39 },
					{ Name : 'Kiss of Death', Level : 46 },
					{ Name : 'Corpse Bomb', Level : 55 }
				]
			},
			{
				Level : 22,
				Name : 'Hex',
				Category : 'Defensive',
				CanMouse1 : false,
				Runes:  [
					{ Name : 'Hedge Magic', Level : 26 },
					{ Name : 'Jinx', Level : 31 },
					{ Name : 'Angry Chicken', Level : 36 },
					{ Name : 'Painful Transformation', Level : 43 },
					{ Name : 'Unstable Form', Level : 58 }
				]
			},
			{
				Level : 22,
				Name : 'Mass Confusion',
				Category : 'Terror',
				CanMouse1 : true,
				Runes:  [
					{ Name : 'Unstable Realm', Level : 26 },
					{ Name : 'Devolution', Level : 34 },
					{ Name : 'Mass Hysteria', Level : 43 },
					{ Name : 'Paranoia', Level : 46 },
					{ Name : 'Mass Halucination', Level : 54 }
				]
			},
			{
				Level : 25,
				Name : 'Big Bad Voodoo',
				Category : 'Voodoo',
				CanMouse1 : true,
				Runes:  [
					{ Name : 'Jungle Drums', Level : 31 },
					{ Name : 'Rain Dance', Level : 37 },
					{ Name : 'Slam Dance', Level : 44 },
					{ Name : 'Ghost Trance', Level : 50 },
					{ Name : 'Boogie Man', Level : 58 }
				]
			},
			{
				Level : 28,
				Name : 'Wall of Zombies',
				Category : 'Decay',
				CanMouse1 : true,
				Runes:  [
					{ Name : 'Barricade', Level : 32 },
					{ Name : 'Unrelenting Grip', Level : 35 },
					{ Name : 'Creepers', Level : 41 },
					{ Name : 'Pile On', Level : 49 },
					{ Name : 'Dead Rush', Level : 60 }
				]
			},
			{
				Level : 30,
				Name : 'Fetish Army',
				Category : 'Voodoo',
				CanMouse1 : true,
				Runes:  [
					{ Name : 'Fetish Ambush', Level : 34 },
					{ Name : 'Devoted Following', Level : 40 },
					{ Name : 'Legion of Daggers', Level : 46 },
					{ Name : 'Tiki Torchers', Level : 52 },
					{ Name : 'Head Hunters', Level : 60 }
				]
			}			
		]
	},
	'Wizard' : {
		Categories : [ 
			{ Name : 'Primary', Level : 1 }, 
			{ Name : 'Secondary', Level : 2 },
			{ Name : 'Defensive', Level : 4 },
			{ Name : 'Force', Level : 9 },
			{ Name : 'Conjuration', Level : 14 },
			{ Name : 'Mastery', Level : 19 }
		],
		PassiveSkillSlots :[
			{ Level : 10 },
			{ Level : 20 },
			{ Level : 30 }
		],
		Passive : [
			{	
				Level : 10,
				Name : 'Blur'
			},
			{	
				Level : 10,
				Name : 'Power Hungry'
			},
			{	
				Level : 13,
				Name : 'Evocation'
			},
			{	
				Level : 16,
				Name : 'Glass Cannon'
			},
			{	
				Level : 20,
				Name : 'Prodigy'
			},
			{	
				Level : 24,
				Name : 'Astral Presence'
			},
			{	
				Level : 27,
				Name : 'Illusionist'
			},
			{	
				Level : 30,
				Name : 'Cold Blooded'
			},
			{	
				Level : 34,
				Name : 'Conflagration'
			},
			{	
				Level : 37,
				Name : 'Paralysis'
			},
			{	
				Level : 40,
				Name : 'Galvanizing Ward'
			},
			{	
				Level : 45,
				Name : 'Temporal Flux'
			},
			{	
				Level : 50,
				Name : 'Critical Mass'
			},
			{	
				Level : 55,
				Name : 'Arcane Dynamo'
			},
			{	
				Level : 60,
				Name : 'Unstable Anomaly'
			}
		],		
		Active : [
			{
				Level : 1,
				Name : 'Magic Missile',
				Category : 'Primary',
				CanMouse1 : true,
				Runes:  [
					{ Name : 'Charged Blast', Level : 6 },
					{ Name : 'Split', Level : 13 },
					{ Name : 'Penetrating Blast', Level : 31 },
					{ Name : 'Attunement', Level : 42 },
					{ Name : 'Seeker', Level : 52 }
				]
			},
			{
				Level : 2,
				Name : 'Ray of Frost',
				Category : 'Secondary',
				CanMouse1 : true,
				Runes:  [
					{ Name : 'Numb', Level : 7 },
					{ Name : 'Snow Blast', Level : 15 },
					{ Name : 'Cold Blood', Level : 28 },
					{ Name : 'Sleet Storm', Level : 38 },
					{ Name : 'Black Ice', Level : 53 }
				]
			},
			{
				Level : 3,
				Name : 'Shock Pulse',
				Category : 'Primary',
				CanMouse1 : true,
				Runes:  [
					{ Name : 'Explosive Bolts', Level : 9 },
					{ Name : 'Fire Bolts', Level : 18 },
					{ Name : 'Piercing Orb', Level : 33 },
					{ Name : 'Lightning Affinity', Level : 47 },
					{ Name : 'Living LIghtning', Level : 54 }
				]
			},
			{
				Level : 4,
				Name : 'Frost Nova',
				Category : 'Defensive',
				CanMouse1 : false,
				Runes:  [
					{ Name : 'Shatter', Level : 12 },
					{ Name : 'Cold Snap', Level : 18 },
					{ Name : 'Frozen Mist', Level : 28 },
					{ Name : 'Deep Freeze', Level : 41 },
					{ Name : 'Bone Chill', Level : 51 }
				]
			},
			{
				Level : 5,
				Name : 'Arcane Orb',
				Category : 'Secondary',
				CanMouse1 : true,
				Runes:  [
					{ Name : 'Obliteration', Level : 11 },
					{ Name : 'Arcane Orbit', Level : 20 },
					{ Name : 'Arcane Nova', Level : 32 },
					{ Name : 'Tap the Source', Level : 45 },
					{ Name : 'Celestial Orb', Level : 55 }
				]
			},
			{
				Level : 8,
				Name : 'Diamond Skin',
				Category : 'Defensive',
				CanMouse1 : true,
				Runes:  [
					{ Name : 'Crystal Shell', Level : 14 },
					{ Name : 'Prism', Level : 20 },
					{ Name : 'Mirror Skin', Level : 32 },
					{ Name : 'Enduring Skin', Level : 44 },
					{ Name : 'Diamond Shards', Level : 56 }
				]
			},
			{
				Level : 9,
				Name : 'Wave of Force',
				Category : 'Force',
				CanMouse1 : true,
				Runes:  [
					{ Name : 'Impactful Wave', Level : 15 },
					{ Name : 'Force Affinity', Level : 22 },
					{ Name : 'Siphoning Blade', Level : 32 },
					{ Name : 'Healing Blades', Level : 39 },
					{ Name : 'Thrown Blade', Level : 49 }
				]
			},
			{
				Level : 11,
				Name : 'Spectral Blade',
				Category : 'Primary',
				CanMouse1 : true,
				Runes:  [
					{ Name : 'Deep Cuts', Level : 19 },
					{ Name : 'Impactful Blades', Level : 24 },
					{ Name : 'Siphoning Blade', Level : 35 },
					{ Name : 'Healing Blades', Level : 51 },
					{ Name : 'Thrown Blade', Level : 57 }
				]
			},
			{
				Level : 12,
				Name : 'Arcane Torrent',
				Category : 'Secondary',
				CanMouse1 : true,
				Runes:  [
					{ Name : 'Disruption', Level : 18 },
					{ Name : 'Death Blossom', Level : 25 },
					{ Name : 'Arcane Mines', Level : 34 },
					{ Name : 'Power Stones', Level : 49 },
					{ Name : 'Cascade', Level : 57 }
				]
			},
			{
				Level : 13,
				Name : 'Energy Twister',
				Category : 'Force',
				CanMouse1 : true,
				Runes:  [
					{ Name : 'Mistral Breeze', Level : 19 },
					{ Name : 'Gale Force', Level : 24 },
					{ Name : 'Raging Storm', Level : 36 },
					{ Name : 'Wicked Wind', Level : 41 },
					{ Name : 'Storm Chase', Level : 52 }
				]
			},
			{
				Level : 14,
				Name : 'Ice Armor',
				Category : 'Conjuration',
				CanMouse1 : true,
				Runes:  [
					{ Name : 'Chilling Aura', Level : 21 },
					{ Name : 'Crystallize', Level : 31 },
					{ Name : 'Jagged Ice', Level : 42 },
					{ Name : 'Ice Reflect', Level : 49 },
					{ Name : 'Frozen Storm', Level : 53 }
				]
			},
			{
				Level : 15,
				Name : 'Electrocute',
				Category : 'Primary',
				CanMouse1 : true,
				Runes:  [
					{ Name : 'Chain Lightning', Level : 22 },
					{ Name : 'Forked Lightning', Level : 29 },
					{ Name : 'Lightning Blast', Level : 36 },
					{ Name : 'Surge of Power', Level : 44 },
					{ Name : 'Arc Lightning', Level : 59 }
				]
			},
			{
				Level : 16,
				Name : 'Slow Time',
				Category : 'Defensive',
				CanMouse1 : false,
				Runes:  [
					{ Name : 'Miasma', Level : 23 },
					{ Name : 'Time Warp', Level : 29 },
					{ Name : 'Time Shell', Level : 39 },
					{ Name : 'Perpetuity', Level : 47 },
					{ Name : 'Stretch Time', Level : 53 }
				]
			},
			{
				Level : 17,
				Name : 'Storm Armor',
				Category : 'Conjuration',
				CanMouse1 : true,
				Runes:  [
					{ Name : 'Reactive Armor', Level : 23 },
					{ Name : 'Power of the Storm', Level : 33 },
					{ Name : 'Strike Back', Level : 37 },
					{ Name : 'Scramble', Level : 43 },
					{ Name : 'Shocking Aspect', Level : 58 }
				]
			},
			{
				Level : 19,
				Name : 'Explosive Blast',
				Category : 'Mastery',
				CanMouse1 : true,
				Runes:  [
					{ Name : 'Unleased', Level : 24 },
					{ Name : 'Time Bomb', Level : 29 },
					{ Name : 'Short Fuse', Level : 39 },
					{ Name : 'Obliterate', Level : 50 },
					{ Name : 'Chain Reaction', Level : 56 }
				]
			},
			{
				Level : 20,
				Name : 'Magic Weapon',
				Category : 'Conjuration',
				CanMouse1 : true,
				Runes:  [
					{ Name : 'Electrify', Level : 27 },
					{ Name : 'Force Weapon', Level : 35 },
					{ Name : 'Conduit', Level : 38 },
					{ Name : 'Venom', Level : 46 },
					{ Name : 'Blood Magic', Level : 55 }
				]
			},
			{
				Level : 21,
				Name : 'Disintegrate',
				Category : 'Secondary',
				CanMouse1 : true,
				Runes:  [
					{ Name : 'Convergence', Level : 26 },
					{ Name : 'Chaos Nexus', Level : 30 },
					{ Name : 'Volatility', Level : 39 },
					{ Name : 'Entropy', Level : 48 },
					{ Name : 'Intensify', Level : 59 }
				]
			},
			{
				Level : 21,
				Name : 'Hydra',
				Category : 'Force',
				CanMouse1 : true,
				Runes:  [
					{ Name : 'Arcane Hydra', Level : 26 },
					{ Name : 'Lightning Hydra', Level : 33 },
					{ Name : 'Venom Hydra', Level : 38 },
					{ Name : 'Frost Hydra', Level : 46 },
					{ Name : 'Mammoth Hydra', Level : 56 }
				]
			},
			{
				Level : 22,
				Name : 'Familiar',
				Category : 'Conjuration',
				CanMouse1 : true,
				Runes:  [
					{ Name : 'Sparkflint', Level : 30 },
					{ Name : 'Dartling', Level : 40 },
					{ Name : 'Ancient Guardian', Level : 44 },
					{ Name : 'Arcanot', Level : 50 },
					{ Name : 'Cannoneer', Level : 57 }
				]
			},
			{
				Level : 22,
				Name : 'Teleport',
				Category : 'Defensive',
				CanMouse1 : true,
				Runes:  [
					{ Name : 'Safe Passage', Level : 26 },
					{ Name : 'Wormhole', Level : 31 },
					{ Name : 'Reversal', Level : 37 },
					{ Name : 'Fracture', Level : 43 },
					{ Name : 'Calamity', Level : 59 }
				]
			},
			{
				Level : 25,
				Name : 'Meteor',
				Category : 'Force',
				CanMouse1 : true,
				Runes:  [
					{ Name : 'Molten Impact', Level : 29 },
					{ Name : 'Star Pact', Level : 34 },
					{ Name : 'Meteor Shower', Level : 43 },
					{ Name : 'Comet', Level : 48 },
					{ Name : 'Liquefy', Level : 58 }
				]
			},
			{
				Level : 25,
				Name : 'Mirror Image',
				Category : 'Mastery',
				CanMouse1 : true,
				Runes:  [
					{ Name : 'Simulacrum', Level : 31 },
					{ Name : 'Duplicates', Level : 37 },
					{ Name : 'Mocking Demise', Level : 45 },
					{ Name : 'Extension of Will', Level : 51 },
					{ Name : 'Mirror Mimics', Level : 58 }
				]
			},
			{
				Level : 27,
				Name : 'Blizzard',
				Category : 'Force',
				CanMouse1 : true,
				Runes:  [
					{ Name : 'Grasping Chill', Level : 35 },
					{ Name : 'Frozen Solid', Level : 42 },
					{ Name : 'Snowbound', Level : 47 },
					{ Name : 'Stark Winter', Level : 54 },
					{ Name : 'Unrelenting Storm', Level : 60 }
				]
			},
			{
				Level : 28,
				Name : 'Energy Armor',
				Category : 'Conjuration',
				CanMouse1 : true,
				Runes:  [
					{ Name : 'Absorption', Level : 32 },
					{ Name : 'Pinpoint Barrier', Level : 41 },
					{ Name : 'Energy Tap', Level : 48 },
					{ Name : 'Force Armor', Level : 54 },
					{ Name : 'Prismatic Armor', Level : 60 }
				]
			},
			{
				Level : 30,
				Name : 'Archon',
				Category : 'Mastery',
				CanMouse1 : true,
				Runes:  [
					{ Name : 'Arcane Destruction', Level : 36 },
					{ Name : 'Teleport', Level : 40 },
					{ Name : 'Pure Power', Level : 46 },
					{ Name : 'Slow Time', Level : 52 },
					{ Name : 'Improved Archon', Level : 60 }
				]
			},
		]
	}
}