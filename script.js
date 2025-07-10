const autores = [
    {
        nome: "As raízes do Romantismo",
        frase: "A crença iluminista de que tudo pode ser explicado pela razão foi substituída pela ideia de que cada cultura cria seus próprios significados. Antes dos românticos, acreditava-se que todas as perguntas tinham uma resposta certa. Depois deles, passou-se a aceitar que verdades podem ser múltiplas.",
        bio: "Isaiah Berlin, neste livro, mostra como o Romantismo mudou a forma de pensar e sentir na Europa, lá no final do século 18. Ele explica como grandes pensadores e artistas, como Herder, Fichte, Schelling, Blake e Byron, ajudaram a criar ideias novas sobre liberdade, diversidade e tolerância. Berlin conta como o Romantismo fez as pessoas valorizarem mais a liberdade de criar, sentir e pensar diferente dos outros, mudando para sempre a cultura, a arte e a política do Ocidente.",
        livro: "As raízes do Romantismo - Isaiah Berlin"
    },
    {
        nome: "Livro do Desassossego",
        frase: "Tudo vale a pena se a alma não é pequena.",
        bio: "Pessoa criou um “semi-heterônimo” chamado Bernardo Soares, ajudante de guarda-livros. Ele usava esse personagem para expressar sua visão íntima, melancólica e filosófica do mundo.Época e contexto: Pós-monarquia e começo da Primeira República. Tempos de crise política, identidade nacional e mudanças culturais. Pessoa se isolava do mundo real e se refugiava no pensamento, refletindo o desassossego da época.",
        livro: "Livro do Desassossego - Bernardo Soares (Fernando Pessoa)"
    },
    {
        nome: "O Absurdo (Mortal Questions)",
        frase: "Somos capazes de nos ver de fora, e a visão é cômica. Os seres humanos têm a capacidade especial de se afastar e observar a si mesmos, e as vidas às quais estão comprometidos, com um certo espanto distanciado.",
        bio: "Em seu ensaio O Absurdo; Publicado em 1971 no livro Mortal Questions, o filósofo americano Thomas Nagel aborda o sentido (ou a falta dele) na vida humana, não com desespero, mas com uma pitada de humor. Enquanto outros pensadores, como Albert Camus, veem o absurdo como um conflito trágico entre o desejo humano por significado e o silêncio indiferente do universo, Nagel propõe outra perspectiva:Segundo ele, o que torna a vida absurda é a nossa capacidade única de nos levarmos a sério e, ao mesmo tempo, de duvidarmos profundamente da importância de tudo que fazemos.",
        livro: "O Absurdo (Mortal Questions) - Thomas Nagel"
    }
];

const container = document.getElementById('autores-container');

autores.forEach(autor => {
    const card = document.createElement('div');
    card.className = 'card';

    // Cria o HTML do cartão, com o conteúdo inicializado como escondido dentro de .card-content
    card.innerHTML = `
        <h2>${autor.nome}</h2>
        <div class="card-content content-hidden">
            <blockquote>“${autor.frase}”</blockquote>
            <p>${autor.bio}</p>
            <p><strong>Livro:</strong> ${autor.livro}</p>
        </div>`;

    container.appendChild(card);

    const title = card.querySelector('h2');
    const content = card.querySelector('.card-content');

    title.addEventListener('click', () => {
        content.classList.toggle('content-hidden');
        content.classList.toggle('content-visible');
    });
});
