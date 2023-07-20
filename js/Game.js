class Game {
  constructor() {}

  start() { //executada no começo do programa (ainda no gameState = 0)
    player = new Player()
    player.getCount()

    form = new Form()
    form.display()

    car1 = createSprite(width/2 -100, height-100)
    car1.addImage(car1_img)
    car1.scale = 0.07

    car2 = createSprite(width/2 +100, height-100)
    car2.addImage(car2_img)
    car2.scale = 0.07

    cars = [car1, car2]
  }

  getState() {
    database.ref('gameState').on('value', (valor) => {
      gameState = valor.val()
    })
  }

  update(num) {
    database.ref('/').update({
      gameState: num
    })
  }

  handleElements() {
    form.hide()
    form.imagem.position(40,50)
    form.imagem.class('gameTitleAfterEffects')
  }

  play() { //executada no começo da corrida (quando gameState = 1)
    this.handleElements()

    image(track, 0, -height*5, width, height*6)

    drawSprites()
  }


}



//PARA LER:
//ref() e on() e val()

//PARA ESCREVER/ATUALIZAR
//ref() e set() ou update()
