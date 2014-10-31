function create_observerPanel(node, func) {
    var observer = new MutationObserver(function(mutations) {
        func(node);
        //mutations.forEach(function(mutation) {
        //    func(node);
        //});
    });
    var config = {
        attributes: false,
        childList: true,
        characterData: false,
        subtree: true
    };
    observer.observe(node, config);
}

