class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [
                {
                    county: "First",
                    inmetro: "0",
                    percadultpoverty: "11.0097759",
                    percamerindan: "0.14828264"
                },
                {
                    county: "Second",
                    inmetro: "0",
                    percadultpoverty: "19.0097759",
                    percamerindan: "0.24828264"
                }
            ],
            xVar: "V Score",
            yVar: "J Score"
        };
    }
    componentDidMount() {
        fetch("/Api/tech_assesment_frontend_data.json")
            .then(res => res.json())
            .then(data => {
                let arr = []
                for (const key in data) {
                    arr.push(data[key]);
                }
                let mapped = arr.map(a => {
                    let tags = JSON.parse(a.tags)
                    return {
                        id: a.id, ...tags["airr"], ...tags["igx-profile"]
                    }
                })

                // debugger;
                this.setState({ data: mapped });

            })

    }
    render() {

        let options = ["Read Count", "J Score", "Sequence Count", "V Score", "Receptor Average Quality"]
        
        let allData = this.state.data.map((d) => {
            return {
                x: d[this.state.xVar],
                y: d[this.state.yVar],
                label: d.id,
                cdr3: d["CDR3 Nucleotides"]
            };
        });
        
        return (
            <div className="container">
                <div className="control-container">

                    {/* X Variable Select Menu */}
                    <div className="control-wrapper">
                        <label htmlFor="xVar"> X Variable: </label>
                        <select id="xVar" value={this.state.xVar} className="custom-select" onChange={(d) => this.setState({ xVar: d.target.value })}>
                            {options.map((d) => {
                                return <option key={d}>{d}</option>
                            })}
                        </select>
                    </div>

                    {/* Y Variable Select Menu */}
                    <div className="control-wrapper">
                        <label htmlFor="yVar"> Y Variable: </label>
                        <select id="yVar" value={this.state.yVar} className="custom-select" onChange={(d) => this.setState({ yVar: d.target.value })}>
                            {options.map((d) => {
                                return <option key={d}>{d}</option>
                            })}
                        </select>
                    </div>
                </div>

                {/* Render scatter plot */}
                <ScatterPlot
                    xTitle={this.state.xVar}
                    yTitle={this.state.yVar}
                    data={allData}
                />
            </div>
        )
    }
}


ReactDOM.render(
    <App />,
    document.getElementById('root')
);