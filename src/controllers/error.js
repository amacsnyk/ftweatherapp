exports.client = (req, res) => {
  res.status(404).render('error', {
    layout: 'error',
    statusCode: 404,
    errorMessage: 'we couldn\'t find that page or file.'
  });
};

exports.server = (req, res) => {
  res.status(500).render('error', {
    layout: 'error',
    statusCode: 500,
    errorMessage: 'there was an internal server error.'
  });
}