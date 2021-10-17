class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      demos: []
    };
  }

  componentDidMount() {
    d3.csv('data/demos.csv', (data) => {
      this.setState({ demos: data });
    });
  }

  render() {
    return (
      <div className="card">

        {this.state.demos.map(function (d) {
          return (
            <div className="card-content" >
              <p className="tag">
                {d.description}
              </p>
              <div>
                <form>
                  <label>
                    <p >Username</p>
                    <input className="input" type="text" />
                  </label>
                  <label>
                    <p>Password</p>
                    <input className="input" type="password" />
                  </label>
                  <div >
                    <button className="signup-style" block size="lg" type="submit">
                      Sign Up
                    </button>
                  </div>
                </form>
              </div>
              <p className="or-style">OR</p>
              <div key={'demo'}>
                <button className="click-style">
                  <a href={d.title}>{d.title}</a>
                </button>
              </div>
            </div>
          )
        })}
      </div>
    );
  }
}

ReactDOM.render(<Main />,
  document.querySelector('#examples')
);


