document.addEventListener('DOMContentLoaded', function () {
  const calendarEl = document.getElementById('calendar');
  if (!calendarEl) return;

  let tooltip;

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

    events: [

      // ========= MAIO 2026 ========== //
        // 1ª Semana (26/04/2026 - 02/05/2026)
        {title: 'Santa Missa', date: '2026-04-26', display: 'list-item',
          extendedProps: {
          horario: '7h, 9h, 10h30 e 19h', local: 'Matriz e Comunidades'}},
        {title: 'Legião de Maria', date: '2026-04-27T14:30:00', display: 'list-item',
          extendedProps: {
          horario: '14h30', local: 'Matriz'}},
        {title: 'Grupo de Oração', date: '2026-04-27T19:30:00', display: 'list-item',
          extendedProps: {
          horario: '19h30', local: 'Matriz'}},
        {title: 'Santa Missa', date: '2026-04-29T19:30:00', display: 'list-item',
          extendedProps: {
          horario: '19h30', local: 'Matriz'}},
        {title: 'Confissão', date: '2026-04-30T09:30:00', display: 'list-item',
          extendedProps: {
          horario: '09h30', local: 'Matriz'}},
        {title: 'Confissão', date: '2026-04-31T14:30:00', display: 'list-item',
          extendedProps: {
          horario: '14h30', local: 'Matriz'}},
        {title: 'Santa Missa - São José Operário', date: '2026-05-01T19:30:00', display: 'list-item',
          extendedProps: {
          horario: '19h30', local: 'Matriz'}},
        {title: 'Santa Missa', date: '2026-05-02T18:00:00', display: 'list-item',
          extendedProps: {
          horario: '18h', local: 'Matriz'}},

          // 2ª Semana (03/05/2026 - 09/05/2026)
          {title: 'Santa Missa', date: '2026-05-03', display: 'list-item',
          extendedProps: {
            horario: '7h, 9h, 10h30 e 19h', local: 'Matriz e Comunidades'}},
          {title: 'Legião de Maria', date: '2026-05-04T14:30:00', display: 'list-item',
          extendedProps: {
            horario: '14h30', local: 'Matriz'}},
          {title: 'Grupo de Oração', date: '2026-05-04T19:30:00', display: 'list-item',
          extendedProps: {
            horario: '19h30', local: 'Matriz'}},
          {title: 'Santa Missa', date: '2026-05-06T19:30:00', display: 'list-item',
          extendedProps: {
            horario: '19h30', local: 'Matriz'}},
          {title: 'Confissão', date: '2026-05-07T09:30:00', display: 'list-item',
          extendedProps: {
            horario: '09h30', local: 'Matriz'}},
          {title: 'Confissão', date: '2026-05-08T14:30:00', display: 'list-item',
          extendedProps: {
            horario: '14h30', local: 'Matriz'}},
          {title: 'Santa Missa', date: '2026-05-09T18:00:00', display: 'list-item',
          extendedProps: {
            horario: '18h', local: 'Matriz'}},

          // 3ª Semana (10/05/2026 - 16/05/2026)
          {title: 'Santa Missa', date: '2026-05-10', display: 'list-item',
          extendedProps: {
            horario: '7h, 9h, 10h30 e 19h', local: 'Matriz e Comunidades'}},
          {title: 'Legião de Maria', date: '2026-05-11T14:30:00', display: 'list-item',
          extendedProps: {
            horario: '14h30', local: 'Matriz'}},
          {title: 'Grupo de Oração', date: '2026-05-11T19:30:00', display: 'list-item',
          extendedProps: {
            horario: '19h30', local: 'Matriz'}},
          {title: 'Santa Missa', date: '2026-05-13T19:30:00', display: 'list-item',
          extendedProps: {
            horario: '19h30', local: 'Matriz'}},
          {title: 'Confissão', date: '2026-05-14T09:30:00', display: 'list-item',
          extendedProps: {
            horario: '09h30', local: 'Matriz'}},
          {title: 'Confissão', date: '2026-05-15T14:30:00', display: 'list-item',
          extendedProps: {
            horario: '14h30', local: 'Matriz'}},
          {title: 'Santa Missa', date: '2026-05-16T18:00:00', display: 'list-item',
          extendedProps: {
            horario: '18h', local: 'Matriz'}},

          // 4ª Semana (17/05/2026 - 23/05/2026)
          {title: 'Santa Missa - Solenidade da Ascensão do Senhor', date: '2026-05-17', display: 'list-item',
          extendedProps: {
            horario: '7h, 9h, 10h30 e 19h', local: 'Matriz e Comunidades'}},
          {title: 'Legião de Maria', date: '2026-05-18T14:30:00', display: 'list-item',
          extendedProps: {
            horario: '14h30', local: 'Matriz'}},
          {title: 'Grupo de Oração', date: '2026-05-18T19:30:00', display: 'list-item',
          extendedProps: {
            horario: '19h30', local: 'Matriz'}},
          {title: 'Santa Missa', date: '2026-05-20T19:30:00', display: 'list-item',
          extendedProps: {
            horario: '19h30', local: 'Matriz'}},
          {title: 'Confissão', date: '2026-05-21T09:30:00', display: 'list-item',
          extendedProps: {
            horario: '09h30', local: 'Matriz'}},
          {title: 'Confissão', date: '2026-05-22T14:30:00', display: 'list-item',
          extendedProps: {
            horario: '14h30', local: 'Matriz'}},
          {title: 'Santa Missa', date: '2026-05-23T18:00:00', display: 'list-item',
          extendedProps: {
            horario: '18h00', local: 'Matriz'}},

          // 5ª Semana (24/05/2026 - 30/05/2026)
          {title: 'Santa Missa', date: '2026-05-24', display: 'list-item',
          extendedProps: {
            horario: '7h, 9h, 10h30 e 19h', local: 'Matriz e Comunidades'}},
          {title: 'Legião de Maria', date: '2026-05-25T14:30:00', display: 'list-item',
          extendedProps: {
            horario: '14h30', local: 'Matriz'}},
          {title: 'Grupo de Oração', date: '2026-05-25T19:30:00', display: 'list-item',
          extendedProps: {
            horario: '19h30', local: 'Matriz'}},
          {title: 'Santa Missa', date: '2026-05-27T19:30:00', display: 'list-item',
          extendedProps: {
            horario: '19h30', local: 'Matriz'}},
          {title: 'Confissão', date: '2026-05-28T09:30:00', display: 'list-item',
          extendedProps: {
            horario: '09h30', local: 'Matriz'}},
          {title: 'Confissão', date: '2026-05-29T14:30:00', display: 'list-item',
          extendedProps: {
            horario: '14h30', local: 'Matriz'}},
          {title: 'Santa Missa', date: '2026-05-30T18:00:00', display: 'list-item',
          extendedProps: {
            horario: '18h00', local: 'Matriz'}},

          // 6ª Semana (31/05/2026 - 06/06/2026)
          {title: 'Santa Missa', date: '2026-05-31', display: 'list-item',
          extendedProps: {
            horario: '7h, 9h, 10h30 e 19h', local: 'Matriz e Comunidades'}},
          {title: 'Legião de Maria', date: '2026-06-01T14:30:00', display: 'list-item',
          extendedProps: {
            horario: '14h30', local: 'Matriz'}},
          {title: 'Grupo de Oração', date: '2026-06-01T19:30:00', display: 'list-item',
          extendedProps: {
            horario: '19h30', local: 'Matriz'}},
          {title: 'Santa Missa', date: '2026-06-03T19:30:00', display: 'list-item',
          extendedProps: {
            horario: '19h30', local: 'Matriz'}},
          {title: 'Confissão', date: '2026-06-04T09:30:00', display: 'list-item',
          extendedProps: {
            horario: '09h30', local: 'Matriz'}},
          {title: 'Confissão', date: '2026-06-05T14:30:00', display: 'list-item',
          extendedProps: {
            horario: '14h30', local: 'Matriz'}},
          {title: 'Santa Missa', date: '2026-06-06T18:00:00', display: 'list-item',
          extendedProps: {
            horario: '18h00', local: 'Matriz'}},
    ],

    eventMouseEnter: function (info) {
      tooltip = document.createElement('div');
      tooltip.className = 'tooltip-evento';

      tooltip.innerHTML = `
        <strong>${info.event.title}</strong>
        <div class="linha">
          <i class="fas fa-clock"></i> ${info.event.extendedProps.horario || '—'}
        </div>
        <div class="linha">
          <i class="fas fa-map-marker-alt"></i> ${info.event.extendedProps.local || '—'}
        </div>
      `;

      document.body.appendChild(tooltip);

      // Posiciona inicialmente
      moveTooltip(info.jsEvent);

      // Atualiza posição com o mouse
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

  function moveTooltip(e) {
    if (!tooltip) return;
    tooltip.style.top = (e.pageY + 15) + 'px';
    tooltip.style.left = (e.pageX + 15) + 'px';
  }

  calendar.render();
});
