class Main {

    private ships : PirateShip[] = []


    constructor() {
        for (let i = 0; i < 10; i++) {
            this.ships.push(new PirateShip())
        }


        //hier loop is vast

        this.gameLoop()
        
    }

    gameLoop() {
        for (const ship of this.ships) {
            ship.update()

            for (const otherShip of this.ships) {
                if(ship !== otherShip) {
                    if(ship.hasCollision(otherShip)) {
                        ship.hit = true
                        // break inner loop to prevent overwriting the hit
                        break
                    } 
                    else {
                        ship.hit = false
                    }
                }
            }
        }

        requestAnimationFrame(() => this.gameLoop())
    }
}

window.addEventListener("load", () => new Main())