/*  Quando o mouse passar em cima, 
aparecer o personagem que estiver hover,
colocando a classe 'select', e remover a do que já estava 'select'  */

const characters = document.querySelectorAll('.character')

characters.forEach(character => {
  character.addEventListener('mouseenter', () => {

    const idSelect = character.attributes.id.value

    if(idSelect === 'ultron') {
      return;
    }

    const characterSelect = document.querySelector('.select')
    characterSelect.classList.remove('select')
    character.classList.add('select')

    const imagePlayer1 = document.getElementById('character-player-1')
    imagePlayer1.src = `./src/assets/${idSelect}.png`

    const namePlayer1 = document.getElementById('name-player-1')
    
    const nameSelection = character.getAttribute('data-name')
    namePlayer1.innerHTML = nameSelection;

  })
})
