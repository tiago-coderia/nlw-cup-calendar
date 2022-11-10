function criarJogo(time1, hora, time2) {
    return `
    <li>
        <img src="/assets/${time1}.svg" alt="Bandeira ${time1}" title="${time1}"/>
        <strong class="hora">${hora}</strong>
        <img src="/assets/${time2}.svg" alt="Bandeira ${time2}" title="${time2}" />
    </li>
    `
}

function criarCartao(data, dia, jogos) {
    return `
    <div class="card">
      <h2 class="date">${data}<span>${dia}</span></h2>
      <ul>
       ${jogos}
      </ul>
    </div>
    `
}

document.querySelector("#app").innerHTML = `
<header>
    <img src="/assets/iconeNLW.svg" alt="Icone do NLW" />
  </header>
  <main class="cards">
    ${criarCartao('24/11', 'quinta',
        criarJogo('brazil', '16:00', 'serbia'))
    }
    ${criarCartao('28/11', 'segunda',
        criarJogo('portugal', '16:00', 'uruguai')
        +
        criarJogo('brazil', '16:00', 'switzerland')
        ) 
    }
    ${criarCartao('02/12', 'sexta',
        criarJogo('brazil', '16:00', 'cameroon')
        ) 
    }
  </main>
`