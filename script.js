const OPTIONS = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': 'd1ad439d65mshd5f7491f58bc493p1f3c33jsn7c9aa7f59c17',
    'x-rapidapi-host': 'ip-lookup-threat-detection-api.p.rapidapi.com'
  }
};

const fetchIpInfo = ip => {
  return fetch(`https://ip-lookup-threat-detection-api.p.rapidapi.com/${ip}`, OPTIONS)
    .then(res => res.json())
    .catch(err => console.error(err));
};

const $ = selector => document.querySelector(selector);

const $form = $('#form');
const $input = $('#input');
const $submit = $('#submit');
const $results = $('#results');

// Función para verificar si la IP es privada
function isPrivateIP(ip) {
  const blocks = ip.split('.').map(Number);
  return (
    (blocks[0] === 10) ||
    (blocks[0] === 172 && blocks[1] >= 16 && blocks[1] <= 31) ||
    (blocks[0] === 192 && blocks[1] === 168)
  );
}

$form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const { value } = $input;
  if (!value) return;

  $submit.setAttribute('disabled', '');
  $submit.setAttribute('aria-busy', 'true');

  // Ocultamos los resultados al iniciar una búsqueda
  $results.style.display = 'none';

  // Limpiamos cualquier resultado anterior
  $results.innerHTML = '';

  // Mensaje de espera
  const loadingMessage = document.createElement('p');
  loadingMessage.textContent = 'Consultando información... esto puede tomar algunos segundos.';
  $results.appendChild(loadingMessage);
  $results.style.display = 'block';

  // Setear un temporizador de 40 segundos
  const timeout = setTimeout(() => {
    loadingMessage.textContent = 'La IP parece pertenecer a una red interna, no se puede obtener más información. Por favor, asegúrese de que la IP es pública.';
  }, 40000);

  try {
    const ipInfo = await fetchIpInfo(value);
    clearTimeout(timeout); // Limpiar el temporizador si la solicitud tiene éxito

    if (ipInfo) {
      // Verificamos si la IP es privada
      const isPrivate = isPrivateIP(value);

      // Mostrar resultados en una tabla
      const tableHTML = `
        <h2>Información de la IP: ${ipInfo.location.ip}</h2>
        <p>¿Es esta IP privada? ${isPrivate ? 'Sí' : 'No'}</p>
        <table>
          <thead>
            <tr>
              <th>Clave</th>
              <th>Valor</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>IP</td>
              <td>${ipInfo.location.ip}</td>
            </tr>
            <tr>
              <td>Continente</td>
              <td>${ipInfo.location.continent}</td>
            </tr>
            <tr>
              <td>País</td>
              <td>${ipInfo.location.country} ${ipInfo.location.flag.emoji}</td>
            </tr>
            <tr>
              <td>Ciudad</td>
              <td>${ipInfo.location.city}</td>
            </tr>
            <tr>
              <td>Organización</td>
              <td>${ipInfo.organization.orgname}</td>
            </tr>
            <tr>
              <td>ASN</td>
              <td>${ipInfo.asn_details.number} (${ipInfo.asn_details.asn_org})</td>
            </tr>
            <tr>
              <td>Riesgo ASN</td>
              <td>${ipInfo.asn_details.risk_score}</td>
            </tr>
            <tr>
              <td>VPN</td>
              <td>${ipInfo.threat_details.vpn ? ipInfo.threat_details.vpn_name : 'No'}</td>
            </tr>
            <tr>
              <td>Abuso Email</td>
              <td>${ipInfo.abuse_reporting.email}</td>
            </tr>
            <tr>
              <td>Zona horaria</td>
              <td>${ipInfo.timezone.timezone}</td>
            </tr>
            <tr>
              <td>Hora local</td>
              <td>${ipInfo.timezone.local_time}</td>
            </tr>
          </tbody>
        </table>
      `;
      $results.innerHTML = tableHTML;

      // Mostramos el área de resultados
      $results.style.display = 'block';
    }
  } catch (error) {
    clearTimeout(timeout); // Limpiar el temporizador si ocurre un error

    loadingMessage.textContent = 'No se pudo obtener la información. Por favor, intente nuevamente más tarde o asegúrese de que la IP es válida.';
  }

  $submit.removeAttribute('disabled');
  $submit.removeAttribute('aria-busy');
});
