let app33 = new Vue({
    el: '#datasA',
    data: {
        seen: true,
        selectedNodes: nodeSelected.map(x=> x.private),
    }
});