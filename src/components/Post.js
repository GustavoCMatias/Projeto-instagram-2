import React from "react"

export default function Post(props){
  const [simbolo, setSimbolo] = React.useState('bookmark-outline')
  const [curtidas, setCurtidas] = React.useState(props.numero)
  const [coracao, setCoracao] = React.useState('heart-outline')
  
  function MudarSimbolo(){
    if(simbolo==='bookmark-outline'){
     setSimbolo('bookmark')
    } else{
      setSimbolo('bookmark-outline')
    }
  }

  function MudarCurtidas(){
    if(coracao==='heart-outline'){
      setCoracao('heart')
      setCurtidas(curtidas+1)
     } else{
       setCoracao('heart-outline')
       setCurtidas(curtidas-1)
     }
  }

  function curtida_foto(){
    if(coracao==='heart-outline'){
      setCoracao('heart')
      setCurtidas(curtidas+1)
     }
  }


    return(
        <div class="post" data-test="post">
            <div class="topo">
              <div class="usuario">
                <img src={props.foto_autor}/>
                {props.autor}
              </div>
              <div class="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
              </div>
            </div>

            <div class="conteudo" onClick={curtida_foto}>
              <img src={props.post} data-test="post-image"/>
            </div>

            <div class="fundo">
              <div class="acoes">
                <div>
                  <ion-icon name={coracao} onClick={MudarCurtidas} data-test="like-post" color="red"></ion-icon>
                  <ion-icon name="chatbubble-outline"></ion-icon>
                  <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div>
                  <ion-icon name={simbolo} onClick={MudarSimbolo} data-test="save-post"></ion-icon>
                </div>
              </div>

              <div class="curtidas">
                <img src={props.foto_curtida} />
                <div class="texto">
                  Curtido por <strong>{props.autor_curtida}</strong> e <strong data-test="likes-number">outras {curtidas} pessoas</strong>
                </div>
              </div>
            </div>
          </div>
    )
}