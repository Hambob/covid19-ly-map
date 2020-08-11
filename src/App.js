import React from "react";
import { Cards, Chart, CountryPicker } from "./components";
import styles from "./App.module.css";
import { fetchData, fetchCountries } from "./api";
class App extends React.Component {
  state = {
    data: {},
    country: '',
    dataCountries: {},
    isPass: false
  };

  async componentDidMount() {
    const data = await fetchData();
    this.setState({
      data: {
        ...data,
        Date: data.Date,
      },
      isPass: false
    });
  }

  handleCountryPicker = async (country) => {
    const data = await fetchCountries(country)
   this.setState({data, country})
  }
  render() {
    const { data } = this.state;
    return (
      <div className={styles.container}>
        <CountryPicker handleCountryPicker={this.handleCountryPicker}/>
        <Cards data={data} />
        <Chart data={data} country={this.state.country}/>
        <footer>Designed & Developed By Hamzah Abokreen</footer>
      </div>
    );
  }
}

export default App;
