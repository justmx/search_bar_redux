import React, {PropTypes} from 'react';
import TextInput from '../components/TextInput';
import Header from '../components/Header';
import LoadingDots from '../components/LoadingDots';
import {connect} from 'react-redux';
import SitesDisplay from '../components/SitesDisplay';
import SearchActions from '../redux/SearchRedux';
import Footer from '../components/Footer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keyWord: '',
      showSites: this.props.showSites,
      fetching: false
    };
   this.onChange = this.onChange.bind(this);
  }

  componentWillReceiveProps (newProps) {
    if (newProps) {
      this.setState({showSites: newProps.showSites,
                     fetching:  newProps.fetching
                    });
    }
  }

    onChange(event) {
      event.preventDefault();
      const _keyword = event.target.value;
      this.setState({ keyWord: _keyword });
      this.props.search(_keyword);
    }

    render () {
          return (
            <div className="container-fluid" >
              <Header />
                <div className="myContainer jumbotron">
                  <TextInput
                    name="search"
                    label="Search"
                    value={this.state.keyWord}
                    onChange={this.onChange}
                  />
                  <div>
                      {this.state.fetching && <LoadingDots interval={100} dots={20}/>}
                      <SitesDisplay showSites={this.state.showSites} />
                  </div>
              </div>
              <Footer />
          </div>
        );
      }
  }


App.propTypes = {
  fetching: PropTypes.bool,
  showSites: PropTypes.array.isRequired,
  search: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return {
    fetching: state.sites.fetching,
    showSites: state.sites.showSites ? state.sites.showSites: []
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    search: (keyword) => { dispatch(SearchActions.searchRequest(keyword)); }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
