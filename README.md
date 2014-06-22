# ng-dummy

AngularJS directive to insert dummy (or filler, or placeholder) text
into the DOM.

```
<p dummy>
```

By default, strings of <q>Lorem ipsum</q> text are added to the element:

```
<p dummy="">
  <span class="ng-dummy-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet lorem ipsum. Suspendisse nisl enim, iaculis a blandit et, lobortis ut turpis. Sed eu velit vel augue ultricies ullamcorper sed ut nulla.</span>
</p>
```

If the original element is not empty, the span containing the dummy text
is appended to the element.

```
<p dummy>Dummy text to follow: </p>
```

The directive may be used as an attribute (as shown above) or as
an element:

```
<p>Text before. <dummy></dummy> Text after.</p>
```

## Options

When the directive is used as an attribute, options may be passed through
the attribute value.

### Selecting the Text Corpus

Currently, five different corpuses are available:

* `lorem`: The default, <q>Lorem ipsum</q>
* `pomo`: An instance of postmodern critical writing from [The Postmodernism Generator](http://www.elsewhere.org/pomo/)
* `lingo`: Corporate gibberish, from [Cameron Creative](http://www.cameroncreative.com/filler-text.html)
* `disclaimer`: A collection of disclaimers, also from [Cameron Creative](http://www.cameroncreative.com/filler-text.html)
* `dickens`: The opening paragraphs of <q>A Christmas Carol</q>, from [Project Gutenberg](http://www.gutenberg.org/cache/epub/46/pg46.txt)

To specify the corpus, pass one of the above keywords via the `dummy` attribute:

```
<p dummy="dickens">
```

### Specifying How Much Text

The number of words or sentences used by default depends on the tag of the HTML element.  For example, given

```
<h1 dummy>
<p dummy>
```

The `<h1>` will contain 3 words, while the `<p>` will contain 3 sentences.
To get a different amount of text, you can pass the number, with a `w` (for words)
or `s` (for sentences) suffix:

```
<h1 dummy="5w">
<p dummy="1s">
```

### Selecting Which Portion of the Text

The starting point in the text is selected using a
[pseudo-random number generator](https://github.com/davidbau/seedrandom),
which is seeded when the directive is loaded.
So, for testing purposes, the text returned will be the same each time
the page is loaded.
In addition, the sequence always begins with the first sentence of the corpus.

To start at (or return to) a specific sentence, put an `@` and the number in the
`dummy` attribute:

```
<p dummy="@5">
```

Additional sentences for the same use of the directive are pulled sequentially
from the corpus.  To instead skip a number of sentences in the sequence, put
a `+` and the number in the `dummy` attribute.  For example, to take every other
sentence:

```
<p dummy="+2">
```

### Combining options

Any of the above options may be combined, separating them with spaces:

```
<p dummy="2s dickens @0">
```

Which generates:

```
<p dummy="2s dickens @0">
  <span class="ng-dummy-text">Marley was dead: to begin with.
  There is no doubt whatever about that.</span>
</p>
```

### Usage

If you are already using Angular, then just make the module `me.mnmlst.ng-dummy`
a dependence of your app.

To use the directive stand-alone in a <q>static</q> web page,
load Angular from a CDN, and then load this script:

```
<script src="//cdnjs.cloudflare.com/ajax/libs/angular.js/1.2.16/angular.min.js"></script>
<script src="ng-dummy.js"></script>
```

Then use the `ng-dummy` module as your Angular app:

```
<body ng-app="me.mnmlst.ng-dummy">
    <p dummy>
</body>
```

The file `test/test.html` demonstrates stand-alone usage.




