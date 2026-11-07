document.addEventListener('DOMContentLoaded', function () {

  const calendarEl = document.getElementById('calendar');
  if (!calendarEl) return;

  let tooltip;

  // =====================================================
  // EVENTOS
  // =====================================================

  const eventos = [

        // ========= NOVEMBRO 2026 ========== //
        // 1ª Semana (01/11/2026 - 07/11/2026)
        {title: 'Missa - Solenidade de Todos os Santos', date: '2026-11-01', display: 'list-item',
        extendedProps: {
          horario: '7h, 9h, 10h30 e 19h', local: 'Matriz e Comunidades'}},
        
        {title: 'Missa - Celebração de Todos os Fiéis Defuntos', date: '2026-11-02T09:00:00', display: 'list-item',
        extendedProps: {
          horario: '9h', local: 'Matriz'}},
        
        {title: 'Legião de Maria', date: '2026-11-02T14:30:00', display: 'list-item',
        extendedProps: {
          horario: '14h30', local: 'Matriz'}},

        {title: 'Grupo de Oração', date: '2026-11-03T19:30:00', display: 'list-item',
        extendedProps: {
          horario: '19h30', local: 'Matriz'}},
        
        {title: 'Confissão', date: '2026-11-04T14:30:00', display: 'list-item',
        extendedProps: {
          horario: '14h30', local: 'Matriz'}},
        
        {title: 'Missa - Votiva a São José', date: '2026-11-04T19:30:00', display: 'list-item',
        extendedProps: {
          horario: '19h30', local: 'Matriz'}},
        
        {title: 'Confissão', date: '2026-11-05T09:00:00', display: 'list-item',
        extendedProps: {
          horario: '09h30', local: 'Matriz'}},

        {title: 'Confissão', date: '2026-11-06T14:30:00', display: 'list-item',
        extendedProps: {
          horario: '14h30', local: 'Matriz'}},
        
        {title: 'Missa - Votiva ao Sagrado Coração de Jesus', date: '2026-11-06T19:30:00', display: 'list-item',
        extendedProps: {
          horario: '19h30', local: 'Matriz'}},
        
        {title: 'Missa - 32º Domingo do Tempo Comum', date: '2026-11-07T18:00:00', display: 'list-item',
        extendedProps: {
          horario: '18h', local: 'Matriz'}},

        // 2ª Semana (08/11/2026 - 14/11/2026)
        {title: 'Missa - 32º Domingo do Tempo Comum', date: '2026-11-08T18:00:00', display: 'list-item',
        extendedProps: {
          horario: '7h, 9h, 10h30 e 19h', local: 'Matriz e Comunidades'}},

        {title: 'Legião de Maria', date: '2026-11-09T14:30:00', display: 'list-item',
        extendedProps: {
          horario: '14h30', local: 'Matriz'}},

        {title: 'Grupo de Oração', date: '2026-11-10T19:30:00', display: 'list-item',
        extendedProps: {
          horario: '19h30', local: 'Matriz'}},

        {title: 'Missa', date: '2026-11-11T19:30:00', display: 'list-item',
        extendedProps: {
          horario: '19h30', local: 'Matriz'}},

        {title: 'Confissão', date: '2026-11-12T09:00:00', display: 'list-item',
        extendedProps: {
          horario: '09h30', local: 'Matriz'}},

        {title: 'Confissão', date: '2026-11-13T14:30:00', display: 'list-item',
        extendedProps: {
          horario: '14h30', local: 'Matriz'}},

        {title: 'Missa - 33º Domingo do Tempo Comum', date: '2026-11-14T18:00:00', display: 'list-item',
        extendedProps: {
          horario: '18h', local: 'Matriz'}},
  
        // 3ª Semana (15/11/2026 - 21/11/2026)
        {title: 'Missa - 33º Domingo do Tempo Comum', date: '2026-11-15', display: 'list-item',
        extendedProps: {
          horario: '7h, 9h, 10h30 e 19h', local: 'Matriz e Comunidades'}},

        {title: 'Legião de Maria', date: '2026-11-16T14:30:00', display: 'list-item',
        extendedProps: {
          horario: '14h30', local: 'Matriz'}},

        {title: 'Grupo de Oração', date: '2026-11-17T19:30:00', display: 'list-item',
        extendedProps: {
          horario: '19h30', local: 'Matriz'}},

        {title: 'Missa', date: '2026-11-18T19:30:00', display: 'list-item',
        extendedProps: {
          horario: '09h30', local: 'Matriz'}},
        
        {title: 'Confissão', date: '2026-11-19T09:00:00', display: 'list-item',
        extendedProps: {
          horario: '09h30', local: 'Matriz'}},

        {title: 'Missa Com Unção dos Enfermos', date: '2026-11-20T15:00:00', display: 'list-item',
        extendedProps: {
          horario: '15h', local: 'Matriz'}},

        {title: 'Missa - Solenidade do Nosso Senhor Jesus Cristo, Rei do Universo', date: '2026-11-21T18:00:00', display: 'list-item',
        extendedProps: {
          horario: '18h', local: 'Matriz'}},
          
        // 4ª Semana (22/11/2026 - 28/11/2026)
        {title: 'Missa - Solenidade do Nosso Senhor Jesus Cristo, Rei do Universo', date: '2026-11-22', display: 'list-item',
        extendedProps: {
          horario: '7h, 9h, 10h30 e 19h', local: 'Matriz e Comunidades'}},

        {title: 'Legião de Maria', date: '2026-11-23T14:30:00', display: 'list-item',
        extendedProps: {
          horario: '14h30', local: 'Matriz'}},

        {title: 'Grupo de Oração', date: '2026-11-24T19:30:00', display: 'list-item',
        extendedProps: {
          horario: '19h30', local: 'Matriz'}},

        {title: 'Missa', date: '2026-11-25T19:30:00', display: 'list-item',
        extendedProps: {
          horario: '09h30', local: 'Matriz'}},
        
        {title: 'Confissão', date: '2026-11-26T09:00:00', display: 'list-item',
        extendedProps: {
          horario: '09h30', local: 'Matriz'}},

        {title: 'Confissão', date: '2026-11-27T14:30:00', display: 'list-item',
        extendedProps: {
          horario: '14h30', local: 'Matriz'}},

        {title: 'Missa - 1º Domingo do Advento', date: '2026-11-28T18:00:00', display: 'list-item',
        extendedProps: {
          horario: '18h', local: 'Matriz'}},
            
        // 5ª Semana (29/11/2026 - 05/12/2026)
        {title: 'Missa - 1º Domingo do Advento', date: '2026-11-29', display: 'list-item',
        extendedProps: {
          horario: '7h, 9h, 10h30 e 19h', local: 'Matriz e Comunidades'}},

        {title: 'Legião de Maria', date: '2026-11-30T14:30:00', display: 'list-item',
        extendedProps: {
          horario: '14h30', local: 'Matriz'}},

        {title: 'Grupo de Oração', date: '2026-12-01T19:30:00', display: 'list-item',
        extendedProps: {
          horario: '19h30', local: 'Matriz'}},

        {title: 'Missa', date: '2026-12-02T19:30:00', display: 'list-item',
        extendedProps: {
          horario: '09h30', local: 'Matriz'}},
        
        {title: 'Confissão', date: '2026-12-03T09:00:00', display: 'list-item',
        extendedProps: {
          horario: '09h30', local: 'Matriz'}},

        {title: 'Confissão', date: '2026-12-04T14:30:00', display: 'list-item',
        extendedProps: {
          horario: '14h30', local: 'Matriz'}},

        {title: 'Missa - 2º Domingo do Advento', date: '2026-12-05T18:00:00', display: 'list-item',
        extendedProps: {
          horario: '18h', local: 'Matriz'}},
        
  ];

  // Períodos do ano litúrgico de 2026, conforme o calendário do Brasil.
  const periodosLiturgicos = [
    { inicio: '2026-01-01', fim: '2026-01-11', cor: 'branco' }, // Tempo do Natal
    { inicio: '2026-01-12', fim: '2026-02-17', cor: 'verde' }, // Tempo Comum
    { inicio: '2026-02-18', fim: '2026-04-04', cor: 'roxo' },  // Quaresma e Semana Santa
    { inicio: '2026-04-05', fim: '2026-05-24', cor: 'branco' }, // Tempo Pascal
    { inicio: '2026-05-25', fim: '2026-11-28', cor: 'verde' }, // Tempo Comum
    { inicio: '2026-11-29', fim: '2026-12-24', cor: 'roxo' }, // Advento
    { inicio: '2026-12-25', fim: '2026-12-31', cor: 'branco' } // Tempo do Natal
  ];

  // Celebrações próprias prevalecem sobre a cor geral do tempo litúrgico.
  // Azul e dourado são destaques visuais solicitados para o site.
  const coresLiturgicasPorData = {
    '2026-11-01': 'dourado',  // Todos os Santos
    '2026-11-02': 'preto',    // Fiéis Defuntos (Finados)
    '2026-11-04': 'branco',   // Votiva a São José
    '2026-11-06': 'vermelho', // Votiva ao Sagrado Coração de Jesus
    '2026-11-21': 'dourado',  // Cristo Rei
    '2026-11-22': 'dourado',  // Cristo Rei
    '2026-11-29': 'roxo',     // Primeiro Domingo do Advento
    '2026-12-08': 'azul',     // Imaculada Conceição
    '2026-12-12': 'rosa',     // Domingo Gaudete
    '2026-12-13': 'rosa',     // Domingo Gaudete
    '2026-12-24': 'dourado',  // Véspera do Natal do Senhor
    '2026-12-25': 'dourado',  // Natal do Senhor
    '2026-12-26': 'dourado',  // Sagrada Família
    '2026-12-27': 'dourado',  // Sagrada Família
  };

  function corLiturgica(data) {
    if (coresLiturgicasPorData[data]) return coresLiturgicasPorData[data];

    const periodo = periodosLiturgicos.find(({ inicio, fim }) =>
      data >= inicio && data <= fim
    );

    return periodo?.cor || null;
  }

  function dataISO(data) {
    const ano = data.getFullYear();
    const mes = String(data.getMonth() + 1).padStart(2, '0');
    const dia = String(data.getDate()).padStart(2, '0');
    return `${ano}-${mes}-${dia}`;
  }

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

      const cor = corLiturgica(data);
      card.className = `card ${cor ? `tabela-${cor}` : 'tabela-dourado'}`;

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

    // Colore o fundo de cada dia segundo o tempo litúrgico.
    dayCellClassNames: function (info) {
      const cor = corLiturgica(dataISO(info.date));
      return cor ? [`dia-liturgico-${cor}`] : [];
    },

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