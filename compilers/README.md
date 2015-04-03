# Compilers

* [GCC Architectural Overview](http://www.airs.com/dnovillo/200711-GCC-Internals/200711-GCC-Internals-1-condensed.pdf)
    - A great overview of GCC internals from 2007! Includes a brief summary of the intermediate representations:
        + GENERIC: generic high-level language shared by all front-ends.
        + GIMPLE: simplifed version of GENERIC in 3-address representation.
        + RTL (Register Transfer Language): platform-independent assembly with infinite registers.
