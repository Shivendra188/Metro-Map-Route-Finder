let metroData = {};
const positions = {
    "Dwarka Sector 21": [10, 50],
    "Dwarka Sector 8": [50, 50],
    "Dwarka Sector 9": [90, 50],
    "Dwarka Sector 10": [130, 50],
    "Dwarka Sector 11": [170, 50],
    "Dwarka Sector 12": [210, 50],
    "Dwarka Sector 13": [250, 50],
    "Dwarka Sector 14": [290, 50],
    "Dwarka": [330, 50],
    "Dwarka Mor": [370, 50],
    "Nawada": [410, 50],
    "Uttam Nagar West": [450, 50],
    "Uttam Nagar East": [490, 50],
    "Janakpuri West": [530, 80],
    "Janakpuri East": [570, 110],
    "Tilak Nagar": [610, 110],
    "Subhash Nagar": [650, 110],
    "Tagore Garden": [690, 110],
    "Rajouri Garden": [730, 80],
    "Ramesh Nagar": [770, 80],
    "Moti Nagar": [810, 80],
    "Kirti Nagar": [850, 80],
    "Shadipur": [890, 80],
    "Patel Nagar": [930, 80],
    "Rajendra Place": [970, 80],
    "Karol Bagh": [1010, 80],
    "R.K. Ashram Marg": [1050, 80],
    "Rajiv Chowk": [1090, 110],
    "Barakhamba Road": [1130, 110],
    "Mandi House": [1170, 110],
    "Pragati Maidan": [1210, 110],
    "Indraprastha": [1250, 110],
    "Yamuna Bank": [1290, 110],
    "Akshardham": [1330, 110],
    "Mayur Vihar Phase 1": [1370, 110],
    "Mayur Vihar Ext.": [1410, 110],
    "New Ashok Nagar": [1450, 110],
    "Noida Sector 15": [1490, 110],
    "Noida Sector 16": [1530, 110],
    "Noida Sector 18": [1570, 110],
    "Botanical Garden": [1610, 110],
    "Golf Course": [1650, 110],
    "Noida City Centre": [1690, 110],
    "Noida Sector 34": [1730, 110],
    "Noida Sector 52": [1770, 110],
    "Noida Sector 61": [1810, 110],
    "Noida Sector 59": [1850, 110],
    "Noida Sector 62": [1890, 110],
    "Noida Electronic City": [1930, 110],
    "Laxmi Nagar": [1330, 70],
    "Nirman Vihar": [1370, 70],
    "Preet Vihar": [1410, 70],
    "Karkarduma": [1450, 70],
    "Anand Vihar": [1490, 70],
    "Kaushambi": [1530, 70],
    "Vaishali": [1570, 70]
  };

fetch('/api/metro')
  .then(res => res.json())
  .then(data => {
    metroData = data.stations;
    drawMap();
  });


