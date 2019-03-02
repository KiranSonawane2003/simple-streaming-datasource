import { QueryCtrl } from 'app/plugins/sdk';

export class StreamingQueryCtrl extends QueryCtrl {
  constructor($scope, $injector) {
    super($scope, $injector);

    this.scope = $scope;
    this.target.target = this.target.target || 'select metric';
    this.target.type = this.target.type || 'timeserie';
  }

  onChangeInternal() {
    this.panelCtrl.refresh(); // Asks the panel to refresh data.
  }
}

StreamingQueryCtrl.templateUrl = 'partials/query.editor.html';
