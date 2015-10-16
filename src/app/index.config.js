(function() {
  'use strict';

  angular
    .module('labs')
    .config(config);

  /** @ngInject */
  function config($logProvider, toastr,ivhTreeviewOptionsProvider,uiSelectConfig) {
    // Enable log
    $logProvider.debugEnabled(true);
    ivhTreeviewOptionsProvider.set({
      idAttribute: 'name',
      labelAttribute: 'name',
      childrenAttribute: 'children',
      twistieExpandedTpl: '<span class="glyphicon glyphicon-menu-down"></span>',
      twistieCollapsedTpl: '<span class="glyphicon glyphicon-menu-right"></span>',
      twistieLeafTpl: '',
      defaultSelectedState: true,
      selectedAttribute: 'selected',
      useCheckboxes: true,
      expandToDepth: 1
    });
    uiSelectConfig.closeOnSelect=false;
    /*ivhTreeviewOptionsProvider.set({
      idAttribute: 'id',
      labelAttribute: 'label',
      childrenAttribute: 'children',
      selectedAttribute: 'selected',
      useCheckboxes: true,
      expandToDepth: 0,
      indeterminateAttribute: '__ivhTreeviewIndeterminate',
      defaultSelectedState: true,
      validate: true,
      twistieExpandedTpl: '(-)',
      twistieCollapsedTpl: '(+)',
      twistieLeafTpl: 'o',
      nodeTpl: '...'
    });*/

    // Set options third-party lib
    toastr.options.timeOut = 3000;
    toastr.options.positionClass = 'toast-top-right';
    toastr.options.preventDuplicates = true;
    toastr.options.progressBar = true;
  }

})();
