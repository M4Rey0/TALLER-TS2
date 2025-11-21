import { Serie } from './serie.js';
import { series } from './data.js';

const seriesTbody: HTMLElement = document.getElementById('series')!;
const promedioTemporadas: HTMLElement = document.getElementById("promedio-temporadas")!;

const cardContainer: HTMLElement = document.getElementById('serie-detail-card')!;

renderSeriesInTable(series);
promedioTemporadas.innerHTML = `${getAverageSeasons(series)}`;

function renderSeriesInTable(series: Serie[]): void {
  series.forEach((c) => {
    let trElement = document.createElement("tr");
    
    
    trElement.innerHTML = `
      <td class="font-weight-bold">${c.id}</td>
      <td style="color: #007bff; cursor: pointer;" class="serie-name">${c.name}</td> 
      <td>${c.channel}</td>
      <td>${c.seasons}</td>`;
      
    
    const nameCell = trElement.querySelector('.serie-name') as HTMLElement;
    
    
    nameCell.onclick = () => showSerieDetail(c);

    seriesTbody.appendChild(trElement);
  });
}

function getAverageSeasons(series: Serie[]): number {
  let totalSeasons: number = 0;
  series.forEach((serie) => totalSeasons = totalSeasons + serie.seasons);
  return totalSeasons / series.length;
}


function showSerieDetail(serie: Serie): void {
  cardContainer.innerHTML = `
    <div class="card" style="width: 100%;">
      <img class="card-img-top" src="${serie.imageUrl}" alt="${serie.name}">
      <div class="card-body">
        <h5 class="card-title">${serie.name}</h5>
        <p class="card-text">${serie.description}</p>
        <a href="${serie.webpage}" target="_blank" class="btn btn-primary">Ver página web</a>
      </div>
    </div>
  `;
}