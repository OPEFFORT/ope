"use strict";
(self["webpackChunkslide_layout"] = self["webpackChunkslide_layout"] || []).push([["lib_index_js"],{

/***/ "./lib/index.js":
/*!**********************!*\
  !*** ./lib/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jupyterlab/apputils */ "webpack/sharing/consume/default/@jupyterlab/apputils");
/* harmony import */ var _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _jupyterlab_notebook__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @jupyterlab/notebook */ "webpack/sharing/consume/default/@jupyterlab/notebook");
/* harmony import */ var _jupyterlab_notebook__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_jupyterlab_notebook__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _jupyterlab_mainmenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @jupyterlab/mainmenu */ "webpack/sharing/consume/default/@jupyterlab/mainmenu");
/* harmony import */ var _jupyterlab_mainmenu__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_jupyterlab_mainmenu__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lumino_widgets__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @lumino/widgets */ "webpack/sharing/consume/default/@lumino/widgets");
/* harmony import */ var _lumino_widgets__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_lumino_widgets__WEBPACK_IMPORTED_MODULE_3__);




// import { ICommandPalette, MainAreaWidget } from '@jupyterlab/apputils';
// import { Widget } from '@lumino/widgets';
/**
 * Initialization data for the slide_layout extension.
 */
const slideTypes = ['slide', 'subslide', 'fragment', 'skip', 'notes'];
function setCellSlide(cell, value) {
    if (cell) {
        let data = cell.model.metadata.get('slideshow') || Object.create(null);
        if (value === null || !slideTypes.includes(value)) {
            // Make a shallow copy so we aren't modifying the original metadata.
            data = Object.assign({}, data);
            delete data.slide_type;
        }
        else {
            data = Object.assign(Object.assign({}, data), { slide_type: value });
        }
        cell.model.metadata.set('slideshow', data);
    }
}
const plugin = {
    id: 'slide_layout:plugin',
    autoStart: true,
    requires: [_jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_0__.ICommandPalette, _jupyterlab_notebook__WEBPACK_IMPORTED_MODULE_1__.INotebookTracker, _jupyterlab_mainmenu__WEBPACK_IMPORTED_MODULE_2__.IMainMenu],
    activate: (app, palette, tracker, mainMenu) => {
        console.log('JupyterLab extension slide_layout is activated!');
        const { commands } = app;
        commands.addCommand('openLink', {
            label: 'Documentation',
            caption: 'Documentation',
            execute: () => {
                const win = window.open('https://jupyterlab.readthedocs.io/en/stable/', '_blank');
                win === null || win === void 0 ? void 0 : win.focus();
            }
        });
        commands.addCommand('createBlankSlide', {
            label: 'Blank Slide',
            caption: 'Blank Slide',
            execute: () => {
                const current = tracker.currentWidget;
                const notebook = current.content;
                // add a dividing line
                _jupyterlab_notebook__WEBPACK_IMPORTED_MODULE_1__.NotebookActions.insertBelow(notebook);
                _jupyterlab_notebook__WEBPACK_IMPORTED_MODULE_1__.NotebookActions.changeCellType(notebook, 'markdown');
                let activeCell = notebook.activeCell;
                activeCell.model.value.text = '<hr>';
                setCellSlide(activeCell, 'skip');
                // add a body label
                _jupyterlab_notebook__WEBPACK_IMPORTED_MODULE_1__.NotebookActions.insertBelow(notebook);
                _jupyterlab_notebook__WEBPACK_IMPORTED_MODULE_1__.NotebookActions.changeCellType(notebook, 'markdown');
                activeCell = notebook.activeCell;
                activeCell.model.value.text = '**BODY**';
                //set cell slidetype to skip
                setCellSlide(activeCell, 'skip');
                // add a BODY cell
                _jupyterlab_notebook__WEBPACK_IMPORTED_MODULE_1__.NotebookActions.insertBelow(notebook);
                _jupyterlab_notebook__WEBPACK_IMPORTED_MODULE_1__.NotebookActions.changeCellType(notebook, 'markdown');
                activeCell = notebook.activeCell;
                //set cell slidetype to slide to display as a new slide
                setCellSlide(activeCell, 'slide');
                // add a NOTE label
                _jupyterlab_notebook__WEBPACK_IMPORTED_MODULE_1__.NotebookActions.insertBelow(notebook);
                _jupyterlab_notebook__WEBPACK_IMPORTED_MODULE_1__.NotebookActions.changeCellType(notebook, 'markdown');
                activeCell = notebook.activeCell;
                activeCell.model.value.text = '**NOTE**';
                setCellSlide(activeCell, 'skip');
                // add a NOTE cell
                _jupyterlab_notebook__WEBPACK_IMPORTED_MODULE_1__.NotebookActions.insertBelow(notebook);
                _jupyterlab_notebook__WEBPACK_IMPORTED_MODULE_1__.NotebookActions.changeCellType(notebook, 'markdown');
                activeCell = notebook.activeCell;
                activeCell.model.value.text = '- a Note that will display in the notes view';
                setCellSlide(activeCell, 'notes');
            }
        });
        commands.addCommand('imageOnlySlide', {
            label: 'Image only',
            caption: 'Image only',
            execute: () => {
                const current = tracker.currentWidget;
                const notebook = current.content;
                // add a dividing line
                _jupyterlab_notebook__WEBPACK_IMPORTED_MODULE_1__.NotebookActions.insertBelow(notebook);
                _jupyterlab_notebook__WEBPACK_IMPORTED_MODULE_1__.NotebookActions.changeCellType(notebook, 'markdown');
                let activeCell = notebook.activeCell;
                activeCell.model.value.text = '<hr>';
                setCellSlide(activeCell, 'skip');
                // add a body label
                _jupyterlab_notebook__WEBPACK_IMPORTED_MODULE_1__.NotebookActions.insertBelow(notebook);
                _jupyterlab_notebook__WEBPACK_IMPORTED_MODULE_1__.NotebookActions.changeCellType(notebook, 'markdown');
                activeCell = notebook.activeCell;
                activeCell.model.value.text = '**Image Only**';
                //set cell slidetype to skip
                setCellSlide(activeCell, 'skip');
                // add a IMAGE cell
                _jupyterlab_notebook__WEBPACK_IMPORTED_MODULE_1__.NotebookActions.insertBelow(notebook);
                _jupyterlab_notebook__WEBPACK_IMPORTED_MODULE_1__.NotebookActions.changeCellType(notebook, 'markdown');
                activeCell = notebook.activeCell;
                activeCell.model.value.text = '<img src="../images/default.png" width = "100%">';
                //set cell slidetype to slide to display as a new slide
                setCellSlide(activeCell, 'slide');
                _jupyterlab_notebook__WEBPACK_IMPORTED_MODULE_1__.NotebookActions.insertBelow(notebook);
                _jupyterlab_notebook__WEBPACK_IMPORTED_MODULE_1__.NotebookActions.changeCellType(notebook, 'markdown');
                activeCell = notebook.activeCell;
                activeCell.model.value.text = '**NOTE**';
                setCellSlide(activeCell, 'skip');
                _jupyterlab_notebook__WEBPACK_IMPORTED_MODULE_1__.NotebookActions.insertBelow(notebook);
                _jupyterlab_notebook__WEBPACK_IMPORTED_MODULE_1__.NotebookActions.changeCellType(notebook, 'markdown');
                activeCell = notebook.activeCell;
                activeCell.model.value.text =
                    '- Using % of slide to scale the image';
                setCellSlide(activeCell, 'notes');
            }
        });
        commands.addCommand('leftBulletsRightImageSlide', {
            label: 'Left Bullets Right Image',
            caption: 'Left Bullets Right Image',
            execute: () => {
                const current = tracker.currentWidget;
                const notebook = current.content;
                // add a dividing line
                _jupyterlab_notebook__WEBPACK_IMPORTED_MODULE_1__.NotebookActions.insertBelow(notebook);
                _jupyterlab_notebook__WEBPACK_IMPORTED_MODULE_1__.NotebookActions.changeCellType(notebook, 'markdown');
                let activeCell = notebook.activeCell;
                activeCell.model.value.text = '<hr>';
                setCellSlide(activeCell, 'skip');
                // add a body label
                _jupyterlab_notebook__WEBPACK_IMPORTED_MODULE_1__.NotebookActions.insertBelow(notebook);
                _jupyterlab_notebook__WEBPACK_IMPORTED_MODULE_1__.NotebookActions.changeCellType(notebook, 'markdown');
                activeCell = notebook.activeCell;
                activeCell.model.value.text = '# Title';
                //set cell slidetype to slide to display as a new slide
                setCellSlide(activeCell, 'slide');
                // add a BODY cell
                _jupyterlab_notebook__WEBPACK_IMPORTED_MODULE_1__.NotebookActions.insertBelow(notebook);
                _jupyterlab_notebook__WEBPACK_IMPORTED_MODULE_1__.NotebookActions.changeCellType(notebook, 'markdown');
                activeCell = notebook.activeCell;
                activeCell.model.value.text = '<table>\n \
        <tr>\n \
          <td> <ul> <li> Bullet 1 : Something keypoints, and a long description </li> \n \
                    <li> Bullet 2 : Something keypoints, and a long description </li> </ul> </td>\n \
          <td> <img src="../images/default.png" width = "100%">\n \
        </tr>\n \
        </table>';
                // add a BODY cell
                _jupyterlab_notebook__WEBPACK_IMPORTED_MODULE_1__.NotebookActions.insertBelow(notebook);
                _jupyterlab_notebook__WEBPACK_IMPORTED_MODULE_1__.NotebookActions.changeCellType(notebook, 'markdown');
                activeCell = notebook.activeCell;
                activeCell.model.value.text = 'Closing Comment';
                _jupyterlab_notebook__WEBPACK_IMPORTED_MODULE_1__.NotebookActions.insertBelow(notebook);
                _jupyterlab_notebook__WEBPACK_IMPORTED_MODULE_1__.NotebookActions.changeCellType(notebook, 'markdown');
                activeCell = notebook.activeCell;
                activeCell.model.value.text = '**NOTE**';
                setCellSlide(activeCell, 'skip');
                _jupyterlab_notebook__WEBPACK_IMPORTED_MODULE_1__.NotebookActions.insertBelow(notebook);
                _jupyterlab_notebook__WEBPACK_IMPORTED_MODULE_1__.NotebookActions.changeCellType(notebook, 'markdown');
                activeCell = notebook.activeCell;
                activeCell.model.value.text =
                    '- Using % of slide to scale the image';
                setCellSlide(activeCell, 'notes');
            }
        });
        commands.addCommand('leftImageRightBulletsSlide', {
            label: 'Left Image Right Bullets ',
            caption: 'Left Image Right Bullets',
            execute: () => {
                const current = tracker.currentWidget;
                const notebook = current.content;
                // add a dividing line
                _jupyterlab_notebook__WEBPACK_IMPORTED_MODULE_1__.NotebookActions.insertBelow(notebook);
                _jupyterlab_notebook__WEBPACK_IMPORTED_MODULE_1__.NotebookActions.changeCellType(notebook, 'markdown');
                let activeCell = notebook.activeCell;
                activeCell.model.value.text = '<hr>';
                setCellSlide(activeCell, 'skip');
                // add a body label
                _jupyterlab_notebook__WEBPACK_IMPORTED_MODULE_1__.NotebookActions.insertBelow(notebook);
                _jupyterlab_notebook__WEBPACK_IMPORTED_MODULE_1__.NotebookActions.changeCellType(notebook, 'markdown');
                activeCell = notebook.activeCell;
                activeCell.model.value.text = '# Title';
                //set cell slidetype to slide to display as a new slide
                setCellSlide(activeCell, 'slide');
                // add a BODY cell
                _jupyterlab_notebook__WEBPACK_IMPORTED_MODULE_1__.NotebookActions.insertBelow(notebook);
                _jupyterlab_notebook__WEBPACK_IMPORTED_MODULE_1__.NotebookActions.changeCellType(notebook, 'markdown');
                activeCell = notebook.activeCell;
                activeCell.model.value.text = '<table>\n \
        <tr>\n \
          <td> <img src="../images/default.png" width = "100%">\n \
          <td> <ul> <li> Bullet 1 : Something keypoints, and a long description </li> \n \
                    <li> Bullet 2 : Something keypoints, and a long description </li> </ul> </td>\n \
        </tr>\n \
        </table>';
                // add a BODY cell
                _jupyterlab_notebook__WEBPACK_IMPORTED_MODULE_1__.NotebookActions.insertBelow(notebook);
                _jupyterlab_notebook__WEBPACK_IMPORTED_MODULE_1__.NotebookActions.changeCellType(notebook, 'markdown');
                activeCell = notebook.activeCell;
                activeCell.model.value.text = 'Closing Comment';
                _jupyterlab_notebook__WEBPACK_IMPORTED_MODULE_1__.NotebookActions.insertBelow(notebook);
                _jupyterlab_notebook__WEBPACK_IMPORTED_MODULE_1__.NotebookActions.changeCellType(notebook, 'markdown');
                activeCell = notebook.activeCell;
                activeCell.model.value.text = '**NOTE**';
                setCellSlide(activeCell, 'skip');
                _jupyterlab_notebook__WEBPACK_IMPORTED_MODULE_1__.NotebookActions.insertBelow(notebook);
                _jupyterlab_notebook__WEBPACK_IMPORTED_MODULE_1__.NotebookActions.changeCellType(notebook, 'markdown');
                activeCell = notebook.activeCell;
                activeCell.model.value.text =
                    '- Using % of slide to scale the image';
                setCellSlide(activeCell, 'notes');
            }
        });
        commands.addCommand('twoColumnImagesSlide', {
            label: 'Two Column Images',
            caption: 'Two Column Images',
            execute: () => {
                const current = tracker.currentWidget;
                const notebook = current.content;
                // add a dividing line
                _jupyterlab_notebook__WEBPACK_IMPORTED_MODULE_1__.NotebookActions.insertBelow(notebook);
                _jupyterlab_notebook__WEBPACK_IMPORTED_MODULE_1__.NotebookActions.changeCellType(notebook, 'markdown');
                let activeCell = notebook.activeCell;
                activeCell.model.value.text = '<hr>';
                setCellSlide(activeCell, 'skip');
                // add a TITLE label
                _jupyterlab_notebook__WEBPACK_IMPORTED_MODULE_1__.NotebookActions.insertBelow(notebook);
                _jupyterlab_notebook__WEBPACK_IMPORTED_MODULE_1__.NotebookActions.changeCellType(notebook, 'markdown');
                activeCell = notebook.activeCell;
                activeCell.model.value.text = '# Title';
                //set cell slidetype to slide to display as a new slide
                setCellSlide(activeCell, 'slide');
                // add a two-column table cell for images
                _jupyterlab_notebook__WEBPACK_IMPORTED_MODULE_1__.NotebookActions.insertBelow(notebook);
                _jupyterlab_notebook__WEBPACK_IMPORTED_MODULE_1__.NotebookActions.changeCellType(notebook, 'markdown');
                activeCell = notebook.activeCell;
                activeCell.model.value.text = '<table>\n \
        <tr>\n \
          <td> <img src="../images/default.png" width = "100%">\n \
          <td> <img src="../images/default.png" width = "100%">\n \
        </tr>\n \
        </table>';
                // add a BODY cell
                _jupyterlab_notebook__WEBPACK_IMPORTED_MODULE_1__.NotebookActions.insertBelow(notebook);
                _jupyterlab_notebook__WEBPACK_IMPORTED_MODULE_1__.NotebookActions.changeCellType(notebook, 'markdown');
                activeCell = notebook.activeCell;
                activeCell.model.value.text = 'Closing Comment';
                _jupyterlab_notebook__WEBPACK_IMPORTED_MODULE_1__.NotebookActions.insertBelow(notebook);
                _jupyterlab_notebook__WEBPACK_IMPORTED_MODULE_1__.NotebookActions.changeCellType(notebook, 'markdown');
                activeCell = notebook.activeCell;
                activeCell.model.value.text = '**NOTE**';
                setCellSlide(activeCell, 'skip');
                _jupyterlab_notebook__WEBPACK_IMPORTED_MODULE_1__.NotebookActions.insertBelow(notebook);
                _jupyterlab_notebook__WEBPACK_IMPORTED_MODULE_1__.NotebookActions.changeCellType(notebook, 'markdown');
                activeCell = notebook.activeCell;
                activeCell.model.value.text =
                    '- Using % of slide to scale the image';
                setCellSlide(activeCell, 'notes');
            }
        });
        commands.addCommand('createBulletsSlide', {
            label: 'Bullets Slide',
            caption: 'Bullets Slide',
            execute: () => {
                const current = tracker.currentWidget;
                const notebook = current.content;
                // add a dividing line
                _jupyterlab_notebook__WEBPACK_IMPORTED_MODULE_1__.NotebookActions.insertBelow(notebook);
                _jupyterlab_notebook__WEBPACK_IMPORTED_MODULE_1__.NotebookActions.changeCellType(notebook, 'markdown');
                let activeCell = notebook.activeCell;
                activeCell.model.value.text = '<hr>';
                setCellSlide(activeCell, 'skip');
                // add a body label
                _jupyterlab_notebook__WEBPACK_IMPORTED_MODULE_1__.NotebookActions.insertBelow(notebook);
                _jupyterlab_notebook__WEBPACK_IMPORTED_MODULE_1__.NotebookActions.changeCellType(notebook, 'markdown');
                activeCell = notebook.activeCell;
                activeCell.model.value.text = '# Title';
                //set cell slidetype to slide to display as a new slide
                setCellSlide(activeCell, 'slide');
                // add a BODY cell
                _jupyterlab_notebook__WEBPACK_IMPORTED_MODULE_1__.NotebookActions.insertBelow(notebook);
                _jupyterlab_notebook__WEBPACK_IMPORTED_MODULE_1__.NotebookActions.changeCellType(notebook, 'markdown');
                activeCell = notebook.activeCell;
                activeCell.model.value.text = '- **Bullet 1:** Something keypoints, and a long description \n - **Bullet 2:** Something keypoints, and a long description \n - **Bullet 3:** Something keypoints, and a long description \n  - **Bullet 4:** Something keypoints, and a long description';
                _jupyterlab_notebook__WEBPACK_IMPORTED_MODULE_1__.NotebookActions.insertBelow(notebook);
                _jupyterlab_notebook__WEBPACK_IMPORTED_MODULE_1__.NotebookActions.changeCellType(notebook, 'markdown');
                activeCell = notebook.activeCell;
                activeCell.model.value.text = '**NOTE**';
                setCellSlide(activeCell, 'skip');
                _jupyterlab_notebook__WEBPACK_IMPORTED_MODULE_1__.NotebookActions.insertBelow(notebook);
                _jupyterlab_notebook__WEBPACK_IMPORTED_MODULE_1__.NotebookActions.changeCellType(notebook, 'markdown');
                activeCell = notebook.activeCell;
                activeCell.model.value.text =
                    '- a Note that will display in the notes view';
                setCellSlide(activeCell, 'notes');
            }
        });
        commands.addCommand('twoColumnBulletsSlide', {
            label: 'Two Column Bullets',
            caption: 'Two Column Bullets',
            execute: () => {
                const current = tracker.currentWidget;
                const notebook = current.content;
                // add a dividing line
                _jupyterlab_notebook__WEBPACK_IMPORTED_MODULE_1__.NotebookActions.insertBelow(notebook);
                _jupyterlab_notebook__WEBPACK_IMPORTED_MODULE_1__.NotebookActions.changeCellType(notebook, 'markdown');
                let activeCell = notebook.activeCell;
                activeCell.model.value.text = '<hr>';
                setCellSlide(activeCell, 'skip');
                // add a body label
                _jupyterlab_notebook__WEBPACK_IMPORTED_MODULE_1__.NotebookActions.insertBelow(notebook);
                _jupyterlab_notebook__WEBPACK_IMPORTED_MODULE_1__.NotebookActions.changeCellType(notebook, 'markdown');
                activeCell = notebook.activeCell;
                activeCell.model.value.text = '# Title';
                //set cell slidetype to slide to display as a new slide
                setCellSlide(activeCell, 'slide');
                // add a BODY cell
                _jupyterlab_notebook__WEBPACK_IMPORTED_MODULE_1__.NotebookActions.insertBelow(notebook);
                _jupyterlab_notebook__WEBPACK_IMPORTED_MODULE_1__.NotebookActions.changeCellType(notebook, 'markdown');
                activeCell = notebook.activeCell;
                activeCell.model.value.text = '<table>\n \
        <tr>\n \
          <td> <ul> <li> Bullet 1.1 : Something keypoints, and a long description </li> \n \
                    <li> Bullet 2.1 : Something keypoints, and a long description </li> </ul> </td>\n \
          <td> <ul> <li> Bullet 1.2 : Something keypoints, and a long description </li> \n \
                    <li> Bullet 2.2 : Something keypoints, and a long description </li> </ul></td>\n \
        </tr>\n \
        </table>';
                _jupyterlab_notebook__WEBPACK_IMPORTED_MODULE_1__.NotebookActions.insertBelow(notebook);
                _jupyterlab_notebook__WEBPACK_IMPORTED_MODULE_1__.NotebookActions.changeCellType(notebook, 'markdown');
                activeCell = notebook.activeCell;
                activeCell.model.value.text = '**NOTE**';
                setCellSlide(activeCell, 'skip');
                _jupyterlab_notebook__WEBPACK_IMPORTED_MODULE_1__.NotebookActions.insertBelow(notebook);
                _jupyterlab_notebook__WEBPACK_IMPORTED_MODULE_1__.NotebookActions.changeCellType(notebook, 'markdown');
                activeCell = notebook.activeCell;
                activeCell.model.value.text =
                    '- a Note that will display in the notes view';
                setCellSlide(activeCell, 'notes');
            }
        });
        commands.addCommand('createTitleSlide', {
            label: 'Title Slide',
            caption: 'Title Slide',
            execute: () => {
                const current = tracker.currentWidget;
                const notebook = current.content;
                // add a dividing line
                _jupyterlab_notebook__WEBPACK_IMPORTED_MODULE_1__.NotebookActions.insertBelow(notebook);
                _jupyterlab_notebook__WEBPACK_IMPORTED_MODULE_1__.NotebookActions.changeCellType(notebook, 'markdown');
                let activeCell = notebook.activeCell;
                activeCell.model.value.text = '<hr>';
                setCellSlide(activeCell, 'skip');
                // add a body label
                _jupyterlab_notebook__WEBPACK_IMPORTED_MODULE_1__.NotebookActions.insertBelow(notebook);
                _jupyterlab_notebook__WEBPACK_IMPORTED_MODULE_1__.NotebookActions.changeCellType(notebook, 'markdown');
                activeCell = notebook.activeCell;
                activeCell.model.value.text = '# Title';
                //set cell slidetype to slide to display as a new slide
                setCellSlide(activeCell, 'slide');
                _jupyterlab_notebook__WEBPACK_IMPORTED_MODULE_1__.NotebookActions.insertBelow(notebook);
                _jupyterlab_notebook__WEBPACK_IMPORTED_MODULE_1__.NotebookActions.changeCellType(notebook, 'markdown');
                activeCell = notebook.activeCell;
                activeCell.model.value.text = '**NOTE**';
                setCellSlide(activeCell, 'skip');
                _jupyterlab_notebook__WEBPACK_IMPORTED_MODULE_1__.NotebookActions.insertBelow(notebook);
                _jupyterlab_notebook__WEBPACK_IMPORTED_MODULE_1__.NotebookActions.changeCellType(notebook, 'markdown');
                activeCell = notebook.activeCell;
                activeCell.model.value.text =
                    '- a Note that will display in the notes view';
                setCellSlide(activeCell, 'notes');
            }
        });
        const snippetMenu = new _lumino_widgets__WEBPACK_IMPORTED_MODULE_3__.Menu({ commands });
        snippetMenu.title.label = 'Slides';
        snippetMenu.addItem({ command: 'openLink' });
        const layoutSubMenu = new _lumino_widgets__WEBPACK_IMPORTED_MODULE_3__.Menu({ commands });
        layoutSubMenu.title.label = 'Layout';
        layoutSubMenu.addItem({ command: 'createBlankSlide' });
        layoutSubMenu.addItem({ command: 'imageOnlySlide' });
        layoutSubMenu.addItem({ command: 'leftBulletsRightImageSlide' });
        layoutSubMenu.addItem({ command: 'leftImageRightBulletsSlide' });
        layoutSubMenu.addItem({ command: 'twoColumnImagesSlide' });
        layoutSubMenu.addItem({ command: 'createBulletsSlide' });
        layoutSubMenu.addItem({ command: 'twoColumnBulletsSlide' });
        layoutSubMenu.addItem({ command: 'createTitleSlide' });
        snippetMenu.addItem({ type: 'submenu', submenu: layoutSubMenu });
        mainMenu.addMenu(snippetMenu, { rank: 300 });
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (plugin);


/***/ })

}]);
//# sourceMappingURL=lib_index_js.ca4bc982440de9ab6d84.js.map