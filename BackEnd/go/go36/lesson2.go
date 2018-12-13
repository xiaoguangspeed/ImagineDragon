package main
import (
	"flag"
	"fmt"
	"os"
)
var name string
func init(){
	flag.StringVar(&name,"name","everyone","name prompt")
}

func main(){
	flag.Usage = func(){
		fmt.Fprintf(os.Stderr,"Usage of %s\n","questions")
		flag.PrintDefaults()
	}
	flag.Parse()
	fmt.Printf("hello,%s\n",name)
}