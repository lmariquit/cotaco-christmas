'use strict'

const db = require('../server/db')
const { User, Product } = require('../server/db/models')

async function seed() {
  await db.sync({ force: true })
  console.log('db synced!')

  const users = await Promise.all([
    User.create({
      firstName: 'kathrine',
      shortName: 'kates',
      lastName: 'mari',
      family: 'mari',
      age: 22,
      gender: 'female',
      isAdmin: true,
      title: 'ditche',
      selection: null,
      profileMessage: "Hi I'm kates",
      photo: 'https://odadee.net/themes/default/assets/images/default.jpg',
      photoSmall: 'https://odadee.net/themes/default/assets/images/default.jpg',
      email: 'cody@email.com'
    }),
    User.create({
      firstName: 'jamison',
      lastName: 'coto',
      family: 'pine',
      age: 27,
      gender: 'male',
      isAdmin: false,
      title: 'kuya',
      selection: null,
      profileMessage: 'A long message belongs here, well maybe not too long',
      photo:
        'https://images.onlinelabels.com/images/clip-art/dagobert83/dagobert83_female_user_icon.png',
      photoSmall:
        'https://images.onlinelabels.com/images/clip-art/dagobert83/dagobert83_female_user_icon.png',
      email: 'some@email.com'
    }),
    User.create({
      firstName: 'maximilion',
      shortName: 'maxi',
      lastName: 'medi',
      family: 'pine',
      age: 25,
      gender: 'male',
      isAdmin: false,
      title: 'dikko',
      selection: null,
      profileMessage:
        'I am younger and have a long message. I am younger and have a long message. I am younger and have a long message',
      photo:
        'https://s3.r29static.com//bin/entry/836/680x816,80/2059585/image.jpg',
      photoSmall:
        'https://s3.r29static.com//bin/entry/836/680x816,80/2059585/image.jpg',
      email: 'itsanother@email.com'
    })
  ])

  const product = await Promise.all([
    Product.create({
      name: "You don't know Javascript",
      shortName: "You don't know JS",
      estCost: 34.99,
      url: 'https://www.google.com',
      description:
        "No matter how much experience you have with JavaScript, odds are you don't fully understand the language. This concise yet in-depth guide takes you inside scope and closures, two core concepts you need to know to become a more efficient and effective JavaScript programmer. You'll learn how and why they work, and how an understanding of closures can be a powerful part of your development skillset. Like other books in the `You Don't Know JS` series, Scope and Closures dives into trickier parts of the language that many JavaScript programmers simply avoid. Armed with this knowledge, you can achieve true JavaScript mastery. Learn about scope, a set of rules to help JavaScript engines locate variables in your code Go deeper into nested scope, a series of containers for variables and functions Explore function- and block-based scope,?hoisting?, and the patterns and benefits of scope-based hiding Discover how to use closures for synchronous and asynchronous tasks, including the creation of JavaScript libraries.",
      purchased: false,
      photo:
        'https://prodimage.images-bn.com/pimages/9781491904244_p0_v4_s550x406.jpg',
      userId: 2
    }),
    Product.create({
      name: 'Eloquent JavaScript: A Modern Introduction to Programming',
      shortName: 'Eloquent JS',
      estCost: 17.99,
      url: 'https://www.google.com',
      description:
        "Eloquent JavaScript dives into this flourishing language and teaches you to write code that's beautiful and effective. By immersing you in example code and encouraging experimentation right from the start, the author quickly gives you the tools you need to build your own programs.",
      purchased: true,
      photo:
        'https://images-na.ssl-images-amazon.com/images/I/515jiKSErDL._SX376_BO1,204,203,200_.jpg',
      userId: 2
    }),
    Product.create({
      name:
        "JavaScript QuickStart Guide: The Simplified Beginner's Guide to JavaScript",
      shortName: 'JS Quickstart Guide',
      estCost: 11.51,
      url: 'https://www.google.com',
      description:
        "Do you want to learn JavaScript but don't know where to start? Are you overwhelmed by the 1,000 page long books that simply have TOO much information and are impossible to follow? Do you want to be up and running with JavaScript in just a few hours? Do you like getting the best 'bang' for your 'buck'? (Of course you do!) \nIf so, then look no further. \"JavaScript QuickStart Guide will take you step-by-step through the learning process so you will understand the fundamentals of JavaScript and how to integrate JavaScript into your web pages in minutes! \nAre you looking to change careers to something that will pay you more and have more flexibility? Are you looking to learn just for fun on the side? No matter why you want to learn JavaScript the \"JavaScript QuickStart Guide\" has you covered.",
      purchased: true,
      photo:
        'https://images-na.ssl-images-amazon.com/images/I/51OGcAjwIDL._SX404_BO1,204,203,200_.jpg',
      userId: 1
    })
  ])

  console.log(`seeded ${users.length} users`)
  console.log(`seeded ${product.length} product`)
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
// module.exports = seed
