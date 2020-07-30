# Sass & Scss
### This directory is for learning about Sass and Scss. Below is a brief description of the files included in this directory.

#### [0-debug_log.scss](./0-debug_log.scss)
* Sass file that prints `Hello world` in the debug output.

#### [1-color_variable.scss](./1-color_variable.scss)
* Sass file that assigns the text color `#3D3D3D` to the HTML tags `body` and `p`.

#### [2-color_variables.scss](./2-color_variables.scss)
* Sass file that assigns the text color `#3D3D3D` to the HTML tags `body` and `p` and the background color `#6D6D6D` to the HTML tags `body` and `h2`.

#### [3-nested_tag.scss(./3-nested_tag.scss)]
* Sass file that assigns no margin or padding in `body` tags and margin `10px` to all of the `p` tags inside `body` tags using nested declarations.

#### [4-nested_class.scss](./4-nested_class.scss)
* Sass file that assigns text color `#3D3D3D` to elements inside `body` tags and text color `#FF0000` to any elements of class `.red` inside `body` tags using nested declarations.

#### [5-nested_child.scss](./5-nested_child.scss)
* Sass file that assigns text color `#3D3D3D` to elements inside `body` tags and text color `#FF0000` to any elements of class `.red` that are the first children of the `body` using nested declarations.

#### [6-nested_hover.scss](./6-nested_hover.scss)
* Sass file that assigns text color `#FF0000` to `button` tags and when the user hovers over `button` tags, text color should change to `#00FF00` using nested declarations.

#### [7-nested_deeper.scss](./7-nested_deeper.scss)
* Sass file that assigns font size `14px` to all `body` tags, font size `16px` to all `h1` tags inside `body` tags and font size `12px` to `h1` tags of class `.smaller` inside `body` tags using nested declarations.

#### [8-mixin_margins.scss](./8-mixin_margins.scss)
* Sass file that assigns margin left and right at `10px` to `body` tags and margin left and right at `15px` to `div` tags using a mixin.

#### [9-extend_list.scss](./9-extend_list.scss)
* Sass file that assigns font size `12px` to all tags of class `.info`, text color `#00FF00` to all tags of class `.success` and extend style of the class `.info` and text color `#FF0000` to all tags of class `.warning` and extend style of the class `.info`.

#### [10-import_colors.scss](./10-import_colors.scss)
* Sass file that assigns text color `$red` from `10-colors.scss` to the class `.red`, text color `$green` from `10-colors.scss` to the class `.green` and text color `$blue` from `10-colors.scss` to the class `.blue` using `@import`.

#### [11-loop_photos.scss](./11-loop_photos.scss)
* Sass file that creates a class for each name in the list `$list-names` and assigns the background image based on the name using `@import` and `@each`.

#### [12-loop_header.scss](./12-loop_header.scss)
* Sass file that creates `H*` tags, where ‘*’ is the size of the font used using `@for` statement.

#### [100-loop_col.scss](./100-loop_col.scss)
* Sass file that creates classes with different width using `@for` statement.

#### [101-media_query.scss](./101-media_query.scss)
* Sass file that assigns font size `20px` to `h1` tags and font size `14px` to `h1` tags, when your screen width is smaller than `320px`

#### [102-media_query.scss](./102-media_query.scss)
* Sass file that assigns font size to `h1` tags depending on the width of the screen, also assigns text color `#1D1D1D` to `h1.small` tags, when your screen width is smaller than `320px`.

#### [103-sort_strings.scss](./103-sort_strings.scss)
* Sass file that sorts the variable `$list_to_sort` and prints the sorted list in the debug output.
