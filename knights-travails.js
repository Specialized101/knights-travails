function makeNode (position, path) {
    if (position[0] < 0 || position[0] > 7 || position[1] < 0 || position[1] > 7) {
        return null
    }
    return { position, path }
}

function knightMoves([startX, startY], [endX, endY]) {
    let queue = [makeNode([startX, startY], [[startX, startY]])]
    let currentNode = queue.shift()

    while (currentNode.position[0] !== endX || currentNode.position[1] !== endY) {
        let moves = [
            [currentNode.position[0] + 2, currentNode.position[1] - 1],
            [currentNode.position[0] + 2, currentNode.position[1] + 1],
            [currentNode.position[0] - 2, currentNode.position[1] - 1],
            [currentNode.position[0] + 2, currentNode.position[1] + 1],
            [currentNode.position[0] + 1, currentNode.position[1] - 2],
            [currentNode.position[0] + 1, currentNode.position[1] + 2],
            [currentNode.position[0] - 1, currentNode.position[1] - 2],
            [currentNode.position[0] - 1, currentNode.position[1] + 2]
        ]
        moves.forEach(move => {
            let node = makeNode(move, currentNode.path.concat([move]))
            if (node !== null){
                queue.push(node)
            }
        })
        currentNode = queue.shift()
    }
    console.log(`=> You made it in ${currentNode.path.length - 1} moves! Here's your path:`)
    currentNode.path.forEach(position => {
        console.log(position)
    })
}

knightMoves([3, 3], [4, 3])
