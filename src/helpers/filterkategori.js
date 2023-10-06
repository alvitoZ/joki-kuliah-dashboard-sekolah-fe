export const filterNameKategori = (params) => {
  const arr = [];
  for (let data of params) {
    for (let entry of data.nilai) {
      if (entry.nilai > 0) {
        // arr.push(data.student_name);
        arr.push({
          name: data.student_name,
          kategori: entry.kategori,
          nilai: entry.nilai,
        });
      }
    }
  }
  return arr;
};

export const filtered = (arr) => {
  const ids = arr.map(({ name }) => name);
  const filtered = arr.filter(
    ({ name }, index) => !ids.includes(name, index + 1)
  );
  return filtered;
};

export const loop = (array) => {
  const categories = new Set(array.map((data) => data.kategori)); // membuat koleksi kategori yang unik
  const result = [];
  for (let category of categories) {
    result.push({
      kategori: category,
      total: filtered(array.filter((data) => data.kategori === category))
        .length,
    });
  }
  return result.sort((a, b) => a.kategori.localeCompare(b.kategori));
};
