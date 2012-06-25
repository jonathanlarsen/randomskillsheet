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
				CanMouse1 : true,
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
				CanMouse1 : true,
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
				CanMouse1 : true,
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
				CanMouse1 : true,
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
				CanMouse1 : true,
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
				CanMouse1 : true,
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
				Level : 10 
			},
		],		
		Active : [
			{
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
				Level : 10 
			},
		],		
		Active : [
			{
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
		]
	}
}