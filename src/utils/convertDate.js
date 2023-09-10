export function convertDate(inputFormat) {
  function pad(s) {
    return s < 10 ? "0" + s : s;
  }
  var d = new Date(inputFormat);
  return [pad(d.getFullYear()), pad(d.getMonth() + 1), pad(d.getDate())].join(
    "-"
  );
}

export function convertDateToId(inputFormat) {
  switch (inputFormat) {
    case "Monday":
      return "Senin";
    case "Tuesday":
      return "Selasa";
    case "Wednesday":
      return "Rabu";
    case "Thursday":
      return "Kamis";
    case "Friday":
      return "Jum`at";
    case "Saturday":
      return "Sabtu";
    default:
      return "Minggu";
  }
}

export function convertMonthToId(inputFormat) {
  if (inputFormat === "January") {
    return "Januari";
  } else if (inputFormat === "February") {
    return "Februari";
  } else if (inputFormat === "March") {
    return "Maret";
  } else if (inputFormat === "April") {
    return "April";
  } else if (inputFormat === "May") {
    return "Mei";
  } else if (inputFormat === "June") {
    return "Juni";
  } else if (inputFormat === "July") {
    return "Juli";
  } else if (inputFormat === "August") {
    return "Agustus";
  } else if (inputFormat === "September") {
    return "September";
  } else if (inputFormat === "October") {
    return "Oktober";
  } else if (inputFormat === "November") {
    return "November";
  } else {
    return "Desember";
  }
}
