"use strict";

/* istanbul ignore file */

/* global ace */
ace.define('ace/theme/jira', ['require', 'exports', 'module', 'ace/lib/dom'], function (acequire, exports) {
  'use strict';

  exports.isDark = false;
  exports.cssClass = 'ace-jira';
  exports.cssText = "ace_editor {\n  margin: auto;\n  width: 100%;\n}\n.ace-jira .ace_gutter {\n  background: rgb(235, 236, 240);\n  color: rgb(137, 147, 164);\n}\n\n.ace-jira .ace_print-margin {\n  width: 1px;\n  background: #e8e8e8;\n}\n\n.ace-jira .ace_fold {\n  background-color: #6B72E6;\n}\n\n.ace-jira {\n  background: #FFFFFF;\n  color: #172B4D;\n}\n\n.ace-jira .ace_cursor {\n  color: black;\n}\n\n.ace-jira .ace_invisible {\n  color: rgb(191, 191, 191);\n}\n\n.ace-jira .ace_storage, .ace-jira .ace_keyword {\n  font-weight: bolder;\n}\n\n.ace-jira .ace_constant {\n  color: rgb(197, 6, 11);\n}\n\n.ace-jira .ace_constant.ace_buildin {\n  color: rgb(88, 72, 246);\n}\n\n.ace-jira .ace_constant.ace_language {\n  color: rgb(88, 92, 246);\n}\n\n.ace-jira .ace_constant.ace_library {\n  color: rgb(6, 150, 14);\n}\n\n.ace-jira .ace_invalid {\n  background-color: rgba(255, 0, 0, 0.1);\n  color: red;\n}\n\n.ace-jira .ace_support.ace_function {\n  color: rgb(60, 76, 114);\n}\n\n.ace-jira .ace_support.ace_constant {\n  color: rgb(6, 150, 14);\n}\n\n.ace-jira .ace_support.ace_type,\n  .ace-jira .ace_support.ace_class {\n  color: rgb(109, 121, 222);\n}\n\n.ace-jira .ace_keyword.ace_operator {\n  color: rgb(104, 118, 135);\n}\n\n.ace-jira .ace_string {\n  color: #36B37E;\n}\n\n.ace-jira .ace_comment {\n  color: rgb(80, 95, 121);\n}\n\n.ace-jira .ace_argument {\n  color: rgb(101, 84, 192);\n}\n\n.ace-jira .ace_comment.ace_doc {\n  color: rgb(0, 102, 255);\n}\n\n.ace-jira .ace_comment.ace_doc.ace_tag {\n  color: rgb(128, 159, 191);\n}\n\n.ace-jira .ace_constant.ace_numeric {\n  color: rgb(0, 0, 205);\n}\n\n.ace-jira .ace_variable {\n  color: rgb(49, 132, 149);\n}\n\n.ace-jira .ace_xml-pe {\n  color: rgb(104, 104, 91);\n}\n\n.ace-jira .ace_entity.ace_name.ace_function {\n  color: #0000A2;\n}\n\n.ace-jira .ace_heading {\n  color: rgb(12, 7, 255);\n}\n\n.ace-jira .ace_list {\n  color: rgb(185, 6, 144);\n}\n\n.ace-jira .ace_meta.ace_tag {\n  color: rgb(0, 22, 142);\n}\n\n.ace-jira .ace_string.ace_regex {\n  color: rgb(255, 0, 0);\n}\n\n.ace-jira .ace_marker-layer .ace_selection {\n  background: rgb(181, 213, 255);\n}\n\n.ace-jira.ace_multiselect .ace_selection.ace_start {\n  box-shadow: 0 0 3px 0px white;\n}\n\n.ace-jira .ace_marker-layer .ace_step {\n  background: rgb(252, 255, 0);\n}\n\n.ace-jira .ace_marker-layer .ace_stack {\n  background: rgb(164, 229, 101);\n}\n\n.ace-jira .ace_marker-layer .ace_bracket {\n  margin: -1px 0 0 -1px;\n  border: 1px solid rgb(192, 192, 192);\n}\n\n.ace-jira .ace_marker-layer .ace_active-line {\n  background: rgba(0, 0, 0, 0.07);\n}\n\n.ace-jira .ace_gutter-active-line {\n  background-color: #dcdcdc;\n}\n\n.ace-jira .ace_marker-layer .ace_selected-word {\n  background: rgb(250, 250, 255);\n  border: 1px solid rgb(200, 200, 250);\n}\n\n.ace-jira .ace_indent-guide {\n  background: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAE0lEQVQImWP4////f4bLly//BwAmVgd1/w11/gAAAABJRU5ErkJggg==\") right repeat-y;\n}\n\n.ace-jira .ace_tooltip {\n  max-width: 400px;\n  white-space: pre-wrap;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n}";
  const dom = acequire('../lib/dom');
  dom.importCssString(exports.cssText, exports.cssClass);
});