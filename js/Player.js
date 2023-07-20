class Player {
  constructor() {
    this.name = null
    this.number = null
    this.positionX = 0
    this.positionY = 0
  }

  addPlayer() {

    if (this.number === 1) {
      this.positionX = width/2 - 100
    } else {
      this.positionX = width/2 + 100
    }
    
    database.ref('players/player' + this.number).set({
      name: this.name,
      positionX: this.positionX,
      positionY: this.positionY
    })

  }


  getCount(){
    database.ref('playerCount').on('value', (valor) => {
      playerCount = valor.val()
    })
  }
  
  updateCount(count){
    database.ref('/').update({
      playerCount: count
    })
  }
  
}

