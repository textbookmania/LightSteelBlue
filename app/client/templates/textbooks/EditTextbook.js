/**
 * After successful edit, go to List page.
 * See: https://github.com/aldeed/meteor-autoform#callbackshooks
 */
AutoForm.hooks({
  EditTextbookForm: {
    /**
     * After successful form submission, go to the ListStuff page.
     * @param formType The form.
     * @param result The result of form submission.
     */
    onSuccess: function(formType, result) {
      var postDoc = Textbook.findOne({_id: this.docId});
      Router.go('TextbookOffer', {_title: postDoc.title});
    }
  }
});

Template.EditTextbook.helpers({

  /**
   * @returns {*} All of the Stuff documents.
   */
  getTextbook: function () {
    return Textbook.findOne({isbn13: this.toString()});
  }
});
