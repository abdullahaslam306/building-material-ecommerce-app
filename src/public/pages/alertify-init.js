/*
 Template Name: Admiry - Bootstrap 4 Admin Dashboard
 Author: Themesdesign
 Website: www.themesdesign.in
 File: Alertify init js
 */

(function () {
  function $(selector) {
    return document.querySelector(selector);
  }

  function reset(ev) {
    ev.preventDefault();
    alertify.reset();
  }

  function logDemo(selector) {
    (ga || function () { })('send', 'event', 'button', 'click', 'demo', selector);
  }

  function demo(selector, cb) {
    const el = $(selector);
    if (el) {
      el.addEventListener('click', (ev) => {
        ev.preventDefault();
        logDemo(selector);
        cb();
      });
    }
  }

  var ga = ga || function () {};

  // ==============================
  // Standard Dialogs
  demo('#alertify-alert', (ev) => {
    alertify.alert('This is an alert dialog');
    return false;
  });

  demo('#alertify-confirm', (ev) => {
    alertify.confirm('This is a confirm dialog', (ev) => {
      ev.preventDefault();
      alertify.success('You\'ve clicked OK');
    }, (ev) => {
      ev.preventDefault();
      alertify.error('You\'ve clicked Cancel');
    });
  });

  demo('#alertify-click-to-close', (ev) => {
    alertify
      .closeLogOnClick(true)
      .log('Click me to close!');
  });

  demo('#alertify-disable-click-to-close', (ev) => {
    alertify
      .closeLogOnClick(true)
      .log('Click me to close!')
      .closeLogOnClick(false)
      .log('You can\'t click to close this!');
  });

  demo('#alertify-reset', (ev) => {
    alertify
      .okBtn('Go For It!')
      .reset(ev)
      .alert('Custom values were reset');
  });

  demo('#alertify-log-template', (ev) => {
    alertify
      .setLogTemplate((input) => `log message: ${input}`)
      .log('This is the message');
  });

  demo('#alertify-max-log-items', (ev) => {
    alertify
      .maxLogItems(1)
      .log('This is the first message');

    // The timeout is just for visual effect.
    setTimeout(() => {
      alertify.log('The second message will force the first to close.');
    }, 1000);
  });

  demo('#alertify-prompt', (ev) => {
    alertify
      .defaultValue('Default value')
      .prompt('This is a prompt dialog', (str, ev) => {
        ev.preventDefault();
        alertify.success(`You've clicked OK and typed: ${str}`);
      }, (ev) => {
        ev.preventDefault();
        alertify.error('You\'ve clicked Cancel');
      });
  });

  // ==============================
  // Ajax
  demo('#alertify-ajax', (ev) => {
    alertify.confirm('Confirm?', (ev) => {
      ev.preventDefault();
      alertify.alert('Successful AJAX after OK');
    }, (ev) => {
      ev.preventDefault();
      alertify.alert('Successful AJAX after Cancel');
    });
  });

  // ==============================
  // Promise Aware
  demo('#alertify-promise', (ev) => {
    if (typeof Promise !== 'function') {
      alertify.alert('Your browser doesn\'t support promises');
      return;
    }

    alertify.confirm('Confirm?').then((resolvedValue) => {
      // The click event is in the
      // event variable, so you can use
      // it here.
      resolvedValue.event.preventDefault();
      alertify.alert(`You clicked the ${resolvedValue.buttonClicked} button!`);
    });
  });

  // ==============================
  // Standard Dialogs
  demo('#alertify-notification', (ev) => {
    alertify.log('Standard log message');
  });

  demo('#alertify-notification-html', (ev) => {
    alertify.log('<img src=\'https://placehold.it/256x128\'><h3 class=\'font-18\'>This is HTML</h3>');
  });

  demo('#alertify-notification-callback', (ev) => {
    alertify.log('Standard log message with callback', (ev) => {
      ev.preventDefault();
      alertify.log('You clicked the notification');
    });
  });

  demo('#alertify-success', (ev) => {
    alertify.success('Success log message');
  });

  demo('#alertify-success-callback', (ev) => {
    alertify.success('Standard log message with callback', () => {
      alertify.success('You clicked the notification');
    });
  });

  demo('#alertify-error', (ev) => {
    alertify.error('Error log message');
  });

  demo('#alertify-error-callback', (ev) => {
    alertify.error('Standard log message with callback', (ev) => {
      ev.preventDefault();
      alertify.error('You clicked the notification');
    });
  });

  // ==============================
  // Custom Properties
  demo('#alertify-delay', (ev) => {
    alertify
      .delay(10000)
      .log('Hiding in 10 seconds');
  });

  demo('#alertify-forever', (ev) => {
    alertify
      .delay(0)
      .log('Will stay until clicked');
  });

  demo('#alertify-labels', (ev) => {
    alertify
      .okBtn('Accept')
      .cancelBtn('Deny')
      .confirm('Confirm dialog with custom button labels', (ev) => {
        ev.preventDefault();
        alertify.success('You\'ve clicked OK');
      }, (ev) => {
        ev.preventDefault();
        alertify.error('You\'ve clicked Cancel');
      });
  });

  demo('#alertify-log-position', () => {
    alertify.delay(1000); // This is just to make the demo go faster.
    alertify.log('Default bottom left position');
    setTimeout(() => {
      alertify.logPosition('top left');
      alertify.log('top left');
    }, 1500);
    setTimeout(() => {
      alertify.logPosition('top right');
      alertify.log('top right');
    }, 3000);
    setTimeout(() => {
      alertify.logPosition('bottom right');
      alertify.log('bottom right');
    }, 4500);
    setTimeout(() => {
      alertify.reset(); // Puts the message back to default position.
      alertify.log('Back to default');
    }, 6000);
  });
}());
