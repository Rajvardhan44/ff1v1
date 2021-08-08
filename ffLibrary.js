function AddGravity(sprite){
    sprite.velocityY = sprite.velocityY + 6
  }

  function moveWithArrow(sprite){
    if(keyDown("right")){
      sprite.velocityX=4.5
    }
    
    if(keyDown("UP_ARROW")){
      sprite.velocityY=-20
    }
  
    if(keyDown("SPACE")){
      sprite.velocityY=-20
    }
    
  
    
    if(keyDown("LEFT_ARROW")){
      sprite.velocityX=-4.5
    }
  }