import Component from '@ember/component';
import { inject as service } from '@ember/service';


export default Component.extend({
  tour: service(),

  didRender() {
    this._super(...arguments);

    this.tour.set('defaultStepOptions', {
      classes: 'custom-class-name-1',
      modal: true
    });

    this.tour.set('requiredElements', [
      {
        selector: '#one',
        message: 'Selector one not found',
        title: 'Failed tour creation'
      },
      {
        selector: '.two',
        message: 'Selector two not found.',
        title: 'Failed tour creation'
      }
    ]);

    this.tour.addSteps([
      {
        id: 'intro1',
        options: {
          title: 'Step 1',
          text: 'Can add some <h3>html</h3> here. Attached to element by id <code>#one</code>.',
          attachTo: '#one bottom',
          classes: 'shepherd shepherd-open shepherd-theme-arrows shepherd-transparent-text',
          buttons: [
            {
              classes: 'shepherd-button-secondary',
              text: 'Exit',
              type: 'cancel'
            },
            {
              classes: 'shepherd-button-primary',
              text: 'Next',
              type: 'next'
            }
          ],
        },
      },
      {
        id: 'intro2',
        options: {
          attachTo: '.two bottom',
          title: 'Step 2!',
          text: 'This is attached to element by class <code>.two</code>.',
          buttons: [
            {
              text: 'Exit',
              type: 'cancel'
            },
            {
              text: 'Back',
              type: 'back'
            },
            {
              text: 'Something',
              action: function() {
                console.log("Some custom action")
              }
            }
          ],

          classes: 'custom-class-name-1',
          highlightClass: 'highlight',
          scrollTo: false,
          showCancelLink: true,

          when: {
            show: () => {
              console.log('show step');
            },
            hide: () => {
              console.log('hide step');
            }
          }
        }
      },
    ]);


  },

  actions: {
    startTour: function() {
      this.tour.start();
    }
  }
});