function drawMap() {
  const map = document.getElementById('map');

  // Draw lines
  Object.keys(metroData).forEach(from => {
    const fromPos = positions[from];
    if (!fromPos) return;

    Object.keys(metroData[from]).forEach(to => {
      const toPos = positions[to];
      if (!toPos) return;

      const line = document.createElement('div');
      line.className = 'line';
      const x1 = fromPos[0] + 10;
      const y1 = fromPos[1] + 10;
      const x2 = toPos[0] + 10;
      const y2 = toPos[1] + 10;
      const length = Math.hypot(x2 - x1, y2 - y1);
      const angle = Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI;

      line.style.width = length + 'px';
      line.style.left = x1 + 'px';
      line.style.top = y1 + 'px';
      line.style.transform = `rotate(${angle}deg)`;
      map.appendChild(line);
    });
  });

  // Draw stations
  Object.keys(positions).forEach(station => {
    const div = document.createElement('div');
    div.className = 'station';
    div.style.left = positions[station][0] + 'px';
    div.style.top = positions[station][1] + 'px';
    div.title = station;
    map.appendChild(div);
  });
}
const stationCoords = {
  "Dwarka Sector 21": [10, 50],
  "Dwarka Sector 8": [50, 50],
  "Dwarka Sector 9": [90, 50],
  "Dwarka Sector 10": [130, 50],
  "Dwarka Sector 11": [170, 50],
  "Dwarka Sector 12": [210, 50],
  "Dwarka Sector 13": [250, 50],
  "Dwarka Sector 14": [290, 50],
  "Dwarka": [330, 50],
  "Dwarka Mor": [370, 50],
  "Nawada": [410, 50],
  "Uttam Nagar West": [450, 50],
  "Uttam Nagar East": [490, 50],
  "Janakpuri West": [530, 80],
  "Janakpuri East": [570, 110],
  "Tilak Nagar": [610, 110],
  "Subhash Nagar": [650, 110],
  "Tagore Garden": [690, 110],
  "Rajouri Garden": [730, 80],
  "Ramesh Nagar": [770, 80],
  "Moti Nagar": [810, 80],
  "Kirti Nagar": [850, 80],
  "Shadipur": [890, 80],
  "Patel Nagar": [930, 80],
  "Rajendra Place": [970, 80],
  "Karol Bagh": [1010, 80],
  "R.K. Ashram Marg": [1050, 80],
  "Rajiv Chowk": [1090, 110],
  "Barakhamba Road": [1130, 110],
  "Mandi House": [1170, 110],
  "Pragati Maidan": [1210, 110],
  "Indraprastha": [1250, 110],
  "Yamuna Bank": [1290, 110],
  "Akshardham": [1330, 110],
  "Mayur Vihar Phase 1": [1370, 110],
  "Mayur Vihar Ext.": [1410, 110],
  "New Ashok Nagar": [1450, 110],
  "Noida Sector 15": [1490, 110],
  "Noida Sector 16": [1530, 110],
  "Noida Sector 18": [1570, 110],
  "Botanical Garden": [1610, 110],
  "Golf Course": [1650, 110],
  "Noida City Centre": [1690, 110],
  "Noida Sector 34": [1730, 110],
  "Noida Sector 52": [1770, 110],
  "Noida Sector 61": [1810, 110],
  "Noida Sector 59": [1850, 110],
  "Noida Sector 62": [1890, 110],
  "Noida Electronic City": [1930, 110],
  "Laxmi Nagar": [1330, 70],
  "Nirman Vihar": [1370, 70],
  "Preet Vihar": [1410, 70],
  "Karkarduma": [1450, 70],
  "Anand Vihar": [1490, 70],
  "Kaushambi": [1530, 70],
  "Vaishali": [1570, 70]
};
function drawMap() {
  const canvas = document.getElementById('mapCanvas');
  const ctx = canvas.getContext('2d');

  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Set styles
  ctx.lineWidth = 4;
  ctx.strokeStyle = '#007bff'; // blue metro line
  ctx.fillStyle = 'black';
  ctx.font = '12px Arial';

  // Convert stationCoords to array for drawing lines
  const stationNames = Object.keys(stationCoords);

  // Draw lines between consecutive stations
  for (let i = 0; i < stationNames.length - 1; i++) {
    const [x1, y1] = stationCoords[stationNames[i]];
    const [x2, y2] = stationCoords[stationNames[i + 1]];

    // Only draw if reasonably close (avoid cross-lines for different branches)
    if (Math.abs(x1 - x2) < 100 && Math.abs(y1 - y2) <= 50) {
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();
    }
  }

  // Draw station circles and names
  for (let station in stationCoords) {
    const [x, y] = stationCoords[station];

    // Draw station dot
    ctx.beginPath();
    ctx.arc(x, y, 5, 0, 2 * Math.PI);
    ctx.fillStyle = '#ff0000';
    ctx.fill();

    // Draw station name
    ctx.fillStyle = '#000';
    ctx.fillText(station, x + 7, y + 3);
  }
}

// Draw map on page load
window.onload = () => {
  // Populate datalist
  const stationList = document.getElementById('stations');
  for (let station in stationCoords) {
    const option = document.createElement("option");
    option.value = station;
    stationList.appendChild(option);
  }

  // Draw metro map
  drawMap();
};


function findPath() {
  const start = document.getElementById('start').value.trim();
  const end = document.getElementById('end').value.trim();

  const result = dijkstra(metroData, start, end);
  const map = document.getElementById('map');

  // Clear previous highlights
  document.querySelectorAll('.station').forEach(s => s.style.background = 'red');

  if (result) {
    document.getElementById('result').innerText =
      `Shortest path: ${result.path.join(' → ')} (Distance: ${result.distance})`;

    // Highlight path stations
    result.path.forEach(station => {
      const elements = [...map.querySelectorAll('.station')];
      const match = elements.find(el => el.title === station);
      if (match) match.style.background = 'green';
    });
  } else {
    document.getElementById('result').innerText = 'No path found.';
  }
}


// Dijkstra's Algorithm
function dijkstra(graph, start, end) {
  const distances = {};
  const visited = {};
  const previous = {};

  Object.keys(graph).forEach(node => {
    distances[node] = Infinity;
    previous[node] = null;
  });
  distances[start] = 0;

  while (true) {
    let closest = null;
    let minDist = Infinity;
    for (let node in distances) {
      if (!visited[node] && distances[node] < minDist) {
        closest = node;
        minDist = distances[node];
      }
    }

    if (closest === null) break;
    visited[closest] = true;

    for (let neighbor in graph[closest]) {
      let newDist = distances[closest] + graph[closest][neighbor];
      if (newDist < distances[neighbor]) {
        distances[neighbor] = newDist;
        previous[neighbor] = closest;
      }
    }
  }
  fetch('/api/metro')
  .then(res => res.json())
  .then(data => {
    metroData = data.stations;
    drawMap();

    const datalist = document.getElementById('stations');
    Object.keys(metroData).forEach(station => {
      const option = document.createElement('option');
      option.value = station;
      datalist.appendChild(option);
    });
  });


  const path = [];
  let current = end;
  while (current) {
    path.unshift(current);
    current = previous[current];
  }

  return distances[end] === Infinity ? null : { path, distance: distances[end] };
}
