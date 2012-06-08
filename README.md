meisseli
========

Aalto-Meisseli

Asennus
=======

Asenna Ruby

terminaalissa, aja `gem install bundler`

asenna tarvittavat gemit ja jätä pois: `bundle install --without production`

käynnistä palvelin paikallisesti: `rackup`

palvelin löytyy tod.näk. osoitteesta [http://localhost:9292](http://localhost:9292)

Heroku
======

[Luo Heroku-tili](http://www.heroku.com/)

Kirjaudu: `heroku login`

Lisää heroku toisena remotena gitiin: `git remote add heroku git@heroku.com:meisseli.git`

Kun haluat työntää master-branchia Herokuun, käytä `git push heroku master`

Serveri löytyy tällä hetkellä osoitteesta [http://meisseli.herokuapp.com/](http://meisseli.herokuapp.com/)