
// const reducer = (state, action) => {
//     switch (action.type) {
//       case "ADD-HIGHLIGHT":
//         const newHighlight = state.find(
//           high => high.key === action.key
//         );
//         if (newHighlight) {
//           const newHigh = state.highlights.map(el =>
//             el.key === action.key ? { ...el, value: action.value } : el
//           );
//           return newHigh;
//         } else {
//           return [...state,{ key: action.key, value: action.value}];
//         }
//       case "DELETE-HIGHLIGHT":
//         return state.filter(h => h.key !== action.key);
//       case 'MOOD' :
//           return {state};
//       default:
//         return state;
//     }
//   };
  
//   export default reducer;


const reducer = (state, action) => {
  switch (action.type) {
    case "ADD-HIGHLIGHT":
      const newHighlight = state.highlights.find(
        high => high.key === action.key
      );
      if (newHighlight) {
        const newHigh = state.highlights.map(el =>
          el.key === action.key ? { ...el, value: action.value } : el
        );
        return { ...state, highlights: newHigh };
      } else {
        return {
          ...state,
          highlights: [
            ...state.highlights,
            { key: action.key, value: action.value }
          ]
        };
      }
    case "DELETE-HIGHLIGHT":
      return {...state,highlights:state.highlights.filter(h => h.key !== action.key)};
    case 'MOOD' :
        return {...state,mood:action.mood};
    case 'CHANGE-THEME':
        return {...state,isDarkMode:!state.isDarkMode}    
    default:
      return state;
  }
};

export default reducer;