export default function Usuario(props){
    return(
        <div class="usuario">
          <img src={props.foto} />
          <div class="texto">
            <strong>catanacomics</strong>
            <span>
              {props.nome}
              <ion-icon name="pencil"></ion-icon>
            </span>
          </div>
        </div>
    )
}