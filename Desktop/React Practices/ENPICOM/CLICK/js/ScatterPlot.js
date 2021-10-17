class ScatterPlot extends React.Component {
    constructor(props) {

        super(props);

        this.state = {
            list: []
        }

        this.drawWidth = this.props.width - this.props.margin.left - this.props.margin.right;
        this.drawHeight = this.props.height - this.props.margin.top - this.props.margin.bottom;

    }


    componentDidMount() {
        this.update();
    }

    componentDidUpdate() {
        this.update();
    }
    updateScales() {
        // debugger;
        
        let xMin = d3.min(this.props.data, (d) => +d.x);
        let xMax = d3.max(this.props.data, (d) => +d.x);
        let yMin = d3.min(this.props.data, (d) => +d.y);
        let yMax = d3.max(this.props.data, (d) => +d.y);

        this.xScale = d3.scaleLinear().domain([xMin, xMax]).range([0, this.drawWidth])
        this.yScale = d3.scaleLinear().domain([yMax, yMin]).range([0, this.drawHeight])
    }
    updatePoints() {

        let tip = d3.tip().attr('class', 'd3-tip').html(function (d) {
            return d.label;
        });

        let circles = d3.select(this.chartArea).selectAll('circle').data(this.props.data);


        circles.enter().append('circle')
            .merge(circles)
            .attr('r', (d) => this.props.radius)
            .attr('fill', (d) => this.props.color)
            .attr('label', (d) => d.label)
            .on('mouseover', tip.show)
            .on('mouseout', tip.hide)
            .on("click", (d) => {
                let lis = this.state.list;
                lis.push(d);
                this.setState({
                    list: lis
                })
            })
            .style('fill-opacity', 0.3)
            .transition().duration(500)
            .attr('cx', (d) => this.xScale(d.x))
            .attr('cy', (d) => this.yScale(d.y))
            .style('stroke', "black")
            .style('stroke-width', (d) => d.selected == true ? "3px" : "0px")


        circles.exit().remove();

        d3.select(this.chartArea).call(tip);
    }
    updateAxes() {
        let xAxisFunction = d3.axisBottom()
            .scale(this.xScale)
            .ticks(5, 's');

        let yAxisFunction = d3.axisLeft()
            .scale(this.yScale)
            .ticks(5, 's');

        d3.select(this.xAxis)
            .call(xAxisFunction);

        d3.select(this.yAxis)
            .call(yAxisFunction);
    }
    update() {
        this.updateScales();
        this.updateAxes();
        this.updatePoints();
    }
    
    render() {
        // debugger;
        return (
            
            <section>
                <div className="chart-wrapper">
                    <svg className="chart"
                        width={this.props.width}
                        height={this.props.height}
                    >
                        <text transform={`translate(${this.props.margin.left},15)`}>{this.props.title}</text>
                        <g ref={(node) => { this.chartArea = node; }}
                            transform={`translate(${this.props.margin.left}, ${this.props.margin.top})`} />

                        {/* Axes */}
                        <g ref={(node) => { this.xAxis = node; }}
                            transform={`translate(${this.props.margin.left}, ${this.props.height - this.props.margin.bottom})`}></g>
                        <g ref={(node) => { this.yAxis = node; }}
                            transform={`translate(${this.props.margin.left}, ${this.props.margin.top})`}></g>

                        {/* Axis labels */}
                        <text className="axis-label" transform={`translate(${this.props.margin.left + this.drawWidth / 2}, 
                        ${this.props.height - this.props.margin.bottom + 30})`}>{this.props.xTitle}</text>

                        <text className="axis-label" transform={`translate(${this.props.margin.left - 30}, 
                        ${this.drawHeight / 2 + this.props.margin.top}) rotate(-90)`}>{this.props.yTitle}</text>
                    </svg>
                </div>

                <h3 className="list-title">Selected list:</h3>
                <ul className="list-title-result">
                    {
                        this.state.list.map((l, i) => {
                            return <li>
                                <div>
                                    Number {i + 1}
                                </div>
                                <div>
                                    ID:  {l.label}
                                </div>
                                <div>
                                    CDR3 Nucleotides: {l.cdr3}
                                </div>
                            </li>
                        })
                    }
                </ul>
            </section>
        )
    }
}

ScatterPlot.defaultProps = {
    data: [{ x: 10, y: 20 }, { x: 15, y: 35 }],
    width: 600,
    height: 600,
    radius: 4,
    color: "blue",
    margin: {
        left: 50,
        right: 10,
        top: 20,
        bottom: 50
    },
    xTitle: "X Title",
    yTitle: "Y Title",
};