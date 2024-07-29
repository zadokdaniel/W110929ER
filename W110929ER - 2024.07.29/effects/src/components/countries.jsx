import { useEffect, useState } from "react";

function Countries() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    async function getCountries() {
      const data = await fetch("https://restcountries.com/v3.1/all").then(
        (resp) => resp.json()
      );

      setCountries(data);
    }
    getCountries();
  });

  return <pre>{JSON.stringify(countries, null, 2)}</pre>;
}

export default Countries;
