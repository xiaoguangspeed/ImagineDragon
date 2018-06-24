package main

import "fmt"

// fibonacci is a function that returns
// a function that returns an int.
func fibonacci() func() int {
	m,p,q := 0,0,1
	return func() int {
		if m == 0 {
		  m = m+1
		  return 0
		}
			p,q = q,p+q
  			return p
	}
}

func main() {
	f := fibonacci()
	for i := 0; i < 10; i++ {
		fmt.Println(f())
	}
}
