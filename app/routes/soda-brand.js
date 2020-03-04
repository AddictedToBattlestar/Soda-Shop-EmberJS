import Route from '@ember/routing/route';

export default class SodaBrandRoute extends Route {
    model() {
        console.log('The model hook just ran!')
        // return "Hello Ember!";
        // return this.store.findAll('soda-brand');
        return this.store.findAll('movie');
        // return this.store.findAll('post');

      }
}
