const tree = {
    title : 'A',
    children : [
        {
            title : 'B',
            children : [
                {
                    title : 'C'
                }
            ]
        },
        {
            title : 'D'
        }
    ]
}

function recursionTree(node){
    if(node.children){
        console.log('Node Title: ', node.title)
        node.children.forEach(function(child){
            recursionTree(child);
        })
    }
}

recursionTree(tree);