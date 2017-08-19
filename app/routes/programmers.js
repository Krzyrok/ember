import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return ['programmer1', 'programmer2'];
  }
});
