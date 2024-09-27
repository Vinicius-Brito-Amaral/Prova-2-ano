const respostasCorretas = {
    q1: 'B',
    q2: 'C',
    q3: 'B',
    q4: 'D',
    q5: 'A',
    q6: 'C',
    q7: 'C',
    q8: 'A'
};

function iniciarProva() {
    document.getElementById("inicio").style.display = "none";
    document.getElementById("prova").style.display = "block";
}

function encerrarProva() {
    const form = document.getElementById('quizForm');
    let score = 0;
    let total = Object.keys(respostasCorretas).length;
    let gabarito = '<h3>Gabarito:</h3><ul>';

    for (let i = 1; i <= total; i++) {
        let resposta = form['q' + i].value;
        if (resposta === respostasCorretas['q' + i]) {
            score++;
            gabarito += `<li>Questão ${i}: Correta (Resposta: ${respostasCorretas['q' + i]})</li>`;
        } else {
            gabarito += `<li>Questão ${i}: Incorreta (Sua resposta: ${resposta}, Correta: ${respostasCorretas['q' + i]})</li>`;
        }
    }

    gabarito += '</ul>';
    document.getElementById('prova').style.display = 'none';
    document.getElementById('resultado').style.display = 'block';
    document.getElementById('score').textContent = `Você acertou ${score} de ${total} questões.`;
    document.getElementById('gabarito').innerHTML = gabarito;
}
