package main

import(
	"fmt"
	"strings"
	"math"
	"os"
)

type UrlCollect struct{
}
func main(){
	fmt.Printf("%T\n",os.Stdout)  
	var arr = [4]byte{1,2,3,4}
	//slice literal
	drinks := []string{"coffee","cola"}
	fmt.Println(drinks)

	//nil slice
	var nilSlice []int
	fmt.Printf("len of nilSlice is %d,cap is %d\n",len(nilSlice),cap(nilSlice))
// make
	var ms = make([]int,2,6)
	printSlice(ms)

// slice of slice
	var ss = [][]string{
		[]string{"_","_","_"},
		[]string{"_","_","_"},
		[]string{"_","_","_"},
	}

	// for i := 0; i < len(ss); i++ {
	// 	fmt.Printf("%s\n", strings.Join(ss[i], " "))
	// }
	for i,_ := range(ss){
		fmt.Printf("%s\n",strings.Join(ss[i]," "))
	}
	ages := map[string]int{
		"alice":30,
		"bob":25,
	}
	alice ,ok := ages["alice"]
	fmt.Println(alice,ok)
	fmt.Println(ages)
	// 
	fmt.Println("math.sqrt2",math.Sqrt2)
	// interface
	var i I = T{"hello interface"}
	i.M()
}

func printSlice(s []int){
	fmt.Println(s,len(s),cap(s))
}
// interface
type I interface{
	M()
}

type T struct{
	s string
}
func (t T) M() {
	fmt.Println(t.s)
}

