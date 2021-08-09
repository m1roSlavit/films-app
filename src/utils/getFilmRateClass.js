const getFilmRateClass = (voteCount, voteRate) => {
  if (voteCount === 0)
    return 'bg-secondary';

  if (voteRate <= 4)
    return 'bg-danger'
  else if (voteRate <= 7)
    return 'bg-warning'
  return 'bg-success'
};

export default getFilmRateClass;