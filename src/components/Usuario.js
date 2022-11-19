import React from "react"



export default function Usuario(props) {
  const [nome_perfil, setNome_perfil] = React.useState(props.nome_usuario)
  const [foto_perfil, setFoto_perfil] = React.useState(props.foto_usuario)

  function Mudarnome() {
    const novo_nome = prompt('Digite seu novo nome:')
    setNome_perfil(novo_nome)
  }
  function Mudarfoto() {
    const nova_foto = prompt('Digite o link da nova foto:')
    setFoto_perfil(nova_foto)
  }
  return (
    <div class="usuario">
      <img src={foto_perfil} onClick={Mudarfoto} />
      <div class="texto">
        <strong>catanacomics</strong>
        <span>
          {nome_perfil}
          <ion-icon name="pencil" onClick={Mudarnome}></ion-icon>
        </span>
      </div>
    </div>
  )
}