import axios from "axios";

const url = "https://api.covid19api.com/summary";

export const fetchData = async () => {
  try {
    const {
      data: {
        Global: {
          TotalConfirmed,
          TotalRecovered,
          TotalDeaths,
        },
        Date,
      },
    } = await axios.get(url);
    return {
      TotalConfirmed,
      TotalRecovered,
      TotalDeaths,
      Date,
    };
  } catch (error) {
    throw error;
  }
};

export const fetchCountries = async (country) => {
  try {
    const dataOneCountry = await axios.get(url)
    const oneData = dataOneCountry.data.Countries.filter((c) => c.Slug === country ? country : false)
    console.log(oneData)
    return {
      TotalConfirmed: oneData.TotalConfirmed,
      TotalDeaths: oneData.TotalDeaths,
      TotalRecovered: oneData.TotalRecovered,
      Date: oneData.Date
    }

  } catch(error) {
    throw error
  }
}

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get("https://api.covid19api.com/world");
    const modifiedData = data.map((daily) => ({
      TotalConfirmed: daily.TotalConfirmed,
      TotalDeaths: daily.TotalDeaths,
      TotalRecovered: daily.TotalRecovered,
    }));

    return modifiedData;
  } catch (error) {
    throw error;
  }
};

export const fetchAllCountries = async () => {
  try {
    const {
      data: { Countries },
    } = await axios.get(url);
    return Countries.map((country) => country.Slug);
  } catch (error) {
    throw error;
  }
};
