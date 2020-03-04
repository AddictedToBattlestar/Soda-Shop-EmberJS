import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('soda-brand', {
    path: '/'
  }, function() {
    this.route('soda-brand', {
      path: '/:soda-brand_id'
    }, function() {
      this.route('soda');
    })
  });
});

export default Router;
