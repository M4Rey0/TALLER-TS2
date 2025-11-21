import { series } from './data.js';
const seriesTbody = document.getElementById('series');
const promedioTemporadas = document.getElementById("promedio-temporadas");
renderSeriesInTable(series);
promedioTemporadas.innerHTML = `${getAverageSeasons(series)}`;
function renderSeriesInTable(series) {
    series.forEach((c) => {
        let trElement = document.createElement("tr");
        trElement.innerHTML = `<td>${c.id}</td>
                           <td><a href="${c.webpage}" target="_blank">${c.name}</a></td>
                           <td>${c.channel}</td>
                           <td>${c.seasons}</td>`;
        seriesTbody.appendChild(trElement);
    });
}
function getAverageSeasons(series) {
    let totalSeasons = 0;
    series.forEach((serie) => totalSeasons = totalSeasons + serie.seasons);
    return totalSeasons / series.length;
}
