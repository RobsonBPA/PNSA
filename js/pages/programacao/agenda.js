document.addEventListener('DOMContentLoaded', function () {

  const calendarEl = document.getElementById('calendar');
  if (!calendarEl) return;

  let tooltip;

  // =====================================================
  // EVENTOS
  // =====================================================

  const eventos = [

        // ========= JULHO 2026 ========== //
        // 1ª Semana (28/06/2026 - 04/07/2026)
        {title: 'Missa - Solenidade de São Pedro e São Paulo, Apóstolos', date: '2026-06-28', display: 'list-item',
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
          horario: '18h', local: 'Matriz'}},

        // 2ª Semana (05/07/2026 - 11/07/2026)
        {title: 'Missa', date: '2026-07-05', display: 'list-item',
        extendedProps: {
          horario: '7h, 9h, 10h30 e 19h', local: 'Matriz e Comunidades'}},
        {title: 'Legião de Maria', date: '2026-07-06T14:30:00', display: 'list-item',
        extendedProps: {
          horario: '14h30', local: 'Matriz'}},
        {title: 'Grupo de Oração', date: '2026-07-06T19:30:00', display: 'list-item',
        extendedProps: {
          horario: '19h30', local: 'Matriz'}},
        {title: 'Missa', date: '2026-07-08T19:30:00', display: 'list-item',
        extendedProps: {
          horario: '19h30', local: 'Matriz'}},
        {title: 'Confissão', date: '2026-07-09T09:30:00', display: 'list-item',
        extendedProps: {
          horario: '09h30', local: 'Matriz'}},
        {title: 'Confissão', date: '2026-07-10T14:30:00', display: 'list-item',
        extendedProps: {
          horario: '14h30', local: 'Matriz'}},
        {title: 'Confissão', date: '2026-07-11T09:30:00', display: 'list-item',
        extendedProps: {
          horario: '09h30', local: 'Matriz'}},
        {title: 'Missa', date: '2026-07-11T18:00:00', display: 'list-item',
        extendedProps: {
          horario: '18h', local: 'Matriz'}},

        // 3ª Semana (12/07/2026 - 18/07/2026)
        {title: 'Missa', date: '2026-07-12', display: 'list-item',
        extendedProps: {
          horario: '7h, 9h, 10h30 e 19h', local: 'Matriz e Comunidades'}},
        {title: 'Legião de Maria', date: '2026-07-13T14:30:00', display: 'list-item',
        extendedProps: {
          horario: '14h30', local: 'Matriz'}},
        {title: 'Grupo de Oração', date: '2026-07-13T19:30:00', display: 'list-item',
        extendedProps: {
          horario: '19h30', local: 'Matriz'}},
        {title: 'Missa', date: '2026-07-15T19:30:00', display: 'list-item',
        extendedProps: {
          horario: '09h30', local: 'Matriz'}},
        {title: 'Confissão', date: '2026-07-16T09:30:00', display: 'list-item',
        extendedProps: {
          horario: '09h30', local: 'Matriz'}},
        {title: 'Confissão', date: '2026-07-17T14:30:00', display: 'list-item',
        extendedProps: {
          horario: '14h30', local: 'Matriz'}},
        {title: 'Confissão', date: '2026-07-18T09:00:00', display: 'list-item',
        extendedProps: {
          horario: '09h30', local: 'Matriz'}},
        {title: 'Missa', date: '2026-07-18T18:00:00', display: 'list-item',
        extendedProps: {
          horario: '18h', local: 'Matriz'}},
        
        // 4ª Semana (19/07/2026 - 25/07/2026)
        {title: 'Missa', date: '2026-07-19', display: 'list-item',
        extendedProps: {
          horario: '7h, 9h, 10h30 e 19h', local: 'Matriz e Comunidades'}},
        {title: 'Legião de Maria', date: '2026-07-20T14:30:00', display: 'list-item',
        extendedProps: {
          horario: '14h30', local: 'Matriz'}},
        {title: 'Grupo de Oração', date: '2026-07-20T19:30:00', display: 'list-item',
        extendedProps: {
          horario: '19h30', local: 'Matriz'}},
        {title: 'Missa', date: '2026-07-22T19:30:00', display: 'list-item',
        extendedProps: {
          horario: '09h30', local: 'Matriz'}},
        {title: 'Confissão', date: '2026-07-23T09:30:00', display: 'list-item',
        extendedProps: {
          horario: '09h30', local: 'Matriz'}},
        {title: 'Confissão', date: '2026-07-24T14:30:00', display: 'list-item',
        extendedProps: {
          horario: '14h30', local: 'Matriz'}},
        {title: 'Confissão', date: '2026-07-25T09:00:00', display: 'list-item',
        extendedProps: {
          horario: '09h30', local: 'Matriz'}},
        {title: 'Missa', date: '2026-07-25T18:00:00', display: 'list-item',
        extendedProps: {
          horario: '18h', local: 'Matriz'}},
          
        // 4ª Semana (26/07/2026 - 01/08/2026)
        {title: 'Missa', date: '2026-07-26', display: 'list-item',
        extendedProps: {
          horario: '7h, 9h, 10h30 e 19h', local: 'Matriz e Comunidades'}},
        {title: 'Legião de Maria', date: '2026-07-27T14:30:00', display: 'list-item',
        extendedProps: {
          horario: '14h30', local: 'Matriz'}},
        {title: 'Grupo de Oração', date: '2026-07-27T19:30:00', display: 'list-item',
        extendedProps: {
          horario: '19h30', local: 'Matriz'}},
        {title: 'Missa', date: '2026-07-29T19:30:00', display: 'list-item',
        extendedProps: {
          horario: '09h30', local: 'Matriz'}},
        {title: 'Confissão', date: '2026-07-30T09:30:00', display: 'list-item',
        extendedProps: {
          horario: '09h30', local: 'Matriz'}},
        {title: 'Confissão', date: '2026-07-31T14:30:00', display: 'list-item',
        extendedProps: {
          horario: '14h30', local: 'Matriz'}},
        {title: 'Confissão', date: '2026-08-01T09:00:00', display: 'list-item',
        extendedProps: {
          horario: '09h30', local: 'Matriz'}},
        {title: 'Missa', date: '2026-08-01T18:00:00', display: 'list-item',
        extendedProps: {
          horario: '18h', local: 'Matriz'}},

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