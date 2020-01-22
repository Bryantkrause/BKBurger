const buildBurger = ({ id, burger, isDone }) => {
    let burgerElem = document.createElement('tr')
    burgerElem.className = isDone ? 'complete' : ''
    burgerElem.innerHTML = `
        <td class="burger" data-id="${id}">
          ${burger}
        </td>
        <td class="burger" data-id="${id}">
          <i data-id="${id}"class="material-icons item delete">
            delete
          </i>
        </td>
        `
    return burgerElem
  }
  
  const deleteBurger = (id, parent) => {
    axios.delete(`/burgers/${id}`)
      .then(() => parent.remove())
      .catch(e => console.error(e))
  }
  
  const updateBurger = (id, parent) => {
    axios.put(`/burgers/${id}`)
      .then(() => parent.className = parent.className === 'complete' ? '' : 'complete')
      .catch(e => console.error(e))
  }
  
  axios.get('/burgers')
    .then(({ data: burger }) => {
      document.getElementById('burgers').innerHTML = ''
      burger.forEach(burger => document.getElementById('burgers').append(buildBurger(burger)))
    })
  
  document.getElementById('addBurger').addEventListener('click', e => {
    e.preventDefault()
    let burger = {
      burger: document.getElementById('text').value,
      isDone: false
    }
    axios.post('/burgers', burger)
      .then(() => {
        document.getElementById('burgers').append(buildBurger(burger))
        document.getElementById('text').value = ''
      })
      .catch(e => console.error(e))
  })
  
  document.addEventListener('click', e => {
    if (e.target.className.includes('burger')) {
      if (e.target.className.includes('delete')) {
        deleteBurger(parseInt(e.target.dataset.id), e.target.parentNode.parentNode)
      } else {
        updateBurger(e.target.dataset.id, e.target.parentNode)
      }
    }
  })