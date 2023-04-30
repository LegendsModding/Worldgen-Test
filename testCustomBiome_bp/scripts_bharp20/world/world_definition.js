const biomeTestWorldGenDefinition = {
    base: null,
    modify: (filterManager) => {
        filterManager.AppendFilter(["biomeTest", "center"], 1)
        filterManager.AppendFilter(["biomeTest", "set1"], 1)
        filterManager.AppendFilter(["biomeTest", "set2"], 1)
    }
}

SNIPPET_InheritsFromGameMode("biomeTest", () => {
    SetWorldGenDefinition(biomeTestWorldGenDefinition)
})
