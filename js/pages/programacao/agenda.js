document.addEventListener('DOMContentLoaded', function () {

  const calendarEl = document.getElementById('calendar');
  if (!calendarEl) return;

  let tooltip;

  // =====================================================
  // EVENTOS
  // =====================================================

  const eventos = [
    // ========= MAIO 2026 ========== //
        // 1ª Semana (26/04/2026 - 02/05/2026)
        {title: 'Missa', date: '2026-04-26', display: 'list-item',
          extendedProps: {
          horario: '7h, 9h, 10h30 e 19h', local: 'Matriz e Comunidades'}},
        {title: 'Legião de Maria', date: '2026-04-27T14:30:00', display: 'list-item',
          extendedProps: {
          horario: '14h30', local: 'Matriz'}},
        {title: 'Grupo de Oração', date: '2026-04-27T19:30:00', display: 'list-item',
          extendedProps: {
          horario: '19h30', local: 'Matriz'}},
        {title: 'Missa', date: '2026-04-29T19:30:00', display: 'list-item',
          extendedProps: {
          horario: '19h30', local: 'Matriz'}},
        {title: 'Confissão', date: '2026-04-30T09:30:00', display: 'list-item',
          extendedProps: {
          horario: '09h30', local: 'Matriz'}},
        {title: 'Confissão', date: '2026-04-31T14:30:00', display: 'list-item',
          extendedProps: {
          horario: '14h30', local: 'Matriz'}},
        {title: 'Missa - São José Operário', date: '2026-05-01T19:30:00', display: 'list-item',
          extendedProps: {
          horario: '19h30', local: 'Matriz'}},
        {title: 'Missa', date: '2026-05-02T18:00:00', display: 'list-item',
          extendedProps: {
          horario: '18h', local: 'Matriz'}},

          // 2ª Semana (03/05/2026 - 09/05/2026)
          {title: 'Missa', date: '2026-05-03', display: 'list-item',
          extendedProps: {
            horario: '7h, 9h, 10h30 e 19h', local: 'Matriz e Comunidades'}},
          {title: 'Legião de Maria', date: '2026-05-04T14:30:00', display: 'list-item',
          extendedProps: {
            horario: '14h30', local: 'Matriz'}},
          {title: 'Grupo de Oração', date: '2026-05-04T19:30:00', display: 'list-item',
          extendedProps: {
            horario: '19h30', local: 'Matriz'}},
          {title: 'Missa', date: '2026-05-06T19:30:00', display: 'list-item',
          extendedProps: {
            horario: '19h30', local: 'Matriz'}},
          {title: 'Confissão', date: '2026-05-07T09:30:00', display: 'list-item',
          extendedProps: {
            horario: '09h30', local: 'Matriz'}},
          {title: 'Confissão', date: '2026-05-08T14:30:00', display: 'list-item',
          extendedProps: {
            horario: '14h30', local: 'Matriz'}},
          {title: 'Missa', date: '2026-05-09T18:00:00', display: 'list-item',
          extendedProps: {
            horario: '18h', local: 'Matriz'}},

          // 3ª Semana (10/05/2026 - 16/05/2026)
          {title: 'Missa', date: '2026-05-10', display: 'list-item',
          extendedProps: {
            horario: '7h, 9h, 10h30 e 19h', local: 'Matriz e Comunidades'}},
          {title: 'Legião de Maria', date: '2026-05-11T14:30:00', display: 'list-item',
          extendedProps: {
            horario: '14h30', local: 'Matriz'}},
          {title: 'Grupo de Oração', date: '2026-05-11T19:30:00', display: 'list-item',
          extendedProps: {
            horario: '19h30', local: 'Matriz'}},
          {title: 'Missa', date: '2026-05-13T19:30:00', display: 'list-item',
          extendedProps: {
            horario: '19h30', local: 'Matriz'}},
          {title: 'Confissão', date: '2026-05-14T09:30:00', display: 'list-item',
          extendedProps: {
            horario: '09h30', local: 'Matriz'}},
          {title: 'Confissão', date: '2026-05-15T14:30:00', display: 'list-item',
          extendedProps: {
            horario: '14h30', local: 'Matriz'}},
          {title: 'Missa', date: '2026-05-16T18:00:00', display: 'list-item',
          extendedProps: {
            horario: '18h', local: 'Matriz'}},

          // 4ª Semana (17/05/2026 - 23/05/2026)
          {title: 'Missa - Solenidade da Ascensão do Senhor', date: '2026-05-17', display: 'list-item',
          extendedProps: {
            horario: '7h, 9h, 10h30 e 19h', local: 'Matriz e Comunidades'}},
          {title: 'Legião de Maria', date: '2026-05-18T14:30:00', display: 'list-item',
          extendedProps: {
            horario: '14h30', local: 'Matriz'}},
          {title: 'Grupo de Oração', date: '2026-05-18T19:30:00', display: 'list-item',
          extendedProps: {
            horario: '19h30', local: 'Matriz'}},
          {title: 'Missa', date: '2026-05-20T19:30:00', display: 'list-item',
          extendedProps: {
            horario: '19h30', local: 'Matriz'}},
          {title: 'Confissão', date: '2026-05-21T09:30:00', display: 'list-item',
          extendedProps: {
            horario: '09h30', local: 'Matriz'}},
          {title: 'Confissão', date: '2026-05-22T14:30:00', display: 'list-item',
          extendedProps: {
            horario: '14h30', local: 'Matriz'}},
          {title: 'Missa', date: '2026-05-23T18:00:00', display: 'list-item',
          extendedProps: {
            horario: '18h00', local: 'Matriz'}},

          // 5ª Semana (24/05/2026 - 30/05/2026)
          {title: 'Missa', date: '2026-05-24', display: 'list-item',
          extendedProps: {
            horario: '7h, 9h, 10h30 e 19h', local: 'Matriz e Comunidades'}},
          {title: 'Legião de Maria', date: '2026-05-25T14:30:00', display: 'list-item',
          extendedProps: {
            horario: '14h30', local: 'Matriz'}},
          {title: 'Grupo de Oração', date: '2026-05-25T19:30:00', display: 'list-item',
          extendedProps: {
            horario: '19h30', local: 'Matriz'}},
          {title: 'Missa', date: '2026-05-27T19:30:00', display: 'list-item',
          extendedProps: {
            horario: '19h30', local: 'Matriz'}},
          {title: 'Confissão', date: '2026-05-28T09:30:00', display: 'list-item',
          extendedProps: {
            horario: '09h30', local: 'Matriz'}},
          {title: 'Confissão', date: '2026-05-29T14:30:00', display: 'list-item',
          extendedProps: {
            horario: '14h30', local: 'Matriz'}},
          {title: 'Missa - Solenidade da Santíssima Trindade', date: '2026-05-30T18:00:00', display: 'list-item',
          extendedProps: {
            horario: '18h00', local: 'Matriz'}},
        
        // ========= JUNHO 2026 ========== //
        // 1ª Semana (31/05/2026 - 06/06/2026)
        {title: 'Missa - Solenidade da Santíssima Trindade', date: '2026-05-31', display: 'list-item',
          extendedProps: {
            horario: '7h, 9h, 10h30 e 19h', local: 'Matriz e Comunidades'}},
          {title: 'Legião de Maria', date: '2026-06-01T14:30:00', display: 'list-item',
          extendedProps: {
            horario: '14h30', local: 'Matriz'}},
          {title: 'Grupo de Oração', date: '2026-06-01T19:30:00', display: 'list-item',
          extendedProps: {
            horario: '19h30', local: 'Matriz'}},
          {title: 'Missa', date: '2026-06-03T19:30:00', display: 'list-item',
          extendedProps: {
            horario: '09h00', local: 'Matriz'}},
          {title: 'Missa e Procissão - Solenidade de Corpus Christi', date: '2026-06-04T09:00:00', display: 'list-item',
          extendedProps: {
            horario: '09h00', local: 'Matriz'}},
          {title: 'Confissão', date: '2026-06-05T14:30:00', display: 'list-item',
          extendedProps: {
            horario: '14h30', local: 'Matriz'}},
          {title: 'Missa', date: '2026-06-06T18:00:00', display: 'list-item',
          extendedProps: {
            horario: '18h00', local: 'Matriz'}},

        // 2ª Semana (07/06/2026 - 13/06/2026)
        {title: 'Missa', date: '2026-06-07', display: 'list-item',
          extendedProps: {
            horario: '7h, 9h, 10h30 e 19h', local: 'Matriz e Comunidades'}},
          {title: 'Legião de Maria', date: '2026-06-08T14:30:00', display: 'list-item',
          extendedProps: {
            horario: '14h30', local: 'Matriz'}},
          {title: 'Grupo de Oração', date: '2026-06-08T19:30:00', display: 'list-item',
          extendedProps: {
            horario: '19h30', local: 'Matriz'}},
          {title: 'Missa', date: '2026-06-10T19:30:00', display: 'list-item',
          extendedProps: {
            horario: '19h30', local: 'Matriz'}},
          {title: 'Confissão', date: '2026-06-11T09:30:00', display: 'list-item',
          extendedProps: {
            horario: '09h30', local: 'Matriz'}},
          {title: 'Missa - Solenidade do Sagrado Coração de Jesus', date: '2026-06-12T19:30:00', display: 'list-item',
          extendedProps: {
            horario: '19h30', local: 'Matriz'}},
          {title: 'Missa - Memória do Imaculado Coração de Maria', date: '2026-06-13T18:00:00', display: 'list-item',
          extendedProps: {
            horario: '18h00', local: 'Matriz'}},

        // 2ª Semana (14/06/2026 - 20/06/2026)
        {title: 'Missa - Solenidade da Santíssima Trindade', date: '2026-06-14', display: 'list-item',
          extendedProps: {
            horario: '7h, 9h, 10h30 e 19h', local: 'Matriz e Comunidades'}},
          {title: 'Legião de Maria', date: '2026-06-15T14:30:00', display: 'list-item',
          extendedProps: {
            horario: '14h30', local: 'Matriz'}},
          {title: 'Grupo de Oração', date: '2026-06-15T19:30:00', display: 'list-item',
          extendedProps: {
            horario: '19h30', local: 'Matriz'}},
          {title: 'Missa', date: '2026-06-17T19:30:00', display: 'list-item',
          extendedProps: {
            horario: '09h30', local: 'Matriz'}},
          {title: 'Confissão', date: '2026-06-18T09:30:00', display: 'list-item',
          extendedProps: {
            horario: '09h30', local: 'Matriz'}},
          {title: 'Confissão', date: '2026-06-19T14:30:00', display: 'list-item',
          extendedProps: {
            horario: '14h30', local: 'Matriz'}},
          {title: 'Missa', date: '2026-06-20T18:00:00', display: 'list-item',
          extendedProps: {
            horario: '18h00', local: 'Matriz'}},
        
        // 3ª Semana (21/06/2026 - 27/06/2026)
        {title: 'Missa', date: '2026-06-21', display: 'list-item',
          extendedProps: {
            horario: '7h, 9h, 10h30 e 19h', local: 'Matriz e Comunidades'}},
          {title: 'Legião de Maria', date: '2026-06-22T14:30:00', display: 'list-item',
          extendedProps: {
            horario: '14h30', local: 'Matriz'}},
          {title: 'Grupo de Oração', date: '2026-06-22T19:30:00', display: 'list-item',
          extendedProps: {
            horario: '19h30', local: 'Matriz'}},
          {title: 'Missa - Solenidade do Nascimento de São João Batista', date: '2026-06-24T19:30:00', display: 'list-item',
          extendedProps: {
            horario: '19h30', local: 'Matriz'}},
          {title: 'Confissão', date: '2026-06-25T09:30:00', display: 'list-item',
          extendedProps: {
            horario: '09h30', local: 'Matriz'}},
          {title: 'Confissão', date: '2026-06-26T14:30:00', display: 'list-item',
          extendedProps: {
            horario: '14h30', local: 'Matriz'}},
          {title: 'Missa', date: '2026-06-27T18:00:00', display: 'list-item',
          extendedProps: {
            horario: '18h00', local: 'Matriz'}},
          
        // 4ª Semana (28/06/2026 - 04/07/2026)
        {title: 'Missa', date: '2026-06-28', display: 'list-item',
          extendedProps: {
            horario: '7h, 9h, 10h30 e 19h', local: 'Matriz e Comunidades'}},
          {title: 'Legião de Maria', date: '2026-06-29T14:30:00', display: 'list-item',
          extendedProps: {
            horario: '14h30', local: 'Matriz'}},
          {title: 'Grupo de Oração', date: '2026-06-29T19:30:00', display: 'list-item',
          extendedProps: {
            horario: '19h30', local: 'Matriz'}},
          {title: 'Missa', date: '2026-07-01T19:30:00', display: 'list-item',
          extendedProps: {
            horario: '19h30', local: 'Matriz'}},
          {title: 'Confissão', date: '2026-07-02T09:30:00', display: 'list-item',
          extendedProps: {
            horario: '09h30', local: 'Matriz'}},
          {title: 'Confissão', date: '2026-07-03T14:30:00', display: 'list-item',
          extendedProps: {
            horario: '14h30', local: 'Matriz'}},
          {title: 'Missa', date: '2026-07-04T18:00:00', display: 'list-item',
          extendedProps: {
            horario: '18h00', local: 'Matriz'}},
  ];

  // =====================================================
  // PROGRAMAÇÃO SEMANAL AUTOMÁTICA
  // =====================================================

  function gerarProgramacaoSemanal() {

    const container = document.getElementById('programacao-semanal');

    if (!container) return;

    container.innerHTML = '';

    const hoje = new Date();

    // Domingo da semana atual
    const inicioSemana = new Date(hoje);
    inicioSemana.setDate(hoje.getDate() - hoje.getDay());
    inicioSemana.setHours(0, 0, 0, 0);

    // Sábado da semana atual
    const fimSemana = new Date(inicioSemana);
    fimSemana.setDate(inicioSemana.getDate() + 6);
    fimSemana.setHours(23, 59, 59, 999);

    // Filtrar eventos da semana
    const eventosSemana = eventos.filter(evento => {

      const dataEvento = new Date(evento.date);

      return dataEvento >= inicioSemana &&
             dataEvento <= fimSemana;
    });

    // Agrupar eventos por dia
    const agrupados = {};

    eventosSemana.forEach(evento => {

      const data = evento.date.split('T')[0];

      if (!agrupados[data]) {
        agrupados[data] = [];
      }

      agrupados[data].push(evento);
    });

    // Ordenar datas
    const datasOrdenadas = Object.keys(agrupados).sort();

    // Criar cards
    datasOrdenadas.forEach(data => {

      const dataObj = new Date(data + 'T00:00:00');

      const titulo = dataObj.toLocaleDateString('pt-BR', {
        weekday: 'long',
        day: '2-digit',
        month: 'long'
      });

      const card = document.createElement('article');

      card.className = 'card tabela-dourado';

      let html = `
        <h3 style="text-transform: capitalize;">
          ${titulo}
        </h3>
      `;

      agrupados[data].forEach(evento => {

        html += `
          <div class="evento">
            <strong>${evento.extendedProps.horario || '—'}</strong>
            <p>${evento.title}</p>
            <span>
              Local: ${evento.extendedProps.local || '—'}
            </span>
          </div>
        `;
      });

      card.innerHTML = html;

      container.appendChild(card);
    });

    // Caso não tenha eventos
    if (datasOrdenadas.length === 0) {

      container.innerHTML = `
        <article class="card tabela-dourado">
          <h3>Nenhum evento nesta semana</h3>
        </article>
      `;
    }
  }

  // =====================================================
  // CALENDÁRIO
  // =====================================================

  const calendar = new FullCalendar.Calendar(calendarEl, {

    initialView: 'dayGridMonth',

    locale: 'pt-br',

    height: 'auto',

    eventTimeFormat: {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    },

    buttonText: {
      today: 'Hoje'
    },

    events: eventos,

    // =================================================
    // TOOLTIP
    // =================================================

    eventMouseEnter: function (info) {

      tooltip = document.createElement('div');

      tooltip.className = 'tooltip-evento';

      tooltip.innerHTML = `
        <strong>${info.event.title}</strong>

        <div class="linha">
          <i class="fas fa-clock"></i>
          ${info.event.extendedProps.horario || '—'}
        </div>

        <div class="linha">
          <i class="fas fa-map-marker-alt"></i>
          ${info.event.extendedProps.local || '—'}
        </div>
      `;

      document.body.appendChild(tooltip);

      moveTooltip(info.jsEvent);

      document.addEventListener('mousemove', moveTooltip);
    },

    eventMouseLeave: function () {

      if (tooltip) {
        tooltip.remove();
        tooltip = null;
      }

      document.removeEventListener('mousemove', moveTooltip);
    }
  });

  // =====================================================
  // MOVER TOOLTIP
  // =====================================================

  function moveTooltip(e) {

    if (!tooltip) return;

    tooltip.style.top = (e.pageY + 15) + 'px';

    tooltip.style.left = (e.pageX + 15) + 'px';
  }

  // =====================================================
  // INICIAR
  // =====================================================

  gerarProgramacaoSemanal();

  calendar.render();

});