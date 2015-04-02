# Felix the Grid System

![Image of Felix the Cat](http://pictures2015.mobi/wp-content/uploads/felix-the-cat-new-images-2.jpg)

Felix is a grid system that combines a flexible grid system with fixed columns. Felix allows you to put fixed column widths and flexible columns width on the same row.

Felix is built on a 12 column grid system and the fixed columns widths are based on a 12 column, 960px wide grid system.

All variables that are used for calculations - `$number-of-columns, $fixed-width, $gutter-width, $max-width` - can be customized to your needs. The variables can be found at the top of the `sass/felix.scss` file.

Since Felix is built on a 12 column grid system, every column on the same row needs to equal up to 12. For example:

```
<div class="grid-3 fixed-width"></div>
<div class="grid-3 fixed-width"></div>
<div class="grid-6 with-fixed-6"></div>
```

If you add up all of the `grid-` classes in the example above you will see that the column count equals 12. `3 + 3 + 6 = 12` If you were to change `grid-6` to `grid-7`, the last div will break to the next line.

When you add a class of `fixed-width` to a column, the column width changes from percentage to pixels. Then you need to add up all of the `fixed-width` columns and add a class to the flexible width column letting it know how to calculate it's width. Since there are 2 `div`s with classes of `grid-3` and `fixed-width`, we need to add a class of `with-fixed-6` to the flexible column width.

More examples can be found on the example site soon to come.