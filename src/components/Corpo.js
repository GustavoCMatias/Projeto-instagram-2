import Storie from "./Storie"
import Post from "./Post"

const list_stories = [{ name: '9gag', img: "./assets/img/9gag.svg" }, { name: 'meowed', img: "./assets/img/meowed.svg" }, { name: 'barked', img: "./assets/img/barked.svg" }, { name: 'nathanwpylestrangeplanet', img: "./assets/img/nathanwpylestrangeplanet.svg" }, { name: 'wawawicomics', img: "./assets/img/wawawicomics.svg" }, { name: 'respondeai', img: "./assets/img/respondeai.svg" }, { name: 'filomoderna', img: "./assets/img/filomoderna.svg" }, { name: 'memeriagourmet', img: "./assets/img/memeriagourmet.svg" }]
const list_posts = [{autor: 'meowed', foto_autor: "./assets/img/meowed.svg", post: "./assets/img/gato-telefone.svg" , foto_curtida: "./assets/img/respondeai.svg",autor_curtida:'respondeai', numero:123}, {autor: 'barked', foto_autor: "./assets/img/barked.svg" , post: "./assets/img/dog.svg", foto_curtida: "./assets/img/adorable_animals.svg", autor_curtida:'adorable_animals', numero:456}]
export default function Corpo() {
    return (
        <div class="corpo">
            <div class="esquerda">
                <div class="stories">
                    {list_stories.map(s => <Storie imagem={s.img} usuario={s.name} />)}
            
                    <div class="setinha">
                        <ion-icon name="chevron-forward-circle"></ion-icon>
                    </div>
                </div>
                <div class="posts">
                    {list_posts.map(p => <Post foto_autor={p.foto_autor} autor={p.autor} post={p.post} foto_curtida={p.foto_curtida} autor_curtida={p.autor_curtida} numero={p.numero}/>)}

                </div>
            </div>
            <div class="sidebar">

            </div>
        </div>
    )
}