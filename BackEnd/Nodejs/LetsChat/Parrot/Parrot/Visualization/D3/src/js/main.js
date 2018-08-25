let container = d3.select('.container');
d3.text('/Visualization/D3/src/data/test.txt').then(text => {
    container.text(text);
})