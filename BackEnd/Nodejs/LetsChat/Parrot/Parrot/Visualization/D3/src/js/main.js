let container = d3.select('.container');
let svg = d3.select('svg');
let circles;
// Thinking with joins means declaring a relationship between a selection (such as "circle") and data, 
// and then implementing this relationship through the three enter, update and exit states.

d3.json('/Visualization/D3/src/data/circles.json').then(function(data){
    circles = data;
    svg.selectAll('circle')
    .data(circles)
    .enter()
    .append("circle")
    .attr('cx',function(d){return d.x})
    .attr('cy',function(d){return d.y})
    .attr('r',5)
})
