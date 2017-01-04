# Compilers

* [GCC Architectural Overview](http://www.airs.com/dnovillo/200711-GCC-Internals/200711-GCC-Internals-1-condensed.pdf)
    - A great overview of GCC internals from 2007! Includes a brief summary of the intermediate representations:
        + GENERIC: generic high-level language shared by all front-ends.
        + GIMPLE: simplifed version of GENERIC in 3-address representation.
        + RTL (Register Transfer Language): platform-independent assembly with infinite registers.

# Linking

* [Proper handling of secondary dependencies](http://www.kaizou.org/2015/01/linux-libraries.html)

Makefile:
```bash
app: libqux.so
    gcc -o app main.c -L$(PWD) -lqux -Wl,-rpath-link=$(PWD)

libqux.so: libbar.so
    gcc -shared -o libqux.so -fPIC qux.c -lbar -L$(PWD) -Wl,-rpath-link=$(PWD)

libbar.so: libfoo.so
    gcc -shared -o libbar.so -fPIC bar.c -lfoo -L$(PWD)

libfoo.so:
    gcc -shared -o libfoo.so -fPIC foo.c
```

foo.c:
```c
int foo() {
    return 42;
}
```

bar.c:
```c
int foo();

int bar() {
    return foo();
}
```

qux.c:
```c
int bar();

int qux() {
    return bar();
}
```

main.c:
```c
int qux();

int main(int argc, char **argv) {
    return qux();
}
```
