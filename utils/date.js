const getDateAdded = () => {
  const dt = new Date();
  const day = dt.getDate() < 10 ? `0${dt.getDay()}` : dt.getDate();
  const month = dt.getMonth() < 10 ? `0${dt.getMonth()}` : dt.getMonth();
  const hours = dt.getHours() < 10 ? `0${dt.getHours()}` : dt.getHours();
  const minutes =
    dt.getMinutes() < 10 ? `0${dt.getMinutes()}` : dt.getMinutes();
  const date = `${day}/${month}/${dt.getFullYear()} - ${hours}:${minutes}`;
  return date;
};

const dataStringfy = (links) => JSON.stringify(links);
const dataSaveOnStorage = (links) =>
  window.localStorage.setItem('links', links);
const dataParse = (links) => JSON.parse(links);
const getItemOnStorage = (keyword) => window.localStorage.getItem(keyword);

export {
  getDateAdded,
  dataStringfy,
  dataSaveOnStorage,
  dataParse,
  getItemOnStorage,
};
