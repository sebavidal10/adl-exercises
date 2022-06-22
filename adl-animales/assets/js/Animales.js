let Animales = (() => {
  const url = './animales.json';
  const getData = async () => {
    const response = await fetch(url);
    return response.json();
  };
  return {
    getData,
  };
})();

export default Animales;
