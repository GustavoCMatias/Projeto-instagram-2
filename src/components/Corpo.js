import Storie from "./Storie"
import Post from "./Post"
import Usuario from "./Usuario"
import Sugestao from "./Sugestao"

const list_stories = [{ name: '9gag', img: "./assets/img/9gag.svg" }, { name: 'meowed', img: "./assets/img/meowed.svg" }, { name: 'barked', img: "./assets/img/barked.svg" }, { name: 'nathanwpylestrangeplanet', img: "./assets/img/nathanwpylestrangeplanet.svg" }, { name: 'wawawicomics', img: "./assets/img/wawawicomics.svg" }, { name: 'respondeai', img: "./assets/img/respondeai.svg" }, { name: 'filomoderna', img: "./assets/img/filomoderna.svg" }, { name: 'memeriagourmet', img: "./assets/img/memeriagourmet.svg" }]
const list_posts = [{ autor: 'meowed', foto_autor: "./assets/img/meowed.svg", post: "./assets/img/gato-telefone.svg", foto_curtida: "./assets/img/respondeai.svg", autor_curtida: 'respondeai', numero: 123 }, { autor: 'barked', foto_autor: "./assets/img/barked.svg", post: "./assets/img/dog.svg", foto_curtida: "./assets/img/adorable_animals.svg", autor_curtida: 'adorable_animals', numero: 456 }]
const list_sugestoes = [{ nome: 'bad.vibes.memes', foto: "assets/img/bad.vibes.memes.svg", texto: 'Segue você' }, { nome: 'chibirdart', foto: "assets/img/chibirdart.svg", texto: 'Segue você' }, { nome: 'razoesparaacreditar', foto: "assets/img/razoesparaacreditar.svg", texto: 'Novo no Instagram' }, { nome: 'adorable_animals', foto: "assets/img/adorable_animals.svg", texto: 'Segue você' }, { nome: 'smallcutecats', foto: "assets/img/smallcutecats.svg", texto: 'Segue você' }]
let nome_perfil = 'Catana'
let foto_perfil = "assets/img/catanacomics.svg"
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
                    {list_posts.map(p => <Post foto_autor={p.foto_autor} autor={p.autor} post={p.post} foto_curtida={p.foto_curtida} autor_curtida={p.autor_curtida} numero={p.numero} />)}

                </div>
            </div>
            <div class="sidebar">
                <Usuario foto={foto_perfil} nome={nome_perfil} />

                <div class="sugestoes">
                    <div class="titulo">
                        Sugestões para você
                        <div>Ver tudo</div>
                    </div>

                    {list_sugestoes.map(s => <Sugestao foto={s.foto} nome={s.nome} texto={s.texto} />)}
                </div>

                <div class="links">
                    Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes •
                    Hashtags • Idioma
                </div>

                <div class="copyright">
                    © 2021 INSTAGRAM DO FACEBOOK
                </div>

            </div>
        </div>
    )
}