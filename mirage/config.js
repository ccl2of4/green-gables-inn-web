export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.2.x/shorthands/
  */
  this.namespace = 'api';

  let suites = { data :
    [
      {
        type: "suites",
        id: "1",
        attributes : {
          name: "The Green Gables Suite",
          price: 250,
          summary: "This is a two-story suite. The upper floor has a bedroom with a queen sized bed, sitting area and 1/2 bath. The first floor has a single bedroom, full bath, kitchen, and a living / dining room combination. There is a queen sleeper sofa in the living room. There is also a back outdoor staircase that leads into the suite, in addition to the front door entrance. (Minimum 2-night stay)",
          amenities: [
            "Luxurious Linens",
            "Terrific Terry Towels",
            "Hair Dryer",
            "Iron and Iron Board",
            "Free Wifi",
            "Free Parking",
            "Pots and Pans",
            "Dishes and Dish Towels",
            "Coffee Pot",
            "Tea Kettle",
            "Cutlery",
            "Assortment of Glasses",
            "Outdoor dishes and glassware",
            "TV with Cable",
            "Use of Front Porch and Back Yard"
          ],
          thumbnail: "assets/images/suites/the-green-gables-suite.jpg",
          images: [
            "assets/images/suites/the-green-gables-suite/1.jpg",
            "assets/images/suites/the-green-gables-suite/2.jpg",
            "assets/images/suites/the-green-gables-suite/3.jpg",
            "assets/images/suites/the-green-gables-suite/4.jpg",
            "assets/images/suites/the-green-gables-suite/5.jpg",
            "assets/images/suites/the-green-gables-suite/6.jpg",
            "assets/images/suites/the-green-gables-suite/7.jpg",
            "assets/images/suites/the-green-gables-suite/8.jpg"
          ]
        }
      },
      {
        type: "suites",
        id: "2",
        attributes : {
          name: "The Porch Suite",
          price: 350,
          summary: "The Porch Suite is on the first floor of the Inn, and has one bedroom with a queen sized bed and 1 1/2 baths. The living room has a queen size sofa-bed and the 1/2 bath is off the living room. The kitchen is large and overlooks the rear garden. (Minimum 2-night stay)",
          amenities: [""],
          thumbnail: "assets/images/suites/the-porch-suite.jpg",
          images: []
        }
      },
      {
        type: "suites",
        id: "3",
        attributes : {
          name: "The Crows Nest",
          price: 450,
          summary: "The Crows Nest is off to the side front of the Inn, and has large windows overlooking the front yard. There is one bedroom and bath and a kitchen/dining area off the living area. The suite has a private entrance off the main porch. Pet friendly. (Minimum 2-night stay)",
          amenities: [""],
          thumbnail: "assets/images/suites/the-crows-nest.jpg",
          images: []
        }
      },
      {
        type: "suites",
        id: "4",
        attributes : {
          name: "Anne's Corner",
          price: 200,
          summary: "A one bedroom with a queen sized bed, one bath suite with a combination living /dining area. The living room has a queen sized sleeper sofa. The suite has a full kitchen and bath. Radiant heat floors maintain the appropriate temperature all year long. Anne’s Corner is located on the ground floor. This suite has a private entrance. Pet Friendly. (Minimum 2-night stay)",
          amenities: [""],
          thumbnail: "assets/images/suites/annes-corner.jpg",
          images: []
        }
      }
    ]
  };

  this.get('/suites', () => {
    return suites;
  });

  this.get('/suites/:suite_id', (schema, request) => {
    return {
      data : suites.data.find((suite) => {
        return suite.id === request.params.suite_id;
      })
    };
  });

  this.post('/reservations', (db, request) => {
    return request.requestBody;
  });

  this.get('/slides', () => {
    return {
      data : [
          {
            type: "slides",
            id: "1",
            attributes : {
              image : "assets/images/slides/1.jpg",
            },
          },
          {
            type: "slides",
            id: "2",
            attributes : {
              image : "assets/images/slides/2.jpg",
            },
          },
          {
            type: "slides",
            id: "3",
            attributes : {
              image : "assets/images/slides/3.jpg",
            },
          },
          {
            type: "slides",
            id: "4",
            attributes : {
              image : "assets/images/slides/4.jpg",
            },
          },
          {
            type: "slides",
            id: "5",
            attributes : {
              image : "assets/images/slides/5.jpg",
            },
          },
          {
            type: "slides",
            id: "6",
            attributes : {
              image : "assets/images/slides/6.jpg",
            },
          },
          {
            type: "slides",
            id: "7",
            attributes : {
              image : "assets/images/slides/7.jpg",
            },
          },
          {
            type: "slides",
            id: "8",
            attributes : {
              image : "assets/images/slides/8.jpg",
            },
          },
          {
            type: "slides",
            id: "9",
            attributes : {
              image : "assets/images/slides/9.jpg",
            },
          },
          {
            type: "slides",
            id: "10",
            attributes : {
              image : "assets/images/slides/10.jpg",
            },
          }
      ]
    };
  });

}
