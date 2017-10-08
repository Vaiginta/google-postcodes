import React, {Component} from 'react';

class App extends Component {

  constructor() {
    super();
    this.state = {
      longitude: '',
      latitude: ''
    };
  }

  changeInput(value, type) {
    this.setState({
      [type]: value
    })
  }

  render() {

    const {
      fetchData,
      items,
      error
    } = this.props;

    let filteredItems = items && items.filter(ii => ii.address_components.filter(a => a.types.includes('postal_code')).length !== 0);

    return (
      <div className='app-root'>
      Longitude: <input onChange={e => this.changeInput(e.target.value, 'longitude')} />
      Latitude: <input onChange={e => this.changeInput(e.target.value, 'latitude')}  />
      < br />
      <span className='error'>{ error }</span>
      < br />
      <button onClick={() => fetchData(this.state.longitude + ',' + this.state.latitude)}>search</button>
      < br />
      < br />
      <div>
          <div className='search-results-table'>
              <div className='search-results-row'>
                  <div className="search-results-cell">formatted address</div>
                  <div className="search-results-cell">post code</div>
              </div>
              { filteredItems && filteredItems.map((child, key) => {

                  return (
                      <div className='search-results-row' key={key}>
                          <div className='search-results-cell'>{child.formatted_address}</div>
                          <div className='search-results-cell'>{child.address_components.filter(a => a.types.includes('postal_code')).map(a => a.long_name)}</div>
                      </div>
                  );
              }) }
          </div>
      </div>
      </div>
    );
  }
}

export default App;
