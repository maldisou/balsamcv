"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _tinyInvariant = _interopRequireDefault(require("tiny-invariant"));

/* Copyright 2015 Mozilla Foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var DEFAULT_LINK_REL = 'noopener noreferrer nofollow';

var LinkService = /*#__PURE__*/function () {
  function LinkService() {
    (0, _classCallCheck2["default"])(this, LinkService);
    this.externalLinkTarget = null;
    this.externalLinkRel = null;
  }

  (0, _createClass2["default"])(LinkService, [{
    key: "setDocument",
    value: function setDocument(pdfDocument) {
      this.pdfDocument = pdfDocument;
    }
  }, {
    key: "setViewer",
    value: function setViewer(pdfViewer) {
      this.pdfViewer = pdfViewer;
    }
  }, {
    key: "setExternalLinkRel",
    value: function setExternalLinkRel(externalLinkRel) {
      this.externalLinkRel = externalLinkRel;
    }
  }, {
    key: "setExternalLinkTarget",
    value: function setExternalLinkTarget(externalLinkTarget) {
      this.externalLinkTarget = externalLinkTarget;
    }
  }, {
    key: "setHistory",
    value: function setHistory() {}
  }, {
    key: "pagesCount",
    get: function get() {
      return this.pdfDocument ? this.pdfDocument.numPages : 0;
    }
  }, {
    key: "page",
    get: function get() {
      return this.pdfViewer.currentPageNumber;
    },
    set: function set(value) {
      this.pdfViewer.currentPageNumber = value;
    }
  }, {
    key: "rotation",
    get: function get() {
      return 0;
    },
    set: function set(value) {}
  }, {
    key: "goToDestination",
    value: function goToDestination(dest) {
      var _this = this;

      new Promise(function (resolve) {
        if (typeof dest === 'string') {
          _this.pdfDocument.getDestination(dest).then(resolve);
        } else if (Array.isArray(dest)) {
          resolve(dest);
        } else {
          dest.then(resolve);
        }
      }).then(function (explicitDest) {
        (0, _tinyInvariant["default"])(Array.isArray(explicitDest), "\"".concat(explicitDest, "\" is not a valid destination array."));
        var destRef = explicitDest[0];
        new Promise(function (resolve) {
          if (destRef instanceof Object) {
            _this.pdfDocument.getPageIndex(destRef).then(function (pageIndex) {
              resolve(pageIndex);
            })["catch"](function () {
              (0, _tinyInvariant["default"])(false, "\"".concat(destRef, "\" is not a valid page reference."));
            });
          } else if (typeof destRef === 'number') {
            resolve(destRef);
          } else {
            (0, _tinyInvariant["default"])(false, "\"".concat(destRef, "\" is not a valid destination reference."));
          }
        }).then(function (pageIndex) {
          var pageNumber = pageIndex + 1;
          (0, _tinyInvariant["default"])(pageNumber >= 1 && pageNumber <= _this.pagesCount, "\"".concat(pageNumber, "\" is not a valid page number."));

          _this.pdfViewer.scrollPageIntoView({
            dest: dest,
            pageIndex: pageIndex,
            pageNumber: pageNumber
          });
        });
      });
    }
  }, {
    key: "navigateTo",
    value: function navigateTo(dest) {
      this.goToDestination(dest);
    }
  }, {
    key: "goToPage",
    value: function goToPage() {}
  }, {
    key: "addLinkAttributes",
    value: function addLinkAttributes(link, url, newWindow) {
      link.href = url;
      link.rel = this.externalLinkRel || DEFAULT_LINK_REL;
      link.target = newWindow ? '_blank' : this.externalLinkTarget || '';
    }
  }, {
    key: "getDestinationHash",
    value: function getDestinationHash() {
      return '#';
    }
  }, {
    key: "getAnchorUrl",
    value: function getAnchorUrl() {
      return '#';
    }
  }, {
    key: "setHash",
    value: function setHash() {}
  }, {
    key: "executeNamedAction",
    value: function executeNamedAction() {}
  }, {
    key: "cachePageRef",
    value: function cachePageRef() {}
  }, {
    key: "isPageVisible",
    value: function isPageVisible() {
      return true;
    }
  }, {
    key: "isPageCached",
    value: function isPageCached() {
      return true;
    }
  }]);
  return LinkService;
}();

exports["default"] = LinkService;