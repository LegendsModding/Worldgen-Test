const frostfireTestWorldGenDefinition = {
    base: null,
    modify: (filterManager) => {
        filterManager.AppendFilter(["frostfireTest", "center"], 1)
        filterManager.AppendFilter(["frostfireTest", "testset1"], 1)
        filterManager.AppendFilter(["frostfireTest", "testset2"], 1)
    }
}

SNIPPET_InheritsFromGameMode("frostfireTest", () => {
    SetWorldGenDefinition(frostfireTestWorldGenDefinition)
})
