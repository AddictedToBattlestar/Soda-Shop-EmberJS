export default function(server) {
  server.loadFixtures();
  server.createList('post', 5);
  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.
  */

  // server.createList('post', 10);
}
