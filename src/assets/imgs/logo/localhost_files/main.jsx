import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=b240ef18"; const _jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"]; const _Fragment = __vite__cjsImport0_react_jsxDevRuntime["Fragment"];
import { BrowserRouter as Router, Routes, Route } from "/node_modules/.vite/deps/react-router-dom.js?v=436c82ba";
import __vite__cjsImport2_reactDom_client from "/node_modules/.vite/deps/react-dom_client.js?v=0e3595ba"; const ReactDOM = __vite__cjsImport2_reactDom_client.__esModule ? __vite__cjsImport2_reactDom_client.default : __vite__cjsImport2_reactDom_client;
import "/src/i18n.js?t=1756759561820"; // ← importa a configuração do idioma
import Index from "/src/pages/Index.jsx?t=1756760252180";
import Lp01 from "/src/pages/Lp01.jsx?t=1756760252180";
import WhatsAppLinks from "/src/components/interactives/WhatsappLinks.jsx?t=1756760252180";
// Layout fixo para o modo "site"
import SiteLayout from "/src/pages/SiteLayoult.jsx?t=1756759561820";
import Features from "/src/components/sections/Features.jsx?t=1756760252180";
import About from "/src/components/sections/About.jsx?t=1756759561820";
import Faq from "/src/components/sections/Faq.jsx?t=1756759561820";
import "/src/index.css?t=1756760252180";
import "/src/styles/backgrounds.css";
import BlogPosts from "/src/components/sections/BlogPosts.jsx?t=1756759561820";
import Maps from "/src/components/sections/Maps.jsx?t=1756759561820";
import AboutInstagram from "/src/components/sections/AboutInstagram.jsx?t=1756759561820";
// Altere aqui para "LP" ou "site"
const mode = "LP"; // só muda isso e o resto se adapta
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/ _jsxDEV(Router, {
    children: mode === "LP" ? /*#__PURE__*/ _jsxDEV(Routes, {
        children: /*#__PURE__*/ _jsxDEV(Route, {
            path: "/",
            element: /*#__PURE__*/ _jsxDEV(Lp01, {}, void 0, false, {
                fileName: "/Users/biell/Desktop/Repositorios/Teixeira Silva /LP-Teixeira-Silva/src/main.jsx",
                lineNumber: 30,
                columnNumber: 34
            }, void 0)
        }, void 0, false, {
            fileName: "/Users/biell/Desktop/Repositorios/Teixeira Silva /LP-Teixeira-Silva/src/main.jsx",
            lineNumber: 30,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "/Users/biell/Desktop/Repositorios/Teixeira Silva /LP-Teixeira-Silva/src/main.jsx",
        lineNumber: 28,
        columnNumber: 7
    }, this) : /*#__PURE__*/ _jsxDEV(Routes, {
        children: [
            /*#__PURE__*/ _jsxDEV(Route, {
                path: "/",
                element: /*#__PURE__*/ _jsxDEV(SiteLayout, {
                    mode: mode
                }, void 0, false, {
                    fileName: "/Users/biell/Desktop/Repositorios/Teixeira Silva /LP-Teixeira-Silva/src/main.jsx",
                    lineNumber: 37,
                    columnNumber: 34
                }, void 0)
            }, void 0, false, {
                fileName: "/Users/biell/Desktop/Repositorios/Teixeira Silva /LP-Teixeira-Silva/src/main.jsx",
                lineNumber: 37,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ _jsxDEV(Route, {
                path: "home",
                element: /*#__PURE__*/ _jsxDEV(SiteLayout, {
                    mode: mode
                }, void 0, false, {
                    fileName: "/Users/biell/Desktop/Repositorios/Teixeira Silva /LP-Teixeira-Silva/src/main.jsx",
                    lineNumber: 38,
                    columnNumber: 37
                }, void 0)
            }, void 0, false, {
                fileName: "/Users/biell/Desktop/Repositorios/Teixeira Silva /LP-Teixeira-Silva/src/main.jsx",
                lineNumber: 38,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ _jsxDEV(Route, {
                path: "/service",
                element: /*#__PURE__*/ _jsxDEV(SiteLayout, {
                    mode: mode,
                    section: /*#__PURE__*/ _jsxDEV(Features, {
                        defaultFeature: true
                    }, void 0, false, {
                        fileName: "/Users/biell/Desktop/Repositorios/Teixeira Silva /LP-Teixeira-Silva/src/main.jsx",
                        lineNumber: 44,
                        columnNumber: 24
                    }, void 0)
                }, void 0, false, {
                    fileName: "/Users/biell/Desktop/Repositorios/Teixeira Silva /LP-Teixeira-Silva/src/main.jsx",
                    lineNumber: 42,
                    columnNumber: 13
                }, void 0)
            }, void 0, false, {
                fileName: "/Users/biell/Desktop/Repositorios/Teixeira Silva /LP-Teixeira-Silva/src/main.jsx",
                lineNumber: 39,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ _jsxDEV(Route, {
                path: "/about",
                element: /*#__PURE__*/ _jsxDEV(SiteLayout, {
                    mode: mode,
                    section: /*#__PURE__*/ _jsxDEV(_Fragment, {
                        children: [
                            /*#__PURE__*/ _jsxDEV(About, {}, void 0, false, {
                                fileName: "/Users/biell/Desktop/Repositorios/Teixeira Silva /LP-Teixeira-Silva/src/main.jsx",
                                lineNumber: 55,
                                columnNumber: 19
                            }, void 0),
                            /*#__PURE__*/ _jsxDEV(AboutInstagram, {
                                instagram: true
                            }, void 0, false, {
                                fileName: "/Users/biell/Desktop/Repositorios/Teixeira Silva /LP-Teixeira-Silva/src/main.jsx",
                                lineNumber: 56,
                                columnNumber: 19
                            }, void 0)
                        ]
                    }, void 0, true)
                }, void 0, false, {
                    fileName: "/Users/biell/Desktop/Repositorios/Teixeira Silva /LP-Teixeira-Silva/src/main.jsx",
                    lineNumber: 51,
                    columnNumber: 13
                }, void 0)
            }, void 0, false, {
                fileName: "/Users/biell/Desktop/Repositorios/Teixeira Silva /LP-Teixeira-Silva/src/main.jsx",
                lineNumber: 48,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ _jsxDEV(Route, {
                path: "/blog",
                element: /*#__PURE__*/ _jsxDEV(SiteLayout, {
                    mode: mode,
                    section: /*#__PURE__*/ _jsxDEV(BlogPosts, {}, void 0, false, {
                        fileName: "/Users/biell/Desktop/Repositorios/Teixeira Silva /LP-Teixeira-Silva/src/main.jsx",
                        lineNumber: 65,
                        columnNumber: 53
                    }, void 0)
                }, void 0, false, {
                    fileName: "/Users/biell/Desktop/Repositorios/Teixeira Silva /LP-Teixeira-Silva/src/main.jsx",
                    lineNumber: 65,
                    columnNumber: 20
                }, void 0)
            }, void 0, false, {
                fileName: "/Users/biell/Desktop/Repositorios/Teixeira Silva /LP-Teixeira-Silva/src/main.jsx",
                lineNumber: 63,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ _jsxDEV(Route, {
                path: "/faq",
                element: /*#__PURE__*/ _jsxDEV(SiteLayout, {
                    mode: mode,
                    section: /*#__PURE__*/ _jsxDEV(Faq, {}, void 0, false, {
                        fileName: "/Users/biell/Desktop/Repositorios/Teixeira Silva /LP-Teixeira-Silva/src/main.jsx",
                        lineNumber: 70,
                        columnNumber: 53
                    }, void 0)
                }, void 0, false, {
                    fileName: "/Users/biell/Desktop/Repositorios/Teixeira Silva /LP-Teixeira-Silva/src/main.jsx",
                    lineNumber: 70,
                    columnNumber: 20
                }, void 0)
            }, void 0, false, {
                fileName: "/Users/biell/Desktop/Repositorios/Teixeira Silva /LP-Teixeira-Silva/src/main.jsx",
                lineNumber: 68,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ _jsxDEV(Route, {
                path: "/maps",
                element: /*#__PURE__*/ _jsxDEV(SiteLayout, {
                    mode: mode,
                    section: /*#__PURE__*/ _jsxDEV(Maps, {}, void 0, false, {
                        fileName: "/Users/biell/Desktop/Repositorios/Teixeira Silva /LP-Teixeira-Silva/src/main.jsx",
                        lineNumber: 75,
                        columnNumber: 53
                    }, void 0)
                }, void 0, false, {
                    fileName: "/Users/biell/Desktop/Repositorios/Teixeira Silva /LP-Teixeira-Silva/src/main.jsx",
                    lineNumber: 75,
                    columnNumber: 20
                }, void 0)
            }, void 0, false, {
                fileName: "/Users/biell/Desktop/Repositorios/Teixeira Silva /LP-Teixeira-Silva/src/main.jsx",
                lineNumber: 73,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "/Users/biell/Desktop/Repositorios/Teixeira Silva /LP-Teixeira-Silva/src/main.jsx",
        lineNumber: 36,
        columnNumber: 7
    }, this)
}, void 0, false, {
    fileName: "/Users/biell/Desktop/Repositorios/Teixeira Silva /LP-Teixeira-Silva/src/main.jsx",
    lineNumber: 26,
    columnNumber: 3
}, this));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJyb3dzZXJSb3V0ZXIgYXMgUm91dGVyLCBSb3V0ZXMsIFJvdXRlIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tL2NsaWVudFwiO1xuaW1wb3J0IFwiLi9pMThuXCI7IC8vIOKGkCBpbXBvcnRhIGEgY29uZmlndXJhw6fDo28gZG8gaWRpb21hXG5cbmltcG9ydCBJbmRleCBmcm9tIFwiLi9wYWdlcy9JbmRleC5qc3hcIjtcbmltcG9ydCBMcDAxIGZyb20gXCIuL3BhZ2VzL0xwMDEuanN4XCI7XG5cbmltcG9ydCBXaGF0c0FwcExpbmtzIGZyb20gXCIuL2NvbXBvbmVudHMvaW50ZXJhY3RpdmVzL1doYXRzYXBwTGlua3MuanN4XCI7XG5cbi8vIExheW91dCBmaXhvIHBhcmEgbyBtb2RvIFwic2l0ZVwiXG5pbXBvcnQgU2l0ZUxheW91dCBmcm9tIFwiLi9wYWdlcy9TaXRlTGF5b3VsdC5qc3hcIjtcbmltcG9ydCBGZWF0dXJlcyBmcm9tIFwiLi9jb21wb25lbnRzL3NlY3Rpb25zL0ZlYXR1cmVzLmpzeFwiO1xuaW1wb3J0IEFib3V0IGZyb20gXCIuL2NvbXBvbmVudHMvc2VjdGlvbnMvQWJvdXQuanN4XCI7XG5pbXBvcnQgRmFxIGZyb20gXCIuL2NvbXBvbmVudHMvc2VjdGlvbnMvRmFxLmpzeFwiO1xuXG5pbXBvcnQgXCIuL2luZGV4LmNzc1wiO1xuaW1wb3J0IFwiLi9zdHlsZXMvYmFja2dyb3VuZHMuY3NzXCI7XG5pbXBvcnQgQmxvZ1Bvc3RzIGZyb20gXCIuL2NvbXBvbmVudHMvc2VjdGlvbnMvQmxvZ1Bvc3RzLmpzeFwiO1xuaW1wb3J0IE1hcHMgZnJvbSBcIi4vY29tcG9uZW50cy9zZWN0aW9ucy9NYXBzLmpzeFwiO1xuaW1wb3J0IEFib3V0SW5zdGFncmFtIGZyb20gXCIuL2NvbXBvbmVudHMvc2VjdGlvbnMvQWJvdXRJbnN0YWdyYW0uanN4XCI7XG5cbi8vIEFsdGVyZSBhcXVpIHBhcmEgXCJMUFwiIG91IFwic2l0ZVwiXG5jb25zdCBtb2RlID0gXCJMUFwiOyAvLyBzw7MgbXVkYSBpc3NvIGUgbyByZXN0byBzZSBhZGFwdGFcblxuUmVhY3RET00uY3JlYXRlUm9vdChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvb3RcIikpLnJlbmRlcihcbiAgPFJvdXRlcj5cbiAgICB7bW9kZSA9PT0gXCJMUFwiID8gKFxuICAgICAgPFJvdXRlcz5cbiAgICAgICAgey8qPFJvdXRlIHBhdGg9XCIvXCIgZWxlbWVudD17PEluZGV4IG1vZGU9e21vZGV9IC8+fSAvPiovfVxuICAgICAgICA8Um91dGUgcGF0aD1cIi9cIiBlbGVtZW50PXs8THAwMSAvPn0gLz5cbiAgICAgICAgey8qIDxSb3V0ZSBwYXRoPVwiL3doYXRzYXBwXCIgZWxlbWVudD17PFdoYXRzQXBwTGlua3MgLz59IC8+ICovfVxuXG4gICAgICAgIHsvKiA8Um91dGUgcGF0aD1cIi93aGF0c2FwcFwiIGVsZW1lbnQ9ezxXaGF0c0FwcExpbmtzIGZvcm09e3RydWV9IC8+fSAvPiAqL31cbiAgICAgIDwvUm91dGVzPlxuICAgICkgOiAoXG4gICAgICA8Um91dGVzPlxuICAgICAgICA8Um91dGUgcGF0aD1cIi9cIiBlbGVtZW50PXs8U2l0ZUxheW91dCBtb2RlPXttb2RlfSAvPn0gLz5cbiAgICAgICAgPFJvdXRlIHBhdGg9XCJob21lXCIgZWxlbWVudD17PFNpdGVMYXlvdXQgbW9kZT17bW9kZX0gLz59IC8+XG4gICAgICAgIDxSb3V0ZVxuICAgICAgICAgIHBhdGg9XCIvc2VydmljZVwiXG4gICAgICAgICAgZWxlbWVudD17XG4gICAgICAgICAgICA8U2l0ZUxheW91dFxuICAgICAgICAgICAgICBtb2RlPXttb2RlfVxuICAgICAgICAgICAgICBzZWN0aW9uPXs8RmVhdHVyZXMgZGVmYXVsdEZlYXR1cmU9e3RydWV9IC8+fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICB9XG4gICAgICAgIC8+XG4gICAgICAgIDxSb3V0ZVxuICAgICAgICAgIHBhdGg9XCIvYWJvdXRcIlxuICAgICAgICAgIGVsZW1lbnQ9e1xuICAgICAgICAgICAgPFNpdGVMYXlvdXRcbiAgICAgICAgICAgICAgbW9kZT17bW9kZX1cbiAgICAgICAgICAgICAgc2VjdGlvbj17XG4gICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgIDxBYm91dCAvPlxuICAgICAgICAgICAgICAgICAgPEFib3V0SW5zdGFncmFtIGluc3RhZ3JhbT17dHJ1ZX0gLz5cbiAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICB9XG4gICAgICAgIC8+XG5cbiAgICAgICAgPFJvdXRlXG4gICAgICAgICAgcGF0aD1cIi9ibG9nXCJcbiAgICAgICAgICBlbGVtZW50PXs8U2l0ZUxheW91dCBtb2RlPXttb2RlfSBzZWN0aW9uPXs8QmxvZ1Bvc3RzIC8+fSAvPn1cbiAgICAgICAgLz5cblxuICAgICAgICA8Um91dGVcbiAgICAgICAgICBwYXRoPVwiL2ZhcVwiXG4gICAgICAgICAgZWxlbWVudD17PFNpdGVMYXlvdXQgbW9kZT17bW9kZX0gc2VjdGlvbj17PEZhcSAvPn0gLz59XG4gICAgICAgIC8+XG5cbiAgICAgICAgPFJvdXRlXG4gICAgICAgICAgcGF0aD1cIi9tYXBzXCJcbiAgICAgICAgICBlbGVtZW50PXs8U2l0ZUxheW91dCBtb2RlPXttb2RlfSBzZWN0aW9uPXs8TWFwcyAvPn0gLz59XG4gICAgICAgIC8+XG4gICAgICA8L1JvdXRlcz5cbiAgICApfVxuICA8L1JvdXRlcj5cbik7XG4iXSwibmFtZXMiOlsiQnJvd3NlclJvdXRlciIsIlJvdXRlciIsIlJvdXRlcyIsIlJvdXRlIiwiUmVhY3RET00iLCJJbmRleCIsIkxwMDEiLCJXaGF0c0FwcExpbmtzIiwiU2l0ZUxheW91dCIsIkZlYXR1cmVzIiwiQWJvdXQiLCJGYXEiLCJCbG9nUG9zdHMiLCJNYXBzIiwiQWJvdXRJbnN0YWdyYW0iLCJtb2RlIiwiY3JlYXRlUm9vdCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyZW5kZXIiLCJwYXRoIiwiZWxlbWVudCIsInNlY3Rpb24iLCJkZWZhdWx0RmVhdHVyZSIsImluc3RhZ3JhbSJdLCJtYXBwaW5ncyI6IjtBQUFBLFNBQVNBLGlCQUFpQkMsTUFBTSxFQUFFQyxNQUFNLEVBQUVDLEtBQUssUUFBUSxtQkFBbUI7QUFDMUUsT0FBT0MsY0FBYyxtQkFBbUI7QUFDeEMsT0FBTyxTQUFTLENBQUMscUNBQXFDO0FBRXRELE9BQU9DLFdBQVcsb0JBQW9CO0FBQ3RDLE9BQU9DLFVBQVUsbUJBQW1CO0FBRXBDLE9BQU9DLG1CQUFtQiw4Q0FBOEM7QUFFeEUsaUNBQWlDO0FBQ2pDLE9BQU9DLGdCQUFnQiwwQkFBMEI7QUFDakQsT0FBT0MsY0FBYyxxQ0FBcUM7QUFDMUQsT0FBT0MsV0FBVyxrQ0FBa0M7QUFDcEQsT0FBT0MsU0FBUyxnQ0FBZ0M7QUFFaEQsT0FBTyxjQUFjO0FBQ3JCLE9BQU8sMkJBQTJCO0FBQ2xDLE9BQU9DLGVBQWUsc0NBQXNDO0FBQzVELE9BQU9DLFVBQVUsaUNBQWlDO0FBQ2xELE9BQU9DLG9CQUFvQiwyQ0FBMkM7QUFFdEUsa0NBQWtDO0FBQ2xDLE1BQU1DLE9BQU8sTUFBTSxtQ0FBbUM7QUFFdERYLFNBQVNZLFVBQVUsQ0FBQ0MsU0FBU0MsY0FBYyxDQUFDLFNBQVNDLE1BQU0sZUFDekQsUUFBQ2xCO2NBQ0VjLFNBQVMscUJBQ1IsUUFBQ2I7a0JBRUMsY0FBQSxRQUFDQztZQUFNaUIsTUFBSztZQUFJQyx1QkFBUyxRQUFDZjs7Ozs7Ozs7Ozs7Ozs7NkJBTTVCLFFBQUNKOzswQkFDQyxRQUFDQztnQkFBTWlCLE1BQUs7Z0JBQUlDLHVCQUFTLFFBQUNiO29CQUFXTyxNQUFNQTs7Ozs7Ozs7Ozs7MEJBQzNDLFFBQUNaO2dCQUFNaUIsTUFBSztnQkFBT0MsdUJBQVMsUUFBQ2I7b0JBQVdPLE1BQU1BOzs7Ozs7Ozs7OzswQkFDOUMsUUFBQ1o7Z0JBQ0NpQixNQUFLO2dCQUNMQyx1QkFDRSxRQUFDYjtvQkFDQ08sTUFBTUE7b0JBQ05PLHVCQUFTLFFBQUNiO3dCQUFTYyxnQkFBZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBSXpDLFFBQUNwQjtnQkFDQ2lCLE1BQUs7Z0JBQ0xDLHVCQUNFLFFBQUNiO29CQUNDTyxNQUFNQTtvQkFDTk8sdUJBQ0U7OzBDQUNFLFFBQUNaOzs7OzswQ0FDRCxRQUFDSTtnQ0FBZVUsV0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQU9yQyxRQUFDckI7Z0JBQ0NpQixNQUFLO2dCQUNMQyx1QkFBUyxRQUFDYjtvQkFBV08sTUFBTUE7b0JBQU1PLHVCQUFTLFFBQUNWOzs7Ozs7Ozs7Ozs7Ozs7MEJBRzdDLFFBQUNUO2dCQUNDaUIsTUFBSztnQkFDTEMsdUJBQVMsUUFBQ2I7b0JBQVdPLE1BQU1BO29CQUFNTyx1QkFBUyxRQUFDWDs7Ozs7Ozs7Ozs7Ozs7OzBCQUc3QyxRQUFDUjtnQkFDQ2lCLE1BQUs7Z0JBQ0xDLHVCQUFTLFFBQUNiO29CQUFXTyxNQUFNQTtvQkFBTU8sdUJBQVMsUUFBQ1QifQ==