# Reverse Engineering

* [Christopher Domas - The future of RE: Dynamic Binary Visualization](https://www.youtube.com/watch?v=4bM3Gut1hIk) (Derbycon 2012)
    - Probabilistic parsing (as opposed to linear sweep and recursive descent) to generate Control Flow Graphs through statistical and pattern analysis.
    - Keep locality using [Cantor dust](https://en.wikipedia.org/wiki/Cantor_set#Cantor_dust) fractals.
    - Visualize unknown information and let the brain make sense of it (different hardware architectures have different patterns, image data look a specific way, as do ASCII text and NULL-terminated strings).
    - Examples at [..cantor.dust..](https://sites.google.com/site/xxcantorxdustxx/visual-re)

![CFG for arbitrary instruction set](https://raw.githubusercontent.com/mewmew/mental_notes/master/reverse/cfg.png)

![Cube visualization of unknown data](https://sites.google.com/site/xxcantorxdustxx/_/rsrc/1339481991620/visual-re/32.png)
