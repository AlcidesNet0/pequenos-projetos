$(function () {
  // O modal só vai aparecer no primeiro carregamento da página/após o botão de reinício ser clicado;
  let showModal = sessionStorage.getItem("showModal");
  if (showModal === null) {
    sessionStorage.setItem("showModal", 1);
    $("#staticBackdrop").modal("show");
  }

  // Dentro do modal, o valor do input dos jogadores é capturado e inserido na página após o clique no botão "Vamos ao jogo!";
  $(".namingPlayersButton").click(function () {
    let player1Name = $(".player1Name").val();
    let player2Name = $(".player2Name").val();

    sessionStorage.setItem("player1Name", player1Name);
    sessionStorage.setItem("player2Name", player2Name);

    $(".player1").html(player1Name);
    $(".player2").html(player2Name);
    turnMessage(); // Essa função é invocada para que a primeira vez do jogador seja exibida na página;
  });

  turnMessage(); // Aqui ela é chamada para que a mensagem continue sendo exibida após um novo jogo;

  // As duas próximas funções lêem o nome dos jogadores e exibem em uma 'div' caso haja um resultado vencedor para um deles;
  function resultadoVerde() {
    let player1Name = sessionStorage.getItem("player1Name");
    vencedor_verde += `<span class= 'text-success fs-3 fw-bold'>${player1Name}</span> VENCEU!</div>`;
    $("#result").html(vencedor_verde);
  }

  function resultadoAmarelo() {
    let player2Name = sessionStorage.getItem("player2Name");
    vencedor_amarelo += `<span class= 'text-warning fs-3 fw-bold'>${player2Name}</span> VENCEU!</div>`;
    $("#result").html(vencedor_amarelo);
  }

  // Determina de quem é a vez de jogar e a sua alternância;
  let vezDeQuem = () => (playerTime == 0 ? (playerTime = 1) : (playerTime = 0));

  // Exibe a mensagem de quem é o próximo a jogar;
  function turnMessage() {
    let player1Name = sessionStorage.getItem("player1Name");
    let player2Name = sessionStorage.getItem("player2Name");

    let vezDoVerde = `<div class='container text-center pt-2 mt-2 text-dark fs-3 fw-bold'>
                    Agora é a vez de <span class='text-success fs-3 fw-bold'>${player1Name}</span> jogar!</div>`;
    let vezDoAmarelo = `<div class='container text-center pt-2 mt-2 text-dark fs-3 fw-bold'>
                      Agora é a vez de <span class='text-warning fs-3 fw-bold'>${player2Name}</span> jogar!</div>`;

    playerTime == 0 // Garante a alternância da vez;
      ? $(".playersTurnMessage").html(vezDoVerde)
      : $(".playersTurnMessage").html(vezDoAmarelo);
  }

  // Molde que checa se houve um vencedor, comparando as possibilidades de combinações de vitória com os quadrados clicados pelo jogador;
  let checker = (arr, target) => target.every((v) => arr.includes(v));

  // Local onde a função 'checker()' será utilizada, tanto para o símbolo X, quanto para o símbolo O;
  function vitoria(corA, corB) {
    combinacoes.forEach((combinacao) => {
      if (checker(corA, combinacao)) {
        resultadoVerde(); // Em caso de vitória do símbolo X (verde), a mensagem de vencedor é exibida;

        $(".playersTurnMessage").empty(); // A mensagem de quem é a vez de jogar deixa de aparecer;

        sessionStorage.setItem("countVerde", countVerde + 1);
        $(".green_score").html(countVerde); // Ao passo que a quantidade de vitórias para esse jogador é incrementada;

        gameOver = true; // O valor de gameOver é setado para 'true', afim de não exibir o retorno da função 'isDraw()';

        $(".quadrado").off("click"); // Após o fim da partida, nenhum quadrado disponível será clicado;
      }
      if (checker(corB, combinacao)) {
        resultadoAmarelo();

        $(".playersTurnMessage").empty();

        sessionStorage.setItem("countAmarelo", countAmarelo + 1);
        $(".yellow_score").html(countAmarelo);

        gameOver = true;

        $(".quadrado").off("click");
      }
      isDraw(); // A função é invocada caso nenhuma das opções acima seja estabelecida;
    });
  }

  // Função que checa se houve um empate.
  // Caso os 9 quadrados tenham sido clicados e não tenha ocorrido um vencedor (gameOver == false), a mensagem é exibida;
  function isDraw() {
    if (empate.length == 9 && gameOver == false) {
      $("#result").html(drawMessage);
      $(".playersTurnMessage").empty();
    }
  }

  // Captura o 'id' dos quadrados clicados e armazena em arrays para as funções 'vitoria()' e 'isDraw';
  // Insere os símbolos nos quadrados clicados;
  function handleMove(event) {
    let id = Number($(event.currentTarget).attr("id"));
    $(event.currentTarget).html(simbolos[playerTime]);
    jogo[playerTime].push(id);
    empate.push(id);
  }

  // Função PRINCIPAL, que captura o evento 'click' nos quadrados e invoca as funções que foram declaradas;
  $(function () {
    $(".quadrado").one("click", function (event) {
      handleMove(event);
      vezDeQuem();
      turnMessage();
      vitoria(verde, amarelo);
    });
  });

  // Declaração e invocação da função para que continue exibindo o nome dos jogadores após um novo jogo;
  function showPlayersName() {
    let player1Name = sessionStorage.getItem("player1Name");
    let player2Name = sessionStorage.getItem("player2Name");
    $(".player1").html(player1Name);
    $(".player2").html(player2Name);
  }
  showPlayersName();

  // Obtém o valor para que continue exibindo o placar de vitórias após um novo jogo;
    let countVerde = Number(sessionStorage.getItem("countVerde")) || 0;
    let countAmarelo = Number(sessionStorage.getItem("countAmarelo")) || 0;
    $(".green_score").html(countVerde);
    $(".yellow_score").html(countAmarelo);
  

  // Captura do clique nos botões de 'Novo Jogo' e 'Reinício';
  $(".new_game").click(function () {
    location.reload();
  });
  $(".reset").click(function () {
    sessionStorage.clear(); // O placar das vitórias, assim como o nome dos jogadores, são apagados;
    location.reload();
  });
});
