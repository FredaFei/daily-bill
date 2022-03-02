export let importAll = (requireContext: __WebpackModuleApi.RequireContext) => {
    // console.log("requireContext.keys()", requireContext.keys());
    // console.log("requireContext", requireContext);
    // console.log("requireContext.keys().forEach(requireContext)", requireContext.keys().map(requireContext));
    return requireContext.keys().forEach(requireContext);
};