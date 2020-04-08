function vis1(data, div) {
  const margin = {top: 40, right: 20, bottom: 40, left: 100};

  const visWidth = 700 - margin.left - margin.right;
  const visHeight = 400 - margin.top - margin.bottom;

  const svg = div.append('svg')
      .attr('width', visWidth + margin.left + margin.right)
      .attr('height', visHeight + margin.top + margin.bottom);

  const g = svg.append("g")
    .attr("transform", `translate(${margin.left}, ${margin.top})`);

  // add title

  g.append("text")
    .attr("x", visWidth / 2)
    .attr("y", -margin.top + 5)
    .attr("text-anchor", "middle")
    .attr("dominant-baseline", "hanging")
    .attr("font-family", "sans-serif")
    .attr("font-size", "16px")
    .text("Game Scores");

  // create scales

  const x = d3.scaleLinear()
    .domain([0, d3.max(data, d => d.score)]).nice()
    .range([0, visWidth]);

  const sortedNames = data.sort((a, b) => d3.descending(a.score, b.score))
      .map(d => d.name);

  const y = d3.scaleBand()
    .domain(sortedNames)
    .range([0, visHeight])
    .padding(0.2);

  // create and add axes

  const xAxis = d3.axisBottom(x);

  g.append("g")
    .attr("transform", `translate(0, ${visHeight})`)
    .call(xAxis)
    .call(g => g.selectAll(".domain").remove())
    .append("text")
    .attr("x", visWidth / 2)
    .attr("y", 40)
    .attr("fill", "black")
    .attr("text-anchor", "middle")
    .text("Score");

  const yAxis = d3.axisLeft(y);

  g.append("g")
    .call(yAxis)
    .call(g => g.selectAll(".domain").remove());

  // draw bars

  g.selectAll("rect")
    .data(data)
    .join("rect")
    .attr("x", d => 0)
    .attr("y", d => y(d.name))
    .attr("width", d => x(d.score))
    .attr("height", d => y.bandwidth())
    .attr("fill", "steelblue");
}
