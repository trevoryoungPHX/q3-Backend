exports.seed = function(knex, Promise) {
  return knex('contacts').del()
    .then(function () {
      return knex('contacts').insert([
        {user_id: 1, first_name: 'Dwight', last_name: 'Schrute', company: "Dunder Mifflin", profession: "Sales", email: "dwight@dm.com", phone: "(828) 929-3949", photo_url: "https://assets1.bigthink.com/system/idea_thumbnails/25298/primary/449px-The_Office__USA_-Dwight_Schrute.jpg?1291737714"},
        {user_id: 1, first_name: 'Jim', last_name: 'Halpert', company: "Dunder Mifflin", profession: "Sales", email: "jim@dm.com", phone: "(828) 929-3949", photo_url: "https://pbs.twimg.com/profile_images/838818903933386752/rVy94Uu6.jpg"},
        {user_id: 1, first_name: 'Pam', last_name: 'Beesly', company: "Dunder Mifflin", profession: "Secretary", email: "pam@dm.com", phone: "(828) 929-3949", photo_url: "https://armchairmogul.files.wordpress.com/2009/12/pam-beesly-naked1.jpg"},
        {user_id: 1, first_name: 'Angela', last_name: 'Martin', company: "Dunder Mifflin", profession: "Accounting", email: "angela@dm.com", phone: "(828) 929-3949", photo_url: "https://pbs.twimg.com/profile_images/74258997/angela_400x400.PNG"},
        {user_id: 1, first_name: 'Toby', last_name: 'Flenderson', company: "Dunder Mifflin", profession: "HR", email: "toby@dm.com", phone: "(828) 929-3949", photo_url: "https://pmcdeadline2.files.wordpress.com/2011/06/paul_lieberstein_20110609232738.jpg?w=605"},
        {user_id: 1, first_name: 'Kevin', last_name: 'Malone', company: "Dunder Mifflin", profession: "Accounting", email: "kevin@dm.com", phone: "(828) 929-3949", photo_url: "https://pbs.twimg.com/profile_images/515307069533331457/J-THo7yG_400x400.jpeg"},
        {user_id: 1, first_name: 'Phyllis', last_name: 'Smith', company: "Dunder Mifflin", profession: "Sales", email: "phyllis@dm.com", phone: "(828) 929-3949", photo_url: "https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/p-the-office-phyllis-smith.jpg"},
        {user_id: 1, first_name: 'Darryl', last_name: 'Phillbin', company: "Dunder Mifflin", profession: "Warehouse Management", email: "darryl@dm.com", phone: "(828) 929-3949", photo_url: "https://vignette.wikia.nocookie.net/theoffice/images/a/a2/Darryl1.jpg/revision/latest/scale-to-width-down/220?cb=20140726052533"},
        {user_id: 1, first_name: 'Meredith', last_name: 'Palmer', company: "Dunder Mifflin", profession: "Purchasing", email: "meredith@dm.com", phone: "(828) 929-3949", photo_url: "https://i.pinimg.com/736x/0a/13/d3/0a13d3bdcf7afe29309b1f8787f9a986--palmer-forests.jpg"},
        {user_id: 1, first_name: 'Kelly', last_name: 'Kapoor', company: "Dunder Mifflin", profession: "Customer Service", email: "kelly@dm.com", phone: "(828) 929-3949", photo_url: "https://memegenerator.net/img/images/600x600/16246372/mindy-tired.jpg"},
        {user_id: 1, first_name: 'Jan', last_name: 'Levinson', company: "White Pages", profession: "CEO", email: "jan@wp.com", phone: "(828) 929-3949", photo_url: "https://i.redd.it/r9uuj1dw19xy.jpg"},
        {user_id: 1, first_name: 'Stanley', last_name: 'Hudson', company: "Dunder Mifflin", profession: "Sales", email: "stanley@dm.com", phone: "(828) 929-3949", photo_url: "https://pbs.twimg.com/media/Bpi4fqdCIAAYr0E.jpg"},
        {user_id: 1, first_name: 'Todd', last_name: 'Packer', company: "Dunder Mifflin", profession: "Traveling Sales", email: "todd@dm.com", phone: "(828) 929-3949", photo_url: "https://upload.wikimedia.org/wikipedia/en/thumb/6/61/Todd_Packer.jpg/250px-Todd_Packer.jpg"},
        {user_id: 1, first_name: 'Ryan', last_name: 'Howard', company: "Bowling Alley", profession: "Shoe Guy", email: "ryan@scrantonBowls.com", phone: "(828) 929-3949", photo_url: "https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/p-the-office-bj-novak.jpg"},
        {user_id: 1, first_name: 'Creed', last_name: 'Bratton', company: "Dunder Mifflin", profession: "Quality Assurance", email: "creed@dm.com", phone: "(828) 929-3949", photo_url: "https://i.redd.it/owtkpgixns1z.jpg"},
        {user_id: 1, first_name: 'Oscar', last_name: 'Martinez', company: "Dunder Mifflin", profession: "Accounting", email: "oscar@dm.com", phone: "(828) 929-3949", photo_url: "https://pbs.twimg.com/profile_images/1133834377/A53B14BC-294C-4F7B-965C-A5A98F337639_400x400.jpg"},
        {user_id: 1, first_name: 'David', last_name: 'Wallace', company: "Dunder Mifflin", profession: "Corporate", email: "david@dm.com", phone: "(828) 929-3949", photo_url: "https://waitseriouslywhookdthis.files.wordpress.com/2011/08/davidwallace.jpg"}
      ]);
    });
};
