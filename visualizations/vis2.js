function vis2(geoJSON, div) {
  const margin = {top: 60, right: 20, bottom: 20, left: 20};

  const visWidth = 700 - margin.left - margin.right;
  const visHeight = 400 - margin.top - margin.bottom;

  const svg = div.append('svg')
      .attr('width', visWidth + margin.left + margin.right)
      .attr('height', visHeight + margin.top + margin.bottom);

  const g = svg.append('g')
      .attr('transform', `translate(${margin.left}, ${margin.top})`);

  // add an example of a continuous color legend

  const color = d3.scaleDiverging()
    .domain([-1, 0, 1])
    .interpolator(d3.interpolateRdBu);

  const groupForLegend = g.append('g')
      .attr('transform', `translate(0,${-margin.top})`);

  groupForLegend.append(() => legend({
    color: color,
    title: 'This is an example of a continuous color legend',
    tickFormat: '%'
  }));

  // draw the map

  const projection =  d3.geoEqualEarth()
      .fitSize([visWidth, visHeight], geoJSON);

  const path = d3.geoPath().projection(projection);

  g.selectAll('.border')
    .data(geoJSON.features)
    .join('path')
      .attr('class', 'border')
      .attr('d', path)
      .attr('fill', '#dcdcdc')
      .attr('stroke', 'white');

  const mapOutline = d3.geoGraticule().outline();

  g.append('path')
    .datum(mapOutline)
    .attr('d', path)
    .attr('stroke', '#dcdcdc')
    .attr('fill', 'none');
}
