const inventory = newInventory()
move(inventory).to(0, 0)

//defines character image, and defines direction, which starts with no value 
// defines x and y, allowing the two axes to be changed by altering these two variables


const character = newImage('assets/green-character/static.gif')

function handleDirectionChange(direction){

    if(direction === null){
        character.src = 'assets/green-character/static.gif'
    }
    if(direction === 'west'){
        character.src = 'assets/green-character/west.gif'
    }
    if(direction === 'north'){
        character.src = 'assets/green-character/north.gif'
    }
    if(direction === 'east'){
        character.src = 'assets/green-character/east.gif'
    }
    if(direction === 'south'){
        character.src = 'assets/green-character/south.gif'
    }

}



move(character).withArrowKeys(100, 250, handleDirectionChange)



//establishes character image starting position


// the commented-out line of code below this was causing the error 'callback is not a function' to be thrown
// maybe because the move(character).to, using the to object, is clashing with the withArrowKeys object called ahead? 
// the initial placement of 100, 250 is already established by the withArrowKets function on 32, so .to is redundant anyway


// move(character).to(100, 250)


move(newImage('assets/tree.png')).to(200, 450)
move(newImage('assets/pillar.png')).to(350, 250)
move(newImage('assets/pine-tree.png')).to(450, 350)
move(newImage('assets/crate.png')).to(150, 350)
move(newImage('assets/well.png')).to(500, 575)
move(newItem('assets/sword.png')).to(500, 555)
move(newItem('assets/shield.png')).to(165, 335)
move(newItem('assets/staff.png')).to(600, 250)
