// This definition exists in a separate file so that DLC or challenge modes could inherit from it.
// When you are making a definition that must persist across many game modes / data packs, put it into a separate file that won't get stomped.
// ^ lol it actually exists so we can mod it
const frostfireWorldGenDefinition = {
    base: campaignWorldGenDefinition, //base definition is null, which means this definition will not inherit any filters. It is very likely you will need to make such filters in modify()
    modify: (filterManager) => {
        filterManager.AppendFilter(["glacier_mountain_set1", "frostfire"], RandomNumWorldGen(1, 2))
        filterManager.AppendFilter(["glacier_mountain_set2", "frostfire"], RandomNumWorldGen(1, 2))
        }
    }