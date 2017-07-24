import Ember from 'ember';

export default Ember.Component.extend({
  value: null,
  md5 : Ember.computed('value', function(){
    if(Ember.isEmpty(this.get('value'))){
      return "";
    }
    return md5(this.get('value'));
  })
});
