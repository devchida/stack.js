const runStack = {
    build: (data) => {
        console.log(data)
        root = document.getElementById('root')
        container = document.createElement('section');
        container.innerHTML = comps[data.comp](data.compData)

        // set id if applicable
        data.compData.id ? container.setAttribute('id', data.compData.id) : null

        // display before or after selectedblock 
        data.compData.place ? placeBlock(data.compData.place, container) : root.appendChild(container)

        function placeBlock(block, container) {
            console.log(block)
            pos = block.pos
            id = document.getElementById(block.block)
            pos == 'append' ? id.appendChild(container) : null
            pos == 'prepend' ? id.prepend(container) : null
            pos == 'before' ? id.before(container) : null
            pos == 'after' ? id.after(container) : null

        }

    },
    stack: (stack) => {
        for (data in stack) {
            cjs.build(stack[data])
        }
    },
    rebuild: (data) => {
        oldBlock = document.getElementById(data.blockID);
        // return error if block doesnt exist 
        oldBlock == null ? console.log('Error: Block ID does not exist') : null
        oldBlock.parentNode.removeChild(oldBlock)
        // remove block if component is null 
        data.comp == null ? null : newBlock = cjs.build(data)
    },
    root: () => {
        body = document.getElementsByTagName('body')[0]
        container = document.createElement('div');
        container.setAttribute('id', 'root')
        body.appendChild(container)
    }
}
