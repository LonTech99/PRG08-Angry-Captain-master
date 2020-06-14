class Messageboard extends HTMLElement{

    private static instance: Messageboard


    public static getInstance(): Messageboard {
        if(!Messageboard.instance) Messageboard.instance = new Messageboard()
        return Messageboard.instance
    }

    private constructor(){
        super()

        let game = document.getElementsByTagName("game")[0]
        game.appendChild(this)
    }

    public addMessage(message: string) {
    this.append(message)
        }

}

window.customElements.define("messageboard-component", Messageboard as any)