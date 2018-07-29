package main
import(
	"fmt"
	"log"
	"os"
	 _ "github.com/goinaction/code/chapter2/sample/matchers"
	 "github.com/goinaction/code/chapter2/sample/search"
)
func init(){
	fmt.Println("in func init")
}
var p0 *int
var p1 *bool
func main(){
	log.SetOutput(os.Stdout)
	fmt.Println("in func main")

	// 指针被初始化为nil
	fmt.Printf("nil pointer %x\n",p0)
	fmt.Printf("nil pointer %p\n",p1)
	fmt.Println( p0 == nil)
}