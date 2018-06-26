
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.migrate.rollback()
    .then(function () {
      return knex.migrate.latest();
    })
    .then(function () {
      // Inserts assassins.
      return knex('assassins').insert([{
        full_name: 'Alexander Duggan',
        weapon: 'Sniper rifle',
        contact_info: 'jackal@gmail.com',
        age: 31,
        price: 45,
        rating: 7.5,
        kills: 28
      },
      {
        full_name: 'Anton Chigurh',
        weapon: 'Pneumatic bolt gun',
        contact_info: 'pneujackcity@gmail.com',
        age: 52,
        price: 40,
        rating: 9.0,
        kills: 72
      },
      {
        full_name: '',
        weapon: 'Pistol',
        contact_info: 'ghostdog@gmail.com',
        age: 28,
        price: 20,
        rating: 6.5,
        kills: 35
      },
      {
        full_name: 'Jason Bourne',
        weapon: 'Parkour',
        contact_info: 'pneujackcity@gmail.com',
        age: 52,
        price: 40,
        rating: 9.0,
        kills: 72
      },
      {
        full_name: 'John Wick',
        weapon: 'Lots of guns',
        contact_info: 'babayaga@gmail.com',
        age: 35,
        price: 50,
        rating: 9.5,
        kills: 433
      },
      {
        full_name: 'Jules Winnfield',
        weapon: 'Pistol',
        contact_info: 'bmf@gmail.com',
        age: 26,
        price: 15,
        rating: 6.5,
        kills: 87
      },
      {
        full_name: 'Leon',
        weapon: 'Everything',
        contact_info: 'leon@gmail.com',
        age: 41,
        price: 30,
        rating: 8.5,
        kills: 87
      },
      {
        full_name: 'Nikita Mears',
        weapon: 'Silenced pistols',
        contact_info: 'nikita@gmail.com',
        age: 28,
        price: 30,
        rating: 7,
        kills: 32
      },
      {
        full_name: 'Pickle Rick',
        weapon: 'Lasers and office supplies',
        contact_info: 'rsanchez@gmail.com',
        age: 60,
        price: 0,
        rating: 8,
        kills: 24
      },
      ])
    })
    .then(function () {
      // Inserts code names.
      return knex('code_names').insert([
        {id: 1, code_name: 'The Jackal'},
        {id: 2, code_name: 'Old Man'},
        {id: 3, code_name: 'Ghost Dog'},
        {id: 4, code_name: ''},
        {id: 5, code_name: 'Baba Yaga'},
        {id: 6, code_name: ''},
        {id: 7, code_name: 'The Professional'},
        {id: 8, code_name: 'Nikita'},
        {id: 8, code_name: 'La Femme Nikita'},
        {id: 9, code_name: 'Solenya'},
      ])
    });
};
