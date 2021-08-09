const parseDate = (dateData) => {
  return new Date(dateData).toDateString().slice(4)
}

export default parseDate;