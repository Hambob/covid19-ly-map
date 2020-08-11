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
    this.setState({data , isPass: true})
    console.log(this.state)
  }
  render() {
    const { data } = this.state;
    return (
      <div className={styles.container}>
        <Cards data={data} />
        <CountryPicker handleCountryPicker={this.handleCountryPicker}/>
        <Chart />
      </div>
    );
  }
}

export default App;
