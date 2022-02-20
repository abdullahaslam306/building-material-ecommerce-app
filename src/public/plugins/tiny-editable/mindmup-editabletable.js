/* global $, window */
$.fn.editableTableWidget = function (options) {
  return $(this).each(function () {
    const buildDefaultOptions = function () {
      const opts = $.extend({}, $.fn.editableTableWidget.defaultOptions);
      opts.editor = opts.editor.clone();
      return opts;
    };
    const activeOptions = $.extend(buildDefaultOptions(), options);
    const ARROW_LEFT = 37; const ARROW_UP = 38; const ARROW_RIGHT = 39; const ARROW_DOWN = 40; const ENTER = 13; const ESC = 27; const TAB = 9;
    const element = $(this);
    const editor = activeOptions.editor.css('position', 'absolute').hide().appendTo(element.parent());
    let active;
    const showEditor = function (select) {
      active = element.find('td:focus');
      if (active.length) {
        editor.val(active.text())
          .removeClass('error')
          .show()
          .offset(active.offset())
          .css(active.css(activeOptions.cloneProperties))
          .width(active.width())
          .height(active.height())
          .focus();
        if (select) {
          editor.select();
        }
      }
    };
    const setActiveText = function () {
      const text = editor.val();
      const evt = $.Event('change');
      let originalContent;
      if (active.text() === text || editor.hasClass('error')) {
        return true;
      }
      originalContent = active.html();
      active.text(text).trigger(evt, text);
      if (evt.result === false) {
        active.html(originalContent);
      }
    };
    const movement = function (element, keycode) {
      if (keycode === ARROW_RIGHT) {
        return element.next('td');
      } if (keycode === ARROW_LEFT) {
        return element.prev('td');
      } if (keycode === ARROW_UP) {
        return element.parent().prev().children().eq(element.index());
      } if (keycode === ARROW_DOWN) {
        return element.parent().next().children().eq(element.index());
      }
      return [];
    };
    editor.blur(() => {
      setActiveText();
      editor.hide();
    }).keydown(function (e) {
      if (e.which === ENTER) {
        setActiveText();
        editor.hide();
        active.focus();
        e.preventDefault();
        e.stopPropagation();
      } else if (e.which === ESC) {
        editor.val(active.text());
        e.preventDefault();
        e.stopPropagation();
        editor.hide();
        active.focus();
      } else if (e.which === TAB) {
        active.focus();
      } else if (this.selectionEnd - this.selectionStart === this.value.length) {
        const possibleMove = movement(active, e.which);
        if (possibleMove.length > 0) {
          possibleMove.focus();
          e.preventDefault();
          e.stopPropagation();
        }
      }
    })
      .on('input paste', () => {
        const evt = $.Event('validate');
        active.trigger(evt, editor.val());
        if (evt.result === false) {
          editor.addClass('error');
        } else {
          editor.removeClass('error');
        }
      });
    element.on('click keypress dblclick', showEditor)
      .css('cursor', 'pointer')
      .keydown((e) => {
        let prevent = true;
        const possibleMove = movement($(e.target), e.which);
        if (possibleMove.length > 0) {
          possibleMove.focus();
        } else if (e.which === ENTER) {
          showEditor(false);
        } else if (e.which === 17 || e.which === 91 || e.which === 93) {
          showEditor(true);
          prevent = false;
        } else {
          prevent = false;
        }
        if (prevent) {
          e.stopPropagation();
          e.preventDefault();
        }
      });

    element.find('td').prop('tabindex', 1);

    $(window).on('resize', () => {
      if (editor.is(':visible')) {
        editor.offset(active.offset())
          .width(active.width())
          .height(active.height());
      }
    });
  });
};
$.fn.editableTableWidget.defaultOptions = {
  cloneProperties: ['padding', 'padding-top', 'padding-bottom', 'padding-left', 'padding-right',
					  'text-align', 'font', 'font-size', 'font-family', 'font-weight',
					  'border', 'border-top', 'border-bottom', 'border-left', 'border-right'],
  editor: $('<input>'),
};
