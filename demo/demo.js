// load template css file  
runStack.stylesheet('../template/template.demo.css')
// runStack.stylesheet('https://getbootstrap.com/docs/5.0/dist/css/bootstrap.min.css')

//load template js file
// runStack.template('../template/template.demo.js')


// load stack.js
runStack.root()

runStack.stack({
    header: {
        comp: 'header',
        compData: {
            logoText: 'Stack.js',
            css: 'logo-style',
            id:'header'
        }
    },
    hero: {
        comp: 'hero',
        compData: {
            heroText: 'Welcome to Stack',
            heroSmall: `Stack is a simple, fast, and powerful JavaScript library for building re-usable interfaces.
            Make your first step by editing the demo.js file`,
            css:'hero',
            id:'hero'
        }
    }
})

//append a block elemnent to a relative position
// cjs.build({
//         comp: 'hero',
//         compData: {
//             heroText: 'alpha This is my hero leagueson',
//             css:'hero',
//             id:'secondHero',
//             place:{ pos:'prepend', block:'hero' }
//         }
//     })

// update block 
// runStack.rebuild({
//     blockID:'hero',
//     comp:'hero',
//     compData: {
//             heroText: 'This is my hero replaces',
//             css:'hero',
//             id:'hero'
//         }
// })
// remove block 
// cjs.rebuild({
//     blockID:'hero',
//     comp:null
// })

// cjs.build({
//     hero: {
//         comp:'hero',
//         compData:{
//             logoText:'refreshed',
//             css:'hero'
//         }
//     }
// })