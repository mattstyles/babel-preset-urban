
module.exports = {
  plugins: [
    require( 'babel-plugin-transform-es2015-template-literals' ),
    require( 'babel-plugin-transform-es2015-literals' ),
    require( 'babel-plugin-transform-es2015-function-name' ),
    require( 'babel-plugin-transform-es2015-arrow-functions' ),
    require( 'babel-plugin-transform-es2015-block-scoped-functions' ),
    require( 'babel-plugin-transform-class-constructor-call' ),
    require( 'babel-plugin-transform-class-properties' ),
    [ require( 'babel-plugin-transform-es2015-classes' ), { loose: false } ],
    require( 'babel-plugin-transform-es2015-object-super' ),
    require( 'babel-plugin-transform-es2015-shorthand-properties' ),
    require( 'babel-plugin-transform-es2015-computed-properties' ),
    require( 'babel-plugin-transform-es2015-for-of' ),
    require( 'babel-plugin-transform-es2015-sticky-regex' ),
    require( 'babel-plugin-transform-es2015-unicode-regex' ),
    require( 'babel-plugin-transform-es2015-constants' ),
    require( 'babel-plugin-transform-es2015-spread' ),
    require( 'babel-plugin-transform-es2015-parameters' ),
    require( 'babel-plugin-transform-es2015-destructuring' ),
    require( 'babel-plugin-transform-es2015-block-scoping' ),
    require( 'babel-plugin-transform-es2015-typeof-symbol' ),
    [ require( 'babel-plugin-transform-es2015-modules-commonjs' ), { loose: false } ],
    [ require( 'babel-plugin-transform-regenerator' ), { async: true, asyncGenerators: false } ],
    // [ require( 'babel-plugin-transform-async-to-module-method' ), { module: 'bluebird', method: 'coroutine' } ],
    require( 'babel-plugin-transform-react-jsx' ),
    require( 'babel-plugin-transform-react-display-name' ),
    require( 'babel-plugin-transform-async-functions' )
  ]
}
