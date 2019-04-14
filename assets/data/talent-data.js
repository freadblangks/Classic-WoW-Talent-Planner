let talentData = {
	"currentClass": 0,
	"constants": {
		"imageDirectory": "assets/images/",
		"classIconDirectory": "class-icons/",
		"backgroundDirectory": "backrounds/",
	},
	"classes": [
		{ 
			"id": 0, 
			"name": "hunter", 
			"skillPoints": 51,
			"requiredLevel": 0,
			"icon": "icon-hunter.png",
			"talentTrees": [
				{ 
					"id": 0,
					"name": "Beast Mastery",
					"skills": [
						{ 
							"id": 0, 
							"name": "Improved Aspect of the Hawk", 
							"maxRank": 5, 
							"currentRank": 0,
							"rankDescription": [
								"While Aspect of the Hawk is active, all normal ranged attacks have a 1% chance of increasing ranged attack speed by 30% for 12 sec.",
								"While Aspect of the Hawk is active, all normal ranged attacks have a 2% chance of increasing ranged attack speed by 30% for 12 sec.",
								"While Aspect of the Hawk is active, all normal ranged attacks have a 3% chance of increasing ranged attack speed by 30% for 12 sec.",
								"While Aspect of the Hawk is active, all normal ranged attacks have a 4% chance of increasing ranged attack speed by 30% for 12 sec.",
								"While Aspect of the Hawk is active, all normal ranged attacks have a 5% chance of increasing ranged attack speed by 30% for 12 sec."
							]
						},
						{ 
							"id": 1,
							"name": "Endurance Training",
							"maxRank": 5,
							"currentRank": 0,
							"rankDescription": []
						}
					]
				},
				{ 
					"id": 1,
					"name": "Marksmanship",
					"skills": [
						{ 
							"id": 0,
							"name": "Improved Concussive Shot",
							"maxRank": 5,
							"currentRank": 0,
							"rankDescription": []
						},
						{ 
							"id": 1, 
							"name": "Efficiency", 
							"maxRank": 5, 
							"currentRank": 0,
							"rankDescription": []
						}
					]
				},
				{ 
					"id": 2,
					"name": "Survival",
					"backgroundImage": "background-hunter-survival.jpg",
				}
			]
		},
		{ 
			"id": 1, 
			"name": "rogue", 
			"skillPoints": 51,
			"requiredLevel": 0,
			"icon": "icon-rogue.png",
			"talentTrees": [
				{ 
					"id": 0,
					"name": "Assassination",
					"skills": [
						{ 
							"id": 0, 
							"name": "Improved Eviscerate", 
							"maxRank": 5, 
							"currentRank": 0,
							"rankDescription": []
						},
					]
				},
				{ 
					"id": 1,
					"name": "Combat",
					"skills": [
						{ 
							"id": 0,
							"name": "Improved Gouge",
							"maxRank": 5,
							"currentRank": 0,
							"rankDescription": []
						},
					]
				},
				{ 
					"id": 2,
					"name": "Subtlety",
					"maxRank": 5,
					"currentRank": 0,
					"rankDescription": []
				}
			]
		},
		{ 
			"id": 2, 
			"name": "mage", 
			"skillPoints": 51,
			"requiredLevel": 0,
			"icon": "icon-mage.png",
			"talentTrees": [
				{ 
					"id": 0,
					"name": "Arcane",
					"skills": [
						{ 
							"id": 0, 
							"name": "Arcane Subtlety", 
							"maxRank": 2, 
							"currentRank": 0,
							"rankDescription": []
						},
					]
				},
				{ 
					"id": 1,
					"name": "Fire",
					"skills": [
						{ 
							"id": 0,
							"name": "Improved Fireball",
							"maxRank": 5,
							"currentRank": 0,
							"rankDescription": []
						},
					]
				},
				{ 
					"id": 2,
					"name": "Frost",
					"maxRank": 5,
					"currentRank": 0,
					"rankDescription": []
				}
			]
		},
		{
			"id": 3, 
			"name": "druid", 
			"skillPoints": 51,
			"requiredLevel": 0,
			"icon": "icon-druid.png",
		},
		{
			"id": 4, 
			"name": "paladin", 
			"skillPoints": 51,
			"requiredLevel": 0,
			"icon": "icon-paladin.png",
		},
		{
			"id": 5, 
			"name": "priest", 
			"skillPoints": 51,
			"requiredLevel": 0,
			"icon": "icon-priest.png",
		},
		{
			"id": 6, 
			"name": "shaman", 
			"skillPoints": 51,
			"requiredLevel": 0,
			"icon": "icon-shaman.png",
		},
		{
			"id": 7, 
			"name": "warlock", 
			"skillPoints": 51,
			"requiredLevel": 0,
			"icon": "icon-warlock.png",
		},
		{
			"id": 8, 
			"name": "warrior", 
			"skillPoints": 51,
			"requiredLevel": 0,
			"icon": "icon-warrior.png",
		}
	]
};