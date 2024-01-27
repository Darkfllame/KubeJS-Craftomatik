// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

const woods = [
	"oak",
	"dark_oak",
	"spruce",
	"birch",
	"jungle",
	"acacia",
	"crimson",
	"warped",
]

onEvent('recipes', event => {
	woods.forEach(type => {
		event.shapeless(`minecraft:${type}_planks`, [
			`2x minecraft:${type}_slab`
		])
	});
})

onEvent('item.tags', event => {
	
})