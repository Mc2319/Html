// function tocGenerator() {
//   var content = document.querySelector('.content')
//   var h2Elms = content.querySelectorAll('h2')
//   var tocElm = document.querySelector('.toc')
  
//   var liArr = tocElm.querySelectorAll('li')
//   for (var i in liArr) {
//     var li = liArr[i]
//     if (li.querySelector('a').pathname === location.pathname) {
//       var tocItemElm = li
//       break
//     }
//   }
  
//   var ul = document.createElement('ul')
//   h2Elms.forEach(function (h2Elm) {
//     var li = document.createElement('li')
//     var a = document.createElement('a')
//     a.innerText = h2Elm.id
//     a.href = '#' + h2Elm.id
//     li.appendChild(a)
//     ul.appendChild(li)
//   })
//   tocItemElm.appendChild(ul)
// }

// window.addEventListener('load', tocGenerator)
