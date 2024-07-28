<!--

@license Apache-2.0

Copyright (c) 2024 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# scnrm2

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Compute the L2-norm of a complex single-precision floating-point vector.



<section class="usage">

## Usage

```javascript
import scnrm2 from 'https://cdn.jsdelivr.net/gh/stdlib-js/blas-base-scnrm2@v0.1.0-esm/index.mjs';
```

#### scnrm2( N, cx, strideX )

Computes the L2-norm of a complex single-precision floating-point vector.

```javascript
import Complex64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-complex64@esm/index.mjs';

var cx = new Complex64Array( [ 0.3, 0.1, 0.5, 0.0, 0.0, 0.5, 0.0, 0.2 ] );

var norm = scnrm2( 4, cx, 1 );
// returns ~0.8
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **cx**: input [`Complex64Array`][@stdlib/array/complex64].
-   **strideX**: index increment for `cx`.

The `N` and stride parameters determine which elements in the strided array are accessed at runtime. For example, to traverse every other value,

```javascript
import Complex64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-complex64@esm/index.mjs';

var cx = new Complex64Array( [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ] );

var norm = scnrm2( 2, cx, 2 );
// returns ~4.6
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

```javascript
import Complex64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-complex64@esm/index.mjs';

// Initial array:
var cx0 = new Complex64Array( [ 1.0, -2.0, 3.0, -4.0, 5.0, -6.0 ] );

// Create an offset view:
var cx1 = new Complex64Array( cx0.buffer, cx0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

// Compute the L2-norm:
var norm = scnrm2( 2, cx1, 1 );
// returns ~9.3
```

#### scnrm2.ndarray( N, cx, strideX, offset )

Computes the L2-norm of a complex single-precision floating-point vector using alternative indexing semantics.

```javascript
import Complex64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-complex64@esm/index.mjs';

var cx = new Complex64Array( [ 0.3, 0.1, 0.5, 0.0, 0.0, 0.5, 0.0, 0.2 ] );

var norm = scnrm2.ndarray( 4, cx, 1, 0 );
// returns ~0.8
```

The function has the following additional parameters:

-   **offsetX**: starting index.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the offset parameter supports indexing semantics based on a starting index. For example, to start from the second index,

```javascript
import Complex64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-complex64@esm/index.mjs';

var cx = new Complex64Array( [ 1.0, -2.0, 3.0, -4.0, 5.0, -6.0 ] );

var norm = scnrm2.ndarray( 2, cx, 1, 1 );
// returns ~9.3
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If `N <= 0`, both functions return `0.0`.
-   `scnrm2()` corresponds to the [BLAS][blas] level 1 function [`scnrm2`][scnrm2].

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import discreteUniform from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-discrete-uniform@esm/index.mjs';
import filledarrayBy from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-filled-by@esm/index.mjs';
import Complex64 from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-float32-ctor@esm/index.mjs';
import scnrm2 from 'https://cdn.jsdelivr.net/gh/stdlib-js/blas-base-scnrm2@v0.1.0-esm/index.mjs';

function rand() {
    return new Complex64( discreteUniform( 0, 10 ), discreteUniform( -5, 5 ) );
}

var cx = filledarrayBy( 10, 'complex64', rand );
console.log( cx.toString() );

// Compute the L2-norm:
var norm = scnrm2( cx.length, cx, 1 );
console.log( norm );

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->



<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/blas-base-scnrm2.svg
[npm-url]: https://npmjs.org/package/@stdlib/blas-base-scnrm2

[test-image]: https://github.com/stdlib-js/blas-base-scnrm2/actions/workflows/test.yml/badge.svg?branch=v0.1.0
[test-url]: https://github.com/stdlib-js/blas-base-scnrm2/actions/workflows/test.yml?query=branch:v0.1.0

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/blas-base-scnrm2/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/blas-base-scnrm2?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/blas-base-scnrm2.svg
[dependencies-url]: https://david-dm.org/stdlib-js/blas-base-scnrm2/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/blas-base-scnrm2/tree/deno
[deno-readme]: https://github.com/stdlib-js/blas-base-scnrm2/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/blas-base-scnrm2/tree/umd
[umd-readme]: https://github.com/stdlib-js/blas-base-scnrm2/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/blas-base-scnrm2/tree/esm
[esm-readme]: https://github.com/stdlib-js/blas-base-scnrm2/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/blas-base-scnrm2/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/blas-base-scnrm2/main/LICENSE

[blas]: http://www.netlib.org/blas

[scnrm2]: https://www.netlib.org/lapack/explore-html/d1/d2a/group__nrm2_gaee5779d5d216a7cd8cf83488fb6bb175.html#gaee5779d5d216a7cd8cf83488fb6bb175

[@stdlib/array/complex64]: https://github.com/stdlib-js/array-complex64/tree/esm

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

</section>

<!-- /.links -->
