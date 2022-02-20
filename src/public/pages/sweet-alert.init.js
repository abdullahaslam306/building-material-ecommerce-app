/*
 Template Name: Admiry - Bootstrap 4 Admin Dashboard
 Author: Themesdesign
 Website: www.themesdesign.in
 File: Sweet Alert init js
 */

!(function ($) {
  const SweetAlert = function () {
  };

  // examples
  SweetAlert.prototype.init = function () {
    // Basic
    $('#sa-basic').on('click', () => {
      swal('Any fool can use a computer').catch(swal.noop);
    });

    // A title with a text under
    $('#sa-title').click(() => {
      swal(
        'The Internet?',
        'That thing is still around?',
        'question',
      );
    });

    // Success Message
    $('#sa-success').click(() => {
      swal(
        {
          title: 'Good job!',
          text: 'You clicked the button!',
          type: 'success',
          showCancelButton: true,
          confirmButtonClass: 'btn btn-success',
          cancelButtonClass: 'btn btn-danger m-l-10',
        },
      );
    });

    // Warning Message
    $('#sa-warning').click(() => {
      swal({
        title: 'Are you sure?',
        text: 'You won\'t be able to revert this!',
        type: 'warning',
        showCancelButton: true,
        confirmButtonClass: 'btn btn-success',
        cancelButtonClass: 'btn btn-danger m-l-10',
        confirmButtonText: 'Yes, delete it!',
      }).then(() => {
        swal(
          'Deleted!',
          'Your file has been deleted.',
          'success',
        );
      });
    });

    // Parameter
    $('#sa-params').click(() => {
      swal({
        title: 'Are you sure?',
        text: 'You won\'t be able to revert this!',
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, cancel!',
        confirmButtonClass: 'btn btn-success',
        cancelButtonClass: 'btn btn-danger m-l-10',
        buttonsStyling: false,
      }).then(() => {
        swal(
          'Deleted!',
          'Your file has been deleted.',
          'success',
        );
      }, (dismiss) => {
        // dismiss can be 'cancel', 'overlay',
        // 'close', and 'timer'
        if (dismiss === 'cancel') {
          swal(
            'Cancelled',
            'Your imaginary file is safe :)',
            'error',
          );
        }
      });
    });

    // Custom Image
    $('#sa-image').click(() => {
      swal({
        title: 'Sweet!',
        text: 'Modal with a custom image.',
        imageUrl: 'assets/images/logo.png',
        imageHeight: 50,
        animation: false,
      });
    });

    // Auto Close Timer
    $('#sa-close').click(() => {
      swal({
        title: 'Auto close alert!',
        text: 'I will close in 2 seconds.',
        timer: 2000,
      }).then(
        () => {
        },
        // handling the promise rejection
        (dismiss) => {
          if (dismiss === 'timer') {
            console.log('I was closed by the timer');
          }
        },
      );
    });

    // custom html alert
    $('#custom-html-alert').click(() => {
      swal({
        title: '<i>HTML</i> <u>example</u>',
        type: 'info',
        html: 'You can use <b>bold text</b>, '
                + '<a href="//themesdesign.in/">links</a> '
                + 'and other HTML tags',
        showCloseButton: true,
        showCancelButton: true,
        confirmButtonClass: 'btn btn-success',
        cancelButtonClass: 'btn btn-danger m-l-10',
        confirmButtonText: '<i class="fa fa-thumbs-up"></i> Great!',
        cancelButtonText: '<i class="fa fa-thumbs-down"></i>',
      });
    });

    // Custom width padding
    $('#custom-padding-width-alert').click(() => {
      swal({
        title: 'Custom width, padding, background.',
        width: 600,
        padding: 100,
        background: '#fff url(//subtlepatterns2015.subtlepatterns.netdna-cdn.com/patterns/geometry.png)',
      });
    });

    // Ajax
    $('#ajax-alert').click(() => {
      swal({
        title: 'Submit email to run ajax request',
        input: 'email',
        showCancelButton: true,
        confirmButtonText: 'Submit',
        showLoaderOnConfirm: true,
        confirmButtonClass: 'btn btn-success',
        cancelButtonClass: 'btn btn-danger m-l-10',
        preConfirm(email) {
          return new Promise((resolve, reject) => {
            setTimeout(() => {
              if (email === 'taken@example.com') {
                reject('This email is already taken.');
              } else {
                resolve();
              }
            }, 2000);
          });
        },
        allowOutsideClick: false,
      }).then((email) => {
        swal({
          type: 'success',
          title: 'Ajax request finished!',
          html: `Submitted email: ${email}`,
        });
      });
    });

    // chaining modal alert
    $('#chaining-alert').click(() => {
      swal.setDefaults({
        input: 'text',
        confirmButtonText: 'Next &rarr;',
        showCancelButton: true,
        animation: false,
        progressSteps: ['1', '2', '3'],
      });

      const steps = [
        {
          title: 'Question 1',
          text: 'Chaining swal2 modals is easy',
        },
        'Question 2',
        'Question 3',
      ];

      swal.queue(steps).then((result) => {
        swal.resetDefaults();
        swal({
          title: 'All done!',
          html: `Your answers: <pre>${
            JSON.stringify(result)
          }</pre>`,
          confirmButtonText: 'Lovely!',
          showCancelButton: false,
        });
      }, () => {
        swal.resetDefaults();
      });
    });

    // Danger
    $('#dynamic-alert').click(() => {
      swal.queue([{
        title: 'Your public IP',
        confirmButtonText: 'Show my public IP',
        text: 'Your public IP will be received '
                + 'via AJAX request',
        showLoaderOnConfirm: true,
        preConfirm() {
          return new Promise((resolve) => {
            $.get('https://api.ipify.org?format=json')
              .done((data) => {
                swal.insertQueueStep(data.ip);
                resolve();
              });
          });
        },
      }]);
    });
  },
  // init
  $.SweetAlert = new SweetAlert(), $.SweetAlert.Constructor = SweetAlert;
}(window.jQuery)),

// initializing
(function ($) {
  $.SweetAlert.init();
}(window.jQuery));
