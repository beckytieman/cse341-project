exports.getIndex = (req, res, next) => {
    if (req.session.counter === undefined) {
        req.session.counter = 0;
    }
    if (req.session.style === undefined) {
        req.session.style = 0;
    }

    res.render('pages/ta05', {
        title: 'Team Activity 05',
        path: '/ta05',
    });
};


exports.changeCount = (req, res, next) => {
  if (req.session.counter === undefined) { req.session.counter = 0; }
  
  req.session.counter += req.body.numChange;
  res.redirect('/ta05');
};

exports.changeStyle = (req, res, next) => {


    res.redirect('/ta05');
};