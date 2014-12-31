# Go

* [Sum Types in Go](http://www.jerf.org/iri/post/2917)
    - Sum types using interfaces with a dedicated unexported method.
```go
type Expr interface {
	// isExpr ensures that only expression nodes can be assigned to the Expr
	// interface.
	isExpr()
}
```
