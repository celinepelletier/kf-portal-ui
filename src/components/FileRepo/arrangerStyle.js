import { css } from 'emotion';
export default () => css`
  @import url('https://fonts.googleapis.com/css?family=Montserrat:400,500,700');
  @import url('https://use.fontawesome.com/releases/v5.0.6/css/all.css');
  @import url('https://fonts.googleapis.com/css?family=Open+Sans');

  div {
    font-family: 'Montserrat', sans-serif;
  }
  .portal {
    flex-grow: 1;
  }
  /***********************************/
  /* styling for the table component */
  /***********************************/

  .scroll-react-table .ReactTable {
    flex-grow: 1;
  }

  .ReactTable {
    font-family: 'Montserrat', sans-serif;
    font-size: 0.8rem;
    background: #fff;
  }

  .ReactTable .rt-tbody .rt-tr-group {
    border-bottom: none;
  }

  .ReactTable .rt-tbody .rt-td {
    font-family: 'Open Sans', sans-serif;
    border-right: 1px solid #cacbcf;
  }

  .ReactTable .rt-tbody .rt-td :first-child {
    font-family: 'Open Sans', sans-serif;
  }

  .ReactTable.-striped .rt-th {
    font-weight: bolder;
    padding-top: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid #cacbcf;
    border-right: 1px solid #cacbcf;
  }

  .ReactTable .rt-resizable-header-content {
    color: #404c9a;
  }

  .ReactTable .rt-thead {
    background-color: #edeef1;
  }

  .ReactTable.-striped .rt-tr.-odd {
    background-color: #f4f5f8;
  }
  .ReactTable.-striped .rt-tr.-even {
    background-color: #fff;
  }

  .ReactTable .-pagination {
    height: 64px;
  }
  .ReactTable .-pagination .-pageJump {
    border: solid 1px #cacbcf;
    border-radius: 10px;
    height: 30px;
    display: flex;
    overflow: hidden;
  }
  .ReactTable .-pagination_button {
    display: flex;
    align-items: center;
    cursor: pointer;
    color: #74757d;
    border-right: solid 1px #cacbcf;
    min-width: 34px;
    padding-left: 0px;
    padding-right: 0px;
    align-items: center;
    justify-content: center;
  }
  .ReactTable .-pagination_button.-current {
    background: #f0f1f6;
    color: #009bb8;
  }
  .ReactTable .-pagination_button.-toEnd {
    border: none;
  }

  .ReactTable .-pagination_button.-disabled {
    cursor: default;
  }
  .ReactTable a {
    color: #90278e;
  }
  .ReactTable .pagination-bottom {
    background: white;
    height: 64px;
  }

  /***********************************/
  /** styling for the aggregations ***/
  /***********************************/

  .aggregation-card {
    padding: 10px;
    margin-top: 5px;
    margin-bottom: 5px;
    background: white;
    border-style: solid;
    border-color: #d4d6dd;
    border-width: 1px 0 1px 0;
    border-left: solid 5px;
  }
  .aggregation-card:first-child {
    margin-top: 0;
  }
  .aggregation-card:nth-child(5n + 1) {
    border-left-color: #a42c90;
  }
  .aggregation-card:nth-child(5n + 2) {
    border-left-color: #00afed;
  }
  .aggregation-card:nth-child(5n + 3) {
    border-left-color: #ff9324;
  }
  .aggregation-card:nth-child(5n + 4) {
    border-left-color: #009bb8;
  }
  .aggregation-card:nth-child(5n + 5) {
    border-left-color: #d8202f;
  }
  .aggregation-card .header {
    margin-top: -10px;
  }
  .aggregation-card .title-wrapper {
    padding-top: 10px;
    padding-bottom: 7px;
    color: #404c9a;
  }
  .aggregation-card .title-wrapper,
  .aggregation-card .filter {
    border-bottom: solid 1px #e0e1e6;
  }
  .aggregation-card .title-wrapper.collapsed {
    padding-bottom: 0px;
    border-bottom: none;
  }
  .aggregation-card .title-wrapper .title {
    color: #404c9a;
    font-weight: bolder;
    font-size: 0.9rem;
    font-family: 'Open Sans', sans-serif;
    margin-left: 5px;
  }
  .aggregation-card .filter {
    padding: 7px 0;
  }
  .aggregation-card input[type='checkbox'] {
    pointer-events: none;
    margin-right: 5px;
    flex-shrink: 0;
    vertical-align: middle;
  }
  .aggregation-card .filter .showMore-wrapper {
    margin-left: 5px;
    margin-top: 0px;
  }
  .aggregation-card .bucket {
    padding-top: 5px;
  }
  .aggregation-card .bucket.collapsed {
    padding-top: 0px;
  }
  .aggregation-card .bucket-item {
    padding-top: 5px;
    padding-bottom: 5px;
    cursor: pointer;
  }
  .aggregation-card .bucket-item .bucket-count {
    border-radius: 5px;
    background-color: rgba(169, 173, 192, 0.3);
    color: #343434;
    padding-left: 10px;
    padding-right: 10px;
    font-family: 'Open Sans', sans-serif;
    display: flex;
    align-items: center;
    margin-left: auto;
  }
  .showMore-wrapper {
    margin-top: 5px;
    font-size: 0.8rem;
    color: #90278e;
    cursor: pointer;
    display: flex;
    align-items: center;
  }

  .showMore-wrapper.more::before {
    margin-top: 3px;
    margin-right: 4px;
    content: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+ICA8Y2lyY2xlIGN4PSI2IiBjeT0iNiIgcj0iNiIgZmlsbD0iIzkwMjc4ZSIgLz4gIDxsaW5lIHgxPSI2IiB5MT0iMiIgeDI9IjYiIHkyPSIxMCIgc3R5bGU9InN0cm9rZTp3aGl0ZTsgc3Ryb2tlLXdpZHRoOjIiIC8+ICA8bGluZSB4MT0iMiIgeTE9IjYiIHgyPSIxMCIgeTI9IjYiIHN0eWxlPSJzdHJva2U6d2hpdGU7IHN0cm9rZS13aWR0aDoyIiAvPjwvc3ZnPg==);
  }

  .showMore-wrapper.less::before {
    margin-top: 3px;
    margin-right: 4px;
    content: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+ICA8Y2lyY2xlIGN4PSI2IiBjeT0iNiIgcj0iNiIgZmlsbD0iIzkwMjc4ZSIgLz4gIDxsaW5lIHgxPSIyIiB5MT0iNiIgeDI9IjEwIiB5Mj0iNiIgc3R5bGU9InN0cm9rZTp3aGl0ZTsgc3Ryb2tlLXdpZHRoOjIiIC8+PC9zdmc+);
  }

  .aggregation-card .react-datepicker-wrapper input,
  .aggregation-card .bucket-item,
  .aggregation-card .input-range__label,
  .aggregation-card .filter,
  .aggregation-card .toggle-button {
    font-size: 0.8rem;
  }

  .facetContainer .react-datepicker-wrapper input,
  .aggregation-card .react-datepicker-wrapper input {
    padding: 5px;
    border-radius: 10px;
    border: 1px solid #cacbcf;
  }

  .facetContainer .react-datepicker-wrapper input {
    width: 130px;
  }

  .aggregation-card .react-datepicker-wrapper input {
    width: 100px;
  }

  /**************************************/
  /* styling for the SQONView component */
  /**************************************/

  .sqon-view {
    background-color: #f4f5f8;
    border: solid 1px #d4d6dd;
    padding: 4px 19px 14px;
  }

  .sqon-group {
    flex-wrap: wrap;
  }

  .sqon-group > * {
    margin-top: 10px;
  }

  .sqon-view-empty {
    display: none;
  }

  .sqon-bubble,
  .sqon-less,
  .sqon-more {
    display: flex;
    align-items: center;
    height: 22px;
    border-radius: 10.5px;
    font-family: Montserrat;
    font-size: 11px;
    font-weight: 300;
    letter-spacing: 0.2px;
    margin-right: 10px;
    flex: none;
  }

  .sqon-clear.sqon-bubble {
    font-weight: bold;
  }

  .sqon-value {
    background-color: #404c9a;
    color: #fff;
    padding: 0 7px 0 12px;
    margin-right: 4px;
    cursor: pointer;
  }

  .sqon-value:after {
    content: url(data:image/svg+xml,%3Csvg%20width%3D%228%22%20height%3D%228%22%20stroke%3D%22white%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%0A%20%20%3Cline%20x1%3D%220%22%20y1%3D%220%22%20x2%3D%228%22%20y2%3D%228%22%20/%3E%0A%20%20%3Cline%20x1%3D%228%22%20y1%3D%220%22%20x2%3D%220%22%20y2%3D%228%22%20/%3E%0A%3C/svg%3E);
    margin-left: 9px;
  }

  .sqon-value-single {
    margin-right: 10px;
  }

  .sqon-op {
    font-weight: normal;
    color: #74757d;
    margin-right: 5px;
  }

  .sqon-field {
    font-weight: 600;
    color: #343434;
    text-transform: uppercase;
    margin-right: 0.3rem;
  }

  .sqon-clear,
  .sqon-less,
  .sqon-more {
    padding: 0 12px;
    color: #fff;
    background-color: #ffffff;
    color: #008199;
    border: solid 1px #cacbcf;
    text-transform: uppercase;
    cursor: pointer;
  }

  .sqon-less,
  .sqon-more {
    margin-right: 6px;
  }

  .sqon-more {
    font-size: 24px;
    line-height: 0.3rem;
    display: block;
    color: #009bb8;
  }

  .sqon-value-group {
    font-size: 22px;
    line-height: 22px;
    color: #009bb8;
  }

  .sqon-value-group-start {
    margin-right: 6px;
    margin-left: 8px;
  }

  .sqon-value-group-end {
    margin-right: 10px;
  }

  /**************************************/
  /****** styling for the input  ********/
  /**************************************/
  .inputWrapper .inputIcon {
    margin-right: 10px;
    color: #a9adc0;
  }
  .inputWrapper .inputRightIcon {
    color: #a9adc0;
    font-size: 20px;
  }
  .inputWrapper {
    background: white;
    border-radius: 10px;
  }

  /**************************************/
  /****** styling for quick search ******/
  /**************************************/
  .quick-search-pinned-value {
    margin-bottom: 10px;
  }
  .quick-search-pinned-value > * {
    display: inline-flex;
  }
  .quick-search-results {
    box-shadow: 1px 1px 1px 0px rgba(0, 0, 0, 0.43);
  }
  .quick-search-result {
    display: flex;
    align-items: center;
    background: white;
  }
  .quick-search-result:hover {
    box-shadow: inset 0px 0px 15px 0px rgba(0, 0, 0, 0.1);
  }
  .quick-search-result:hover,
  .quick-search-result:nth-child(even) {
    background-color: #f4f5f8;
  }
  .quick-search-result-entity {
    border-radius: 50%;
    width: 14%;
    margin: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .quick-search-result-entity:before {
    content: '';
    float: left;
    padding-top: 100%;
  }
  .quick-search-result-details {
    overflow: hidden;
  }
  .quick-search-result-key {
    font-size: 0.9em;
  }
  .quick-search-result-value {
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 0.7em;
    white-space: nowrap;
  }
  .quick-search-result-entity-1 {
    background-color: #a42c90;
  }
  .quick-search-result-entity-2 {
    background-color: #00afed;
  }
  .quick-search-result-entity-3 {
    background-color: #ff9324;
  }
  .quick-search-result-entity-4 {
    background-color: #009bb8;
  }
  .quick-search-result-entity-5 {
    background-color: #d8202f;
  }

  /**************************************/
  /******* styling for match box  *******/
  /**************************************/
  .match-box-id-form > * {
    margin-bottom: 1.5em;
  }
  .match-box-id-form textarea {
    min-height: 100px;
  }
  .match-box-select-entity-form {
    margin-bottom: 20px;
  }

  /**************************************/
  /***** styling for the dropdown  ******/
  /**************************************/
  .dropDownHeader {
    display: flex;
  }

  .dropDownHeader .dropDownButton {
    border: none;
  }

  /**************************************/
  /*** styling for the Table Toolbar ****/
  /**************************************/
  .tableToolbar {
    padding: 14px 19px 12px 15px;
    background: #fff;
  }

  .tableToolbar .buttonWrapper {
    display: flex;
  }

  .tableToolbar .buttonWrapper button {
    display: flex;
    background: none;
    border: none;
  }

  .tableToolbar .inputWrapper {
    border: none;
  }

  .tableToolbar .group {
    margin-left: 10px;
    display: flex;
  }

  .tableToolbar .group > * {
    background-color: none;
    display: flex;
    border: solid 1px #cacbcf;
    padding-left: 10px;
    padding-right: 10px;
  }

  .tableToolbar .group > :first-child {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }
  .tableToolbar .group > :last-child {
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }

  .range-wrapper {
    min-height: 2.7rem;
  }

  /*********************************************/
  /******** styling for the Slider *************/
  /*********************************************/
  .input-range__slider {
    background-color: #ffffff;
    box-shadow: 0 0 5.9px 0.1px #bbbbbb;
    border: solid 1px #c3c3c3;
  }
  .input-range__track.input-range__track--active {
    background-color: #009bb8;
  }
  .input-range__label--max .input-range__label-container {
    left: 0px;
  }
  .input-range__label--min .input-range__label-container {
    left: 0px;
  }

  .input-range__label.input-range__label--value .input-range__label-container {
    left: 0px;
  }

  .input-range__slider-container:nth-child(3) .input-range__label.input-range__label--value {
    right: 100%;
  }

  /*********************************************/
  /*********** styling for the AFV *************/
  /*********************************************/
  .facetViewWrapper .panelHeading {
    background-color: #e1f0f3;
    padding: 10px;
    font-size: 13px;
    display: flex;
    align-items: center;
  }
  .facetViewWrapper .panel {
    border: solid 1px #d4d6dd;
  }
  .facetViewWrapper .treeViewPanel {
    background-color: #fafafc;
  }
  .facetViewWrapper .treeViewPanel .panelHeading .valueOnlyCheck {
    text-align: right;
  }
  .facetViewWrapper .treeViewPanel .panelHeading .fieldsShown {
    font-weight: bold;
  }
  .facetViewWrapper .facetsPanel .panelHeading .filterInput {
    margin-right: 10px;
  }

  .facetViewWrapper .facetContainer .header {
    background-color: #e7e8ed;
  }

  .facetViewWrapper .facetContainer .header .title {
    color: #a42c90;
  }

  .facetViewWrapper .facetContainer .header .breadscrumbs {
    color: #2b388f;
  }

  .aggregation-card .toggle-button .bucket-count,
  .facetViewWrapper .bucket-count {
    border-radius: 5px;
    background-color: #e7e8ed;
    padding-left: 5px;
    padding-right: 5px;
  }

  .facetViewWrapper .bucket .bucket-item:nth-child(4n + 1):not(:last-child),
  .facetViewWrapper .bucket .bucket-item:nth-child(4n + 2):not(:last-child),
  .facetViewWrapper .bucket .bucket-item:nth-child(4n + 3):not(:last-child) {
    border-right: solid 1px #e0e1e6;
  }

  .facetViewWrapper .bucket .bucket-item:not(.last_row) {
    border-bottom: solid 1px #e0e1e6;
  }

  .facetViewWrapper .bucket .bucket-item:last-child:not(.col_3):not(.only_row) {
    border-right: solid 1px #e0e1e6;
  }

  /*********************************************/
  /************* styling for tabs **************/
  /*********************************************/
  .tabs-title {
    border: solid 1px #d4d6dd;
    border-bottom: none;
    cursor: pointer;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    padding: 10px 20px;
    margin-right: 10px;
    background-color: #f4f5f8;
    color: #2b388f;
  }
  .tabs-title.active-tab {
    border: none;
    background-color: #404c9a;
    color: white;
  }
  .tabs-table .rt-th {
    color: #2b388f;
  }

  /*********************************************/
  /************* styling for stats *************/
  /*********************************************/
  .stats-container {
    border: solid 1px #e0e1e6;
    padding: 14px 0;
    background: #fff;
  }
  .stats-container.transparent {
    border: none;
    background: transparent;
  }
  .stats-container .stats-line {
    width: 1px;
    height: 35px;
    background-color: #d4d6dd;
  }
  .stats-container .stat-container {
    display: flex;
    flex-grow: 1;
    align-items: center;
    justify-content: center;
  }
  .stats-container .stat-container .stat-content {
    font-size: 18px;
    font-weight: 500;
    letter-spacing: 0.3px;
    color: #343434;
    margin-right: 6px;
  }
  .stats-container .stat-container .stat-label {
    font-size: 13px;
    font-weight: 300;
    line-height: 1.54;
    letter-spacing: 0.2px;
    color: #74757d;
  }
  .stats-container.small .stat-container .stat-content {
    font-size: 14px;
  }
  .stats-container.small .stat-container .stat-label {
    font-size: 10px;
  }
`;
