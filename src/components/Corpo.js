import Storie from "./Storie"

const list_stories = [{name: '9gag', img: "./assets/img/9gag.svg"}, {name: 'meowed', img: "./assets/img/meowed.svg"}, {name: 'barked', img: "./assets/img/barked.svg" }, {name: 'nathanwpylestrangeplanet', img: "./assets/img/nathanwpylestrangeplanet.svg"}, {name: 'wawawicomics', img: "./assets/img/wawawicomics.svg"}, {name: 'respondeai', img: "./assets/img/respondeai.svg"}, {name: 'filomoderna', img: "./assets/img/filomoderna.svg" }, {name: 'memeriagourmet', img: "./assets/img/memeriagourmet.svg" }]

export default function Corpo() {
    return (
        <div class="corpo">
            <div class="esquerda">
                <div class="stories">
                    {list_stories.map(s => <Storie imagem={s.img} usuario={s.name}/>)}
                </div>
            </div>
            <div class="sidebar">

            </div>
        </div>
    )
}