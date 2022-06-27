export async function renderDot(model, element) {
    
    var graphviz = d3.select(element)
        .graphviz()
        .zoom(false);
    
    graphviz.renderDot(model);
}
