!(function(modules) {
    // to avoid duplicate modules when __magic__ gets called multiple times with the same id
    var cache = {};

    function __magic__(id) {
        if (cache[id]) {
            return cache[id].exports;
        }
        var module = {
            exports: {}
        };
        modules[id](__magic__, module.exports, module);
        cache[id] = module;
        return module.exports;
    }

    var chunkResolves = {};

    window.magicJsonp = function(chunkId, newModules){
        for (var id in newModules){
            modules[id] = newModules[id];
        }
        chunkResolves[chunkId]();
    };

    __magic__.loadChunk = function(chunkId){
        return new Promise( (resolve) => {
            chunkResolves[chunkId] = resolve;
            var script = document.createElement("script");
            script.src = "07-assets/" + {0: "async"}[chunkId] + ".js";
            document.head.appendChild(script);
        });
    };

    __magic__(0);
})({
    //  TODO insert module here
});